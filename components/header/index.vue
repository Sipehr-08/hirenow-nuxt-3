<template>
  <div class="relative">
    <section class="navbar-commom border-b border-grey-200">
      <div class="navbar__wrap">
        <nav class="navbar__flexbox">
          <div class="gamburger">
            <img
              src="/images/logo/gamb-white.svg"
              alt="menu-gamburger"
              @click="changeShowMenu"
            />
          </div>
          <div class="logo-white-mobile">
            <nuxt-link :to="{ path: '/' }"> </nuxt-link>
          </div>
          <div class="nav-item task__action">
            <nuxt-link :to="{ name: 'new-task' }" class="nav-link">
              Create a task
            </nuxt-link>
          </div>
          <div class="nav-item">
            <nuxt-link :to="{ name: 'find-tasks' }" class="nav-link">
              Find assignments
            </nuxt-link>
          </div>
          <div class="nav-item md:ml-auto mr-5">
            <a class="nav-link top-nav__login" href="#">Log in</a>
          </div>
          <div class="nav-item reg-span">
            <a class="nav-link top-nav__reg" href="#">Sing up</a>
          </div>
        </nav>
      </div>
    </section>
    <section
      v-show="showMenu"
      class="mobile__top-menu container transition fixed top-0 bottom-0 left-0 z-10 h-screen"
      style="background-color: rgba(0, 0, 0, 0.23)"
    >
      <div class="top__menu-mobile w-4/6">
        <div class="top__menu-wrap">
          <div class="top__menu-gridset">
            <ul class="mobile__top-menu-container mt-6 ml-6">
              <li>
                <nuxt-link :to="{ name: 'new-task' }">
                  Создать задание
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'find-tasks' }">
                  Найти задание
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'new-task' }"> Исполнители </nuxt-link>
              </li>
            </ul>
            <ul class="footer__menu">
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
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Customer Feedback</a></li>
              <li><a href="#">HIRE NOW for business</a></li>
              <li><a href="#">Our blog</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">How it works?</a></li>
            </ul>
            <div class="download__links absolute bottom-0 left-6">
              <ul>
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
        <div class="close__mobile">
          <img
            class="w-4 h-4"
            src="/images/popups/close-mobile-menu.svg"
            @click="changeShowMenu"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const route = useRoute()
const showMenu = ref(false)

const changeShowMenu = () => {
  showMenu.value = !showMenu.value
}

watch(
  route,
  () => {
    showMenu.value = false
  },
  { deep: true }
)
</script>
