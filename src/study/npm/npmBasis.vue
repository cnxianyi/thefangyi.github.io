<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                npm Base
            </template>
            <template v-slot:time>
                2021年8月2日
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>NPM</h2>
            <hr>
            <h4>介绍</h4>
            <ul>
                <li>Node Package Manager (node包管理器)</li>
                <li>Node.js 默认的包管理系统</li>
                <li>安装完Node后默认安装npm</li>
                <li>node_modules · 包目录</li>
                <li>package-lock.json · </li>
                <li>dependencies · 运行时依赖</li>
                <li>devDependencies · 开发时依赖，上线后不需要的依赖</li>
            </ul>
            <hr>
            <h4>命令</h4>
            <ul>
                <li>node -V · 查看node版本</li>
                <li>npm -V · 查看npm版本</li>
                <li>npm install &#60;包名&#62; -g · 全局安装 </li>
                <li>npm i -g &#60;包名&#62;@1.1.1 · 固定版本安装</li>
                <li>npm uninstall &#60;包名&#62; · 卸载</li> 
                <li>npm config get registry · 查看当前下载地址</li>
                <li>npx nrm use taobao · nrm工具切换淘宝源</li>
                <li>npm list -g/vue · 查看安装的模块</li>
                <li>npm update &#60;包名&#62; · 更新包</li>
                <li>npm install -save &#60;包名&#62; · </li>
                <li>npm install -save-dev &#60;包名&#62; · </li>
                <li>npm init [--yes · 默认] · 初始化配置文件</li>
                <li>npm help · 获取帮助</li>
                <li>npm cache clear · 清空npm本地缓存</li>
                <li>npm unpublish 包名 @ 版本 · 撤消发布某版本代码</li>
            </ul>
            <hr>
            
        </div>
    </div>
    </div>
</template>

<script>

import navBar from 'common/navBar.vue'
import Prism from 'prismjs';
export default {
    components: {
        navBar
    },
    
}
</script>