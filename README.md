# task-manager-server

![task manager](https://icon.qiantucdn.com/20200617/16e0d6708bdbc64f4f7e9c6929928de72)

本仓库为TaskManager提供后端服务API，使用Node+Express+Mongodb技术栈。本仓库作为模板仓库仅仅实现了获取所有任务的API作为demo，你可以基于此Demo来实现其他的功能：过滤任务，任务排序，新增任务、修改任务、删除任务等。

## 文件说明

* README.md：项目的说明文件，说明使用此项目的所有步骤。
* package.json: NPM的说明文件，包括运行脚本，依赖安装，版本等信息。
* index.js: 项目的启动文件，可以使用`node index.js`来启动该项目。
* .gitIgnore: git中需要忽略文件的配置
* src/router.js: 项目的路由配置
* src/task_controller.js: 任务管理的控制器，类似于MVC中的Controller层。
* src/model: 此文件夹是数据模型层，类似MVC中的model层，包括了数据结构和Mongodb的通信实现。

## 前置条件

* 请确保你在本地已经安装了Mongodb，并且已经创建了数据库`tasks`.
* 推荐您在数据库`tasks`中创建`items`集合用于存储任务文档。
* 在您创建的集合中可以插入一些任务

## 你该怎么做？

### Step1：Fork此模板服务到你的Github仓库中

![task-manager-server-fork](https://tva1.sinaimg.cn/large/007S8ZIlly1gifkkl6k6lj325y09w410.jpg)

### Step2：Clone您刚刚Fork的模板服务到你本地

```bash
git clone [your github repo url]
```

### Step3: 安装依赖

```bash
cd task-manager-server
npm install
```

### Step4: 修改配置

请在`index.js`中修改数据库连接地址`mongodbConnURL`, 使之匹配你本地的地址。同时修改`task.js`中model的集合名称，与你本地创建的集合匹配。

### Step5：启动项目

```bash
> npm start
> node index.js

Server started and listening at http://localhost:3333
Connect mongodb successfully!
```

### Step6: 使用PostMan测试

如果你本地测试结果如下，说明您已经成功搭建了后端服务，可以接着实现其他功能了！

![task-manager-get-all-tasks](https://tva1.sinaimg.cn/large/007S8ZIlly1gifkrf0mvfj315i0u00yr.jpg)
