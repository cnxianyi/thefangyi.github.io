<template>
  <div>
    <nav-bar>
        <template v-slot:default>
            Element Show
        </template>
        <template v-slot:time>
                2021年7月20日
            </template>
    </nav-bar>

    <div class="xy">
        xy
        <div class="content">
          >content <br>
          font-family: "Consolas", serif; <br><hr>
          <span> root:</span><br>
          <span>--font--color: #22202E;<span style='background-color:#22202E'>&#160;&#160;&#160;&#160;&#160;</span></span>
          <br><span>--module--color: #f0a1a8;<span style='background-color: #f0a1a8'>&#160;&#160;&#160;&#160;&#160;</span></span>
          <br><span>--font-size: 16px;</span>
          <br><span>--font-family: "Consolas", serif , SimHei;</span>
          <br><span>中文</span>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <h1><a href="">h1>a</a></h1>
          <h3><a href="">h3>a</a></h3>
          <h6><a href="">h6>a</a></h6>
          <hr>
          <ol>ol>li
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ol>
          <hr>

          <ul>ul>li
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>

            <hr>
          <dl>
            <dt>dl>dt(dd)</dt>
            <dd>dd one</dd>
            <dd>dd two</dd>
          </dl>

          <hr>
          <strong>strong</strong><br>
          <b>b</b>
          <hr>
          <em>em</em><br>
          <i>i</i>
          <hr>
          <p>p1</p>
          <p>p2</p>
          <sub>sub</sub>
          <sup>sup</sup>

          <hr>
          <blockquote>blockquote</blockquote>
          <hr>

          <code>code js html</code>
          <hr>

          <pre>
            pre
          </pre>

          <hr>

          <table border="1">
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
        </div>
    </div>


  </div>
</template>

<style lang="scss" scoped>
  // .content {
  //   background-color: aliceblue;
  //   .md {
  //     background-color: azure;
  //   }
  // }
</style>


<script>
import navBar from 'common/navBar.vue'
import Prism from 'prismjs';
export default {
  components: {
    navBar
  }
}
</script>