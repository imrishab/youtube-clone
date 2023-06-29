import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {

    params: {
        part: 'snippet',
        maxResults:'50'
    },
    headers: {
        'X-RapidAPI-Key': '4179b6cd04mshb67ecdc2e5efe9dp11a76cjsn06691874e8c3',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}