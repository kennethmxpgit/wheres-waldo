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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dm, sdm] = useState('');
  const [menuActive, setMenuActive] = useState(0);
  const [isFound, setIsFound] = useState([false, false, false])
  const [time, setTime] = useState(0);
  //============================================= Embedded Components
  function Clock(){
    let clockHours=Math.floor(time/3600)
    let clockMinutes=Math.floor(time/60)
    let clockSeconds=time%60;
    return String(
      clockHours+'h'+clockMinutes+'m'+clockSeconds+'s'
    )
  }
  function MiniMenuItem(miniProps) {
    const targetName = props.lvData[1].targets[miniProps.id];
    function itemClick() {
      const output = { name: targetName, x: pos.x, y: pos.y };
      sdm('Checking...');
      console.log(output);
      setMenuActive(0);
      queryFireBase(output, miniProps.id);
    }
    return <div onClick={itemClick}>{targetName}</div>
  }

  //======================================================= Functions
  function winChecker() {
    if (isFound[0] && isFound[1] && isFound[2]) props.setGameState(0);
    console.log('whichecker');
  }
  function foundTarget(id) {
    const targetName = props.lvData[1].targets[id];
    let tempArr = isFound;
    tempArr[id] = true;
    setIsFound(tempArr);
    sdm("You Found " + targetName + "!!");
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
    let tempTime=0;
    setInterval(()=>{
      tempTime++;
      setTime(tempTime);
      console.log(time);
    }, 1000)
  }, []);



  const imgClickFunc = (e) => {
    const rect = document.querySelector('#gamePlayContainer').getBoundingClientRect();
    const miniMenu = document.querySelector("#miniMenu");
    setMenuActive(1);
    const posX = (e.pageX - rect.x) / (rect.right - rect.x) * 100;
    const posY = (e.pageY - rect.y) / (rect.bottom - rect.y) * 100;
    setPos({
      x: posX,
      y: posY,
    });
    setMousePos({
      x: posX / 100 * (rect.right - rect.x),
      y: posY / 100 * (rect.bottom - rect.y),
    });
    sdm(`${Math.round(posX)},${Math.round(posY)}`);
  };


  //======================================================== Return
  return (
    <div class="gameContainer">
      <div class="gameBar">
        <div id='toFindContainer'>
          {isFound[0] ? <div></div> : (
            <div>
              <img
                src={props.lvData[props.selectedLv].targetsImg[0]}
                alt={props.lvData[props.selectedLv].targets[0]}
              ></img>
              {props.lvData[props.selectedLv].targets[0]}
            </div>
          )}
          {isFound[1] ? <div></div> : (
            <div>
              <img
                src={props.lvData[props.selectedLv].targetsImg[1]}
                alt={props.lvData[props.selectedLv].targets[1]}
              ></img>
              {props.lvData[props.selectedLv].targets[1]}
            </div>
          )}
          {isFound[2] ? <div></div> : (
            <div>
              <img
                src={props.lvData[props.selectedLv].targetsImg[2]}
                alt={props.lvData[props.selectedLv].targets[2]}
              ></img>
              {props.lvData[props.selectedLv].targets[2]}
            </div>
          )}
        </div>
        <div id='timerContainer'>
          <Clock/>
        </div>
        <div id='msgContainer'>{dm}</div>
        <button onClick={() => props.setGameState(0)}>Quit</button>
      </div>
      <div class="gameLvContainer">
        <div
          id="miniMenuOverlay"
          onClick={() => setMenuActive(0)}
          style={{
            transform: "scale(" + menuActive + ")",
          }}
        ></div>
        <div
          id="miniMenu"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "scale(" + menuActive + ")",
          }}
        >
          {isFound[0] ? null : <MiniMenuItem id={0} lv={props.selectedLv} />}
          {isFound[1] ? null : <MiniMenuItem id={1} lv={props.selectedLv} />}
          {isFound[2] ? null : <MiniMenuItem id={2} lv={props.selectedLv} />}
        </div>
        <div id="gamePlayContainer" onClick={imgClickFunc}>
          <img src={props.lvData[props.selectedLv].lvImg} alt="level"></img>
        </div>
      </div>
    </div>
  );
}
