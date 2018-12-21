<template>
  <v-layout>
    <v-flex>
      <v-card
        class="mt-5"
        hover
        color="teal lighten-3"
        style="cursor: auto;"
      >
        <v-img :src="require('./assets/catchphrase.png')"></v-img>

        <v-card
          class="mt-2"
          color="teal lighten-3"
        >
          <v-divider></v-divider>
          <v-card-actions class="pa-0">
            <v-layout
              fill-height
              row
              class="mt-1 mb-1"
            >
              <v-flex md4>
                <v-btn
                  flat
                  block
                  large
                  dark
                  class="cyan"
                  to="/posts/"
                >博客</v-btn>
              </v-flex>
              <v-flex md4>
                <v-btn
                  flat
                  block
                  large
                  dark
                  class="pink"
                  href="https://weibo.com/seiyousenpai/home"
                  target="_blank"
                >微博</v-btn>
              </v-flex>
              <v-flex md4>
                <v-btn
                  flat
                  block
                  large
                  dark
                  class="warning"
                  href="https://github.com/fzerolight"
                  target="_blank"
                >Github</v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-title
            primary-title
            class="grey--text text--darken-3"
          >本博客最后更新于</v-card-title>
          <v-card-title class="grey--text text--darken-2 pl-5">{{lastUpdate}}</v-card-title>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from "moment";
moment.locale("zh-cn");

export default {
  data() {
    return {
      lastUpdate: ""
    };
  },
  mounted() {
    this.lastUpdate = moment(this.$page.frontmatter.lastUpdate).format(
      "YYYY年MM月DD日 a hh:mm:ss "
    );
  }
};
</script>


<style>
.__cyan {
  background-color: #009fe3;
}
.__magento {
  background-color: #e5007e;
}
.__yellow {
  background-color: #ffc400;
}
.__black {
  background-color: #747474;
}
</style>
