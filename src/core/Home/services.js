import axios from 'axios';

const url = 'https://baconipsum.com/api/?type=all-meat&sentences=1';

export const phraseGenerator = () => (
    axios.get(url)
        .then(function ({ data }) {
            return data[0];
        })
        .catch(error => {
            throw error;
        })
);
