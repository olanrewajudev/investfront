

import Cookies from "js-cookie"

export let BaseURL: string;
BaseURL = `http://localhost:3100/api`

export const CookieName: string = 'userToken';

const user_urls = {
  signup: `user/signup`,
  login: `user/login`,
  acceptotp: `user/accept-otp`,
  resendotp: `user/resend-otp`,
  profile: `user/profile`,
  updatepassword: `user/update-password`,
  logout: `user/logout`,
};
const admin_urls = {


};

export const Apis = {
  users: user_urls,
  admins: admin_urls,
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
