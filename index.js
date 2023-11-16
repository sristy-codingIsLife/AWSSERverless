// const http = require('https')

// async function getCountryName(code) {
//       http.get('https://jsonmock.hackerrank.com/api/countries?page=1', function(response) {
//         console.log(response)
//       });
// }

// getCountryName('AF')

const https = require('https'); 
  
// Sample URL 
const url = 'https://jsonmock.hackerrank.com/api/countries?page=1'; 
  
const request = https.request(url, (response) => { 
    let data = ''; 
    response.on('data', (chunk) => { 
        data = data + chunk.toString(); 
    }); 
  
    response.on('end', () => { 
        const body = JSON.parse(data); 
        console.log(body); 
    }); 
}) 
  
request.on('error', (error) => { 
    console.log('An error', error); 
}); 
  
request.end() 



 