import { buildUrlWithParams } from "./UrlUtil";

const baseURL = 'http://licoded.site:9300';

/**
 *
 * @param {string} url
 * @param {object?} params
 * @returns {Promise}
 */
export function get(url, params) {
  const fullUrl = buildUrlWithParams(baseURL, url, params);
  const logMsg = `响应 GET ${url}\n`;

  return fetch(fullUrl, {
    method: 'GET',
  })
    .then(response => response.text().then(text => {
      try {
        return JSON.parse(text);
      } catch (e) {
        return { code: -1, message: 'Parse error', responseText: text };
      }
    }))
    .then(data => {
      if (data.code === 200) {
        console.log(logMsg, data.data || data);
        return data.data || data;
      } else {
        console.log(logMsg, data);
        return Promise.reject(data);
      }
    })
    .catch(error => {
      console.log(logMsg, error);
      return Promise.reject(error);
    });
}

/**
 *
 * @param {string} url
 * @param {object} params
 * @returns {Promise}
 */
export function post(url, params) {
  const fullUrl = buildUrlWithParams(baseURL, url, null);
  const logMsg = `响应 POST ${url}\n`;

  return fetch(fullUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then(response => response.text().then(text => {
      try {
        return JSON.parse(text);
      } catch (e) {
        return { code: -1, message: 'Parse error', responseText: text };
      }
    }))
    .then(data => {
      if (data.code === 200) {
        console.log(logMsg, data.data || data);
        return data.data || data;
      } else {
        console.log(logMsg, data);
        return Promise.reject(data);
      }
    })
    .catch(error => {
      console.log(logMsg, error);
      return Promise.reject(error);
    });
}