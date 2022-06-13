import axios from 'axios'
let TOKEN = import.meta.env.TOKEN

export function getStore() {
    var config = {
        method: 'post',
        url: 'https://content.dropboxapi.com/2/files/download',
        headers: { 
            'Authorization': 'Bearer ' + TOKEN, 
            'Dropbox-API-Arg': '{"path": "/works.json"}'
        }
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}