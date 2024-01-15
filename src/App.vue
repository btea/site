<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import circleText from './components/circleText.vue'
import configInfo from '@/utils'
import customInput from './components/customInput.vue'
import customButton from './components/customButton.vue'

const info = reactive(configInfo)
const isPlay = ref(false)
const img = ref('')
const switchPlay = () => {
  isPlay.value = !isPlay.value
}
const selectImage = (e: Event) => {
  const el = e.target as HTMLInputElement
  const file = el.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      img.value = reader.result as string
    }
  }
}
const paddingStyle = computed(() => {
  return {
    padding: `${info.fontSize}px`,
  }
})
</script>
<template>
  <div class="site-box">
    <div class="avatar-upload">
      <div class="avatar-edit">
        <label for="imageUpload">
          <input type="file" id="imageUpload" @change="selectImage" accept="image/*" />
          <customButton>选择图片</customButton>
        </label>
      </div>
      <div class="avatar-preview">
        <div class="image-box" :style="paddingStyle">
          <img :src="img" class="img" />
          <circleText
            :text="info.text"
            :play="isPlay"
          ></circleText>
        </div>
      </div>
    </div>
    <div class="config-info">
      <div class="item">
        <div class="label">名称</div>
        <customInput v-model="info.text"></customInput>
      </div>
      <div class="item">
        <div class="label">字体大小</div>
        <customInput v-model="info.fontSize"></customInput>
      </div>
      <div class="item">
        <div class="label">动画时间</div>
        <customInput v-model="info.duration"></customInput>
      </div>
      <div class="item">
        <div class="label">字体颜色</div>
        <customInput v-model="info.color"></customInput>
      </div>
      <div class="item">
        <div class="label">旋转角度</div>
        <customInput v-model="info.rotate"></customInput>
      </div>
      <div class="item">
        <customButton @click="switchPlay">{{ isPlay ? '暂停' : '播放' }}</customButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.site-box {
  display: flex;
  height: 100%;
  .avatar-upload {
    [type="file"] {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
  .avatar-preview {
    .image-box {
      width: 200px;
      height: 200px;
      position: relative;
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      .circle-text {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
  .avatar-upload, .config-info {
    flex: 1;
    padding: 10px;
  }
  .config-info {
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .label {
      width: 80px;
      margin-right: 10px;
    }
  }
}
</style>