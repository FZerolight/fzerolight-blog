<template>
  <v-app>
    <v-toolbar
      dark
      :dense=true
      :inverted-scroll=false
      :clipped-left=true
      color="teal darken-1"
    >
      <v-toolbar-items>
        <router-link to="/">
          <img
            src="./assets/logofz.png"
            alt=""
            class="logo"
          >
        </router-link>
      </v-toolbar-items>
      <v-toolbar-title>
        <router-link
          to="/"
          class="white--text"
        >FZerolight | 不学无术的网瘾少年</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          dark
          v-for="(item,ind) in menu"
          :key="ind"
          :to="item.link"
        >{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <v-layout :justify-center=true>
        <v-flex
          lg9
          md12
        >
          <Homepage v-if="$page.path == '/'" />
          <article-list
            v-else-if="$page.path == '/posts/'"
            :articles="$site.pages.filter((val=>{return val.path!='/'&&val.path!='/about/'&&val.path!='/posts/'}))"
          />
          <About v-else-if="$page.path == '/about/'" />
          <div
            class="art-container"
            v-else
          >
            <Content />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer dark>
      <v-layout
        justify-center
        row
        wrap
      >
        <v-flex
          py-3
          text-xs-center
          white--text
          xs12
          teal
        >&copy; {{(new Date()).getFullYear()}} FZerolight 圈光的游乐园 蜀ICP备18003398号-1 | Powered by <a
            style="color:#6cecb3;"
            target="_blank"
            href="https://vuepress.vuejs.org/"
          >VuePress</a></v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Homepage from "./Homepage";
import ArticleList from "./ArticleList";
import About from "./About";
export default {
  components: { ArticleList, About, Homepage },
  data() {
    return {
      menu: [
        { title: "首页", link: "/" },
        { title: "文章", link: "/posts/" },
        { title: "关于", link: "/about/" }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>


<style>
/* .container {
  max-width: 960px;
  margin: 0 auto;
} */
.logo {
  height: 44px;
  margin: 2px 0;
  vertical-align: middle;
}
.art-container .custom-block * {
  margin: inherit;
  font-family: inherit;
}
.art-container code {
  display: inline;
  box-shadow: none;
  font-family: inherit;
  font-weight: 400;
}
.art-container code::before {
  content: "";
}
.art-container h1,
.art-container h2,
.art-container h3,
.art-container h4,
.art-container h5,
.art-container h6 {
  margin: 1em 0;
}
.art-container {
  line-height: 1;
}
.art-container .table-of-contents a {
  color: #009688;
}
</style>

<style src="./styles/vuetify.min.css"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>