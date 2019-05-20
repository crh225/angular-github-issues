演示：https：//christopher.house <br>聊天：https：//gitter.im/angular-github-issues/Lobby

<a href="https://codeclimate.com/github/crh225/angular-github-issues/maintainability"><img src="https://api.codeclimate.com/v1/badges/e17d5ad267ef6f6503c1/maintainability"></a>
<a href="https://codeclimate.com/github/crh225/angular-github-issues/test_coverage"><img src="https://api.codeclimate.com/v1/badges/e17d5ad267ef6f6503c1/test_coverage"></a>
[![CircleCI](https://circleci.com/gh/crh225/angular-github-issues/tree/master.svg?style=shield)](https://circleci.com/gh/crh225/angular-github-issues/tree/master)
[![Dependency Status](https://david-dm.org/crh225/angular-github-issues.svg)](https://david-dm.org/crh225/angular-github-issues)
[![devDependencies Status](https://david-dm.org/crh225/angular-github-issues/dev-status.svg)](https://david-dm.org/crh225/angular-github-issues?type=dev)
![Angular_Version 6](https://img.shields.io/badge/Angular_Version-7-brightgreen.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/crh225/angular-github-issues/badge)](https://www.codefactor.io/repository/github/crh225/angular-github-issues)
[![forthebadge](https://forthebadge.com/images/badges/designed-in-etch-a-sketch.svg)](https://forthebadge.com)

# 关于

该存储库搜索github的存储库，该存储库的问题以及github用户搜索角度开发人员。搜索存储库后，您可以深入查看每个存储库并查看过去七天的问题列表。

另一个主要功能是能够在美国的特定位置搜索github用户。现在它被默认为TN。

CI设置为运行lint，测试，构建aot模式以进行生产，以及部署到firebase。

此示例显示如何在ngrx中使用多个实体。主搜索页面现在是每个存储库的条形图仪表板。在作品中是懒惰加载功能ngrx /商店。

通过Oath 2登录安全Github API

对于现场演示：https：//christopher.house

## 开发服务器

运行`ng serve`的开发服务器。导航到`http://localhost:4200/` 。如果您更改任何源文件，应用程序将自动重新加载。

## 安装npm包

运行`npm install` 。

## 版本号

运行`ng build --aot`以AoT模式而不是JiT构建项目。这将允许更快地呈现应用程序，更少的异步请求，更小的Angular框架下载大小以及更早地检测模板错误。

运行`ng build`来构建项目。构建工件将存储在`dist/`目录中。使用`-prod`标志进行生产构建。

## Docker：你可以通过运行yarn dock或docker-compose up -d --build来开发模式

## 运行单元测试

运行`ng test`以通过[Karma](https://karma-runner.github.io)执行单元测试。
