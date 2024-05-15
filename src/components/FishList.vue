<script >
import { IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
import FishCollection from '@/models/FishCollection';
import FishItem from '@/components/FishItem.vue';

export default {
  name:"FishList",
  components: { IonList, FishItem },
  props: {
    fishCollection: {
      type: Array,
      required: true,
    }
  }
};
</script>

<template>
    <ion-list :inset="true">
        <fish-item v-for="(fish, f) in fishCollection"
                    :fish = "fish"
                    :fishCollection="fishCollection"
                    :key=fishCollection.indexOf(fish)
        ></fish-item>
    </ion-list>  
  </template>
  
 