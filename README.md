# 上海大学开源社区镜像站

> mirrors.shuosc.org

- v1版截图
![v1 screenshot](https://ws2.sinaimg.cn/large/006tKfTcly1fiop8muo0vj30dd0k4dgm.jpg)

- v2版截图
![v2 screenshot1](https://vgy.me/4dH4WL.png)
![v2 screenshot2](https://vgy.me/IxmzHH.png)


# 使用指南

## 文件列表

- `/data/mirrors.json`：维护主页镜像列表的源文件
- `/data/task_status.json`：镜像工具`mirror`生成的镜像同步状态文件
- `/hexo`：通知管理主目录

## 操作列表

- 镜像通知由于使用的hexo主题中进行了修改，`git地址`已修改为`https://github.com/zhonger/hexo-theme-bubuzou`，如在本地查看页面请先把`bubuzou`主题拉取到本地（`git clone https://github.com/zhonger/hexo-theme-bubuzou.git hexo/themes/bubuzou`），然后`npm install`安装必要的npm库
- `/news`：通知主页地址
- 由于主题原因，更新镜像通知无法使用自动部署工具实现，建议在本地使用`Typora`或其他`Markdown`编辑工具预先编写好内容，在服务器通知管理主目录中`hexo new 2017090701`新建文章，并修改好`post info`各项内容（除`abbrlink`外，该项内容在`hexo g`时会自动生成），然后复制写好的内容到文件中即可；最后使用`hexo clean && hexo g`生成静态文件，`/news`目录已预先软链接至`public`目录
