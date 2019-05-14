import axios from 'axios';

// Const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
const url = 'https://baconipsum.com/api/?type=all-meat&sentences=1';

export const phraseGenerator = () => (
    axios.get(url)
        .then(function ({ data }) {
            return data;
        })
        .catch(error => { throw error; })
);
