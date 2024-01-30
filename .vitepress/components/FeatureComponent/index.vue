<template>
  <div class="feature-context">
    <div class="introduction">
      <h1>功能介绍</h1>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
    </div>
    <div class="feature" v-if="isLeft">
      <Left />
      <div class="mid-hr"></div>
      <Right />
    </div>
    <div class="feature" v-if="isRight">
      <Right />
      <div class="mid-hr"></div>
      <Left />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Left from './left.vue'
import Right from './right.vue'

export default {
  name: 'FeatureComponent',
  props: {
    isLeft: Boolean, // 例如，接受一个字符串类型的 prop
    isRight: Boolean, // 例如，接受一个字符串类型的 prop
  },
  setup(props) {
    return {
      // 返回 props 使其在模板中可用
      ...props,
    }
  },
}
</script>

<style lang="scss">
.feature-context {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1152px;
  .introduction {
    width: 100%;
    text-align: center;
    margin: 50px 0;
    h1 {
      font-size: 30px;
      font-weight: bold;
    }
    p {
      font-size: 20px;
      line-height: 40px;
    }
  }
  .feature {
    display: flex;
    width: 100%;
    .left {
      width: 600px;
      min-height: 400px;
      transition: all 0.3s ease;
      @media (max-width: 960px) {
        width: 100%;
      }
      .introduction-img {
        width: 100%;
        // opacity: 0;
        // transition: all 0.3s ease;
        // transform: translateX(-100%);
      }
    }
    .mid-hr {
      margin: 0 5px;
    }
    .right {
      flex: 1;
      h1 {
        font-size: 40px;
        font-weight: bold;
      }
      .description {
        margin-top: 12px;
      }
      @media (max-width: 960px) {
        display: none;
      }
    }
  }
  @media (max-width: 1200px) {
    margin: 20px 40px 0 40px;
  }
}
</style>
