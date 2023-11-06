<template>  
  <q-layout view="lHh Lpr lFf" style="background-color: beige;"> 
    <!-- <p style="font-size: x-large; padding-left: 24%; padding-top: 9%; color: darkblue;">WELCOME !!!</p>    -->
    <q-header >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title style="font-size: xx-large;">
          ABOUT ME
          <!-- <div class="text-subtitle1">Details</div> -->
        </q-toolbar-title> 
        
      <div class="text-h4">GARGI PANDE </div> 
      

      </q-toolbar>    
      <div class="text-subtitle1" style="text-align: right; padding-right: 1%;">Software Engineer</div>       
    </q-header>
    <!-- <div style="top: 20%; left: 50%;">This is a my profile page.</div> -->

    <q-img
        src="../assets/10725924_Gargi.jpg" 
        style="max-width: 200px; height: 70px;  float: right; margin-top: 7.5%; padding-top: 20%; border-radius: 60%;" 
        :fit="scale-down"
        img-class="my-custom-image" 
        >
    </q-img>
    
    
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item to="/Gargi/tohome" exact active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                HOME
              </q-item-section>
            </q-item>


            <q-item to="/Gargi/toeducation" exact active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <!-- <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item> -->

              <q-item-section>
                Education
              </q-item-section>
            </q-item>

            <q-item to="/Gargi/tointerests" exact active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Interests
              </q-item-section>
            </q-item>

            <!-- <q-item to="/tohome" exact active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                HOME
              </q-item-section>
            </q-item> -->

            <q-item to="/Gargi/toskills" exact active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Skills
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/mountain.jpg" style="height: 150px; width: 250px; opacity: 0.9;">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <!-- <img src="../assets/10725924_Gargi.jpg" style="opacity: 1 ; "> -->
            </q-avatar>
            <div class="text-weight-bold">Gargi Pande</div>
            <div>gargipande10@gmail.com</div>
          </div>
        </q-img>
      </q-drawer>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  
</template>


<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'



const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>


