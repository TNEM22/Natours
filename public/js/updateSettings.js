/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    // console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} Updated!!`);
      if (type === 'data')
        window.setTimeout(() => {
          location.reload(true);
        }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
// export const updateData = async (name, email) => {
//   try {
//     const res = await axios({
//       method: 'POST',
//       url: 'http://127.0.0.1:3000/submit-user-data',
//       data: {
//         name: name,
//         email: email,
//       },
//     });

//     console.log(res);
//     if (res.data.status === 'success') {
//       showAlert('success', 'Data Updated!!');
//       window.setTimeout(() => {
//         location.reload(true);
//       }, 1000);
//     }
//   } catch (err) {
//     showAlert('error', err.response.data.message);
//   }
// };
