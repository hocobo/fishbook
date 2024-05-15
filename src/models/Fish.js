function Fish(species, weight, length, baitType, location, dateTime) {
    this.species = species ?? '';
    this.weight = weight ?? 0;
    this.length = length ?? '';
    this.baitType = baitType ?? '';
    this.location = location ?? '';
    this.dateTime = dateTime ?? '';
}

export default Fish;