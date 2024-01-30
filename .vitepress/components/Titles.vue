<template>
  <div
    data-v-6ffe5bd6=""
    data-v-e091793e=""
    class="VPHero has-image VPHomeHero title-context"
  >
    <div data-v-6ffe5bd6="" class="container">
      <div data-v-6ffe5bd6="" class="main">
        <h1 data-v-6ffe5bd6="" class="name">
          <span data-v-6ffe5bd6="" class="clip">Guyun（骨云）</span>
        </h1>
        <p data-v-6ffe5bd6="" class="text">直播 Ai 助手</p>
        <p data-v-6ffe5bd6="" class="tagline">
          我会欢迎答谢、会要礼物、还会点歌曲....
        </p>
        <div data-v-6ffe5bd6="" class="actions">
          <div data-v-6ffe5bd6="" class="action">
            <a
              data-v-e1b2c333=""
              data-v-6ffe5bd6=""
              class="VPButton medium brand"
              :href="downloadUrl"
              >下载体验</a
            >
          </div>
          <div data-v-6ffe5bd6="" class="action">
            <a
              data-v-e1b2c333=""
              data-v-6ffe5bd6=""
              class="VPButton medium alt"
              href="/docs/examples.html"
              >使用教程</a
            >
          </div>
        </div>
        <div class="guyun-info">
          <div class="item">版本：{{ version }}</div>
          <div class="item-l">|</div>
          <div class="item">更新：{{ updateDate }}</div>
          <div class="item-l">|</div>
          <div class="item">适应系统：Win10+ / MacOS</div>
        </div>
        <hr />
        <div>
          <a
            href="https://www.douyin.com/"
            class="icon-douyin_douyin iconfont link"
          >
            抖音
          </a>
          <a
            href="https://www.bilibili.com/?spm_id_from=333.976.0.0"
            class="icon-Bzhan iconfont link"
          >
            B站
          </a>
          <a class="icon-kuaishou3 iconfont link"> 快手 </a>
        </div>
      </div>
      <div data-v-6ffe5bd6="" class="image">
        <div data-v-6ffe5bd6="" class="image-container">
          <div data-v-6ffe5bd6="" class="image-bg"></div>
          <img
            data-v-d9fe7d62=""
            class="VPImage image-src"
            src="/icon/icon_512x512@2x.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  data() {
    return {
      osType: '',
      architecture: '',
      downloadUrl: '',
      version: 'v1.5.0',
      updateDate: '2024-01-30',
    }
  },
  methods: {
    getSystemInfo() {
      // 获取浏览器User-Agent字符串
      const userAgent = navigator.userAgent.toLowerCase()

      // 判断操作系统类型
      if (userAgent.includes('win')) {
        this.osType = 'Windows'
        this.downloadUrl =
          'https://gitee.com/gao-ling-feng/release_download/releases/download/v1.5.0/Guyun_1.5.0_x64_en-US.msi'
      } else if (userAgent.includes('mac')) {
        this.osType = 'macOS'
        this.downloadUrl =
          'https://gitee.com/gao-ling-feng/release_download/releases/download/v1.5.0/Guyun_1.5.0_x64.dmg'
      } else {
        this.osType = '其他操作系统'
      }

      // 判断系统架构
      if (userAgent.includes('x86_64') || userAgent.includes('wow64')) {
        this.architecture = '64位'
      } else if (userAgent.includes('i386') || userAgent.includes('x86')) {
        this.architecture = '32位'
      } else if (userAgent.includes('arm64')) {
        this.architecture = 'ARM64'
      } else {
        this.architecture = '其他架构'
      }
    },
  },
  mounted() {
    this.getSystemInfo()
  },
})
</script>

<style lang="scss">
.title-context {
  .guyun-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    font-weight: bold;
    .item-l {
      margin: 0 5px;
    }
    @media (max-width: 956px) {
      justify-content: center;
      align-items: center;
    }
  }
  .link {
    cursor: pointer;
    font-weight: bold;
    &:active {
      color: var(--vp-home-hero-name-color);
    }
  }
}
</style>
