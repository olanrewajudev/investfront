

import Cookies from "js-cookie"

export let BaseURL: string;
BaseURL = `http://localhost:3100/api`

export const CookieName: string = 'investToken';
export const offlineServer = 'http://localhost:3100';

const user_urls = {
  signup: `user/signup`,
  login: `user/login`,
  acceptotp: `user/accept-otp`,
  resendotp: `user/resend-otp`,
  profile: `user/profile`,
  updatepassword: `user/update-password`,
  logout: `user/logout`,
  uploadkyc: `user/upload-kyc`,

};
const plans_urls = {
  getallplans: `plan/all-plans`,
  getsingleplans: `plan/plan`,
  investplan: `plan/invest`,
  getallinvestment: `plan/invest/all`,
  addplans: `plan/create-plan`,
  updateplans: `plan/update-plan`,
  deleteplans: `plan/delete-plan`,
};
const wallet_urls = {
  createwallet: `wallet/create-admin-wallet`,
  updatewallet: `wallet/update-admin-wallet`,
  getallwallets: `wallet/all-admin-wallets`,
  getsinglewallet: `wallet/admin-wallet/:walletid`,
  deletewallet: `wallet/admin-wallet`,
  newuserbalance: `wallet/new-user-wallet`,
};
const transaction_urls = {
  deposit: `transaction/save-deposit`,
  singledeposit: `transaction/deposit`,
  alldeposit: `transaction/all-deposits`,
  verifydeposit: `transaction/verify-deposit`,
  declinedeposit: `transaction/decline-deposit`,
  alltransactions: `transaction/all-transactions`,
  bankwithdrawal: `transaction/bank-withdrawal`,
  cryptowithdrawal: `transaction/crypto-withdrawal`,
};
const admin_urls = {
  admingetalluser: `user/all`,
  admingetsingleuser: `user/single`,
  adminupdatekycstatus: `user/update-kyc`,
  admindeletekyc: `user/delete-kyc`,
  adminsignup: `user/create`,
  adminlogin: `user/login-admin`,


};

export const Apis = {
  users: user_urls,
  admins: admin_urls,
  plans: plans_urls,
  transaction: transaction_urls,
  wallet: wallet_urls,
};

export const generateIdempotencyKey = () => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 10)}`
}

export const Posturl = async (endpoint: string, data: any, type: 'FILE' | 'JSON' = "JSON",) => {
  const isFormData = type === "FILE"

  const response = await fetch(`${BaseURL}/${endpoint}`, {
    method: "POST",
    body: isFormData ? data : JSON.stringify(data),
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      'Authorization': `Bearer ${Cookies.get(CookieName)}`,
    }
  })

  const result = await response.json()
  if (!response.ok) {
    throw new Error(`${result.message || "An error occurred"}`)
  }
  return {
    data: result,
    status: response.status,
  }
}
export const AuthPosturl = async (
  endpoint: string,
  data: any,
  type: 'FILE' | 'JSON' = "JSON",
  idpKey?: string
) => {
  const isFormData = type === "FILE"

  const response = await fetch(`${BaseURL}/${endpoint}`, {
    method: "POST",
    body: isFormData ? data : JSON.stringify(data),
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      'Authorization': `Bearer ${Cookies.get(CookieName)}`,
      'idp-key': idpKey || generateIdempotencyKey()
    }
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(`${result.message || "An error occurred"}`)
  }

  return {
    data: result,
    status: response.status
  }
}

export const Geturl = async (endpoint: string) => {
  const response = await fetch(`${BaseURL}/${endpoint}`, { method: "GET", headers: { 'Content-Type': 'application/json', } })
  const result = await response.json()
  if (!response.ok) {
    throw new Error(`${result.message || "An error occurred"}`);
  }
  return result
}

export const AuthGeturl = async (endpoint: string, idpKey?: string) => {
  const response = await fetch(`${BaseURL}/${endpoint}`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${Cookies.get(CookieName)}`,
      'Content-Type': 'application/json',
      'idp-key': idpKey || generateIdempotencyKey()
    }
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(`${result.message || "An error occurred"}`)
  }

  return result
}




export const Put = async (endpoint: string, data: any, type: 'FILE' | 'JSON' = "JSON") => {
  const isFormData = type === "FILE"

  const response = await fetch(`${BaseURL}/${endpoint}`, {
    method: "PUT",
    body: isFormData ? data : JSON.stringify(data),
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      'Authorization': `Bearer ${Cookies.get(CookieName)}`,
      'idp-key': generateIdempotencyKey() // ✅ ADD THIS
    }
  })

  const result = await response.json()
  if (!response.ok) {
    throw new Error(`${result.message || "An error occurred"}`)
  }
  return result
}
export const Patch = async (endpoint: string, data: any, type: 'FILE' | 'JSON' = "JSON") => {
  const isFormData = type === "FILE"

  const response = await fetch(`${BaseURL}/${endpoint}`, {
    method: "PATCH",
    body: isFormData ? data : JSON.stringify(data),
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      'Authorization': `Bearer ${Cookies.get(CookieName)}`
    }
  })
  const result = await response.json()
  if (!response.ok) {
    throw new Error(`${result.message || "An error occurred"}`);
  }
  return result
}


export const Delete = async (endpoint: string, data: any, type: 'FILE' | 'JSON' = "JSON") => {
  const isFormData = type === "FILE"

  const response = await fetch(`${BaseURL}/${endpoint}`, {
    method: "DELETE",
    body: isFormData ? data : JSON.stringify(data),
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      'Authorization': `Bearer ${Cookies.get(CookieName)}`
    }
  })

  const result = await response.json()
  if (!response.ok) {
    throw new Error(`${result.message || "An error occurred"}`);
  }
  return result
}
