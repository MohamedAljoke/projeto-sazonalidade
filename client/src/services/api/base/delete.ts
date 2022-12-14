/* eslint-disable */
import axios, { defaultParams } from './axios';

export default async (url:string) => {
  try {
    return await axios.delete(url, { ...defaultParams()});
  } catch (e:any) {
    if (!e || !e.response || e.response.status !== 401) throw e;
    localStorage.setItem(
      'url',
      `${window.location.pathname}${window.location.search}`
    );
    try {
      return axios.delete(url, { ...defaultParams() });
    } catch (err) {
      return null;
    }
  }
};
