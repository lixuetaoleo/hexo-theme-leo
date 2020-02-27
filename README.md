# hexo-theme-leo
[中文简介](#Hexo主题-leo)

A simple, elegant, clear and responsive HEXO theme

Only about page and archive page are kept, without any complicated details

## Screenshots
[View Live theme](https://lixuetaoleo.github.io)

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


## Hexo主题-leo
[English Version](#hexo-theme-leo)

一套简约、优雅、清晰的响应式主题

只保留了about和archive页面，并且没有其余复杂的细节，献给钟爱简约风的你


## 截图
[查看实际效果](https://lixuetaoleo.github.io)

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