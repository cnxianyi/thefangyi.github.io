<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                English Words
            </template>
			<template v-slot:time>
				2021年7月20日16:25:34
            </template>
        </nav-bar>
	<div class="xy">
		<div class="content">
			<div class="button">
					<btn @click="copyArr5">每日复习(5)</btn>
					<button @click="copyArr10">每日复习(10)</button>
					<button @click="copyArr20">每日复习(20)</button>
					<button @click="Refresh">刷新</button>
					<button @click="Detect">是否重复</button>
					<button>{{test}}</button>
					
			</div>	
        <div class="table-wrapper">
			<table>
					<thead v-if="Tv">
						<tr>
							<th>序号</th>
							<th>单词</th>
							<th>词意</th>
							<th>词性</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item2 in studyEveryday" :key="item2.id">
							<td>{{item2.id}}</td>
							<td>{{item2.word}}</td>
							<td>{{item2.meaning}}</td>
							<td>{{item2.pos}}</td>
						</tr>
					</tbody>
				</table>


				<table v-if="Fv">
					<thead>
						<tr>
							<th></th>
							<th>单词</th>
							<th>释义</th>
							<th>词性</th>
						</tr>
					</thead>
					<tbody>

						<tr v-for="item in words" :key="item.id">
							<td>{{item.id}}</td>
							<td>{{item.word}}</td>
							<td>{{item.meaning}}</td>
							<td>{{item.pos}}</td>
						</tr>




					</tbody>

				</table>

				
				
				
			</div>
		</div>
		</div>
    </div>
</template>

<style lang="scss" scoped>
	

	// .button {
	// 	display: flex;
	// 	justify-content: right;
	// 	padding-bottom: 20px;
		
	// 	button {
	// 		border-radius: 10px;
	// 		width: 5%;
	// 		margin: 15px;
			
			
	// 	}
	// }
</style>

<script>
import navBar from 'common/navBar.vue'
import btn from 'common/btn.vue'
import axios from 'axios'

export default {
	components: {
        navBar,
		btn
    },
    data() {
			return {
				Tv : false,
				Fv : true,
				words: [
					{ id: 1, word: 'test', meaning: '测试', pos: 'n' },
					{ id: 2, word: 'store', meaning: '仓库、商店', pos: 'n' },
					{ id: 3, word: 'state ', meaning: '状态', pos: '' },
					{ id: 4, word: 'backend', meaning: '后端', pos: '' },
					{ id: 5, word: 'commit', meaning: '犯罪、把..交托给', pos: 'vt' },
					{ id: 6, word: 'mutations', meaning: '突变', pos: 'n' },
					{ id: 7, word: 'payload', meaning: '载荷', pos: 'n' },
					{ id: 8, word: 'Description', meaning: '描述', pos: 'n' },
					{ id: 9, word: 'send ', meaning: '发送', pos: 'vt' },
					{ id: 10, word: 'global ', meaning: '全球的', pos: '' },
					{ id: 11, word: 'define ', meaning: '定义', pos: '' },
					{ id: 12, word: 'computed  ', meaning: '计算', pos: '' },
					{ id: 13, word: 'component', meaning: '组件', pos: '' },
					{ id: 14, word: 'called  ', meaning: '原型', pos: '' },
					{ id: 15, word: 'counter ', meaning: '计算器', pos: 'a' },
					{ id: 16, word: 'monitor ', meaning: '监听，监视器', pos: '' },
					{ id: 17, word: 'product', meaning: '乘积', pos: 'n' },
					{ id: 18, word: 'case', meaning: '案例', pos: 'n' },
					{ id: 19, word: 'recreation', meaning: '娱乐', pos: 'n' },
					{ id: 20, word: 'vision', meaning: '视觉', pos: 'n' },
					{ id: 21, word: 'appliance', meaning: '应用', pos: 'n' },
					{ id: 22, word: 'target', meaning: '目标', pos: 'n' },
					{id:  23, word: 'Refresh' , meaning: '刷新' , pos: 'vt'},
					//  	  {id:  , word: '' , meaning: '' , pos: ''},
				],
				studyEveryday: [],
				everydayWords : [],
				repetition : [],
				detectMap: new Map(),
				detectArray: new Array(),
				test: 'test'
			}
		},
		methods: {
			Refresh(){
					location.reload();
				},
			Detect(){
					for (let i = 0; i < this.words.length; i++) {
						this.detectMap.set( this.words[i].word , i)
					}
					if (this.detectMap.size < this.words.length) {
						alert('重复')
					}else{
						alert('不重复')
					}
				},
			copyArr5(){
				this.Tv = true
				this.Fv = false
				this.getWords(5);
				this.studyEveryday = Array.from(this.everydayWords)
			},
			copyArr10(){
				this.Tv = true
				this.Fv = false
				this.getWords(10);
				this.studyEveryday = Array.from(this.everydayWords)
			},
			copyArr20(){
				this.Tv = true
				this.Fv = false
				this.getWords(20);
				this.studyEveryday = Array.from(this.everydayWords)
			},
			getWords(len)  {
				
				for (let i = 0; i < this.words.length; i++) {
					this.repetition[i] = i + 1
					// console.log(this.words);
				}
				for (var num, i = 0; i<len; i++) {
					do {
						num = Math.floor(Math.random() * this.repetition.length);
					} while (this.repetition[num] == null);
					this.everydayWords.unshift(this.words[num])
					this.repetition[num] = null
				}
				
			}
			
		},
		mounted() {
			axios.get('http://localhost:3000/posts/1').then((result) => {
				console.log(result.data);
				this.test = result.data.title
			}).catch((err) => {
				
			});
		},
}
</script>