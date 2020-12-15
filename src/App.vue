<template>
  <a-config-provider :locale="locale">
    <a-layout>
      <a-layout-header class="header">
        <a href="/">
          <img class="header__logo" alt="rrCFDB logo" src="@/assets/logo-250x65.png"
               title="zhengrr's Crossfire Database"/>
        </a>
        <nav class="nav">
          <a-menu class="nav__menu" mode="horizontal" theme="dark">
            <a-menu-item class="nav__menu-item" key="home">
              <router-link to="/">Home</router-link>
            </a-menu-item>
            <a-menu-item class="nav__menu-item" key="about">
              <router-link to="/about">About</router-link>
            </a-menu-item>
          </a-menu>
        </nav>
      </a-layout-header>
      <a-layout-content class="content">
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
/* 全局 */
#app {
  // 字体
  // https://developer.mozilla.org/docs/Web/CSS/font-family
  font-family: Avenir, Helvetica, Arial, sans-serif;

  // 字体平滑
  // https://developer.mozilla.org/docs/Web/CSS/font-smooth
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

$headerHeight: 64px;
$headerImageHeight: 48px;

/* 页眉 */
.header {
  &__logo {
    // 浮动
    // https://developer.mozilla.org/docs/Web/CSS/float
    float: left;

    // 外边距区域
    // https://developer.mozilla.org/docs/Web/CSS/margin
    margin: ($headerHeight - $headerImageHeight) / 2 28px ($headerHeight - $headerImageHeight) / 2 0;

    // 高度
    // https://developer.mozilla.org/docs/Web/CSS/height
    height: $headerImageHeight;
  }
}

/* 内容 */
.content {
  // 内边距区域
  // https://developer.mozilla.org/docs/Web/CSS/padding
  padding: 0 50px;
}

/* 页脚 */
.footer {
  // 文字对齐
  // https://developer.mozilla.org/docs/Web/CSS/text-align
  text-align: center;
}

/* 导航 */
.nav {
  // 行高
  // https://developer.mozilla.org/docs/Web/CSS/line-height
  line-height: $headerHeight;

  &__menu {
    // 行高
    // https://developer.mozilla.org/docs/Web/CSS/line-height
    line-height: $headerHeight;
  }

  &__menu-item {
    // 行高
    // https://developer.mozilla.org/docs/Web/CSS/line-height
    line-height: $headerHeight;
  }
}
</style>
