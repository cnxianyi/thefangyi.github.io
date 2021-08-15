<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Webpack Base
            </template>
            <template v-slot:time>
                2021年8月11日09:10:19
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>Webpack5</h2>
            <hr>
            <ul>
                <li>模块打包器，将js文件打包到一起</li>
                <li>将src目录下的代码进行chunk转化，在进行bundle打包，生成优化后的代码</li>
                <li>入口文件引入所有资源，树结构关系</li>
                <li>模块: 各类资源</li>
                <li>chunk: 被操作打包的模块</li>
                <li>bundle: 打包完毕生成的最终文件</li>
            </ul>
            <h3>package.json</h3>
            <pre  class="line-numbers"><code class="language-js">
{
  "name": "thefangyi.github.io", 项目名
  "version": "0.1.0", 版本号
  "private": true, 
  "scripts": { 脚本
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {  运行时依赖
    "boostrap": "2.0.0", 固定版本
                ^2.x.x 更新xx
                ~2.0.x 更新x
  },
  "devDependencies": {  开发时依赖
    "@vue/cli-plugin-babel": "~4.5.0",
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ],
  "keywords" : [] 搜索关键字
  "author" : "" 作者
  "license" : "" 规范
  "repository" : {} 版本控制器
  "description" : 描述
  "homepage" : 官网
  "contributors" : ''其他贡献者
}
</code></pre>
            
        </div>
    </div>

    </div>
</template>

<script>

import navBar from 'common/navBar.vue'
import Prism from 'prismjs';
export default {
    components: {
        navBar,
        Prism
    },
    
}
</script>