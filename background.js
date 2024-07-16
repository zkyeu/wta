/*
 * @Author: your name
 * @Date: 2022-03-04 14:03:28
 * @LastEditTime: 2022-03-07 16:20:03
 * @LastEditors: Please set LastEditors
 * @Description: wta background.js logic
 * @FilePath: /chromeplugin/background.js
 */

let color = '#c00';
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  console.log(chrome.storage);
});

chrome.documentScan.scan(mimeTypes, (e) => {
  console.log(e);
});
