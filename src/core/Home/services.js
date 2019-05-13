import axios from 'axios';

export const insultGenerator = () => (
    axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then(function ({ data }) {
            return data;
        })
        .catch(error => { throw error; })
);
