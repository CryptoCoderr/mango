import React from 'react'
import "./app.css";
function Contracts() {
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
  <section class="intro">
    <div class="grid-x align-center">

      <h1 class="text-center">
        $RTP & $CHEDDA<br/> Smart Contracts
      </h1>
    </div>
  </section>

  <section class="faq">
    <div class="grid-x align-center">
      <div class="large-6">
        <h2>$RTP & $CHEDDA</h2>
        <p>$RTP & $CHEDDA are essential tokens in the MoonRatz ecosystem. Both of these are available on Ethereum
          blockchain with the following smart contracts.</p>
      </div>
    </div>

    <div class="grid-x align-center">
      <div class="large-6">
        <h2>Smart Contracts:</h2>
        <ol>
          <li>
            <p>$RTP: <a href="#" target="black">...</a></p>
          </li>
          <li>
            <p>$CHEDDA: <a href="#" target="black">...</a></p>
          </li>
        </ol>

        <p>Smart contracts can also be found on the coinmarketcap pages of <a href="#" title="RTP" target="black">$RTP</a> & <a href="#" title="CHEDDA" target="black">$CHEDDA</a>. These smart contracts are used to
          add custom tokens in metamask wallets for display. <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask" target="_blank" title="Here is guide on how to add custom tokens on metamask">Here is guide on how to add custom tokens on metamask.</a></p>
      </div>
    </div>
  </section>
</main>

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

<script src="dist/assets/js/app.js"></script>
    </>
  )
}

export default Contracts;


