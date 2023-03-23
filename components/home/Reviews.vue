<template>
  <section class="section__usersreviews">
    <div class="container-fluid">
      <h2 class="usersreviews__title">Reviews about performers</h2>
      <div
        class="flex justify-between space-x-2 overflow-auto bg-gradient-to-l"
      >
        <div
          v-for="i in 5"
          :key="i"
          class="usersreviews-slider__item border border-primary"
          style="min-width: 280px"
        >
          <div class="slider-item__head">Mathematics tutor grade 7-8</div>
          <div class="slider-item__subhead">
            The artist was found in 15 minutes
          </div>
          <div class="slider-item__payment">
            1000 &#8381; &nbsp;<span>SBR payment</span
            ><span><img src="/images/slider/sber-card.svg" /></span>
          </div>
          <div class="slider-item__last-review">
            <span
              >An excellent lecturer. Straightawayfound a common language with
              the child.Explains very clearly. Childsatisfied.</span
            >
          </div>
          <div class="slider-item__data">
            <span>September 24, 2021</span>
          </div>
          <div class="slider-item__user-info">
            <div class="item__user-img">
              <img src="/images/slider/fase.svg" alt="user_img" srcset="" />
            </div>
            <div class="item__user-info">
              <div class="user-info__name"><span>Alexandra E.</span></div>
              <div class="item__user-rate">
                <span
                  >Artist Rating:<img
                    class="px-2"
                    src="/images/slider/star.svg" /></span
                ><span>5.0</span>
              </div>
              <div class="item__user-tasks-done">
                <span>Completed &nbsp;<span>25</span></span
                >&nbsp;tasks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
