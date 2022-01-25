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
} from "firebase/firestore";

export default function LvHandler(props) {
  //==================================================== Var & States
  const [pos, setPos] = useState({x:0,y:0});
  const [dm,sdm]=useState('');
  const [menuActive,setMenuActive]=useState(0);
  const lv1img = require("./images/lv1.jpg");
  
  //============================================= Embedded Components
  function MiniMenuItem(miniProps){
    const targetName=props.lvData[1].targets[miniProps.id];
    function itemClick(){
      const output={name:targetName,x:pos.x,y:pos.y};
      sdm('Looking for '+output.name+' in '+output.x+','+output.y);
    }
    return <div onClick={itemClick}>{targetName}</div>

  }

  //======================================================= Functions
  async function testFunc() {
    const docRef = doc(db, "tests", "test");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  }
  //======================================================== On Load
  useEffect(() => {
    testFunc();
  }, []);
  


  const imgClickFunc = (e) => {
    const rect=document.querySelector('#gamePlayContainer').getBoundingClientRect();
    const miniMenu = document.querySelector("#miniMenu");
    setMenuActive(1);
    const posX=e.pageX-rect.x;
    const posY=e.pageY-rect.y;
    setPos({x:posX,y:posY});
    sdm(`${Math.round(posX)},${Math.round(posY)}`);
  };


  //======================================================== Return
  return (
    <div class="gameContainer">
      <div class="gameBar">
        <div>
          <img
            src={props.lvData[props.selectedLv].targetsImg[0]}
            alt={props.lvData[props.selectedLv].targets[0]}
          ></img>
          {props.lvData[props.selectedLv].targets[0]}
        </div>
        <div>
          <img
            src={props.lvData[props.selectedLv].targetsImg[1]}
            alt={props.lvData[props.selectedLv].targets[1]}
          ></img>
          {props.lvData[props.selectedLv].targets[1]}
        </div>
        <div>
          <img
            src={props.lvData[props.selectedLv].targetsImg[2]}
            alt={props.lvData[props.selectedLv].targets[2]}
          ></img>
          {props.lvData[props.selectedLv].targets[2]}
        </div>
        <div>{dm}</div>
        <button onClick={()=>props.setGameState(0)}>Quit game</button>

      </div>
      <div class="gameLvContainer">
        <div id='miniMenuOverlay' onClick={()=>setMenuActive(0)} style={{
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
          <MiniMenuItem id={0} lv={props.selectedLv}/>
          <MiniMenuItem id={1} lv={props.selectedLv}/>
          <MiniMenuItem id={2} lv={props.selectedLv}/>
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
