<template>
  <a-config-provider :locale="locale">
    <a-layout>
      <a-layout-header class="header">
        <img class="header__logo" alt="rrCFDB logo" src="@/assets/logo-250x65.png"
             title="zhengrr's Crossfire Database"/>
        <nav class="nav">
          <a-menu class="nav__menu" mode="horizontal" theme="dark"
                  v-model:selectedKeys="selectedKeys1"
          >
            <a-menu-item class="nav__menu-item" key="home">
              <router-link to="/">Home</router-link>
            </a-menu-item>
            <a-menu-item clsss="nav__menu-item" key="about">
              <router-link to="/about">About</router-link>
            </a-menu-item>
          </a-menu>
        </nav>
      </a-layout-header>
      <a-layout-content clsss="content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer">
        Made with <a href="https://vuejs.org/">Vue.js</a> and <a href="https://antdv.com/">Ant Design Vue</a>.
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<script lang="ts">
import zh_CN from 'ant-design-vue/es/locale/zh_CN'

export default {
  data() {
    return {
      locale: zh_CN
    }
  }
}
</script>

<style lang="scss">
#app {
  // 字体
  // https://developer.mozilla.org/docs/Web/CSS/font-family
  font-family: Avenir, Helvetica, Arial, sans-serif;

  // 字体平滑
  // https://developer.mozilla.org/docs/Web/CSS/font-smooth
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  &__logo {
    // 浮动
    // https://developer.mozilla.org/docs/Web/CSS/float
    float: left;
  }
}

.content, .ant-layout-content{
  // 内边距区域
  // https://developer.mozilla.org/docs/Web/CSS/padding
  padding: 0 50px;
}

.footer {
  // 文字对齐
  // https://developer.mozilla.org/docs/Web/CSS/text-align
  text-align: center;
}

.nav {
  &__menu {
    // 行高
    // https://developer.mozilla.org/docs/Web/CSS/line-height
    line-height: 64px;
  }
}
</style>
