const baseUrl = 'https://flynn.boolean.careers/exercises/api/random/word';
const maxWord = 10;
const result = document.getElementById('randomWords')
let words = [];

function fetchWord() {
    axios.get(baseUrl)
        .then(response => {
            let word = response.data.response
            //console.log(word);
            words.push(word);

            if (words.length == maxWord) {
                //console.log(words);
                const sentence = words.join(' ')
                console.log('sentence = ' + sentence);
            }
        })
        .catch(error => {
            console.log(error);
        });
}

for (let i = 0; i < maxWord; i++) {
    fetchWord();
}
