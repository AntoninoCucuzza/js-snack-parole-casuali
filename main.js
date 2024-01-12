const baseUrl = 'https://flynn.boolean.careers/exercises/api/random/word';
const maxWord = 10;
const result = document.getElementById('randomWords')
let words = [];
let loading = true

function fetchWord() {
    axios.get(baseUrl)
        .then(response => {
            /* dichiaro la singola parola */
            const word = response.data.response
            //console.log(word);

            /* la inserisco del mio array di parole casuali */
            words.push(word);

            /* se il numero di parole sono = al numero massimo dichiarato da maxWord allora stampo la frase  */
            if (words.length == maxWord) {
                //console.log(words);
                const sentence = words.join(' ')
                // console.log('sentence = ' + sentence);
                if (loading) {
                    result.innerHTML = 'Loading...';
                    loading = false;

                    /* simulo un caricamento anche se non necessario  */
                    setTimeout(() => {
                        result.innerHTML = sentence;
                    }, 1000);

                }
            }
        })
        .catch(error => {
            console.log(error);
        });
}

/* eseguo n chiamate */
for (let i = 0; i < maxWord; i++) {
    fetchWord();
}
