<!--
 * @Author: zkyeu
 * @Date: 2022-03-04 10:20:58
 * @LastEditTime: 2022-03-04 10:57:30
 * @LastEditors: Please set LastEditors
 * @Description: 浏览器扩展
 * @FilePath: /chromeplugin/README.MD
-->
# WTA(Web tool assistant) 
> 做这个插件的初衷是，访问网站，总是被一些图片给吸引视觉，让我不能更加专注于文字，所以就想着怎么来屏蔽访问的网页中的图片，于是就开始了这个插件的旅程。

## 1. 图片消失
一般都是使用图片隐藏来处理。设置img的css属性`display:none`即可.

## 2. 文字消失
有时候标题，广告等文字字号跟主要内容字体的字号有所差距，毕竟我只要内容文字，可以点击选择要消失的文字，这类字号就game over了。 当然也可以自定义消失的字体字号。

## 3. 暗黑模式
主要采用了浏览器css的处理，部分图片什么的得用js来处理。

## 4. 特定网站记录
可以将访问的网址记录下来，下载再访问，就能执行你设置的效果