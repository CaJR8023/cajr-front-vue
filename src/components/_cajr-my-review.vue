<template>
  <div
    class="u-review-container"
    style="max-width: 800px; padding:16px 0; min-height: 378px;"
  >
    <div class="u-review-list">
      <div class="u-review-item">
        <div class="title-box">
          <div class="left">
            <div class="title">
              <div class="cajr-portrait" style="height: 32px;">
                <img src="../assets/github.png" />
              </div>
              <span class="name">CAJR</span>
            </div>
            <div class="memo">
              评论了 &nbsp; <span class="nicknameEllip">SpencerWoo</span>&nbsp;
              的文章
            </div>
            <div class="time">03/24</div>
          </div>
        </div>
        <div class="review-box">
          <div class="review-comment-box">
            <i
              class="el-icon-chat-round"
              style="font-size: 32px; margin-right:30px;"
            ></i>
            <div class="comment-content">
              <div class="txt">
                <span>哈哈哈哈</span>
              </div>
              <div class="article-title-box">
                <div class="title-name">
                  标题：
                  <a href="javascript:;" target="_blank"
                    >《用 Substats 和 Shields.io
                    为你的个人主页定制动态数据小牌子》</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="clear:both;" />
      <div class="loadingMore">加载更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.u-review-list {
  margin: -4px;
  padding-bottom: 8px;
  max-width: 800px;
  width: 100%;
  .u-review-item {
    margin-bottom: 22px;
    .title-box {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      font-size: 14px;
      color: #8e8787;
      margin-bottom: 8px;
      .left {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        .title {
          .cajr-portrait {
            display: inline-block;
            vertical-align: middle;
            height: auto;
            line-height: normal;
            position: relative;
            img {
              height: 32px;
              width: 32px;
              border-radius: 32px;
            }
          }
        }
        .memo {
          line-height: 32px;
          .nicknameEllip {
          }
        }
      }
      .name {
        color: #292525;
        margin-left: 10px;
        margin-right: 14px;
        font-weight: 350;
      }
      .time {
        margin-left: 487px;
      }
    }
    .review-box {
      -webkit-box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
      .review-comment-box {
        padding: 30px;
        background: #fff;
        display: flex;
        .comment-content {
          -webkit-box-flex: 1;
          flex: 1;
          word-wrap: break-word;
          .txt {
            font-size: 16px;
            color: #292525;
            width: 100%;
            max-width: 664px;
          }
          .article-title-box {
            padding: 15px;
            background: #eee;
            margin-top: 12px;
            .title-name {
              color: #8e8787;
              font-size: 14px;
              a {
                text-decoration: none;
                color: #292525;
                -webkit-tap-highlight-color: transparent;
                &:hover {
                  color: red;
                }
              }
            }
          }
        }
      }
    }
  }
  .loadingMore {
    margin-bottom: 20px;
    max-width: 822px;
    width: 100%;
    background: #fff;
    text-align: center;
    color: #292525;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 20px;
  }
}
</style>
