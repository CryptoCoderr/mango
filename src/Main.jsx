import React from 'react'
import $ from "jquery";
import { onload } from "/home/team/Desktop/mango/src/js/utils/onload.js";
import "./app.css";
import image1 from "/home/team/Desktop/mango/src/img/stripe-1.jpg";
import image2 from "/home/team/Desktop/mango/src/img/pizza-slice.jpg";
import image3 from "/home/team/Desktop/mango/src/img/sock.jpg";
import image4 from "/home/team/Desktop/mango/src/img/nft/small-rat1.jpg";
import image5 from "/home/team/Desktop/mango/src/img/nft/small-rat2.jpg";
import image6 from "/home/team/Desktop/mango/src/img/nft/small-rat3.jpg";
import image7 from "/home/team/Desktop/mango/src/img/nft/small-rat4.jpg";
import image8 from "/home/team/Desktop/mango/src/img/nft/small-rat5.jpg";
import image9 from "/home/team/Desktop/mango/src/img/game-hero.png";
import image10 from "/home/team/Desktop/mango/src/img/roadmap-small.jpg";
import image11 from "/home/team/Desktop/mango/src/img/eco-rat.jpg";
import image12 from "/home/team/Desktop/mango/src/img/icons/rattrap.png";
import image13 from "/home/team/Desktop/mango/src/img/icons/staknft.png";
import image14 from "/home/team/Desktop/mango/src/img/icons/lottery.png";
import image15 from "/home/team/Desktop/mango/src/img/icons/game.png";
import image17 from "/home/team/Desktop/mango/src/img/icons/rattrap.jpg";
import image18 from "/home/team/Desktop/mango/src/img/rattrap-hero.png";
import image19 from "/home/team/Desktop/mango/src/img/tail.jpg";
import image20 from "/home/team/Desktop/mango/src/img/falling-tokens.png";
import image21 from "/home/team/Desktop/mango/src/img/icons/one.png";
import image22 from "/home/team/Desktop/mango/src/img/icons/two.png";
import image23 from "/home/team/Desktop/mango/src/img/icons/three.png";
import image25 from "/home/team/Desktop/mango/src/img/lottery-promo.jpg";
import image26 from "/home/team/Desktop/mango/src/img/game-hero.png";
import image30 from "/home/team/Desktop/mango/src/img/nft-hero.png";
import image31 from "/home/team/Desktop/mango/src/img/title/tokenomics.jpg";
import image32 from "/home/team/Desktop/mango/src/img/lottery5.jpg";

{$('#mtoggle').on("click", function(e) {
  checker();
});

function checker() {
  var checkBox = document.getElementById("menu-toggle");
  if (checkBox.checked == true){
    $('body').removeClass('noscroll');
    document.getElementById("menu-toggle").checked = true;
  } else {
    $('body').addClass('noscroll');
    document.getElementById("menu-toggle").checked = false;
  }
}

$('.key-nav').on("click", function(e) {
  document.getElementById("menu-toggle").checked = false;
  $('body').removeClass('noscroll');
});

// nft animation

var pause = false;
//save blocks
var block1 = $('.bg-block1');
//variable for counter
var k = 0;

//interval function works only when pause is false
setInterval(function () {
  if (!pause) {
    var $this1 = block1.eq(k);
    block1.removeClass('active').eq(k).addClass('active');
    $this1.addClass('active');
    //increase k every 1.5 sec
    k++;
    //if k more then number of blocks on page
    if (k >= block1.length) {
      //rewrite variable to start over
      k = 0;
    }
  }
  //every 1.5 sec
}, 200);

// moving stripes
$(window).on("load resize scroll", function() {
  $('#stripes').each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
    $(this)
      .find("#stripe-1 .bg-move")
      .css({ backgroundPosition: leftPosition });
    $(this)
      .find("#stripe-2 .bg-move")
      .css({ backgroundPosition: -leftPosition });
  });
});

// scrolling bar
function mediaSizeForNav() {
  var new_scroll_position = 0;
  var last_scroll_position;
  var navbar = document.getElementById('nav');

  window.addEventListener('scroll', function (e) {
    last_scroll_position = window.scrollY;

    if (new_scroll_position < last_scroll_position && last_scroll_position > 58) {
      navbar.classList.remove("slide-down");
      navbar.classList.add("slide-up");
    } else {
      navbar.classList.remove("slide-up");
      navbar.classList.add("slide-down");
    }

    new_scroll_position = last_scroll_position;
  });
}

mediaSizeForNav();
window.addEventListener('resize', mediaSizeForNav, false);

// submenu
$(window).trigger( "click",function() {
  $("#submenu-toggle").prop('checked', false);
});

$('#options').trigger( "click",function(event){
  event.stopPropagation();
});

// card navigation
$(function() {
  $('#cardsList article').on("mouseover", function(e){
    $('#cardsList article').removeClass('active');
    $(this).addClass('active');
  })
});}

function Main() {
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
  <section className="intro home">
    <div className="grid-x align-center">
      <figure className="float-el">
        <img className="pizza" src={image2} alt="moonratz"/>
        <img className="sock" src={image3} alt="moonratz"/>
      </figure>

      <h1 className="text-center">
        <small className="cheese-col">Welcome to MoonRatz, a project like no other where you can...</small>
        Collect
        <span className="title-ratz select-item">
          <span className="bg-block1 active wood"><img src={image4} alt="NFTs"/></span>
          <span className="bg-block1 nightsky"><img src={image5} alt="NFTs"/></span>
          <span className="bg-block1 blood"><img src={image6} alt="NFTs"/></span>
          <span className="bg-block1 minty"><img src={image7} alt="NFTs"/></span>
          <span className="bg-block1 clay"><img src={image8} alt="NFTs"/></span>
        </span> stake<br/>
        Earn <i className="title-cheese"></i> win Lottery<br/>
        Collect <i className="title-cash"></i> stake
      </h1>
    </div>
  </section>

  <section className="nft-breakdwn">
    <div className="grid-x justify align-middle">
      <div className="large-4 mx-400">
        <ul data-list="no-disc">
          <li className="h2">5k Collection</li>
          <li className="h2">+100 Traits</li>
          <li className="h2">3x 1/1</li>
        </ul>

        <div className="grid-x">
          <div className="auto"><p>We just some Ratz trying to moon and get that Chedda.
            Get a Rat from <a href="https://opensea.io/collection/moonratzwtf" title="MoonRatz on OpenSea"
                              target="_blank">OpenSea</a> and join the revolution to start earning passive income!</p>
          </div>
          <div className="shrink"><a className="circle-large minty" href="https://opensea.io/collection/moonratzwtf"
                                 title="MoonRatz on OpenSea"
                                 target="_blank"><i data-ico="os"></i></a></div>
        </div>
      </div>
      <div className="frame minty">
        <img src={image30} alt="NFT Collection"/>
      </div>
      <div className="large-3 large-offset-1 mx-300 self-align-bottom">
        <p>MoonRatz is not just dope art. Check out our Rat Map to find more about our whole ecosystem filled with
          utilities and perks for our holders.</p>
        <figure id="toggleMap">
          <img src={image10} style={{width:"100%"}} alt="MoonRatz Road Map"/>
        </figure>
      </div>
    </div>
  </section>
  <section className="nft-slider expanded">
    <aside id="stripes">
      <figure id="stripe-1"><span className="bg-move"></span></figure>
      <figure id="stripe-2"><span className="bg-move"></span></figure>
    </aside>
  </section>

  <section className="eco">
    <div className="grid-x">
      <div className="large-5 large-offset-1 mx-400">
        <h2>
          <small>Ecosystem</small>
          Utilities that bring you passive income and good vibes
        </h2>
        <figure>
          <img src={image11} alt="Ecosystem"/>
        </figure>
        <a className="btn" href="https://opensea.io/collection/moonratzwtf" title="MoonRatz on OpenSea"
           target="_blank">View Collection</a>
      </div>

      <div className="large-6">
        <div id="cardsList">
          <article className="active" data-card>
            <figure className="wood"><img src={image12}/></figure>
            <h3>RatTrap is a
              Tradeable token</h3>
            <p>Part of the MoonRatz ecosystem with 10M total supply and 8% transaction tax with 3% going to DAO, 5% to
              marketing wallet.</p>
            <a className="btn span" href="#" target="_blank" title="Start Trading">Start Trading</a>
          </article>

          <article data-card>
            <figure className="nightsky"><img src={image13}/></figure>
            <h3>Staking moonratz
              For Chedda Token</h3>
            <p>The Chedda token is a mintable and expanding supply token non-tradeable and is pegged to ETH with a
              stable price.</p>
            <a className="btn span" href="stake.html" title="Stake NFT">Stake NFT</a>
          </article>

          <article data-card>
            <figure className="blood"><img src={image14}/></figure>
            <h3>MoonRatz Lottery,
              Try your luck</h3>
            <p>Play weekly NFT lotteries to stand a chance to win the cheeze pot! It's a first come first serve offer
              and limited to 100 tickets per prize pot.</p>
            <a className="btn span" href="lottery.html" title="Enter Lottery">Enter Lottery</a>
          </article>

          <article data-card>
            <figure className="minty"><img src={image15}/></figure>
            <h3>Ratz, we've got a mission for you</h3>
            <p>Ratz are coming, and they're coming strong. Don't miss out on this amazing opportunity to earn some
              Chedda while playing the game.</p>
            <a className="btn span" href="#" title="Play Game">Play Game</a>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section className="heading-cheese expanded">
    <img src={image31} alt="RatTrap Tokenomics"/>
  </section>

  <section className="rattrap-breakdwn">
    <div className="grid-x align-middle">
      <div className="large-4 mx-300">
        <figure className="circle-huge"><img src={image17} alt="RatTrap Token"/></figure>
        <ul data-list="no-disc">
          <li className="h2">10M<br/>
            total supply
          </li>
          <li className="h2">10%<br/>
            transaction tax
          </li>
        </ul>

        <p>3% going to DAO, 5% to marketing
          wallet and 2% is for liquidity.</p>

        <a className="btn" href="https://pancakeswap.finance/" title="PancakeSwap"
           target="_blank">Buy Tokens</a>
      </div>

      <div className="frame lavander"></div>

      <figure className="side-img"><img src={image18} alt="RatTrap Breakdown"/></figure>
    </div>
  </section>

  <section className="rwd-guide">
    <figure><img src={image19} alt="Chedda Tokens Reward guide"/></figure>

    <div className="grid-x align-center">
      <div className="large-10">
        <div className="grid-x align-middle">
          <div className="desc">
            <img src={image20} alt="Chedda Tokens Reward guide"/>
            <h2>Chedda Tokens
              Reward guide</h2>
            <p>The Chedda token is non-tradeable and is pegged to ETH with a stable price. The ratio of peg is 1:3000
              (ETH:CHEDDA) and will be maintained same at all times.</p>
          </div>

          <div className="steps">
            <div className="grid-x" data-card="hor">
              <div className="shrink">
                <figure className="circle-large blood one"><img src={image21} alt="Stake Moonratz"/>
                </figure>
              </div>
              <div className="auto">
                <h3>Hold NFTs  RatTrap</h3>
                <p>As a holder of RatTrap tokens and our NFTs, you will earn Chedda tokens as staking rewards on our
                  platform.</p>
              </div>
            </div>

            <div className="grid-x" data-card="hor">
              <div className="shrink">
                <figure className="circle-large minty two"><img src={image22} alt="Stake Moonratz"/>
                </figure>
              </div>
              <div className="auto">
                <h3>Stake Moonratz</h3>
                <p>Get 1 token every 24 hrs for staking NFTs, i.e. 30 Chedda tokens p/m.</p>
              </div>

              <a className="btn" href="#" title="Stake MoonRatz">Stake MoonRatz</a>
            </div>

            <div className="grid-x" data-card="hor">
              <div className="shrink">
                <figure className="circle-large lavander"><img src={image23}alt="Rewards in ChEdda"/>
                </figure>
              </div>
              <div className="auto">
                <h3>Rewards in ChEdda</h3>
                <p>Convert Chedda tokens to ETH from the swap section.</p>
              </div>

              <a className="btn" href="#" title="Swap chedda">Swap chedda</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="heading-cheese expanded reduced">
    <img src={image32} alt="Enter Lottery with Cedda"/>
  </section>
  <section className="lottery-promo expanded reduced">
    <img className="reduced" src={image25} alt="Enter Lottery with Cedda"/>
    <a className="btn-circle" href="#" title="Get Tickets">Get Tickets</a>
  </section>
  <section className="game-breakdwn">
    <div className="grid-x align-middle">
      <div className="large-4 mx-300">
        <h2>
          The first Rat
          in the Moon
        </h2>
        <p>Destroy enemies along the way, and you could earn a spot on the leaderboard for a chance to win some
          Chedda.</p>
        <a className="btn inactive" href="#" title="Play Game">Coming Soon</a>
      </div>

      <div className="frame minty"></div>

      <figure className="side-img"><img src={image26} alt="P2E Game"/></figure>
    </div>
  </section>
</main>
<footer className="footer">
  <ul className="h2" data-list="inline">
    <li><a href="/whitepaper.pdf" title="Whitepaper" target="_blank">Whitepaper</a></li>
    <li><a href="/Contracts" title="Contracts" target="_blank">Contracts</a></li>
    <li><a href="/Faq" title="Faq" target="_blank">Faq</a></li>
    <li><a href="mailto:hi@moonratz.com?subject=MoonRatz%20Question body=Describe%20your%20question:"
           title="hi@moonratz.com" target="_blank">hi@moonratz.com</a></li>
  </ul>

  <p className="trms">MoonRatz ©
    <script>
      document.write(new Date().getFullYear())
    </script>
    All rights reserved.
  </p>
</footer>


{/* // app.js */}
<script src="/home/team/Desktop/mango/src/js/app.js"></script>
    </>
  )
}

export default Main;
