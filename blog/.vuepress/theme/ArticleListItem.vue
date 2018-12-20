<template>
  <v-card
    hover
    style="cursor:auto;"
  >
    <v-img
      :src="img"
      :aspect-ratio="4"
      position="center center"
      gradient="to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.8)"
    >
      <v-container
        fill-height
        fluid
      >
        <v-layout fill-height>
          <v-flex
            xs12
            lg12
            md12
            align-end
            flexbox
          >
            <div>
              <h1>
                <router-link :to="path">{{title}}</router-link>
              </h1>
              <v-subheader>
                <i class="material-icons">history</i>最后修改于 {{lastUpdate | timestampToString}}
              </v-subheader>
              <v-divider></v-divider>
              <div class="text--lighten-2 preview">{{preview}}</div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-actions class="tags-bar">
      <v-btn
        v-for="(val,key) in tags"
        :key="key"
        outline
        color="teal lighten-2"
        round
        small
        exact
        :to="`?tag=${val}`"
      >{{val}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from "moment";
moment.locale("zh-cn");

export default {
  name: "article-list-item",
  filters: {
    timestampToString(ts) {
      return moment(ts).format("YYYY年MM月DD日 a hh:mm:ss ");
    }
  },
  props: {
    img: {
      type: String,
      default: require("./assets/default.png")
    },
    title: {
      type: String,
      default: "无题"
    },
    preview: {
      type: String,
      default: "这篇文章没有任何预览"
    },
    path: {
      type: String,
      default: "/"
    },
    lastUpdate: {
      type: Number,
      default: Date.now()
    },
    tags: {
      type: Array,
      default: () => {
        return ["未分类"];
      }
    }
  },
  methods: {}
};
</script>
<style scoped>
h1 {
  margin: 0.2em 0;
}
h1 a {
  color: #006064;
}
.preview {
  margin-top: 1.25em;
}
.tags-bar {
  overflow: auto;
}
</style>
