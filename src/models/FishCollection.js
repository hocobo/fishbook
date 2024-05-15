import Fish from '@/models/Fish';

function FishCollection() {
    let arr = [];

    if (localStorage.getItem('fishCollection')) {
        arr = JSON.parse(localStorage.getItem('fishCollection'));
    }
    
    arr.addFish = function(fish) {
        this.push(fish); 
        localStorage.setItem('fishCollection', JSON.stringify(this));

        return this;
    }

    arr.deleteFish = function(fish) {
        const index = this.indexOf(fish);

        if (index !== -1) {
            this.splice(index, 1); 
            localStorage.setItem('fishCollection', JSON.stringify(this));
        }
        return this;
    };
    arr.editFish = function(fish, editedFish){
        const index= this.indexOf(fish);
        console.log(index, editedFish, fish);
        this[index] = editedFish;
        localStorage.setItem('fishCollection', JSON.stringify(this));
        return this;
    }

    return arr; 
}

export default FishCollection;