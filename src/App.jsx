import "./App.css";
import { useEffect, useState } from "react";
import LvHandler from './LvHandler';
import { app, db } from "./firebase-config";
import {
  addDoc,
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

function App() {
  //
  //================================================== Var & States 
  const emptyHighScoreList=    [
    [
      {name:'Empty',t:400,at:''},
      {name:'Empty',t:400,at:''},
      {name:'Empty',t:400,at:''}
    ],
    [
      {name:'Empty',t:400,at:''},
      {name:'Empty',t:400,at:''},
      {name:'Empty',t:400,at:''}
    ],
    [
      {name:'Empty',t:400,at:''},
      {name:'Empty',t:400,at:''},
      {name:'Empty',t:400,at:''}
    ],
  ];
  const [highScoreList, setHighScoreList] = useState(emptyHighScoreList
  );
  const [selectedLv, setSelectedLv] = useState(0);
  const [gameState, setGameState] = useState(0);
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
  async function loadHighScore(input) {
    const colRef = collection(db, "levels", String(input), 'records');
    const querySnapshot = await getDocs(colRef);
    const tempArr=[[],[],[]];
    querySnapshot.forEach((doc,index) => {
      tempArr[input].push(doc.data());
    });
    tempArr[input].sort(function (a, b) {
      return a.t - b.t;
    });
    setHighScoreList(tempArr);
    console.log(highScoreList);
  }
  function LevelSelect() {
    function lvButton(num) {
      const goToLv = () => {
        setGameState(1);
        setSelectedLv(num);
        console.log('Going to level : ' + num);
      };
      return (
        <div class='lvSelectItem'>
          <img src={lvData[1].lvImg} alt="level" onClick={goToLv}></img>
          <div class='centerMe'>Level : {num}</div>
          <div class='centerMe'>High Score : </div>
          <div id="highScoreItemContainer">
          {highScoreList[1].map((el)=>
          <div class='highScoreItem'>
            <div>{el.name}</div>
            <div>{el.t}s</div>
            </div>)}
          </div>

        </div>
      )
    }
    return (
      <div>
        <div class="header1">Select a level to start the game</div>
        <div class="levelContainer centerMe">
          {lvButton(1)}
        </div>
      </div>
    );
  }
  //======================================================= On Load
  useEffect(() => {
    setHighScoreList(emptyHighScoreList);
  }, [])
  useEffect(() => {
    setHighScoreList(emptyHighScoreList);
    loadHighScore(1);
  }, [gameState])
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
          <LvHandler selectedLv={selectedLv} setGameState={setGameState} lvData={lvData} />
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

function HelloComponent() {
  return <div>hello</div>
}

