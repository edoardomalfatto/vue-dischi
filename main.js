Vue.config.devtools = true;

var root = new Vue({
    el: '#app',
    data: {
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
        addMessage: function() {},
        answerMessage: function() {}
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