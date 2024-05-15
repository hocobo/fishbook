<script >
//AIzaSyDvwJz6Rrrcvq8BcatC2AlQIB-lqQ4Y7Co
import { IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import {GoogleMap, Marker} from 'vue3-google-map';
import {fish} from 'ionicons/icons';

export default {
  name: "MapView",
  components:{
    IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, GoogleMap, Marker
  },
  setup(){
    const center = { lat: 43.217830, lng: -88.311999 };
    return {center, fish};
  }
}

</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Map</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Map</ion-title>
          <ion-icon :icon="fish" slot="end" class="custom-icon"></ion-icon>
        </ion-toolbar>
      </ion-header>
      <GoogleMap
        api-key="AIzaSyDvwJz6Rrrcvq8BcatC2AlQIB-lqQ4Y7Co"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
        >
    
  </GoogleMap>
      
    </ion-content>
  </ion-page>
</template>

<style>
.custom-icon {
  font-size: 45px; /* Adjust the size as needed */
  margin-right:40px; /* Add some space between the title and the icon */
}
</style>
