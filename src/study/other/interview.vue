<template>
  <div>
    <nav-bar>
      <template v-slot:default> interview </template>
      <template v-slot:time> 2021年8月18日08:21:24 </template>
    </nav-bar>

    <div class="xy">
      <div class="content">
        <h2>面试</h2>
        <sidebarR></sidebarR>
        <div class="add">
          <div class="addc">
            <label for="question">面试题 ： </label>
            <input
              type="text"
              id="question"
              placeholder="问题"
              required
              style="width: 300px"
              v-model="addQuestion"
            />
          </div>

          <div class="addc">
            <textarea rows="5" cols="30" id="answer" v-model="addAnswer" placeholder="请输入答案">
            输入答案
            </textarea>
          </div>
          <btn @click="postQuestion">提交</btn>
        </div>

        <div class="show">
            <button @click="getQuestion">随机出题</button>
            <h4>{{show.question}}</h4>
            <p v-show="isShow">{{show.answer}}</p>
            <button @click="isShow = true">显示答案</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "common/navBar.vue";
import sidebarR from "common/SidebarR.vue";
import btn from "common/btn.vue";
import axios from 'axios';
import { getRandom, getRandom2 } from "assets/js/utils.js"; // 随机数
export default {
  data() {
    return {
      addQuestion: "",
      addAnswer: "",
      allQuestion: [],
      random: [],
      show: {
          question: '',
          answer: ''
      },
      isShow: false
    };
  },
  components: {
    navBar,
    sidebarR,
    btn
  },
  methods: {
    GoSection(str) {
      document.getElementById(`${str}`).scrollIntoView({ behavior: "smooth" });
    },

    postQuestion(){
        axios.post('http://localhost:3000/light',{
            question: this.addQuestion,
            answer: this.addAnswer
        }),
        alert('提交成功')
        this.addQuestion = ''
        this.addAnswer = ''
    },
    getQuestion(){
        axios.get('http://localhost:3000/light').then((result) => {
            this.allQuestion = result.data
            getRandom(this.random , this.allQuestion.length , 1)
            this.show.question = this.allQuestion[this.random[0]].question
            this.show.answer = this.allQuestion[this.random[0]].answer
            if (this.isShow == true) {
                this.isShow = false
            }
        }).catch((err) => {
            
        });

        
    }
  },
};
</script>

<style lang="scss" scoped>
.add {
  background-color: aliceblue;
  height: 200px;
  border-radius: 20px;
  padding: 10px;
  * {
    margin: 5px;
  }

  .btn {
      margin: 5px;
        border-radius: 10px;
        background-color: #ff4350;
        box-shadow: rgba(214, 30, 30, 0.767) -5px 5px 5px;
        min-width: 70px;
        min-height: 35px;
        transition: all 0.3s ease;
        text-align: center; // 文本水平居中
        display: table; // 
        border: none;
        position: relative;
  }
  
}
</style>