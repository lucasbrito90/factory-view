<script setup lang="ts">
import { shallowRef } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
// assets
import Logo from './LogoMain.vue';

const value: string = window.location.search;
const params = new URLSearchParams(value);
const ispValue = params.get('isp');

const list1 = shallowRef([
  {
    name: 'Profile',
    link: 'https://themeforest.net/user/phoenixcoded'
  },
  {
    name: 'Portfolio',
    link: 'https://themeforest.net/user/phoenixcoded/portfolio'
  },
  {
    name: 'Follow Us',
    link: 'https://themeforest.net/user/phoenixcoded/followers'
  },
  {
    name: 'Website',
    link: 'https://phoenixcoded.net/'
  }
]);
const list2 = shallowRef([
  {
    name: 'Documentation',
    link: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/'
  },
  {
    name: 'Feature Request',
    link: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/roadmap/'
  },
  {
    name: 'RoadMap',
    link: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/roadmap/'
  },
  {
    name: 'Support',
    link: 'https://phoenixcoded.authordesk.app/'
  },
  {
    name: 'Email Us',
    link: 'https://themeforest.net/user/phoenixcoded#contact'
  }
]);
const list3 = shallowRef([
  {
    name: 'CodeIgniter',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://ableproadmin.com/codeigniter/default/public/?isp=1'
        : 'https://ableproadmin.com/codeigniter/default/public/'
  },
  {
    name: 'React',
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com/react/?isp=1' : 'https://ableproadmin.com/react/'
  },
  {
    name: 'Vue',
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com/vue/?isp=1' : 'https://ableproadmin.com/vue/'
  },
  {
    name: 'Angular',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://ableproadmin.com/angular/default/?isp=1'
        : 'https://ableproadmin.com/angular/default/'
  },
  {
    name: 'Next Js',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://able-pro-material-next-ts-navy.vercel.app/?isp=1'
        : 'https://able-pro-material-next-ts-navy.vercel.app/'
  },
  {
    name: 'Bootstrap 5',
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com?isp=1' : 'https://ableproadmin.com'
  },
  {
    name: '.Net',
    link:
      ispValue !== null && parseInt(ispValue) === 1 ? 'https://able-pro.azurewebsites.net/?isp=1' : 'https://able-pro.azurewebsites.net/'
  }
]);
const list4 = shallowRef([
  {
    name: 'Support Policy',
    link: 'https://themeforest.net/page/item_support_policy'
  },
  {
    name: 'Licenses Term',
    link: 'https://themeforest.net/licenses/standard'
  }
]);
</script>

<template>
  <v-footer class="bg-gray100 py-md-16 py-8 flex-column position-relative">
    <v-row>
      <v-col cols="12">
        <v-container>
          <v-row>
            <v-col lg="4" cols="12">
              <div class="contactDetails pr-lg-6">
                <Logo />
                <p class="mt-4 text-h6">
                  Phoenixcoded has gained the trust of over 5.5K customers since 2015, thanks to our commitment to delivering high-quality
                  products. Our experienced team players are responsible for managing Able Pro.
                </p>
              </div>
            </v-col>
            <v-col lg="2" md="3" cols="6">
              <h5 class="text-h5 mb-md-6 mb-4">Company</h5>
              <div class="d-flex flex-column footer-list">
                <a v-for="(list, i) in list1" :key="i" :href="list.link" class="text-h6" target="_blank">
                  {{ list.name }}
                </a>
              </div>
            </v-col>
            <v-col lg="2" md="3" cols="6">
              <h5 class="text-h5 mb-md-6 mb-4">Help & Support</h5>
              <div class="d-flex flex-column footer-list">
                <a v-for="(list, i) in list2" :key="i" :href="list.link" class="text-h6" target="_blank">
                  {{ list.name }}
                </a>
              </div>
            </v-col>
            <v-col lg="2" md="3" cols="6">
              <h5 class="text-h5 mb-md-6 mb-4">More products</h5>
              <div class="d-flex flex-column footer-list">
                <a v-for="(list, i) in list3" :key="i" :href="list.link" class="text-h6" target="_blank">
                  {{ list.name }}
                </a>
              </div>
            </v-col>
            <v-col lg="2" md="3" cols="6">
              <h5 class="text-h5 mb-md-6 mb-4">Useful Resources</h5>
              <div class="d-flex flex-column footer-list">
                <a v-for="(list, i) in list4" :key="i" :href="list.link" class="text-h6" target="_blank">
                  {{ list.name }}
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-footer>
  <v-divider></v-divider>
  <div class="sub-footer text-surface bg-gray100 py-4">
    <v-container class="py-0">
      <v-row class="align-center">
        <v-col sm="6">
          <h6 class="text-h6 text-lightText mb-0">
            © Handcrafted by Team
            <a href="https://themeforest.net/user/phoenixcoded" class="text-primary text-decoration-none">Phoenixcoded</a>
          </h6>
        </v-col>
        <v-col sm="6" class="text-right">
          <v-btn icon variant="plain" size="small" aria-label="facebook" color="secondary">
            <SvgSprite name="custom-facebook" />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.footer-list {
  a {
    color: rgb(var(--v-theme-darkText));
    &:hover {
      color: rgb(var(--v-theme-primary));
      text-decoration: none;
    }
    + a {
      margin-top: 20px;
      @media (max-width: 991px) {
        margin-top: 10px;
      }
    }
  }
}
</style>
