import Layout from "@/components/_cajr-layout.vue";
import Home from "@/views/Home.vue";
import Find from "@/views/Find.vue";
import Specials from "@/views/Specials.vue";
import Zhuanlan from "@/views/zhuanlan.vue";
import User from "@/views/User.vue";
import Article from "@/views/Article.vue";
import MyBrowseHistory from "@/components/_cajr-browse-history.vue";
import MyFollow from "@/components/_cajr-my-follow.vue";
import MyCollect from "@/components/_cajr-my-collect.vue";
import MyReview from "@/components/_cajr-my-review.vue";
import MyArticle from "@/components/_cajr-my-article.vue";
import Setting from "@/views/Setting.vue";
import SettingProfile from "@/components/_cajr-setting-profile.vue";
import SettingAccount from "@/components/_cajr-setting-account.vue";

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
        component: Home,
        title: "主页"
      },
      {
        path: "/cajr/find",
        name: "Find",
        component: Find,
        title: "发现"
      },
      {
        path: "/cajr/specials",
        name: "Specials",
        component: Specials,
        title: "热榜"
      }
    ]
  },
  {
    path: "/cajr/zhuanlan",
    name: "Zhuanlan",
    component: Zhuanlan,
    title: "专栏"
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
        component: MyCollect,
        title: "我的收藏"
      },
      {
        path: "/u/acticle",
        name: "MyArticle",
        component: MyArticle,
        title: "我的文章"
      },
      {
        path: "/u/browse",
        name: "MyBrowseHistory",
        component: MyBrowseHistory,
        title: "浏览历史"
      },
      {
        path: "/u/follow",
        name: "MyFollow",
        component: MyFollow,
        title: "我的关注"
      },
      {
        path: "/u/review",
        name: "MyReview",
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
        component: SettingProfile,
        title: "资料编辑"
      },
      {
        path: "/setting/account",
        name: "SettingAccount",
        component: SettingAccount,
        title: "账号安全"
      }
    ]
  },
  {
    path: "/cajr/post",
    name: "Article",
    component: Article,
    title: "文章详情"
  }
];
