const API_ID = 7645764 // код свой;

export function injectVKOpenApi() {
  return new Promise((resolve, reject) => {
    try {
      const fjs = document.getElementsByTagName("script")[0];
      if (document.getElementById("vk_openapi_js")) {
        resolve();
        return;
      }
      const js = document.createElement("script");
      js.id = "vk_openapi_js";
      js.src = "//vk.com/js/api/openapi.js?169";
      js.onload = resolve;
      js.onerror = reject;

      fjs.parentNode.insertBefore(js, fjs);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * This initializes the VK api
 * @param {boolean} onlyWidgets
 */

export const initVK = (onlyWidgets = false) => () =>
// eslint-disable-next-line
  VK.init({ apiId: API_ID, onlyWidgets });

export const initCallVK = () =>
  new Promise((resolve, reject) => {
    try {
      window.name = "fXD";
      // eslint-disable-next-line
      VK.init(resolve);
    } catch (err) {
      reject(err);
    }
  });