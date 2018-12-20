<template>
  <v-container
    fluid
    grid-list-xl
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        v-for="(item,key) in pageList[currentPage-1]"
        :key="key"
      >
        <article-list-item
          :title="item.title"
          :path="item.path"
          :preview="item.frontmatter.preview"
          :tags="item.frontmatter.tags"
          :lastUpdate="item.frontmatter.lastUpdate"
          :img="item.frontmatter.img"
        />
      </v-flex>
      <v-flex xs12>
        <div class="text-xs-center">
          <v-pagination
            v-model="currentPage"
            :length="pageList.length"
            circle
            :total-visible="7"
            color="teal"
          ></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ArticleListItem from "./ArticleListItem";
import _ from "lodash";
export default {
  components: { ArticleListItem },
  name: "article-list",
  props: {
    articles: {
      type: Array,
      default: null
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pageSize: 6,
      currentPage: 1,
      pageList: []
    };
  },
  watch: {
    currentPage: function(newVal) {
      this.$router.push({
        query: {
          tag: this.$route.query.tag,
          page: newVal
        }
      });
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
    },
    $route: function(newVal, oldVal) {
      if (newVal.query.tag != oldVal.query.tag) {
        this.loadArticleList(newVal.query.tag, 1);
      }
    }
  },
  mounted() {
    let query = this.$route.query;
    let _page = parseInt(query.page);
    let _tag = query.tag;

    this.loadArticleList(_tag, _page);
  },
  methods: {
    loadArticleList(tag, page) {
      let art = this.articles;
      if (tag) {
        art = art.filter(val => {
          if (!val.frontmatter.tags) return false;
          return val.frontmatter.tags.includes(tag);
        });
      }

      if (!art.length) {
        this.$router.push("404");
      }

      art.sort((a, b) => {
        return b.frontmatter.lastUpdate - a.frontmatter.lastUpdate;
      });
      this.pageList = _.chunk(art, this.pageSize);

      if (page && page > 0) {
        this.currentPage = Math.min(page, this.pageList.length);
      }
    }
  }
};
</script>
