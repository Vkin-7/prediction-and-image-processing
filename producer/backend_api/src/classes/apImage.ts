import { createApi } from 'unsplash-js';
const nodeFetch= require('node-fetch') 

class ApiImagem {

    connection() {
        
        const unsplash = createApi({
            accessKey: process.env.ACCESS_KEY_UNSPLASH,
            fetch: nodeFetch.default as unknown as typeof fetch,
        });
        unsplash.photos.get({ photoId: 'foo' }).then(result => {
            if (result.errors) {
              // handle error here
              console.log('error occurred: ', result.errors[0]);
            } else {
              // handle success here
              const photo = result.response;
              console.log(photo);
            }
          });
    }
    
      
}
export default ApiImagem