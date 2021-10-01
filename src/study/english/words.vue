<template>
    <div>
		<div class="rank" v-if="ranking">
			<div class="rank_top">
				排行榜
			</div>
			<div class="rank_content">
				<div class="line"><p>当日检测次数 : </p><strong>{{rankArray[rankArray.length - 1]}}</strong></div><br>
				<div class="line"><p>总检测天数 : </p><strong>{{rankArray.length}}</strong></div><br>
				<div class="line"><p>历史最高检测次数 : </p><strong>{{rankMax}}</strong></div><br>
				<div class="line"><p>历史最低检测次数 : </p><strong>{{rankMin}}</strong></div><br>
				<div class="line"><p>每日平均检测次数 : </p><strong>{{rankAverage}}</strong></div><br>
				
			</div>
			<a class="rank_a" @click="getGrass"><p>CLOSE</p></a>
		</div>
		<div class="" id="rank_grass">
        <nav-bar>
            <template v-slot:default>
                English Words
            </template>
			<template v-slot:time>
				2021年9月21日13:10:56
            </template>
        </nav-bar>

	<div class="xy">
		<div class="content">
			<div class="button">
				<sidebarR></sidebarR>
				
				<button class="btn" v-if="switchCard" @click="switchCard = !switchCard , refWords('studyWords')">ALL</button>
				<button class="btn study" v-if="!switchCard" @click="switchCard = !switchCard , refWords('allWords')">STUDY</button>
				<!--  -->
				<button class="btn" v-if="switchCard" @click="total = true , getTotal = false , testTotal = false">显示全部</button>
				<button class="btn" v-if="switchCard" @click="addShowAll = !addShowAll">添加单词</button>
				<button class="btn" v-if="switchCard" @click="getNewWords(10)">10</button>
				<button class="btn" v-if="switchCard" @click="getNewWords(1)">1</button>
				<button class="btn" v-if="switchCard" @click="Detect">检查重复</button>
				<!--  -->
				<button class="btn study" v-if="!switchCard" @click="total = true , getTotal = false , testTotal = false">显示全部</button>
				<button class="btn study" v-if="!switchCard" @click="addShowStudy = !addShowStudy">添加单词</button>
				<button class="btn study" v-if="!switchCard" @click="wordsTest">检测</button>
				<button class="btn study" v-if="!switchCard" @click="Detect">检查重复</button>
				<button class="btn study" v-if="!switchCard" @click="getGrass">排行榜</button>
			</div>
			
			<div class="addWords" v-if="addShowAll">
				<div class="addModule">
					<label for="words" >单词 ： </label>
					<input type="text" id="words" autocomplete="off"  placeholder="word" required style="width:100px;" v-model='addWords'>
				</div>

				<div class="addModule">
					<form>
					<label for="meaning" >词意 ： </label>
					<input type="text" id="meaning" autocomplete="off"  placeholder="mean" required style="width:100px;" v-model='addMeaning'>
					<input type="submit" value="添加" @click="fun('allWords')">
					</form>
				</div>
				
			</div>	
			<div class="addWords" v-if="addShowStudy">
				<div class="addModule">
					<label for="words" >单词 ： </label>
					<input type="text" id="words" autocomplete="off"  placeholder="word" required style="width:100px;" v-model='addWords'>
				</div>

				<div class="addModule">
					<form>
					<label for="meaning" >词意 ： </label>
					<input type="text" id="meaning" autocomplete="off"  placeholder="mean" required style="width:100px;" v-model='addMeaning'>
					<input type="submit" value="添加" @click="fun('studyWords')">
					</form>
				</div>
				
			</div>	
        <div class="table-wrapper">

			<table v-if="switchWord">
					<thead>
						<tr>
							<th>序号</th>
							<th>单词 </th>
							<th>词意</th>
						</tr>
					</thead>
					<tbody v-show="total">
						<tr v-for="item in words" :key="item.id">
							<td>{{item.id}}</td>
							<td v-if="item.important" class="important">&#160;&#160;&#160;{{item.word}}</td>
							<td v-if="!item.important"><button @click="addImport(item.id , item.important)" class="importBtn">&#160;&#160;❤&#160;&#160;</button>{{item.word}}</td>
							<td>{{item.meaning}}</td>
							
						</tr>
					</tbody>
					<tbody v-if="getTotal">
						<tr v-for="item2 in NewWords" :key="item2.id">
							<td>{{item2.id}}</td>
							<td v-if="item2.important" class="important">{{item2.word}}</td>
							<td v-if="!item2.important"><button @click="addImport(item2.id , item2.important)" class="importBtn">&#160;&#160;❤&#160;&#160;</button>{{item2.word}}</td>
							<td>{{item2.meaning}}</td>
						</tr>
					</tbody>
					<tbody v-if="testTotal">
						<tr v-for="item3 in NewWords" :key="item3.id">
							<td>{{item3.id}}&#160;&#160;|&#160;&#160;{{wordTest}}</td>
							<td>{{item3.meaning}}</td>
							<input type="text" 
							style="height:20px;margin-top:10px" 
							autocomplete="off" 
							placeholder="请输入正确的单词"
							v-model="enterWords"
							@keyup.enter="insWords"
							id="insWord"
							>
							<!-- <button @click="enterWords = NewWords[0].word">答案</button> -->
							
						</tr>
					</tbody>
				</table>

				

			</div>
		</div>
		</div>
		</div>
    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
import btn from 'common/btn.vue'
import axios from 'axios'
import { getRandom , getRandom2 } from 'assets/js/utils.js' // 随机数

export default {
	components: {
        navBar,
		btn,
		sidebarR
    },
    data() {
			return {
				nowUrl: '',
				wordTest: 0, // 测试计数
				switchCard: true, // 切换单词显示
				switchWord:true, // 单词刷新
				ranking:false,// 排行榜
				rankArray: [],
				dailyDateId:0,
				words: {},
				addShowAll: false,
				addShowStudy: false,
				total: true,
				getTotal: false,
				testTotal: false,
				addWords: '',
				addMeaning: '',
				random: [],
				NewWordsMap: new Map,
				NewWords: [],
				detectMap: new Map,
				enterWords: '',
				
			}
		},
		computed: {
			rankMax(){
				return Math.max(...this.rankArray)
			},
			rankMin(){
				return Math.min(...this.rankArray)
			},
			rankAverage(){
				let sum = function(x,y){ return x+y;};
				return Math.round(this.rankArray.reduce(sum)/this.rankArray.length) 
			}
		},
		mounted() {
			this.nowUrl = 'allWords'
			axios.get('http://localhost:3000/allWords').then((result) => {
				this.words = result.data
				//console.log(this.words);
			}).catch((err) => {
				
			});
		},
		created() {
			let date = new Date()
			//console.log(this.todayYear+'/'+this.todayMonth+'/'+this.todayDay);
			axios.get(`http://localhost:3000/dailyData`).then((result) => {
				this.dailyDateId = result.data[result.data.length - 1].id // 获取今天的ID
				let b = result.data[result.data.length - 1].dateDay !== date.getDate()
				if ( b ) { // 获取时间，当有今天的数据时，更新number,没有则添加数据
					axios({ // 添加日期
					method: 'post',
					url: `http://localhost:3000/dailyData`,
					data: {
						dateYear: date.getFullYear(),
						dateMonth: date.getMonth()+1,
						dateDay: date.getDate(),
						number: 0
					}
					});
				}else{
					this.wordTest = result.data[result.data.length - 1].number
				}
				//console.log(result.data[result.data.length - 1]);
			})
		},
		updated() { 
			let id = this.dailyDateId
			//console.log(id);
			axios({ // 添加日期 数据更新时更新 number
					method: 'patch',
					url: `http://localhost:3000/dailyData/${id}`,
					data: {
						number: this.wordTest
					}
					});
		},
		methods: {
			getGrass(){
				if(this.ranking){ // 排行榜数据
					this.ranking = !this.ranking
					document.getElementById('rank_grass').className = ''
					
				}else{
					this.rankArray = []
					//axios.get(`http://localhost:3000/dailyData/${this.dailyDateId}`).then((result) => {
					axios.get(`http://localhost:3000/dailyData`).then((result) => {
						console.log(result.data.length);
						for( let i = 0; i<result.data.length; i++){
							this.rankArray.push(result.data[i].number)
						}
						console.log(this.rankArray);
					})
					this.ranking = !this.ranking
					document.getElementById('rank_grass').className = 'grass'
					
				}
				
				
			},
			addImport(id , boo){
				let nowUrl = this.nowUrl
				axios({
					method: 'patch',
					url: `http://localhost:3000/${nowUrl}/${id}`,
					data: {
						important: !boo
					}
					});
			},

			refWords(str){ // 切换单词 获取数据
			this.nowUrl = `${str}`
			this.switchWord = false
			this.addShowStudy = false
			this.addShowAll = false
			this.words = {}
			axios.get(`http://localhost:3000/${str}`).then((result) => {
			this.words = result.data
			this.switchWord = true
			}).catch((err) => {
				
			});
			},
			getNewWords(len){
				getRandom(this.random , this.words.length , len)
				for (let i = 0; i < len; i++) {
					this.NewWordsMap.set(i, this.words[this.random[i]])
					this.NewWords[i] = this.NewWordsMap.get(i)
				}
				this.total = false
				this.getTotal = true
			},

			insWords(){
				
				if (this.enterWords === this.NewWords[0].word) {
					this.enterWords = '恭喜你答对了'
					setTimeout(() => {
						this.enterWords = ''
						this.wordsTest()
						setTimeout(() => {
							document.getElementById('insWord').focus()
							this.wordTest++
						});
					}, 1000);
				}else{
					this.enterWords = '错了'
					setTimeout(() => {
						this.enterWords = ''
						document.getElementById('insWord').focus()
						
					}, 1000);
				}
				
			},

			wordsTest(){
				//this.NewWords = []
				this.getNewWords(1)
				this.testTotal = true
				this.total = false
				this.getTotal = false
				setTimeout(() => {
					document.getElementById('insWord').focus()
				});	
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
			fun(str){
				if (this.addWords.length >= 1  & this.addMeaning.length >= 1) {
					alert(this.addWords + this.addMeaning +'  ' + ' 添加成功')
					if(this.addMeaning.slice(0,1).codePointAt(0) >=97 && this.addMeaning.slice(0,1).codePointAt(0) <=122){
						// 判断第一个字符是否为字母，如果不是字母则加上 n·
					}else{
						this.addMeaning = 'n·'+this.addMeaning
						
					}
					axios({ // 添加单词
					method: 'post',
					url: `http://localhost:3000/${str}`,
					data: {
						word: this.addWords,
						meaning: this.addMeaning,
						important: false
					}
					});
					
				}
				this.addWords = '' // 将输入框清空
				this.addMeaning = ''
				//this.words = {}

				setTimeout(() => { // 微任务判断是否重复
					axios.get(`http://localhost:3000/${str}`).then((result) => {
					console.log(result.data);
					this.words = result.data
					for (let i = 0; i < this.words.length; i++) {
						this.detectMap.set( this.words[i].word , i)
						console.log(this.words[i].word);
					}
					if (this.detectMap.size < this.words.length) {
						let getDelete = confirm('单词重复收录，是否删除')
						let len = this.words.length
						if(getDelete){
							axios.delete(`http://localhost:3000/${str}/${len}`)
							alert('删除成功')
							location.reload()  
						}
					}
					document.getElementById('words').focus() // 控制聚焦input
					}).catch((err) => {
						
					});
				}, 50);
				
			}
			
		},
}
</script>

<style lang="scss" scoped>

	.button {
		display: flex;
		.btn {
		border: 0px;
		margin: 1rem;
        border-radius: 10px;
        background-color: #ff4350;
		box-shadow: rgba(151, 57, 57, 0.363) 0px 15px 25px, rgba(156, 57, 57, 0.425) 0px 5px 10px;
        min-width: 40px;
		max-width: 120px;
        min-height: 35px;
        transition: all 0.3s ease;
        text-align: center; // 文本水平居中
		flex-grow: 1
		}
		.study {
			background-color: #2486b9;
			box-shadow: rgba(66, 57, 151, 0.363) 0px 15px 25px, rgba(57, 67, 156, 0.425) 0px 5px 10px;
		}
	}

	.addWords {
		background-color: aliceblue;
		width: auto;
		height: auto;
		border-radius: 10px;
		padding: 4px;
		.addModule {
			margin: 8px;
		}
	}

	.important {
		color: #ee2c79;
		font-weight: bold;
	}
	.importBtn {
		border: 0;
		font-size: 14px;
		position: relative;
		top: 1px;
		background: none;
	}

	.rank { // 排行榜
		position: fixed;
		z-index: 9999;
		border-radius: 10px;
		width: calc(100vw - 50%);
		min-height: 100px;
		max-height: 300px;
		left:0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
		background-color: #FFFFFF;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
		
		.rank_top{
			box-sizing: border-box;
			padding: 18px;
			width: 100%;
			text-align: center;
			letter-spacing: 1px;
			font-size: 20px;
			font-weight: 300;
		}
		.rank_content {
			padding: 0px 60px;
			.line {
				width: 100%;
				margin: 4px 0px;
				padding: 2px 0px;
				p {
					float: left;
				}
				strong {
					float: right;
				}

			}
		}
		
			a.rank_a {
			position: absolute;
			user-select:none;
			bottom: 0px;
			left: 0;
			right: 0;
			text-align: center;
			color: #000000bd;
			font-weight:100;
			font-size: 16px;
			p {
				padding: 20px;
			}
			}
			a:visited{
			font-weight: bold;
			}
			a:hover{
			font-weight: bold;
			color: #000000;
			p {
				background-color: #e4e4e47e;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
			}
			}
		
	}
	.grass {
		-webkit-filter: blur(6px); /* Chrome, Opera */
       -moz-filter: blur(6px);
        -ms-filter: blur(6px);    
            filter: blur(6px);
	}
		
</style>