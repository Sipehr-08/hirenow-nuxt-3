<template>
  <footer id="footer" class="base-footer bg-primary">
    <div class="container">
      <div class="footer__setbox">
        <div class="footer__menu-wrap">
          <div class="footer__logo">
            <div class="footer__logo-img"></div>
          </div>
          <div class="footer__menu-col">
            <ul class="footer__menu first__col">
              <li>
                <nuxt-link :to="{ name: 'become-perfomer' }">
                  How to become a performer
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'faq' }"> FAQ </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'contacts' }"> Contacts </nuxt-link>
              </li>
              <li><a href="#">Customer Feedback</a></li>
            </ul>
          </div>
          <div class="footer__menu-col">
            <ul class="footer__menu">
              <li><a href="#"> for business</a></li>
              <li><a href="#">Our blog</a></li>
              <li><a href="#">Support</a></li>
              <li>
                <nuxt-link :to="{ name: 'how-it-works' }">
                  How it works
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer__menu-col prils__column">
            <div class="download__prils-wrap">
              <ul class="footer__download-links">
                <li>
                  <a href="#"><img src="/images/downloadpril/appstop.svg" /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/images/downloadpril/googleplay.svg"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/images/downloadpril/appgallery.svg"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright__block">
          <div class="authors__rights text-white">
            <p>© . Service Rules</p>
          </div>
          <div class="footer-sotial__links">
            <div class="sotial__icons-set bg-primary">
              <ul>
                <li>
                  <a href=""><img src="/images/icons/twitter.svg" /></a>
                </li>
                <li>
                  <a href=""
                    ><img class="bg-primary" src="/images/icons/vk.svg"
                  /></a>
                </li>
                <li>
                  <a href=""><img src="/images/icons/youtube.svg" /></a>
                </li>
                <li>
                  <a href=""><img src="/images/icons/telegram.svg" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
