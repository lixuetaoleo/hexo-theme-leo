# hexo-theme-leo
[中文简介](#Hexo主题-leo)

A simple, elegant, clear and responsive HEXO theme

Only about page and archive page are kept, without any complicated details

## Screenshots
[View Live theme](https://lixuetaoleo.github.io)
![首页.png](https://i.loli.net/2020/02/29/t7W91MeD8FnABqZ.png)
![archive.png](https://i.loli.net/2020/02/29/PxdCr3M7mcADJul.png)
![post.png](https://i.loli.net/2020/02/29/wjRcs2PESIMFANH.png)

![首页-iPhone11.JPG](https://i.loli.net/2020/02/29/1Q3C2bBmtiYdVey.jpg)
![archive-iPhone.JPG](https://i.loli.net/2020/02/29/zBbyeGxPd3EShUX.jpg)
![archive2-iPhone.JPG](https://i.loli.net/2020/02/29/hn3yPWGJdfOEkrR.jpg)
![post-iPhone.JPG](https://i.loli.net/2020/02/29/zE1Vyr926fpY4gJ.jpg)

## Install
* enter your HEXO work folder:

```bash
git clone -b master https://github.com/lixuetaoleo/hexo-theme-leo themes/leo
```

* install pug(jade) & stylus renderer:

```bash
npm install hexo-renderer-jade hexo-renderer-stylus
```

* replace the `_config.yml` **in the HEXO root folder** with `_config-main.yml`
then rename it to `_config.yml`


* generate `about` page

1. enter to your hexo blog root folder.
2. type `hexo new page about`
3. you will find source/about/index.md
4. modify the index.md
```bash
title: About Me //Can be customized
layout: page
```

## Config
Configurable items are shown below:
* The Background Image at the home page

Create `bgi.jpg` (it means BackGroundImage) in `themes/leo/source/image`

* Title

Find the `title` field in the `hexo_root_folder/_config.yml` for modification
* Author name

Find the `author` field in the `hexo_root_folder/_config.yml` for modification
* The quote at the home page

Find the `description` field in the `themes/leo/_config.yml` for modification
* Socialmedia icon(s)

Find the `socialmedia` field in the `hexo_root_folder/_config.yml`, then uncomment the tag & add url to show your socialmedia link

* NOTICE:For better formatting, don't use h1 tags(`aka # in md`) when writing articles.

## Update
`git pull`

## Last
If you have any questions about this theme, please [contact me](lixuetaoleo@163.com).

It would be better to star this repository if you like it ^_^


## License
[MIT](http://opensource.org/licenses/MIT)

---
---

## Hexo主题-leo
[English Version](#hexo-theme-leo)

一套简约、优雅、清晰的响应式主题

只保留了about和archive页面，并且没有其余复杂的细节，献给钟爱简约风的你


## 截图
[查看实际效果](https://lixuetaoleo.github.io)

[前往英文介绍](#Screenshots)查看截图

## 安装
* 进入HEXO的根目录文件夹:

```bash
git clone -b master https://github.com/lixuetaoleo/hexo-theme-leo themes/leo
```

* 安装 pug(jade) & stylus:

```bash
npm install hexo-renderer-jade hexo-renderer-stylus
```

* 将**hexo根目录文件夹下的**`_config.yml` 用`_config-main.yml`替代，然后再将该文件重命名为`_config.yml`


* 生成 `about` 页面

1. 进入hexo根目录.
2. 输入 `hexo new page about`
3. 你将看到source/about/index.md生成
4. 修改 index.md
```bash
title: About Me //Can be customized
layout: page
```

## 配置
该主题的可配置项如下所示:
* 首页的背景图

在`themes/leo/source/image` 路径创建`bgi.jpg`文件 (文件名代表BackGround Image) 

* 出现在首页的以及各页面顶部的标题。

在`hexo_root_folder/_config.yml` 找到`title` 字段，然后进行修改
* 作者名,出现在所有页面底部©符号后面

在`hexo_root_folder/_config.yml`找到`author` 字段，然后进行修改
* 首页title下的一段话

在`themes/leo/_config.yml`找到`description`字段，然后进行修改
* 社交媒体图标

在`hexo_root_folder/_config.yml`找到`socialmedia`字段, 然后取消你想展示的社交媒体相应的注释，并在冒号后面添加链接

* 注意:为了更好的格式排版, 最好在文章中不使用h1标签(`md文件里的#`)。

## 升级
`git pull`

## 写在最后
对于本主题，如果你有任何疑问，请[联系我](lixuetaoleo@163.com).

如果你喜欢本主题，欢迎star^_^


## 开源许可证
[MIT](http://opensource.org/licenses/MIT)