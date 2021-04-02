Vue.config.devtools = true;

var root = new Vue({
    el: '#app',
    data: {
        sorted: false,
        All: "All",
        Rock: "Rock",
        Jazz: "Jazz",
        Pop: "Pop",
        Metal: "Metal",
        diskBoxes: undefined,
        rockDiskBoxes: [],
        jazzDiskBoxes: [],
        metalDiskBoxes: [],
        popDiskBoxes: [],
        selectedGenere: "All",
        aviableGeneres: []
    },
    methods: {
        sortDiskBoxes: function() {
            const correctThis = this;
            switch (this.selectedGenere) {
                case "All":
                    if (this.sorted == false) {
                        this.diskBoxes.sort(function(a, b) {
                            correctThis.sorted = true;
                            return a.year - b.year;
                        });
                    } else {
                        console.log(this.diskBoxes);
                        this.diskBoxes.sort(function(a, b) {
                            correctThis.sorted = false;
                            return b.year - a.year;
                        });
                    }
                    break;
                case "Rock":
                    if (this.sorted == false) {
                        this.rockDiskBoxes.sort(function(a, b) {
                            correctThis.sorted = true;
                            return a.year - b.year;
                        });
                    } else {
                        console.log(this.diskBoxes);
                        this.rockDiskBoxes.sort(function(a, b) {
                            correctThis.sorted = false;
                            return b.year - a.year;
                        });
                    }
                    break;
                case "Jazz":
                    if (this.sorted == false) {
                        this.jazzDiskBoxes.sort(function(a, b) {
                            correctThis.sorted = true;
                            return a.year - b.year;
                        });
                    } else {
                        console.log(this.diskBoxes);
                        this.jazzDiskBoxes.sort(function(a, b) {
                            correctThis.sorted = false;
                            return b.year - a.year;
                        });
                    }
                    break;
                case "Metal":
                    if (this.sorted == false) {
                        this.metalDiskBoxes.sort(function(a, b) {
                            correctThis.sorted = true;
                            return a.year - b.year;
                        });
                    } else {
                        console.log(this.diskBoxes);
                        this.metalDiskBoxes.sort(function(a, b) {
                            correctThis.sorted = false;
                            return b.year - a.year;
                        });
                    }
                    break;
                case "Pop":
                    if (this.sorted == false) {
                        this.popDiskBoxes.sort(function(a, b) {
                            correctThis.sorted = true;
                            return a.year - b.year;
                        });
                    } else {
                        console.log(this.diskBoxes);
                        this.popDiskBoxes.sort(function(a, b) {
                            correctThis.sorted = false;
                            return b.year - a.year;
                        });
                    }
                    break;
            }
        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                this.diskBoxes = response.data.response;
                this.diskBoxes.forEach(element => {
                    if (!this.aviableGeneres.includes(element.genre)) {
                        this.aviableGeneres.push(element.genre);
                        console.log(this.aviableGeneres);
                    }
                    switch (element.genre) {
                        case "Rock":
                            this.rockDiskBoxes.push(element);
                            break;
                        case "Jazz":
                            this.jazzDiskBoxes.push(element);
                            console.log(this.jazzDiskBoxes);
                            break;
                        case "Pop":
                            this.popDiskBoxes.push(element);
                            break;
                        case "Metal":
                            this.metalDiskBoxes.push(element);
                            break;
                    }
                });
            })
    }
});