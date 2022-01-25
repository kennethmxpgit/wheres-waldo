import { useEffect, useState } from "react";

export default function LvHandler(props) {
  //==================================================== Var & States
  const [pos, setPos] = useState([0, 0]);
  const [menuActive,setMenuActive]=useState(0);
  const lv1img = require("./images/lv1.jpg");
  const lvData = [
    "",
    {
      targets: ["Waldo", "Wizard", "Odlaw"],
      targetsImg: [
        require("./images/Waldo.jpg"), //lvData[props.selectedLv].targetsImg[0]
        require("./images/Wizard.jpg"),
        require("./images/Odlaw.jpg"),
      ],
      lvImg: require("./images/lv1.jpg"),
    },
  ]; //levelData[1] corresponds to level1
  //============================================= Embedded Components

  //======================================================= Functions
  const imgClickFunc = (e) => {
    //find relative to object to send to server
    const rect = e.target.getBoundingClientRect();
    const posX = ((e.pageX - rect.left) / rect.width) * 1000;
    const posY = ((e.pageY - rect.top) / rect.height) * 1000;
    //draw the menu
    const miniMenu = document.querySelector("#miniMenu");
    setMenuActive(1);
    setPos([e.pageX, e.pageY]);
  };
  //======================================================== Return
  return (
    <div class="gameContainer">
      <div class="gameBar">
        <div>
          <img
            src={lvData[props.selectedLv].targetsImg[0]}
            alt={lvData[props.selectedLv].targets[0]}
          ></img>
          {lvData[props.selectedLv].targets[0]}
        </div>
        <div>
          <img
            src={lvData[props.selectedLv].targetsImg[1]}
            alt={lvData[props.selectedLv].targets[1]}
          ></img>
          {lvData[props.selectedLv].targets[1]}
        </div>
        <div>
          <img
            src={lvData[props.selectedLv].targetsImg[2]}
            alt={lvData[props.selectedLv].targets[2]}
          ></img>
          {lvData[props.selectedLv].targets[2]}
        </div>
        <button onClick={()=>props.setGameState(0)}>Quit game</button>

      </div>
      <div class="gameLvContainer">
        <div
          id="miniMenu"
          style={{
            left: pos[0],
            top: pos[1],
            transform: "scale(" + menuActive + ")",
          }}
        >
          <div>{lvData[props.selectedLv].targets[0]}</div>
          <div>{lvData[props.selectedLv].targets[1]}</div>
          <div>{lvData[props.selectedLv].targets[2]}</div>
        </div>
        <img
          src={lvData[props.selectedLv].lvImg}
          alt="level"
          onClick={imgClickFunc}
        ></img>
      </div>
    </div>
  );
}
