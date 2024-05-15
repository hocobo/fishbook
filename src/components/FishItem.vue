<script>
import Fish from '@/models/Fish';
import FishCollection from '@/models/FishCollection';
import {  
    IonDatetime,
    IonDatetimeButton,
    IonInput, 
    IonContent, 
    IonTitle, 
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonModal, 
    IonItem, 
    IonItemOption, 
    IonItemOptions, 
    IonItemSliding, 
    IonLabel, 
    IonList, 
    IonIcon  
} from '@ionic/vue';
import {trash, create} from 'ionicons/icons';
import {ref} from 'vue';
import moment  from 'moment';

export default {
    name:"FishItem",
    components:{
        IonDatetime,
        IonDatetimeButton,
        IonInput,
        IonContent,
        IonTitle,
        IonHeader, 
        IonToolbar, 
        IonButtons,
        IonButton, 
        IonModal, 
        IonItem, 
        IonItemOption, 
        IonItemOptions, 
        IonItemSliding, 
        IonLabel, 
        IonList, 
        IonIcon 
    },
    setup(){
        
    const isOpen = ref(false);

    const setOpen = (open) => (isOpen.value = open);

    const slidingItem = ref(null);

    const formattedDateTime = (dateTime) => {
            const dateFormat = moment(dateTime).format('MMMM Do YYYY, h:mm a')
            return dateFormat;
    };
    
    const currentDate = new Date().toISOString();

    return {trash, create, setOpen, isOpen, formattedDateTime, currentDate, slidingItem};

    },

    props: {
        fish: {
            type: Object,
            required: true,
        },
        fishCollection: {
            type: Array,
            required: true,
        }
    },
    data() {
        return{
            editFishBool:true,
            editedFish:{
                species: this.fish.species,
                weight: this.fish.weight,
                length: this.fish.length,
                baitType: this.fish.baitType,
                location: this.fish.location,
                dateTime: this.fish.dateTime
            }
            
        }
    },
    methods: {
        openDetailsModal(){
            this.setOpen(true);
            this.closeSlidingItem();
        },
        deleteThisFish(fish){
            this.fishCollection.deleteFish(fish);
            this.closeSlidingItem();
        },
        editThisFish(fish){
            this.fishCollection.editFish(fish, new Fish(this.editedFish.species, this.editedFish.weight, this.editedFish.length, this.editedFish.baitType, this.editedFish.location,this.editedFish.dateTime));
            this.editFishBool = !this.editFishBool;
            this.closeSlidingItem();
            // console.log(this.formattedDateTime(this.editedFish.dateTime));
        },
        handleSwipe(event, fish) {
            if (event.detail.side === 'end') {
                this.deleteThisFish(fish);
            } else if (event.detail.side ==='start'){
                this.openDetailsModal();
            }
        },
        setDateTime (value) {
            this.editedFish.dateTime = value;
            // console.log(value);
        },
        closeSlidingItem() {
            if (this.slidingItem.value) {
                this.slidingItem.value.close();
            }
        }

    },
}
</script>

<template>
    <ion-item-sliding ref="slidingItem" @ionSwipe="handleSwipe($event, fish)">

        <ion-item-options side="start">
            <ion-item-option color="success" expandable>
                <ion-icon slot="icon-only" :icon="create"></ion-icon>
            </ion-item-option>
        </ion-item-options>
    
        <ion-item>
            <ion-label>
                <h3>{{fish.species}}</h3>
                <p>{{fish.location}}</p>
                <p>{{formattedDateTime(fish.dateTime)}}</p>
            </ion-label>
        </ion-item>

        <ion-item-options side="end">
            <ion-item-option color="danger" expandable >
                <ion-icon slot="icon-only" :icon="trash"></ion-icon>
            </ion-item-option>
        </ion-item-options>

    </ion-item-sliding>
    
    <ion-content >
        <ion-modal :is-open="isOpen">
            <ion-header>
                <ion-toolbar>
                    <ion-title>{{fish.species}}</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="setOpen(false)">Close</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-list>
                    <ion-item >
                        <ion-input label-placement="fixed" label="Species: " :placeholder="fish.species" :readonly="editFishBool" v-model="editedFish.species"></ion-input>
                    </ion-item>
                    <ion-item >
                        <ion-input label-placement="fixed" label="Weight(lbs): " :placeholder="`${fish.weight} lb`" :readonly="editFishBool" v-model="editedFish.weight"></ion-input>
                    </ion-item>
                    <ion-item >
                        <ion-input label-placement="fixed" label="Length(in): " :placeholder="`${fish.length} inches`" :readonly="editFishBool" v-model="editedFish.length"></ion-input>
                    </ion-item>
                    <ion-item >
                        <ion-input label-placement="fixed" label="Bait Type: " :placeholder="fish.baitType" :readonly="editFishBool" v-model="editedFish.baitType"></ion-input>
                    </ion-item>
                    <ion-item >
                        <ion-input label-placement="fixed" label="Location: " :placeholder="fish.location" :readonly="editFishBool" v-model="editedFish.location"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label color="default">Date/Time</ion-label>
                        <ion-datetime-button datetime="datetime"></ion-datetime-button>
                        <ion-modal :keep-contents-mounted="true">
                            <ion-datetime 
                            id="datetime" 
                            :max="currentDate"
                            :value="editedFish.dateTime"
                            :show-default-buttons="true"                             
                            @ionChange="setDateTime($event.detail.value)"
                            :disabled="editFishBool"
                            
                            ></ion-datetime>
                        </ion-modal>
                    </ion-item>
                </ion-list>
                    <ion-button v-if="!editFishBool" @click="editFishBool = !editFishBool">Cancel</ion-button>
                
                    <ion-button v-if="editFishBool" @click="editFishBool = !editFishBool">Edit</ion-button>
                    <ion-button v-else @click="editThisFish(fish)">Submit Changes</ion-button>
                
                
            </ion-content>
        </ion-modal>
    </ion-content>
    
    
</template>
