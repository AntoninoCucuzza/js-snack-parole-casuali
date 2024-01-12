console.log('hello world!');
const base_url = 'https://flynn.boolean.careers/exercises/api/random/word'


axios.get(base_url)
    .then(response => {
        console.log(response.data.response);

    })
    .catch(error => {
        console.log(error);
    });
