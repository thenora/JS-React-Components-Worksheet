import React from 'react';
import './App.css';
import AvatarList from './components/AvatarList';
import Badge from './components/Badge';
import Product from './components/Product';
import UserCard from './components/UserCard';

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

const productInfo = [
  {
  imgUrl: "https://i.etsystatic.com/6694215/r/il/322a5e/2259489180/il_794xN.2259489180_1w1c.jpg",
  name: "Large Yarn Bowl Face",
  price: 100,
  salePrice: 100,
  }
];

const productSale = {
  imgUrl: "https://i.etsystatic.com/6694215/r/il/0d19e8/2229956390/il_794xN.2229956390_exko.jpg",
  name: "Small Monster Planter",
  price: 70,
  salePrice: 50,
};

// product credit: https://www.etsy.com/listing/794616959/ready-to-ship-large-yarn-bowl-wheel?ref=shop_home_active_26 https://www.etsy.com/listing/787738617/small-monsterpot-planter-hand-sculpted?ref=shop_home_active_15

function App() {
  return (
    <article className="App">
      <h1>Components Worksheet</h1>
      <p>This is the work from the <a href="https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/exercises/components-worksheet.md">JS React Components Worksheet</a>.</p>
      <hr className="hrTop" />
        <hr className="hrBottom" />
      <h2>Basic Components</h2>
      <hr className="hrTop" />
        <hr className="hrBottom" />
      <section className="AvatarSection">
        <h3>Avatar</h3>
        <AvatarList profilePics={profilePics} />
        <hr className="hrTop" />
        <hr className="hrBottom" />
      </section>
      <section className="BadgeSection"> 
      <h3>Badge</h3>
      {/* TODO: How to make it change based on number? */}
        <p><Badge lowNum={lowNum} /></p>
        <p><Badge highNum={highNum} /></p>
        <hr className="hrTop" />
        <hr className="hrBottom" />
      </section>
      <section className="ProductSection">
      <h3>Product</h3>
        <section>
          <Product productInfo={productInfo} />
        </section>
        <section>
        <Product productSale={productSale} />
        </section>
        <hr className="hrTop" />
        <hr className="hrBottom" />
      </section>
      <h2>Nested Components</h2>
      <hr className="hrTop" />
        <hr className="hrBottom" />
      <section>
        <h3>UserCard</h3>

        <hr className="hrTop" />
        <hr className="hrBottom" />
      </section>
      <section>
        <h3>ProductList</h3>

        <hr className="hrTop" />
      </section>

    </article>
  );
}

export default App;
