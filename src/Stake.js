import React from 'react'
import "./app.css";
import image40 from "/home/team/Desktop/mango/src/img/left-cheeze.jpg";
import image41 from "/home/team/Desktop/mango/src/img/right-cheeze.jpg";
function Stake() {
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
  <section class="intro staking">
    <div class="grid-x align-center">
      <figure class="float-el">
        <img class="left-cheeze" src={image40} alt="moonratz"/>
        <img class="right-cheeze" src={image41} alt="moonratz"/>
      </figure>

      <h1 class="reduced text-center">
        Stake MoonRatz,<br />
        earn up to<br />
        <span class="dynamic">
          <span id="apyVal">50.59%</span> APY
          <span class="tooltip"><i data-ico="info"></i>
            <aside class="window">
              <h4>CHEDDA APR</h4>
              <p>Rates shown are estimates, and fluctuate according to many different factors, including token prices, trading volume, liquidity, amount staked, and more.</p>
            </aside>
          </span>
        </span>
      </h1>
      <div class="button-group">
        <a class="btn" href="https://opensea.io/collection/moonratzwtf" title="Buy Moonratz" target="_blank">Buy Moonratz</a>
        <a class="btn secondary" href="https://app.uniswap.org/#/swap?chain=mainnet" title="Buy Trap Token" target="_blank">Buy Trap Token</a>
      </div>
    </div>
  </section>

  <section class="staking-ui">
    <div class="grid-x">
      <div class="staking-dtls large-7 large-offset-1">
        <ul class="table">
          <li class="info">
            <ul>
              <li>
                <ul>
                  <li><h3>Moonratz Staking poll</h3></li>
                  <li class="h3">2849</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Earn $CHEDDA per 1 NFT</li>
                  <li>∼7 p/w</li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="pers-data">
            <ul>
              <li>
                <ul>
                  <li class="h3">Staked</li>
                  <li class="h3"><span class="tooltip">
                    <span id="staked">#2652, #456, #4, ...</span> 

                    <aside class="window">
                      <h4>Stacked NFTs</h4>
                      <p id="fullStaked">#2652, #456, #4, #4351, #3334</p>
                   </aside>
                  </span> 0</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li class="h3">Chedda Yield</li>
                  <li class="h3">0</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <button id="stake" class="btn span">Stake</button>
      </div>

      <div class="large-3" data-card>
        <h3>Stacking rewards</h3>
        <p>The Chedda token is non-tradeable
          and is pegged to ETH with a stable
          price. The ratio of peg is 1:3000
          (ETH:CHEDDA) and will be
          maintained same at all times.</p>
        <br />

        <h3>Stacking Requirements</h3>
        <p>1 NFT x 50$ of RatTrap tokens</p>
      </div>
    </div>
  </section>
</main>
{/* 
<aside class="modal">
  <div class="window">
    <button class="close"><i data-ico="close"></i></button>

    <h3>Select moonratz to stake</h3>
    <hr />

    
    <div class="clear-span"><a class="clear">Clear list</a></div>

    <button class="btn span">Stake</button>
  </div>
</aside>

<aside class="modal">
  <div class="window">
    <button class="close"><i data-ico="close"></i></button>

    <h3>View on Etherscan</h3>
    <hr />

    <div class="info text-center">
      <p><small><a href="#" target="_blank">0x1AF048B90b9694f8308bE442C5044a5df9D6t1172</a></small></p>
      <p>Status: <span id="status">Pending</span></p>
    </div>
  </div>
</aside> */}

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

export default Stake;


