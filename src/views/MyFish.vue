<script>

import FishList from '@/components/FishList.vue'; 
import FishCollection from '@/models/FishCollection';
import Fish from '@/models/Fish';
import useFishCollectionStore from '@/store/index';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/vue';
import {ref} from 'vue';
import {fish} from 'ionicons/icons';

export default {
  name:"MyFish",
  components: {FishList, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon},

  setup(){
    return {fish};
  },

  data() {
    return{
      fishCollection: useFishCollectionStore().fishCollection,
    }
  }


}
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My Fish</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My Fish</ion-title>
          <ion-icon :icon="fish" slot="end" class="custom-icon"></ion-icon>
        </ion-toolbar>
      </ion-header>

      <fish-list
      v-bind:fishCollection="fishCollection"
      
      
      ></fish-list>
    </ion-content>
  </ion-page>
</template>
<script setup>



</script>
<style>

.custom-icon {
  font-size: 45px; /* Adjust the size as needed */
  margin-right:40px; /* Add some space between the title and the icon */
}
</style>


