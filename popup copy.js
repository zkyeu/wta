/*
 * @Author: your name
 * @Date: 2022-03-04 14:54:02
 * @LastEditTime: 2022-03-04 18:06:17
 * @LastEditors: Please set LastEditors
 * @Description: set diy
 * @FilePath: /chromeplugin/popup.js
 */
// Initialize button with user's preferred color
// let changeColor = document.getElementById('changeColor');
let getimg = document.getElementById('getimg');

// chrome.storage.sync.get('color', ({ color }) => {
//   changeColor.style.backgroundColor = color;
//   console.log('123123123');
// });

// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener('click', async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor
//   });
// });

getimg.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getImg
  });
});

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get('color', ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

// 检测页面中夹在的img标签的图片
function getImg() {
  let imgArr = document.getElementsByTagName('img');
  if (imgArr.length) {
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].style.display = 'none';
    }
  }
}
