<template>
  <div class="content">
    <div class="left-area">
      <div class="left-area-nav">
        <div class="app-name">HELLO!!</div>
        <div class="nav">
          <div v-for="(item, index) in ['apps-o', 'setting-o']" :key="item">
            <div
              :class="[
                'nav-item',
                leftData.activeIndex == index ? 'active' : '',
              ]"
              @click="changeNav(item, index)"
            >
              <van-icon :name="item" :size="40" />
            </div>
          </div>
        </div>
        <button class="btn-logout">
          <van-icon name="share-o" :size="40" />
        </button>
      </div>
      <div class="left-area-list"></div>
    </div>
    <div class="main-area"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.content {
  width: 90vw;
  height: 90vh;
  border-radius: 8px;
  background: #e0e9fd;
  display: flex;
  .left-area {
    width: 300px;
    padding: 32px;
    flex-basis: 1 0 132px;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
    position: relative;
    overflow: auto;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>
