<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Git Basis
            </template>
            <template v-slot:time>
                2021年8月26日10:05:46
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>Git 分布式版本控制工具</h2>
            <sidebarR></sidebarR>

            <h4>git 常用命令</h4>
            <ul>鼠标右键
                <li>Git GUI Here : GIt提供的图形界面工具</li>
                <li>Git Bash Here : 命令行工具</li>
            </ul>
    <hr>
            <ul>基本配置(命令行 Git Bash)
                <li>git config --global user.name"{username}" : 设置用户名</li>
                <li>git config --global user.email"{email@...}" : 设置邮箱</li>
                <li>git config --global user.name ：查看</li>
                <li>git config --global user.email</li>
            </ul>
    <hr>
            <ol>获取本地仓库
                <small>使用git 对代码进行版本控制，首先需要获得本地仓库</small>
                <li>进入目录</li>
                <li>右键 Git Bash</li>
                <li>$ git init</li>
                <li>创建成功会显示 .git 的隐藏目录</li>
                <li>.gitignore : 设置忽略 git 列表</li>
            </ol>
    <hr>
            <ul> 基础操作
                <li>新创建或修改的文件 ， 使用 git add{文件名 / 通配符.} 添加到暂存区</li>
                <li>暂存区的文件 通过 git commit -m'注释' 提交到仓库</li>
                <li>git status 来查看当前 git 仓库的状态</li>
                <li>git reflog : 查看 git 操作记录</li>
                <li>git log[options] 查看 git 提交日志</li>
                <ul> options
                    <li>--all : 显示所有分支</li>
                    <li>--pretty=oneline : 将提交信息输出为一行</li>
                    <li>--abbrev-commit : 使得输出的 commitId 更简短</li>
                    <li>--graph : 图形显示</li>
                </ul>
                <li>版本回退 git reset --hard commitId</li>

            </ul>
    <hr>
            <h4>分支</h4>

            <ul>
                <li>git branch : 查看所有分支</li>
                <li>git branch {name} : 创建新分支</li>
                <li>git checkout {name} : 切换分支</li>
                <li>Git checkout -b {name} : 创建且切换到 分支</li>
                <li>git merge {name} : 将 {name} 分支合并到当前分支</li>
            </ul>
            
            <hr>

            <h4>Git Commit 注释规范</h4>
            <pre>&#60;type&#62;(&#60;scope&#62;) : &#60;subject&#62;
// 空行
&#60;body&#62;</pre>
            <ul> type (必须) : 说明 commit 的类别
                <li>br : 特别针对 Bug 号</li>
                <li>feat : 新功能 (feature)</li>
                <li>fix : 修补 Bug </li>
                <li>docs : 文档</li>
                <li>style : 格式(不修改代码的变动)</li>
                <li>refactor : 重构</li>
                <li>test : 增加测试</li>
                <li>chore : 构建过程中辅助工具的变动</li>
                <li>revert:feat(pencil):add 'graphiteWidth' option (撤销之前的 commit)</li>
            </ul>
            <br>
            <ul>scope : 说明 commit 影响的范围(数据层，控制层，视图层...)</ul>
            <ul>subject: 简短描述 - 动词开头，第一人称现在时，第一个字母小写，结尾不加句号</ul>
            <ul>body : 详细描述</ul>
        </div>
    </div>
     
    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        navBar,
        sidebarR
    },
    methods: {
        GoSection(str){
            document.getElementById(`${str}`).scrollIntoView({behavior: 'smooth'});
        },

    },

    
}
</script>

<style lang="scss" scoped>
    
</style>