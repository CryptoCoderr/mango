import React from 'react'
import "./app.css";
import image51 from "/home/team/Desktop/mango/src/img/left-lottery.jpg";
import image52 from "/home/team/Desktop/mango/src/img/right-lottery.jpg";
function Lottery() {
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
  <section class="intro lottery">
    <div class="grid-x align-center">
      <figure class="float-el">
        <img class="left-lottery" src={image51} alt="moonratz"/>
        <img class="right-lottery" src={image52} alt="moonratz"/>
      </figure>

      <h1 class="reduced text-center">
        enter Lottery for a <br/>
        chance to win some $Chedda <br/>
        <span class="dynamic">
          <span id="prizeVal">101.56</span>
          <span class="tooltip"><i data-ico="info"></i>
            <aside class="window">
              <h4>Moonratz Lottery</h4>
              <p>Your Nft is your ticket to a weekly lottery draw. Each nft has a number that will be picked as the lucky nft ticket for the entire pot. 100 entries max on a fcfs basis good luck Ratz.</p>
            </aside>
          </span>
        </span>
      </h1>
      <div class="button-group">
        <a class="btn" href="https://opensea.io/collection/moonratzwtf" title="Buy Moonratz" target="_blank">Buy
          Moonratz</a>
        <a class="btn secondary" href="https://app.uniswap.org/#/swap?chain=mainnet" title="Buy Trap Token" target="_blank">Buy Trap Token</a>
      </div>
    </div>
  </section>

  <section class="lottery-tck">
    <div class="grid-x align-center">
      <div class="large-10 lucky-ticket">
        <div class="grid-x align-middle">
          <div class="details">
            <section>
              <h3>Your Tickets</h3>
              <p class="h2"><span id="ticketVal">0</span> / 10</p>
              <button class="btn span">Connect wallet</button>
            </section>
          </div>

          <div class="info">
            <section>
              <h2>Lottery Ends</h2>
              <div class="counter">
                <span id="days">4</span>d:<span id="hrs">12</span>h:<span id="min">32</span>m:<span id="sec">45</span>s
              </div>
              <p class="mutated"><span id="ticketsQ">34</span> / 100</p>
            </section>

            <footer>
              <p><small>*Trap Token and Moonratz NFTs required</small></p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="heading-cheese expanded reduced">
    <img src="dist/assets/img/title/prev-winners.jpg" alt="Previous Lottery Winners"/>
  </section>

  <section>
    <div class="grid-x align-center">
      <div class="large-10 tickets-list">
        <div class="grid-x">
          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>

          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>

          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>

          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>

          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>

          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>

          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>

          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>

          <div class="ticket">
            <header>
              <ul>
                <li>
                  <ul>
                    <li class="h3">Lottery</li>
                    <li class="h3">wn <span>31</span></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="h3">Chedda Pot</li>
                    <li class="h3"><span>101.56</span></li>
                  </ul>
                </li>
              </ul>
            </header>

            <div class="details">
              <h3>@MissLillyCrypto</h3>
              <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<aside class="modal">
  <div class="window">
    <button class="close"><i data-ico="close"></i></button>

    <h3>Select moonratz To enter lottery</h3>
    <hr/>

   
   
    <div class="clear-span"><a class="clear">Clear list</a></div>

    <button class="btn span">Buy Tickets</button>
  </div>
</aside>

<aside class="modal">
  <div class="window">
    <button class="close"><i data-ico="close"></i></button>

    <h3>View on Etherscan</h3>
    <hr/>

    <div class="info">
      <p><small><a href="#" target="_blank">0x1AF048B90b9694f8308bE442C5044a5df9D6t1172</a></small></p>
      <p>Status: <span id="status">Pending</span></p>
    </div>
  </div>
</aside>

<footer class="footer">
  <ul class="h2" data-list="inline">
    <li><a href="dist/assets/img/whitepaper.pdf" title="Whitepaper" target="_blank">Whitepaper</a></li>
    <li><a href="/Contracts" title="Contracts">Contracts</a></li>
    <li><a href="/Faq" title="Faq">Faq</a></li>
    <li><a href="mailto:hi@moonratz.com?subject=MoonRatz%20Question&body=Describe%20your%20question:"
           title="hi@moonratz.com" target="_blank">hi@moonratz.com</a></li>
  </ul>

  <p class="trms">MoonRatz ©
    <script>
      document.write(new Date().getFullYear())
    </script>
    All rights reserved.
  </p>
</footer>

<script src="/home/team/Desktop/mango/src/js/app.js"></script>
 </>
  )
}

export default Lottery;

