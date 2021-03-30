Vue.config.devtools = true;

var root = new Vue({
    el: '#app',
    data: {
        diskBoxes: undefined
    },
    methods: {
        addMessage: function() {},
        answerMessage: function() {}
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                console.log(1, this.diskBoxes)
                this.diskBoxes = response.data.response;
                console.log(2, this.diskBoxes)
            });
    }

});