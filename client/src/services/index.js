// import axios from 'axios'

import axios from "axios"

export const BASE_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/items`

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}

export const postShop = async (body) => {
  const response = await axios.post(BASE_URL, { fields: body }, config)
  return response.data
}