import { nginxTestPath} from '@Config';

export const testNginxServerExist = (successCallback,errorCallback) =>{
    fetch(nginxTestPath, {
      method: 'get',
    }).then(function(response) {
      if (response.status >= 200 && response.status < 300) {
          return response.text()
      }
      throw new Error(response.statusText)
    })
    .then(function(response) {
        console.log('success')
        console.log(response);
        if(response === 'local_server'){
          successCallback()
        }
    })
    .catch((error) => {
      console.log('failed')
      console.log(error)
      errorCallback()
    });
}