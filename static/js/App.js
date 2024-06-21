import React, { useRef } from 'react';
import logo from './images/logo.png';
import telegram from './images/telegram.png';
import twitter from './images/x-twitter.png';
import dextools from './images/dextools.png';
import dextools1 from './images/dextools1.png';
import uniswap from './images/uniswap.png';
import buybtn from './images/buy-btn.png';
import char_1 from './images/character-1.png';
import char_2 from './images/character-2.png';
import pink_box from './images/pink-boxes.png';
import green_box from './images/greenish-box.png';
import char_3 from './images/character-3.png';
import char_4 from './images/character-4.png';
import char_5 from './images/character-5.png';
import char_6 from './images/character-6.png';
import char_7 from './images/character-7.png';
// import char_9 from './images/character-9.png';
import str_1 from './images/string-1.png';
import str_2 from './images/string-2.png';
import str_3 from './images/string-3.png';
import cloud_2 from './images/cloud-2.png';
import sticker_1 from './images/sticker-1.gif';
import img_1 from './images/img-1.gif';
import img_2 from './images/img-2.gif';
import img_3 from './images/img-3.gif';
import img_4 from './images/img-4.gif';
import img_5 from './images/img-5.gif';
import img_6 from './images/img-6.gif';
import img_7 from './images/img-7.gif';
import pipe from './images/pipe.png';
import pipe_2 from './images/pipe-2.png';
import bill from './images/bill-coin.png';
import cloud_1 from './images/cloud-1.png';
import char_8 from './images/character-8.png';
import fold from './images/folding-page.png';
import join_1 from './images/join-gif-1.gif';
import join_2 from './images/join-gif-2.gif';
import join_3 from './images/join-gif-3.gif';
import img_8 from './images/img-8.png';
import tg_btn from './images/tg-btn.png';
import './App.css';

function App() {

  const hiddenTextRef = useRef(null);

  const copyToClipboard = () => {
    const text = hiddenTextRef.current.textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert('CA copied!');
    }).catch(err => {
      console.error('Failed to copy CA: ', err);
    });
  };



  return (
    <div className="App">
      <>
  <section className="hero-section">
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <p>Hasbulla</p>
      </div>
      <div className="socials">
        <a href="#" className="btn" onClick={copyToClipboard}>
          Copy Coin Address
        </a>
        <a href="https://t.me/hasbulla_on_ton">
          <img src={telegram} alt="" />
        </a>
        <a href="https://x.com/hasbulla_Ton">
          <img src={twitter} alt="" />
        </a>
        <a href="https://dexscreener.com/ton/eqbm_vz5a0mdq9cewfytdpelbgvgsbmwsxcsxqp20ch97flg">
          <img src={uniswap} alt="" />
        </a>
        <a href="https://dedust.io/swap/EQApa0Z5I0lMeitSTUtytce5Z5y4Yak5jBwS8Cw53P1Davtw/SCALE">
          <img src={dextools} alt="" />
        </a>
        <a href="https://www.dextools.io/app/en/ton/pair-explorer/EQBm_vZ5A0MDq9ceWFyTdPeLbgVGsbmWSxcsXqp20Ch97flG?t=1718904625919">
          <img src={dextools1} alt="" />
        </a>
      </div>
    </header>
    <h1 style={{ color: "#fff" }}>Hasbulla</h1>
    <h1 className="h-1">
      Base Has <span>Bulla</span>
    </h1>
    <p ref={hiddenTextRef} style={{ display: 'none' }}>CA: EQApa0Z5I0lMeitSTUtytce5Z5y4Yak5jBwS8Cw53P1Davtw</p>
    <img src={logo} className='logo_img' />
    <a href="https://t.me/hasbulla_on_ton">
      <img src={buybtn} alt="" />
    </a>
    <img src={pink_box} alt="" className="pink-box" />
    <img src={char_1} alt="" className="charac-1" />
    <img src={char_2} alt="" className="charac-2" />
    <img src={green_box} alt="" className="greenish-box" />
    <img src={char_3} alt="" className="charac-3" />
    <img src={char_4} alt="" className="charac-4" />
    {/* <div class="curve-div"><marquee behavior="" direction=""><p>help help help help help help help help help help help helphelp help help help help help help help help</p></marquee></div> */}
  </section>
  
  <section className="buy">
    <img src={char_6} alt="character" className="charac-6" />
    <img src={cloud_2} alt="cloud" className="cloud-2" />
    <img src={sticker_1} alt="sticker" className="sticker-1" />
    <div className="buy-box">
      <div className="left">
        <div>
          <h2>Buy</h2>
          <h6>
            <span>$HASBULLA ON</span>
            <span>Dexscreener</span>
          </h6>
        </div>
        <a href="" className="btn-2">
          Dexscreener
        </a>
      </div>
      <div className="right">
        <div>
          <h2>Buy</h2>
          <h6>
            <span>$HASBULLA ON</span>
            <span>Dedust</span>
          </h6>
        </div>
        <a href="" className="btn-2">
          Dedust
        </a>
      </div>
    </div>
    <div className="billpaper">
      <div className="left">
        <p>
        Meet Hasbulla Magomedov, the internet's favorite Russian sensation, This legend definitely deserves his $HASBULLA Token on BASE chain. Let’s make this a moonshot – join the $HASBULLA hype train and ride the wave!
        </p>
      </div>
      <div className="right">
        <img src={char_5} alt="" />
      </div>
    </div>
  </section>
  <section className="img-group">
    <img src={char_7} alt="" className="charac-7" />
    <img src={str_1} alt="" className="string-1" />
    <div className="parent-img">
      <div className="child-img">
        <img src={img_1} alt="" />
        <img src={img_2} alt="" />
        <img src={img_3} alt="" />
      </div>
    </div>
  </section>
  <section className="parent-container">
    <img src={pipe} alt="" className="pipe-1" />
    <img src={cloud_1} alt="" className="cloud-3" />
    <img src={char_8} alt="" className="charac-8" />
    <img src={str_2} alt="" className="string-2" />
    <img src={str_3} alt="" className="string-3" />
    <div className="curve-div-2">
      <marquee behavior="" direction="">
        <p>
          help help help helphelp help help help help help help helphelp help
          help help help help help help help help help help
        </p>
      </marquee>
    </div>
    <div className="container container-1">
      <div className="left">
        <h6>Hasbulla holding his cat</h6>
        <p>
        Will you hold $HASBULLA same wae?
        </p>
      </div>
      <div className="right">
        <img src={img_4} alt="" />
      </div>
    </div>
    <div className="container container-2">
      <div className="right">
        <img src={img_5} alt="" />
      </div>
      <div className="left">
        <h6>Hasbulla reaction when he made his first 1,000,000$</h6>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p> */}
      </div>
    </div>
  </section>
  <section className="dance">
    <img src={bill} alt="" className="dance-head" />
    <img src={pipe_2} alt="" className="pipe-2" />
    <img src={cloud_1} alt="" className="cloud-4" />
    {/* <img src={char_9} alt="" className="charac-9" /> */}
    <img src={fold} alt="" className="folding-page" />
    <div className="sticker-3">
      <span>月亮月亮月亮月</span>
      <span>月亮月亮月亮月亮月亮月亮月亮月亮月亮月亮</span>
      <span>月亮月亮月亮月亮月亮月月亮</span>
    </div>
    <div className="box">
      <div className="left">
        <p>
        Hasbulla will warn any other meme token on<br/>BASE chain. You should be careful
        </p>
        <img src={img_6} alt="" />
      </div>
      <div className="right">
        <p>
        Told you so… he crushed them all!
        </p>
        <img src={img_7} alt="" />
      </div>
    </div>
    <div className="box-2">
      <div className="join-images">
        <img src={join_1} alt="" />
        <img src={join_2} alt="" />
        <img src={join_3} alt="" />
      </div>
      <img src={img_8} alt="" />
    </div>
    <a href="https://t.me/hasbulla_on_ton">
      <img src={tg_btn} alt="" />
    </a>
  </section>
  <footer>
    <img src={char_2} alt="" className="charac-10" />
    <img src={char_1} alt="" className="charac-11" />
    <img src={char_4} alt="" className="charac-12" />
    {/* <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.&nbsp;
    </p> */}
    <div className="socials">
      <a href="" className="btn" value="x0000000" onClick={copyToClipboard}>
        Copy Coin Address
      </a>
      <a href="https://t.me/hasbulla_on_ton">
        <img src={telegram} alt="" />
      </a>
      <a href="https://x.com/hasbulla_Ton">
        <img src={twitter} alt="" />
      </a>
      <a href="https://dexscreener.com/ton/eqbm_vz5a0mdq9cewfytdpelbgvgsbmwsxcsxqp20ch97flg">
        <img src={uniswap} alt="" />
      </a>
      <a href="https://dedust.io/swap/EQApa0Z5I0lMeitSTUtytce5Z5y4Yak5jBwS8Cw53P1Davtw/SCALE">
        <img src={dextools} alt="" />
      </a>
      <a href="https://www.dextools.io/app/en/ton/pair-explorer/EQBm_vZ5A0MDq9ceWFyTdPeLbgVGsbmWSxcsXqp20Ch97flG?t=1718904625919">
          <img src={dextools1} alt="" />
      </a>
    </div>
  </footer>
</>

    </div>
  );
}

export default App;
