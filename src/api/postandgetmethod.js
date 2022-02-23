import axios from "axios"

export const PostApiWithOutToken = async (url, data) => {
  
  var a= data.email
  var b= data.password
  
  // console.log("password==>", data.password)

  try{
    axios.post(url, { 
      'email': a, 
      'password': b  
      })
      .then((resp) => {
        return resp
        // return Promise.resolve({
        //         status: 'success',
        //         data: resp
        //       })
        console.log("PostApiWithOutToken resp==>", resp)
      })
      .catch((e) => {
        console.log("PostApiWithOutToken catch up", e.response.data)
      })
    }
    catch{
      console.log("PostApiWithOutToken error down");
    }


    

    // .then((resp)=>{
    //   console.log("PostApiWithOutToken==>",resp)
    // }).catch((e) => {
    //           console.log("PostApiWithOutToken catch",e)
    // })



  //   console.log(response,"response");

  //   if (response.success == true) {
  //     return Promise.resolve({
  //       status: 'success',
  //       data: response
  //     })
  //   } else {
  //     return Promise.reject(response.data.message)
  //   }
  // } catch (e) {
  //   console.log("error",e.response.data);
  //   return Promise.reject(Error(e.response.data.message))
  // }
}

module.export = {
  PostApiWithOutToken
}


