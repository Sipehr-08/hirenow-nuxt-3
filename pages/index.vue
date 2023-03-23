<template>
  <div>
    <section class="top-banner">
      <div class="container">
        <div class="top-banner__content-box">
          <div class="top-banner__head">
            <h2 class="top-banner__header">Life's easier with us</h2>
            <p class="top-banner__description">
              We help to find specialists for solving home and business tasks
            </p>
          </div>
          <div class="top-banner__form">
            <!--include ../common/input-search-->
            <form class="top__banner-form__search">
              <div class="top__banner-input-group">
                <input
                  class="top__banner-search border-2 border-primary"
                  type="search"
                  name="search-info"
                  placeholder="I'm looking for..."
                />
                <button class="top__banner-search__btn bg-green">
                  Get started
                </button>
              </div>
            </form>
          </div>
          <div class="top-banner__suggest">
            <div class="suggest__help">
              <span>
                For example, &nbsp;
                <span class="suggest__help-link">
                  <a href="#">website design</a>
                </span>
              </span>
            </div>
            <div
              class="suggest__link bg-primary text-white rounded-3xl py-4 px-8"
            >
              Join as a service provider and start making money
            </div>
          </div>
        </div>
      </div>
    </section>
    <home-services class="container" />
    <home-accomplishments class="container" />
    <home-how-it-work />
    <home-reviews />
    <section class="download__pril container">
      <div class="download__wrap">
        <div class="download__content">
          <h2 class="download__content-head">
            Download the app <br />
            and use HireNow anywhere
          </h2>
          <p class="download__content-descr">
            Point your phone camera at the QR code to download the app
          </p>
        </div>
        <div class="download__links">
          <ul>
            <li>
              <a href="#"><img src="/images/downloadpril/appstop.svg" /></a>
            </li>
            <li>
              <a href="#"><img src="/images/downloadpril/googleplay.svg" /></a>
            </li>
            <li>
              <a href="#"><img src="/images/downloadpril/appgallery.svg" /></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <home-articles class="container" />
  </div>
</template>
