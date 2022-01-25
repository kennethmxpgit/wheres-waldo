import "./App.css";
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
import LvHandler from './LvHandler';

function App() {
  //
  //================================================== Var & States 
  const [selectedLv,setSelectedLv]=useState(0);
  const [gameState,setGameState]=useState(0);
  //============================================ Embedded Components
  function LevelSelect() {
      function lvButton(num) {
        const goToLv = () => {
          setGameState(1);
          setSelectedLv(num);
          console.log('Going to level : '+selectedLv);
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
          {lvButton(1)}
          {lvButton(1)}
          {lvButton(1)}
          {lvButton(1)}
          {lvButton(1)}
        </div>
      </div>
    );
  }
  //====================================================== Functions
  async function testFunc() {
    const docRef = doc(db, "tests", "test");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  }


  //======================================================== On Load
  useEffect(() => {
    testFunc();
  }, []);

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
          <LvHandler selectedLv={selectedLv} setGameState={setGameState} />
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

