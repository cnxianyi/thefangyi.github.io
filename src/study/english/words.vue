<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                English Words
            </template>
			<template v-slot:time>
				2021年8月15日20:12:10
            </template>
        </nav-bar>
	<div class="xy">
		<div class="content">
			

			<div class="button">
				<button class="btn" @click="addShow = !addShow">添加单词</button>
				<button class="btn">5</button>
				<button class="btn">5</button>
				<button class="btn">5</button>
			</div>
			<div class="addWords" v-if="addShow">
				<div class="addModule">
					<label for="words" >单词 ： </label>
					<input type="text" id="words"  placeholder="word" required style="width:100px;" v-model='addWords'>
				</div>

				<div class="addModule">
					<label for="meaning" >词意 ： </label>
					<input type="text" id="meaning"  placeholder="mean" required style="width:100px;" v-model='addMeaning'>
				</div>

				<div class="addModule">
					<label for="pos">词性 ： </label>
					<input type="text" id="pos"  placeholder="pos" required style="width:100px;" v-model='addPos'>
				</div>

				<button @click="fun()">添加</button>
				
			</div>	
        <div class="table-wrapper">

			<table>
					<thead>
						<tr>
							<th>序号</th>
							<th>单词 </th>
							<th>词意</th>
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
				words: {},
				addShow: false,
				addWords: '',
				addPos: '',
				addMeaning: ''
			}
		},
		mounted() {
			axios.get('http://localhost:3000/words').then((result) => {
				console.log(result.data);
				this.words = result.data
			}).catch((err) => {
				
			});
		},
		methods: {
			fun(){
				if (this.addWords.length >= 1 & this.addPos.length >= 1 & this.addMeaning.length >= 1) {
					axios({
					method: 'post',
					url: 'http://localhost:3000/words',
					data: {
						word: this.addWords,
						meaning: this.addMeaning,
						pos: this.addPos
					}
					});
					alert('单词 ' + this.addWords +'  ' + ' 添加成功')
				}
				this.addWords = ''
				this.addPos = ''
				this.addMeaning = ''
				setTimeout(() => {
					axios.get('http://localhost:3000/words').then((result) => {
					console.log(result.data);
					this.words = result.data
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
		
</style>