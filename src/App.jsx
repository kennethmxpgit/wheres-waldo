import "./App.css";
import { useEffect, useState } from "react";
import LvHandler from './LvHandler';

function App() {
  //
  //================================================== Var & States 
  const [selectedLv,setSelectedLv]=useState(0);
  const [gameState,setGameState]=useState(0);
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
  //============================================ Embedded Components
  function LevelSelect() {
      function lvButton(num) {
        const goToLv = () => {
          setGameState(1);
          setSelectedLv(num);
          console.log('Going to level : '+num);
        };
        return (
          <div class='levelButton centerMe'>
            <button onClick={goToLv}>Level : {num}</button>
          </div>
        )
      }
    return (
      <div>
        <div class="header1">Select a level to start the game</div>
        <div class="levelContainer centerMe">
          {lvButton(1)}
          {lvButton(2)}
        </div>
      </div>
    );
  }
  //========================================================= Return
  return (
    <div>
      <div id="header" class="centerMe">
        Where's Waldo?
      </div>
      <div id="content">
        {gameState == 0 ? (
          <LevelSelect />
        ) : (
          <LvHandler selectedLv={selectedLv} setGameState={setGameState} lvData={lvData}/>
        )}
      </div>
      <div id="footer" class="centerMe">
        <i class="fab fa-github"></i>
        <a href="https://github.com/kennethmxpgit/wheres-waldo">
          &nbsp;kennethmxp
        </a>
      </div>
    </div>
  );
}

export default App;

function HelloComponent(){
  return <div>hello</div>
}

