import { useEffect, useState } from "react";
import { app, db } from "./firebase-config";
import {
  set,
  collection,
  doc,
  add,
  update,
  get,
  data,
  getDoc,
  getDocs,
  where,
  query
} from "firebase/firestore";

export default function LvHandler(props) {
  //==================================================== Var & States
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dm, sdm] = useState('');
  const [menuActive, setMenuActive] = useState(0);
  const [isFound, setIsFound] = useState([false, false, false])

  //============================================= Embedded Components
  function MiniMenuItem(miniProps) {
    const targetName = props.lvData[1].targets[miniProps.id];
    function itemClick() {
      const output = { name: targetName, x: pos.x, y: pos.y };
      sdm('Looking for ' + output.name + ' in ' + output.x + ',' + output.y);
      console.log(output);
      setMenuActive(0);
      queryFireBase(output, miniProps.id);
    }
    return <div onClick={itemClick}>{targetName}</div>
  }

  //======================================================= Functions
  function winChecker(){
    if(isFound[0]&&isFound[1]&&isFound[2]) props.setGameState(0);
    console.log('whichecker');
  }
  function foundTarget(id) {
    const targetName = props.lvData[1].targets[id];
    sdm("You Found " + targetName + "!!");
    let tempArr = isFound;
    tempArr[id] = true;
    setIsFound(tempArr);
    
    winChecker();
  }
  async function queryFireBase(input, id) {
    let found = '';
    const docRef = doc(db, "levels", String(props.selectedLv));
    const colRef = collection(db, "levels", String(props.selectedLv), 'targets');
    //const docSnap = await getDoc(docRef);
    const q = await query(colRef,
      where("name", "==", input.name),
    );
    const qSnap = await getDocs(q);
    qSnap.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      if (
        input.x >= doc.data().x1 &&
        input.x <= doc.data().x2 &&
        input.y >= doc.data().y1 &&
        input.y <= doc.data().y2
      ) found = true;
    });
    (found) ? foundTarget(id) : sdm("Nope. Try again");
  }
  //======================================================== On Load
  useEffect(() => {
    //sample input right {name: 'Waldo', x: 703, y: 500.359375}
  }, []);



  const imgClickFunc = (e) => {
    const rect = document.querySelector('#gamePlayContainer').getBoundingClientRect();
    const miniMenu = document.querySelector("#miniMenu");
    setMenuActive(1);
    const posX = e.pageX - rect.x;
    const posY = e.pageY - rect.y;
    setPos({ x: posX, y: posY });
    sdm(`${Math.round(posX)},${Math.round(posY)}`);
  };


  //======================================================== Return
  return (
    <div class="gameContainer">
      <div class="gameBar">
        {(isFound[0]) ? null : <div>
          <img
            src={props.lvData[props.selectedLv].targetsImg[0]}
            alt={props.lvData[props.selectedLv].targets[0]}
          ></img>
          {props.lvData[props.selectedLv].targets[0]}
        </div>}
        {(isFound[2]) ? null : <div>
          <img
            src={props.lvData[props.selectedLv].targetsImg[1]}
            alt={props.lvData[props.selectedLv].targets[1]}
          ></img>
          {props.lvData[props.selectedLv].targets[1]}
        </div>}
        {(isFound[2]) ? null : <div>
          <img
            src={props.lvData[props.selectedLv].targetsImg[2]}
            alt={props.lvData[props.selectedLv].targets[2]}
          ></img>
          {props.lvData[props.selectedLv].targets[2]}
        </div>}
        <div>{dm}</div>
        <button onClick={() => props.setGameState(0)}>Quit game</button>

      </div>
      <div class="gameLvContainer">
        <div id='miniMenuOverlay' onClick={() => setMenuActive(0)} style={{
          transform: "scale(" + menuActive + ")",
        }}></div>
        <div
          id="miniMenu"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "scale(" + menuActive + ")",
          }}
        >
          <MiniMenuItem id={0} lv={props.selectedLv} />
          <MiniMenuItem id={1} lv={props.selectedLv} />
          <MiniMenuItem id={2} lv={props.selectedLv} />
        </div>
        <div id='gamePlayContainer' onClick={imgClickFunc}>
          <img
            src={props.lvData[props.selectedLv].lvImg}
            alt="level"
          ></img>

        </div>

      </div>
    </div>
  );
}
