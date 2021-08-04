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
	<div class="content">
		<div class="md">
			<div class="button">
					<btn @click="copyArr5">每日复习(5)</btn>
					<button @click="copyArr10">每日复习(10)</button>
					<button @click="copyArr20">每日复习(20)</button>
					<button @click="Refresh">刷新</button>
					<button @click="Detect">是否重复</button>
					
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
import navBar from '../../components/common/navBar.vue'
import btn from '../../components/common/btn.vue'

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
						//    if (this.detectMap.has( this.words[Math.round(this.words.length/2)].word )) {
						// 	   console.log('后面');
						//    }else{
						// 	   console.log('前面');
						//    }
						//   if  ( this.detectMap.get(Math.round(this.detectMap.size/2) ) != this.words[Math.round(this.detectMap.size/2)]) {
						// 	  console.log(1);
						//   }	else{
						// 	  console.log(2);
						//   }
						
						//console.log(Math.round(this.detectMap.size/2));
					   }else{
						   alert('不重复')
					   }
					  
						// console.log(this.detectMap.get( this.words[Math.round(this.words.length/2)].word ));
						// console.log(this.detectMap.size);
						// console.log(this.detectMap);
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
			computed: {
				
				
			},
			// setup(props) {
			// 	const map = new Map();
			// 	let array = new Array();
			// 	const Detect = ()=>{
			// 		// map.set(this.data)
			// 		console.log();
			// 	}
			// 	return {
			// 		Detect
			// 	}
			// }
	}
	/* 通过随机数来进行data内数组的克隆，完成每日复习模块	
		target: 
		1.创建一个everydayWords来承载复刻下来的数组
		2.创建一个repetition数组来用作防止随机数重复
		3.随机数= 随机浮点数random* repetition,再使用floor来进行取整，获取index num
		4.循环于everydayWords数组添加内容
		5.判断数组[num]是否是null，于最后一步进行使用过的数组null赋值，用于不进行重复
		6.未来可以添加参数控制输出多少随机数
	*/
	// Vue.createApp(HelloVueApp).mount('#hello-vue')
// 	let everydayWords = [];
// 	let repetition = []
	
// function getWords(len){
// 	for (let i = 0; i < HelloVueApp.data().words.length; i++) {
// 		repetition[i] = i + 1
// 	}
// 	for (var num, i = 0; i<len; i++) {
// 		do {
// 			num = Math.floor(Math.random() * repetition.length);
// 		} while (repetition[num] == null);
// 		everydayWords.unshift(HelloVueApp.data().words[num])
// 		repetition[num] = null
// 	}
// }
</script>