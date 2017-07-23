
## webpack demo

说明： 个人学习 webpack 做的一个小demo,依赖使用的基本都是最新稳定版的，node（v8.1.4）npm（5.0.3）

### 安装

通过`npm`安装本地服务第三方依赖模块

```
npm install
```

启动服务

```
npm run dev
```

编译输出文件

```
npm run build
```

### 项目目录
<pre>
.
|----webpackdemo
|     |----dist   // 编译后生成
|     |----node_modules    //npm install 安装的依赖
|     |----packge.js    //项目配置文件
|     |----webpack.config.js    //webpack配置
|     |----index.html    //入口文件
|     |----src    //生产环境
|     |     |----assets    //  图片和css资源
|     |     |----main.js    //  Webpack 预编译入口
|     |     |----sub.js    //  Webpack 预编译子入口
|     |     |----postcss.config.js    //  css前缀自动补全配置文件
</pre>

