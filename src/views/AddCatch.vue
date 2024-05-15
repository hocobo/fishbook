<script>

import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonCheckbox,
    IonPage,
    IonList,
    IonInput,
    IonDatetime,
    IonDatetimeButton,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
  } from '@ionic/vue';
import FishCollection from '@/models/FishCollection';
import Fish from '@/models/Fish';
import {useFishCollectionStore} from '@/store/index';
import {ref} from 'vue';
import moment from 'moment';
import {fish} from 'ionicons/icons';

export default{
  name: "AddCatch",
  components: {
    IonIcon,
    IonList,
    IonItem,
    IonInput,
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonCheckbox,
    IonPage,
    IonDatetime,
    IonDatetimeButton,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol
  
  },
  setup() {
    const store = useFishCollectionStore(); // Access the Pinia store using the useStore function

    const addCatch = () => {
      if(newFish.dateTime == ''){
        newFish.dateTime = new Date();
      }
      store.addFish(new Fish(newFish.species, newFish.weight, newFish.length, newFish.baitType, newFish.location, newFish.dateTime));
      clearNewFish();
    };


    const setDateTime = (value) => {
      newFish.dateTime = value;
    };

    const currentDate = new Date().toISOString();

    const clearNewFish = () => {
      newFish.species = '',     
      newFish.weight = 0,
      newFish.length = '',
      newFish.baitType = '',
      newFish.location = '',
      newFish.dateTime = ''
    }
    const newFish = {
      species: '',
      weight: 0,
      length: '',
      baitType: '',
      location: '',
      dateTime: ''
    };
    

    const presentingElement = undefined; // You can set this up as per your requirement
    
    return { addCatch, setDateTime,  newFish, presentingElement,currentDate, fish};
  },
  methods: {
    dismiss() {
        this.$refs.modal.$el.dismiss();
    },
  }, 
  mounted() {
    this.presentingElement = this.$refs.page.$el;
  },
}
</script>
<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Catch</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add Catch</ion-title>
          <ion-icon :icon="fish" slot="end" class="custom-icon"></ion-icon>
        </ion-toolbar>
      </ion-header>

      <div class="center-container">
        <ion-button id="open-modal" expand="block">Add Catch</ion-button>
      </div>
      
      

      <ion-modal ref="modal" trigger="open-modal" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title>Add a New Catch</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list :inset="true">
              <ion-item>
                <ion-input
                v-model="newFish.species" 
                label="Species" 
                placeholder="Enter the Species"
                label-placement="fixed"
                ></ion-input>
              </ion-item>
              <ion-item>
                <ion-input 
                v-model="newFish.weight"
                label="Weight(lbs)" 
                placeholder="Enter the Weight"
                label-placement="fixed"
                ></ion-input>
              </ion-item>
              <ion-item>
                <ion-input 
                v-model="newFish.length"
                label="Length(in)" 
                placeholder="Enter the Length"
                label-placement="fixed"
                ></ion-input>
              </ion-item>
              <ion-item>
                <ion-input 
                v-model="newFish.baitType"
                label="Bait Type" 
                placeholder="Enter the Bait Type"
                label-placement="fixed"
                ></ion-input>
              </ion-item>
              <ion-item>
                <ion-input 
                v-model="newFish.location"
                label="Location" 
                placeholder="Enter the Location"
                label-placement="fixed"
                ></ion-input>
              </ion-item>
              <ion-item>
                <ion-label color="default">Date/Time</ion-label>
                <ion-datetime-button datetime="datetime"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime 
                  :max="currentDate"
                  id="datetime" 
                  :show-default-buttons="true" 
                  @ionChange="setDateTime($event.detail.value)"
                  
                  ></ion-datetime>
                </ion-modal>
              </ion-item>
              <ion-button expand="block" shape="round" @click="addCatch(); dismiss()">Add Catch!</ion-button>
          </ion-list>
          
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>
<style>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensure the container takes up the full height of the content */
}
.custom-icon {
  font-size: 45px; /* Adjust the size as needed */
  margin-right:40px; /* Add some space between the title and the icon */
}
</style>

