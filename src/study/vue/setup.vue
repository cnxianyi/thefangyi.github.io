<template>
  <div>
    <nav-bar>
      <template v-slot:default> 组件式开发 </template>
      <template v-slot:time> 2021年8月17日09:38:51 </template>
    </nav-bar>

    <div class="xy">
      <div class="content">
        <h2>组合式API</h2>
        <sidebarR></sidebarR>
        <div class="test">
          data.count : {{ data.count }} <br />
          data.double : {{ data.double }}
        </div>
        <small
          >当项目复杂度较高时，使用传统的 option
          配置方法可能会导致后续的维护非常的复杂，且复用性不高。</small
        >
        <h4>setup</h4>
        <ul>
          <li>一个组件选项，在创建组件之前执行</li>
          <li>
            也就是在 <span>beforeCreate() 与 created()</span> 生命周期之前执行
            setup
          </li>
          <li>致使无法访问 this , 但能接收到 props(子组件传递的数据)</li>
          <li>props 解析后，作为组合式API的入口</li>
          <li><span>setup(props , context[attrs ...]){}</span></li>
          <pre><small>解构赋值</small>
setup(props , {attrs , slots , parent , root , emit , refs}) {
    
},</pre>
        </ul>
        <hr />

        <h4>API</h4>
        <ul>
          <li>
            props <br />
            setup函数的第一个参数，接收vue中的props:{}
          </li>
          <li>
            content <br />
            setup中的第二个参数，可以解构赋值，但<span>attrs 和 slot</span
            >是有状态的对象。应避免解构。
          </li>
          <li>ref() <br />返回单个值的响应式值</li>
          <li>unref <br />如果参数为 ref ，则返回内部值，否则返回参数本身</li>
          <li>
            toRef <br />为源响应式对象创建一个
            ref(类似副本)且保持对源对象的响应式连接
          </li>
          <li>
            ...toRefs <br />
            分解响应式对象，在保持响应式的同时。常用与return 中分解reactive({})
          </li>
          <li>ifRef() 检查一个值是否为ref对象</li>
          <li>reactive({}) <br />返回响应式对象</li>
        </ul>
        <hr />

        <ul>
          <li>watch <br />默认情况下，他是惰性的(回调是在侦听源发生改变时)</li>
          <pre><small>侦听单一源</small>
watch(源, (源,prev源)=>{} )
<small>侦听多个源</small>      
        watch( [a ,b] , ([a ,prevA] , [b , prevB])=> {
    console.log(...);
})</pre>
          <li>
            watchEffect <br />在第一次侦听时立即运行一个函数，而后改变时依旧侦听
          </li>
          <li>
            watch 与 watchEffect 比较<br />1.允许惰性执行<br />
            2.能够获取侦听的原始值和改变值<br />
            3.更具体的说明触发侦听器重新运行的状态
          </li>
        </ul>
        <hr />
        <h4>生命周期</h4>
        <ul>
          <li><del>beforeCreate</del></li>
          <li><del>created</del></li>
          <li>onBeforeMount</li>
          <li>onMounted</li>
          <li>onBeforeUpdate</li>
          <li>onUpdate</li>
          <li>onBeforeUnmount</li>
          <li>onUnmounted</li>
          <li>onErrorCaptured</li>
          <li>onRenderTracked</li>
          <li>onRenderTriggered</li>
        </ul>
        <hr>

        <h4>Provide / inject</h4>
        <p>用于多重组件之间的传值,总之是用来由祖先与子孙传值</p>
        <ul>
          <li>Provide('value.name' , name.value) ()</li>
          <li>...</li>
        </ul>
        <hr>

        <h4>vueRouter</h4>
        

      </div>
    </div>
  </div>
</template>

<script>
import navBar from "common/navBar.vue";
import sidebarR from "common/SidebarR.vue";

import { ref, reactive, computed, toRefs, readonly, watch } from "vue"; // setup 所需

export default {
  setup(props, { attrs, slots, parent, root, emit, refs }) {
    const data = reactive({
      // re. 创建响应式数据
      count: 1,
      double: computed(() => {
        return data.count * 2;
      }), // 不带{} 语句会自动加上return
    });

    let only = readonly(data); // 将响应式的 data 赋值给 only 且为原生数据

    return {
      // 需要使用的 都得返回抛出
      data,
      ...toRefs(data), // 将 data 响应式 解构展开
    };
  },

  data() {
    return {};
  },
  components: {
    navBar,
    sidebarR,
  },
  methods: {
    GoSection(str) {
      document.getElementById(`${str}`).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  height: 100px;
}
</style>
