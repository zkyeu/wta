/*
 * @Author: your name
 * @Date: 2022-03-04 14:54:02
 * @LastEditTime: 2022-04-02 10:22:56
 * @LastEditors: liliang
 * @Description: set diy。为什么传递参数导致设置不起作用，很尴尬，多写一遍code
 * @FilePath: /wta/popup.js
 */

let hideImg = document.getElementById('hideImg');
let darkModle = document.getElementById('darkModle');
let fontHide = document.getElementById('fontHide');

// 图片隐藏
hideImg.addEventListener('click', async () => {
  let CL = hideImg.classList.length;
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // 判断是否有class ‘on’
  hideImg.classList[CL === 1 ? 'add' : 'remove']('on');
  if (CL === 1) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: imgHide
    });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: showHide
    });
  }
});

//  暗黑模式
darkModle.addEventListener('click', async () => {
  let CL = darkModle.classList.length;
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // 判断是否有class ‘on’
  darkModle.classList[CL === 1 ? 'add' : 'remove']('on');

  if (CL === 1) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: darkSet
    });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: darkBack
    });
  }
});

// 检测页面中夹在的img标签的图片
function imgHide() {
  let imgArr = document.getElementsByTagName('img');
  // let str = v === 1 ? 'none' : 'block';
  if (imgArr.length) {
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].style.display = 'none';
    }
  }
}

function showHide() {
  let imgArr = document.getElementsByTagName('img');
  if (imgArr.length) {
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].style.display = 'block';
    }
  }
}
// 颜色转换
// function rgbToHex(r, g, b) {
//   return ((r << 16) | (g << 8) | b).toString(16);
// }

// 暗黑模式逻辑
function darkSet() {
  // let bodyDom = document.body;
  // let domIntiBg = window.getComputedStyle(bodyDom).getPropertyValue('background-color');

  document.body.style =
    'background-color:#0F0F0F;filter:invert(1)hue-rotate(180deg);transition: color 300ms, background-color 300ms';
  let imgArr = document.getElementsByTagName('img');
  if (imgArr.length) {
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].style.filter = 'invert(1)hue-rotate(180deg)';
    }
  }
}

function darkBack() {
  document.body.style = 'filter:;';
  let imgArr = document.getElementsByTagName('img');
  if (imgArr.length) {
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].style.filter = '';
    }
  }
}

fontHide.addEventListener(
  'click',
  async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: getFontDom
    });
  },
  false
);

// function getFontDom() {
//   const domList = document.body.getElementsByTagName('*');
//   let tagArr = ['script', 'img', 'style', 'link']; // 排除设置样式的标签
//   for (let i = 0; i < domList.length; i++) {
//     if (tagArr.indexOf(domList[i].tagName.toLowerCase()) < 0) {
//       let prop = window.getComputedStyle(domList[i], null).getPropertyValue('font-size');
//       // TODO 怎么搞成活的字号
//       if (prop && parseInt(prop) > 16) {
//         domList[i].style.visibility = 'hidden';
//       } else {
//         domList[i].style.visibility = 'initial';
//       }
//     }
//   }
// }
