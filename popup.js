/*
 * @Author: your name
 * @Date: 2022-03-04 14:54:02
 * @LastEditTime: 2022-03-04 20:56:02
 * @LastEditors: Please set LastEditors
 * @Description: set diy。为什么传递参数导致设置不起作用，很尴尬，多写一遍code
 * @FilePath: /chromeplugin/popup.js
 */

let hideImg = document.getElementById('hideImg');
let darkModle = document.getElementById('darkModle');
let domBody = document.body;

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
  // let str = v === 1 ? 'none' : 'block';
  if (imgArr.length) {
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].style.display = 'block';
    }
  }
}

// 暗黑模式逻辑
function darkSet() {
  document.body.style = 'filter:invert(1)hue-rotate(180deg);transition: color 300ms, background-color 300ms';
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

domBody.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: dom
  });
});

function dom(e) {
  console.log(e.target);
}
