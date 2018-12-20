<template>
  <v-container>
    <v-layout
      row
      align-center
      justify-center
    >
      <v-flex
        lg10
        md12
      >
        <v-card
          width="100%"
          class="elevation-8"
        >
          <v-img
            :src="$page.frontmatter.banner"
            :aspect-ratio="16/9"
            position="center center"
          >
            <v-layout
              column
              fill-height
            >
              <v-card-title>
                <v-subheader>About</v-subheader>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-title class="white--text">
                <div class="namecard">
                  <v-avatar
                    size="96"
                    class="ma-2 elevation-10"
                  >
                    <v-img :src="`http://q1.qlogo.cn/g?b=qq&nk=${$page.frontmatter.qq}&s=640`">
                    </v-img>
                  </v-avatar>
                  <span class="display-1 pl-3">{{$page.frontmatter.name}}</span>
                </div>
              </v-card-title>
            </v-layout>
          </v-img>
          <v-subheader inset>{{$page.frontmatter.motto}}</v-subheader>
          <v-divider></v-divider>
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="lead">smartphone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{$page.frontmatter.mobile|mobileNumber}}</v-list-tile-title>
                <v-list-tile-sub-title>手机</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="lead">email</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a :href="`mailto:${$page.frontmatter.email}`">
                    {{$page.frontmatter.email}}
                  </a>
                </v-list-tile-title>
                <v-list-tile-sub-title>电子邮箱</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider class="mt-4 mb-3"></v-divider>
    <v-layout
      row
      align-center
      justify-center
    >
      <v-flex
        lg10
        md12
        class="about-content"
      >
        <Content />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  filters: {
    mobileNumber(number) {
      let str = number + "";
      return str.substr(0, 3) + "-" + str.substr(3, 4) + "-" + str.substr(7, 4);
    }
  }
};
</script>

<style>
.namecard {
  width: 100%;
  line-height: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
}
.namecard > span {
  vertical-align: middle;
}
.about-content h1 {
  text-align: center;
}
</style>
