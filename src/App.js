import React from 'react';
import './App.css';
import AvatarList from './components/AvatarList';

const profilePics = [
  {
    imgUrl: "https://liucs.net/cs164s13/surly_cat.jpg",
    altText: "This is a cat",
  },
  {
    imgUrl: "https://www.pngkit.com/png/full/146-1463239_fallout-falloutboy-devil-vault-boy-head-png.png",
    altText: "This is an angry blonde devil man",
  },
  {
    imgUrl: "https://i7.pngguru.com/preview/819/476/908/fallout-3-fallout-pip-boy-the-vault-fallout-new-vegas-fallout-4-fallout-graffiti.jpg",
    altText: "This is a sick blond boy",
  },
  {
    imgUrl: "https://st4.depositphotos.com/11095424/25533/i/1600/depositphotos_255337128-stock-photo-vault-boy-illustration-character-injured.jpg",
    altText: "This is a boy with a head wound",
  }
]

const lowNum = "3";
const highNum = "888";

function App() {
  return (
    <article className="App">
      <section className="AvatarSection">
        <AvatarList profilePics={profilePics} />
        <hr className="hrTop" />
        <hr className="hrBottom" />
      </section>
      <section className="BadgeSection"> 
      <p>hi</p>
        <hr className="hrTop" />
        <hr className="hrBottom" />
      </section>
    </article>
  );
}

export default App;
