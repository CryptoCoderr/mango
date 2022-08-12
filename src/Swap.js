import React from 'react'
import "./app.css";
import image60 from "/home/team/Desktop/mango/src/img/title/swap-chedda.jpg";
function Swap() {
  return (
    <>
<nav id="nav" className="slide-down">
  <div>
    <a href="/" title="MoonRatz Home"><i data-ico="mlogo"></i></a>

    <input id="menu-toggle" type="checkbox"/>
    <label id="mtoggle" for="menu-toggle">
      <span></span><span></span><span></span>
    </label>

    <ul className="spaced" data-list="inline">
      <li><a href="https://opensea.io/collection/moonratzwtf" title="NFT" target="_blank">NFT</a></li>
      <li><a href="#" title="Token" target="_blank">Token</a></li>
      <li><a href="/Stake" title="Staking">Staking</a></li>
      <li><a href="/Lottery" title="Lottery">Lottery</a></li>
      <li><a href="#" title="P2E Game">P2E Game</a></li>
      <li id="options">
        <input id="submenu-toggle" type="checkbox"/>
        <label for="submenu-toggle"><i data-ico="options"></i></label>
        <section className="submenu">
          <ul data-list="no-disc">
            <li><a href="/Swap" title="Swap">Swap</a></li>
            <li><a href="/Contracts" title="Contracts">Contracts</a></li>
            <li><a href="/whitepaper.pdf" title="Contracts" target="_blank">White Paper</a></li>
          </ul>
        </section>
      </li>
    </ul>

    <ul className="socials" data-list="inline">
      <li><a className="circle" href="https://opensea.io/collection/moonratzwtf" title="MoonRatz on OS" target="_blank"><i
          data-ico="os"></i></a></li>
      <li><a className="circle" href="https://discord.com/invite/PGDgzjBU" title="Moonratz on Discord" target="_blank"><i
          data-ico="discord"></i></a></li>
      <li><a className="circle" href="https://t.me/RATTRAPTOKEN" title="MoonRatz on Telegram" target="_blank"><i
          data-ico="telegram"></i></a></li>
      <li><a className="circle" href="https://twitter.com/moonratzwtf" title="MoonRatz on Twitter" target="_blank"><i
          data-ico="twitter"></i></a></li>
    </ul>
  </div>

  <aside className="melting-nav"></aside>
</nav>

<main>
  <section class="heading-cheese expanded reduced">
    <img src={image60} alt="Swap Your Chedda"/>
  </section>

  <section class="swap">
    <div class="grid-x align-center">
      <div class="swap-cnt">
        <h3>Swap Chedda</h3>

        <ul>
          <li>
            <p><small>From</small></p>
            <figure>
              <i class="circle small" data-ico="chedda"></i>
              Chedda token
            </figure>
          </li>

          <li>
            <div class="button-group">
              <button class="btn tiny" id="halfChedda">Half</button>
              <button class="btn tiny" id="allChedda">Full</button>
            </div>
            <span id="cheddaVal">100</span>
          </li>
        </ul>

        <ul>
          <li>
            <p><small>To</small></p>
            <figure>
              <i class="circle small" data-ico="eth"></i>
              ETH <small>(Ethereum)</small>
            </figure>
          </li>

          <li>
            <span id="ethVal">0.1</span>
          </li>
        </ul>

        <button id="swap" class="btn span">Proceed to Swap</button>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <ul class="h2" data-list="inline">
    <li><a href="dist/assets/img/whitepaper.pdf" title="Whitepaper" target="_blank">Whitepaper</a></li>
    <li><a href="/Contracts" title="Contracts">Contracts</a></li>
    <li><a href="/Faq" title="Faq">Faq</a></li>
    <li><a href="mailto:hi@moonratz.com?subject=MoonRatz%20Question&body=Describe%20your%20question:" title="hi@moonratz.com" target="_blank">hi@moonratz.com</a></li>
  </ul>

  <p class="trms">MoonRatz ©
    <script>
      document.write(new Date().getFullYear())
    </script>
    All rights reserved.</p>
</footer>

<script src="/home/team/Desktop/mango/src/js/app.js"></script>
</>
  )
}

export default Swap;


