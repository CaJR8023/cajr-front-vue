import Layout from "@/components/_cajr-layout.vue";
import Home from "@/views/Home.vue";
import Find from "@/views/Find.vue";
import Specials from "@/views/Specials.vue";
import Zhuanlan from "@/views/zhuanlan.vue";
import User from "@/views/User.vue";
import Article from "@/views/Article.vue";
import Editor from "@/views/Editor.vue";
import Tag from "@/views/Tag.vue";
import Search from "@/views/Search.vue";
import SpecialColumn from "@/views/SpecialColumn.vue";
import ColumnAbout from "@/views/ColumnAbout.vue";
import MyBrowseHistory from "@/components/_cajr-browse-history.vue";
import MyFollow from "@/components/_cajr-my-follow.vue";
import MyCollect from "@/components/_cajr-my-collect.vue";
import MyReview from "@/components/_cajr-my-review.vue";
import MyArticle from "@/components/_cajr-my-article.vue";
import Setting from "@/views/Setting.vue";
import SettingProfile from "@/components/_cajr-setting-profile.vue";
import SettingAccount from "@/components/_cajr-setting-account.vue";
import searchArticle from "@/components/_cajr-search-article.vue";
import searchUser from "@/components/_cajr-search-user.vue";
import test from "@/components/_cajr-test.vue";

export default [
  {
    path: "/",
    name: "Root",
    component: Layout,
    redirect: {
      name: "Home"
    },
    children: [
      {
        path: "/home",
        name: "Home",
        meta: { title: "主页-cajr" },
        component: Home,
        title: "主页"
      },
      {
        path: "/cajr/find",
        name: "Find",
        meta: { title: "发现-cajr" },
        component: Find,
        title: "发现"
      },
      {
        path: "/cajr/specials",
        name: "Specials",
        meta: { title: "热榜-cajr" },
        component: Specials,
        title: "热榜"
      }
    ]
  },
  {
    path: "/cajr/zhuanlan",
    name: "Zhuanlan",
    meta: { title: "主页专栏-cajr" },
    component: Zhuanlan,
    title: "主页专栏"
  },
  {
    path: "/u",
    name: "User",
    component: User,
    title: "用户个人中心",
    redirect: {
      name: "MyArticle"
    },
    children: [
      {
        path: "/u/like",
        name: "MyCollect",
        meta: { title: "我的收藏-cajr" },
        component: MyCollect,
        title: "我的收藏"
      },
      {
        path: "/u/acticle",
        name: "MyArticle",
        meta: { title: "我的文章-cajr" },
        component: MyArticle,
        title: "我的文章"
      },
      {
        path: "/u/browse",
        name: "MyBrowseHistory",
        meta: { title: "浏览历史-cajr" },
        component: MyBrowseHistory,
        title: "浏览历史"
      },
      {
        path: "/u/follow",
        name: "MyFollow",
        meta: { title: "我的关注-cajr" },
        component: MyFollow,
        title: "我的关注"
      },
      {
        path: "/u/review",
        name: "MyReview",
        meta: { title: "我的评论-cajr" },
        component: MyReview,
        title: "我的评论"
      }
    ]
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
    title: "用户资料编辑",
    redirect: {
      name: "SettingProfile"
    },
    children: [
      {
        path: "/setting/profile",
        name: "SettingProfile",
        meta: { title: "资料编辑-cajr" },
        component: SettingProfile,
        title: "资料编辑"
      },
      {
        path: "/setting/account",
        name: "SettingAccount",
        meta: { title: "账号安全-cajr" },
        component: SettingAccount,
        title: "账号安全"
      }
    ]
  },
  {
    path: "/post",
    name: "Article",
    meta: { title: "文章详情-cajr" },
    component: Article,
    title: "文章详情"
  },
  {
    path: "/editor",
    name: "Editor",
    meta: { title: "投稿-cajr" },
    component: Editor,
    title: "发文章"
  },
  {
    path: "/test",
    name: "test",
    meta: { title: "test-cajr" },
    component: test,
    title: "test"
  },
  {
    path: "/search",
    name: "Search",
    meta: { title: "搜索结果-cajr" },
    component: Search,
    title: "搜索",
    redirect: {
      name: "SearchArticle"
    },
    children: [
      {
        path: "/search/article",
        name: "SearchArticle",
        meta: { title: "文章搜索结果-cajr" },
        component: searchArticle,
        title: "文章搜索结果"
      },
      {
        path: "/search/user",
        name: "SearchUser",
        meta: { title: "用户搜索结果-cajr" },
        component: searchUser,
        title: "用户搜索结果"
      }
    ]
  },
  {
    path: "/tag",
    name: "Tag",
    meta: { title: "标签-cajr" },
    component: Tag,
    title: "标签"
  },
  {
    path: "/column",
    name: "SpecialColumn",
    meta: { title: "专栏 - cajr" },
    component: SpecialColumn,
    title: "专栏"
  },
  {
    path: "/column/about",
    name: "ColumnAbout",
    meta: { title: "关于专栏 - cajr" },
    component: ColumnAbout,
    title: "关于专栏"
  }
];
