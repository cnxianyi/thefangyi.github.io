<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                RegExp
            </template>
            <template v-slot:time>
                2022年1月14日
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>RegExp - 正则表达式</h2>
            <p>查找某些复杂规则的字符串;正则表达式提供了功能强大、灵活而又高效的方法来处理文本</p>

            <hr>
            <table>
					<thead>
						<tr>
							<th>字符</th>
							<th>意义</th>
							<th>说明</th>
						</tr>
					</thead>
					<tbody>
                			
					</tbody>
            </table>
            <p></p>
            <hr>
            
        </div>
    </div>
    </div>
</template>

<script>

import navBar from 'common/navBar.vue'
export default {
    components: {
        navBar
    },
    
}
</script>