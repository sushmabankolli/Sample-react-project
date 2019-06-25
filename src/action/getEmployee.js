import axios from 'axios';

export default (form,callback) => {
        return dispatch => {
            axios({
              method: 'get',
              url: "http://localhost:3000/api/user/login",
              headers: {
                'Content-Type': "application/json",
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "GET_COUNTRY_SUCCESS",
                  register: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", JSON.stringify(error.response.data));
                dispatch({ type: "GET_COUNTRY_REJECTED" , register: error.response.data });
              });
          }

        
}


