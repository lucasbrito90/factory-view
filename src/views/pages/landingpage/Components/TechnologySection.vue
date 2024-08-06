<script setup lang="ts">
import { shallowRef } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
// assets
import img1 from '@/assets/images/landing/tech-bootstrap.svg';
import img2 from '@/assets/images/landing/tech-react.svg';
import img3 from '@/assets/images/landing/tech-net.svg';
import img4 from '@/assets/images/landing/tech-codeigniter.svg';
import img5 from '@/assets/images/landing/tech-figma.svg';
import img6 from '@/assets/images/landing/tech-angular.svg';
import img7 from '@/assets/images/landing/tech-nextjs.svg';
import img8 from '@/assets/images/landing/tech-vuetify.svg';

const value: string = window.location.search;
const params = new URLSearchParams(value);
const ispValue = params.get('isp');

const techonlogy = shallowRef([
  {
    image: img1,
    title: 'Bootstrap 5',
    content: "Able Pro - Boost your project's visual appeal and functionality with our Bootstrap 5 dashboard template.",
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com?isp=1' : 'https://ableproadmin.com'
  },
  {
    image: img2,
    title: 'React Material-UI',
    label: 'Trending',
    content:
      'Able Pro React dashboard template is a powerful tool that utilizes the Material-UI component library to create stunning and intuitive user interfaces.',
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com/react/?isp=1' : 'https://ableproadmin.com/react/'
  },
  {
    image: img6,
    title: 'Angular Material-UI',
    content:
      'Able Pro Angular dashboard template is a powerful tool that utilizes the Material-UI component library to create stunning and intuitive user interfaces.',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://ableproadmin.com/angular/default/?isp=1'
        : 'https://ableproadmin.com/angular/default/'
  },
  {
    image: img7,
    title: 'Next Js',
    content:
      'Able Pro Next Js dashboard template is a powerful tool that utilizes the Material-UI component library to create stunning and intuitive user interfaces.',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://able-pro-material-next-ts-navy.vercel.app/?isp=1'
        : 'https://able-pro-material-next-ts-navy.vercel.app/'
  },
  {
    image: img4,
    title: 'CodeIgniter',
    content:
      'Able Pro CodeIgniter version is a powerful dashboard template built specifically for developers who use the CodeIgniter PHP framework.',
    link:
      ispValue !== null && parseInt(ispValue) === 1
        ? 'https://ableproadmin.com/codeigniter/default/public/?isp=1'
        : 'https://ableproadmin.com/codeigniter/default/public/'
  },
  {
    image: img8,
    title: 'Vue',
    content: "Able Pro - Boost your project's visual appeal and functionality with our Vue Dashboard template.",
    link: ispValue !== null && parseInt(ispValue) === 1 ? 'https://ableproadmin.com/vue/?isp=1' : 'https://ableproadmin.com/vue/'
  },
  {
    image: img3,
    title: 'Asp.net',
    content:
      'Able Pro .NET version is a robust dashboard template designed specifically for .NET developers. Its comes with a wide range of pre-built components.',
    link:
      ispValue !== null && parseInt(ispValue) === 1 ? 'https://able-pro.azurewebsites.net/?isp=1' : 'https://able-pro.azurewebsites.net/'
  }
]);
</script>
<template>
  <div class="spacer">
    <v-container class="maxWidth py-0">
      <v-row class="justify-center mb-0">
        <v-col md="5" cols="12">
          <div class="text-center">
            <h2 class="text-h2 mb-sm-4 mb-2">Available Technologies</h2>
            <p class="text-h6 mb-0">Explore the Demos of Able Pro in multiple technologies.</p>
          </div>
        </v-col>
        <v-col md="12" cols="12" class="pa-sm-3 pa-0"></v-col>
        <v-col md="12" cols="12" class="pb-0">
          <v-row class="colSpacing justify-center">
            <v-col v-for="tech in techonlogy" lg="4" md="6" sm="12" cols="12" :key="tech.link">
              <v-card variant="outlined" class="bg-surface">
                <v-card-item>
                  <v-badge v-if="tech.label" color="lighterror" text-color="error" :content="tech.label" offset-x="10" offset-y="5">
                    <v-img :src="tech.image" alt="technology" style="width: 70px" cover></v-img>
                  </v-badge>
                  <v-img v-else :src="tech.image" alt="technology" style="width: 70px" cover></v-img>
                  <h4 class="text-h4 mt-4 mb-4">{{ tech.title }}</h4>
                  <p class="text-h6 mb-4">{{ tech.content }}</p>
                  <v-btn color="secondary" size="large" variant="tonal" rounded="md" :href="tech.link" target="_">
                    <template v-slot:prepend>
                      <SvgSprite name="custom-link2" style="width: 20px; height: 20px" />
                    </template>
                    Reference
                  </v-btn>
                  <v-btn
                    icon
                    color="containerBg"
                    aria-label="link"
                    variant="flat"
                    class="ml-2"
                    target="_blank"
                    href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template"
                  >
                    <SvgSprite name="custom-document-2" style="width: 20px; height: 20px" />
                  </v-btn>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col lg="4" md="6" sm="12" cols="12">
              <v-card variant="outlined" class="bg-surface">
                <v-card-item>
                  <v-img :src="img5" alt="technology" style="width: 70px" cover></v-img>
                  <h4 class="text-h4 mt-4 mb-4">Figma</h4>
                  <p class="text-h6 mb-4">
                    Able Pro comes with a Figma design file that allows you to customize and fine-tune your dashboard to meet your specific
                    needs.
                  </p>
                  <v-btn
                    color="secondary"
                    size="large"
                    variant="tonal"
                    rounded="md"
                    href="https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&mode=design&t=mcsdrlnbfZ97bWFM-0"
                    target="_"
                  >
                    <template v-slot:prepend>
                      <SvgSprite name="custom-link2" style="width: 20px; height: 20px" />
                    </template>
                    Reference
                  </v-btn>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.colSpacing {
  > div {
    padding-inline: 20px;
    @media (max-width: 599px) {
      padding-inline: 10px;
    }
  }
}
</style>
