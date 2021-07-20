<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                HTML Demo
            </template>
            <template v-slot:time>
                2021年7月20日16:18:51
            </template>
        </nav-bar>

        <div class="content">
            <div class="md">
                    <h3>1. &#60;lable&#62;</h3>
                    <label for="Name">绑定</label>
                    <input type='text' name="Name" id="Name" value="lable通过input id 绑定" /><br>
                    <label>嵌套<input type="text" value="input嵌套绑定"></label>
                    <hr>

                    <h3>2.iframe框架</h3>
                    <iframe src="https://thefangyi.github.io"></iframe>
                    <ul>优点
                        <li>嵌入网页</li>
                        <li>加载缓慢的图标和广告</li>
                    </ul>
                    <ul>缺点
                        <li>不好看</li>
                    </ul>
                    <hr>

                    <h3>3. HTML 与 XHTML</h3>
                        <ul>XHTML 是 XML 重写了HTML的规范，更加严格
                            <li>XHTML需要结束标签</li>
                            <li>元素和属性名需小写</li>
                            <li>合理嵌套</li>
                            <li>所有属性都必须用引号“”包裹</li>
                            <li>特殊符号(^ & ...)用编码表示 </li>
                            <li>属性必须赋值</li>
                            <li>注释中不使用 --</li>
                            <li>图片必须使用说明文字(alt)</li>
                        </ul>
                    <hr>

                    <h3>4. form表单关闭自动填充</h3>
                        <h5>&#60;input type="text" autocomplete="off"&#62;</h5>
                         <form action="demo/welcome.php" method="post">
                        默认：<input type="text" name="name"><br><br>
                        关闭填充：<input type="text" name="email" autocomplete="off"><br><br>
                        </form>
                        <hr>

                    <h3>5. strong & b | em & i</h3>
                        <li><strong>strong</strong> 和<em>em</em> 是标重,顺带渲染样式</li>
                        <li><b>b</b>和<i>i</i>仅仅是渲染样式</li>
                        <hr>

                    <h3>6. SEO(搜索引擎优化)</h3>
                        <h4>TDK： title , Description(描述) , keywords(关键词)</h4>
                        <hr>

                    <h3>7. &#60;! DOCTYPE&#62;</h3>
                        <h4>告诉浏览器使用哪种规范(HTML ? XHTML)</h4>
                        <hr>

                    <h3>8. src & href</h3>
                        <ul>src
                            <li>引用资源，替换当前元素(img script iframe...)</li>
                            <li>串行解析,加载时暂停其他处理</li>
                        </ul>
                        <ul>href
                            <li>超文本引用,进行关联(link a ...)</li>
                            <li>并行加载，不干扰处理</li>
                        </ul>
                        <hr>
                    

            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>

<script>
import navBar from '../../components/common/navBar.vue'
export default {
    components: {
        navBar
    },
}
</script>