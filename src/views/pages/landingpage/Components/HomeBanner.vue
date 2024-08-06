<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();
//assets
import tech1 from '@/assets/images/landing/tech-bootstrap.svg';
import tech2 from '@/assets/images/landing/tech-react.svg';
import tech3 from '@/assets/images/landing/tech-angular.svg';
import tech4 from '@/assets/images/landing/tech-codeigniter.svg';
import tech5 from '@/assets/images/landing/tech-net.svg';
import tech6 from '@/assets/images/landing/tech-figma.svg';
import tech7 from '@/assets/images/landing/tech-nextjs.svg';
import tech8 from '@/assets/images/landing/tech-vuetify.svg';

const rating = ref(5);

const value: string = window.location.search;
const params = new URLSearchParams(value);
const ispValue = params.get('isp');

const techonlogy = shallowRef([
  {
    image: tech1,
    name: 'Click to preview Bootstrap 5',
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com?isp=1' : 'https://ableproadmin.com'
  },
  {
    image: tech2,
    name: 'Click to preview React',
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com/react/?isp=1' : 'https://ableproadmin.com/react/'
  },
  {
    image: tech4,
    name: 'Click to preview Codeigniter',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://ableproadmin.com/codeigniter/default/public/?isp=1'
        : 'https://ableproadmin.com/codeigniter/default/public/'
  },
  {
    image: tech5,
    name: 'Click to preview ASP.net',
    link:
      ispValue !== null && parseInt(ispValue) === 1 ? 'https://able-pro.azurewebsites.net/?isp=1' : 'https://able-pro.azurewebsites.net/'
  },
  {
    image: tech3,
    name: 'Click to preview Angular',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://ableproadmin.com/angular/default/?isp=1'
        : 'https://ableproadmin.com/angular/default/'
  },
  {
    image: tech7,
    name: 'Click to preview Nextjs',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://able-pro-material-next-ts-navy.vercel.app/?isp=1'
        : 'https://able-pro-material-next-ts-navy.vercel.app/'
  },
  {
    image: tech8,
    name: 'Click to preview Vuetify',
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com/vue/?isp=1' : 'https://ableproadmin.com/vue/'
  },
  {
    image: tech6,
    name: 'Figma design system',
    link: 'https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&node-id=46-226114&mode=design&t=1gF4FHiDzpwHzoMs-0'
  }
]);
</script>

<template>
  <div class="home-bg">
    <v-container class="maxWidth">
      <v-row class="spacer align-center justify-center">
        <v-col cols="12" lg="7" md="6" sm="8">
          <div class="pr-lg-4 homeContent text-center">
            <h1 class="bannerText mb-5" data-aos="fade-up" data-aos-duration="500">
              Explore One of the <span class="text-animation">Featured Dashboard</span> Template in Themeforest
            </h1>
            <p class="mb-8 text-h5 font-weight-regular" data-aos="fade-up" data-aos-duration="800">
              Able Pro is the one of the Featured admin dashboard template in Envato Marketplace and used by over 2.5K+ Customers wordwide.
            </p>
            <div data-aos="fade-up" data-aos-duration="1000">
              <v-btn
                color="secondary"
                rounded="md"
                :size="smAndUp ? 'large' : 'default'"
                variant="outlined"
                class="mr-4"
                to="/components/buttons"
                >Explore components</v-btn
              >
              <v-btn color="primary" rounded="md" variant="flat" :size="smAndUp ? 'large' : 'default'" to="/dashboard/default">
                Live Preview
              </v-btn>
            </div>
            <ul data-aos="fade-up" class="d-flex ratings justify-center mt-6" data-aos-duration="1100">
              <li style="list-style-type: none">
                <v-rating v-model="rating" :size="20" readonly color="inputBorder" active-color="warning" density="compact"></v-rating>
                <h4 class="text-h4 mt-1 mb-0">
                  4.7/5
                  <span class="font-weight-regular text-lightText" style="font-size: 75%">Ratings</span>
                </h4>
              </li>
              <li style="list-style-type: none">
                <span class="text-lightText text-caption">Sales</span>
                <h4 class="text-h4 mb-0">2.5K+</h4>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="technology">
      <v-list class="d-flex justify-center py-0" aria-busy="true" aria-label="technology">
        <v-list-item v-for="(item, index) in techonlogy" class="py-sm-3 py-2 px-sm-4 px-3" :key="index" :href="item.link" target="_">
          <v-img :src="item.image" alt="technology" cover />
          <v-tooltip activator="parent" aria-label="tooltip" location="bottom" content-class="smallTooltip">
            <span class="text-caption">{{ item.name }}</span>
          </v-tooltip>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
<style lang="scss">
.home-bg {
  overflow: hidden;
  min-height: 450px;
  position: relative;
  height: calc(100vh - 74px);
  padding-bottom: 92px;
  display: flex;
  align-items: center;
}
.ratings {
  gap: 30px;
  li {
    position: relative;
    + li {
      &::before {
        content: '';
        position: absolute;
        height: 30px;
        bottom: 10px;
        left: -15px;
        right: auto;
        width: 1px;
        background: rgb(var(--v-theme-borderLight));
      }
    }
  }
}
.technology {
  border-top: 1px solid rgb(var(--v-theme-borderLight));
  border-bottom: 1px solid rgb(var(--v-theme-borderLight));
  position: absolute;
  bottom: 0;
  width: 100%;
  .v-list-item {
    border-left: 1px solid rgb(var(--v-theme-borderLight));
    &:last-child {
      border-right: 1px solid rgb(var(--v-theme-borderLight));
    }
  }
  .v-img {
    width: 65px;
    @media (max-width: 960px) {
      width: 50px;
    }
    @media (max-width: 599px) {
      width: 32px;
    }
  }
}
.homeContent {
  position: relative;
  z-index: 2;
  p {
    width: 76%;
    margin-inline: auto;
    @media (max-width: 1279px) {
      width: 100%;
    }
  }
}
.bannerText {
  font-size: 3.4375rem;
  line-height: 1.3;
  font-weight: 700;
  @media (max-width: 1264px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.825rem;
  }
}
.text-animation {
  background: linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244)) 0 0/400% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: move-bg 24s infinite linear;
}
@keyframes move-bg {
  100% {
    background-position: 400% 0;
  }
}
.widgetImages {
  max-width: 100%;
  filter: drop-shadow(0px 0px 50px rgb(33 150 243 / 30%));
}
</style>
