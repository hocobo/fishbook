import { defineStore } from 'pinia';
import FishCollection from '@/models/FishCollection';

export const useFishCollectionStore = defineStore('fishCollectionStore', {
  state: () => ({
    fishCollection: new FishCollection(),
    
  }),
  actions: {
    addFish(fish) {
      this.fishCollection.addFish(fish);
      console.log(this.fishCollection);
    },
    deleteFish(fish){
      this.fishCollection.deleteFish(fish);
    },
    editFish(fish, editedFish){
      this.fishCollection.editFish(fish, editedFish);
    }
    // Add other actions as needed
  }
});
export default useFishCollectionStore;