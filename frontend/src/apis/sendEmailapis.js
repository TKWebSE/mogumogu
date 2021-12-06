import axios from "axios";
import {
  foodIndexFrontendURL,
  sendEmailToChangeEmailAddressBackendURL,
  updateEmailBackendURL,
  sendEmailToChangePasswordBackendURL,
  updatePasswordBackendURL,
} from "../urls/index";

//email変更時の認証コードを送る
export const sendEmailToChangeEmailAddressApi = (userId, newEmail) => {
  return axios.get(sendEmailToChangeEmailAddressBackendURL(userId), {
    params: {
      user_id: userId,
      url: foodIndexFrontendURL,
      new_email: newEmail,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch(e => console.log(e))
}

//emailを更新する
export const updateEmailApi = (userId, newEmail) => {
  return axios.get(updateEmailBackendURL(userId), {
    params: {
      user_id: userId,
      url: foodIndexFrontendURL,
      new_email: newEmail,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch(e => console.log(e))
}

//パスワード変更時の認証コードを送る
export const sendEmailToChangePasswordApi = (userId, newEmail) => {
  return axios.get(sendEmailToChangePasswordBackendURL(userId), {
    params: {
      userId: userId,
      newEmail: newEmail,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch(e => console.log(e))
}

//passwordを更新する
export const updatePasswordApi = (userId, newEmail) => {
  return axios.get(updatePasswordBackendURL(userId), {
    params: {
      user_id: userId,
      url: foodIndexFrontendURL,
      new_email: newEmail,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch(e => console.log(e))
}
