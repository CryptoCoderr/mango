import React from 'react'
import "./app.css";
function Faq() {
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
        FAQ
      </h1>
    </div>
  </section>

  <section class="faq">
    <div class="grid-x align-center">
      <div class="large-6">
        <h2>How to buy RatTrap Token - $RTP</h2>

        <ol>
          <li>
            <h3>Get Metamask</h3>
            <p>MetaMask is available on iOS and Android or visit <a href="https://metamask.app.link/" target="_blank" title="metamask">metamask.io</a></p>
          </li>
          <li>
            <h3>Get $ETH</h3>
            <p>Either purchase $ETH through MetaMask or transfer from another Wallet (e.g. Coinbase or Binance) to MetaMask wallet.</p>
          </li>
          <li>
            <h3>Swap $ETH for $RTP</h3>
            <p>You can buy $RTP on UniSwap with this contract: <a href="#" target="black">...</a> or here <a href="https://app.uniswap.org/#/swap?chain=mainnet" target="black">Uniswap</a></p>
          </li>
        </ol>
      </div>
    </div>

    <div class="grid-x align-center">
      <div class="large-6">
        <h2>What is $RTP</h2>
        <p>$RTP stands for RatTrap Token - is a tradeable token. It is part of the MoonRatz ecosystem with 10M total supply and 10% transaction tax with 3% DAO, 5%
          marketing wallet and 2% liquidity.</p>
      </div>
    </div>

    <div class="grid-x align-center">
      <div class="large-6">
        <h2>What is $CHEDDA</h2>
        <p>$CHEDDA stands for CHEDDA Token - is non-tradeable and is pegged to ETH with a stable price. The ratio of peg is 1:3000 (ETH:CHEDDA) and will be maintained same at all times..</p>
        <p>$CHEDDA tokens are rewarded for stacking MoonRatz NFTs on our <a href="stake.html" title="staking platform">staking platform.</a></p>
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

<script src="dist/assets/js/app.js"></script>


    </>
  )
}

export default Faq;
