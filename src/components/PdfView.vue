<!-- <template>
  <div class="pdf-preview">
    <vue-pdf-embed :source="state.source" class="vue-pdf-embed" :page="state.pageNum" />
    <div class="pdf-page">
      <span class="pdf-span pdf-prev" @click='prevPage'>上一页</span>
      <span class="pdf-num">{{state.pageNum}}/{{state.numPages}}</span>
      <span class="pdf-span pdf-next" @click='nextPage'>上一页</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed'
import { createLoadingTask } from 'vue3-pdfjs/esm'
export default defineComponent({
  components:{
    'vue-pdf-embed': VuePdfEmbed
  },
  setup(props, context) {
    const { emit, attrs } = context
    const{ pdfUrl } = attrs
    const state = reactive({
        source: pdfUrl, //  预览pdf文件地址
        pageNum: 1, // 当前页面
        scale: 1, // 缩放比例
        numPages: 0 // 总页数
    })
    onMounted(()=>{
      const loadingTask = createLoadingTask(state.source)
      loadingTask.promise.then(res => {
        const pdf = res
        state.numPages = pdf._pdfInfo.numPages
      })
    })
    const nextPage = ()=>{
      state.pageNum = state.pageNum < state.numPages ? state.pageNum + 1 : state.numPages
    }
    const prevPage = ()=>{
      state.pageNum = state.pageNum == 1 ? 1 : (state.pageNum <= state.numPages ? state.pageNum - 1 : state.numPages)
    }
    return {
      state,
      nextPage,
      prevPage
    }
  }
})
</script>
<style lang='scss' scoped>
.pdf-preview {
    position: relative;
    height: 100vh;
    overflow: scroll;
    box-sizing: border-box;
    background: rgb(66, 66, 66);
    .pdf-page{
      position: fixed;
      width: 100vw;
      bottom: 4vw;
      text-align: center;
      color: red;
      .pdf-num{
        margin: 0 4vw;
      }
      .pdf-span{
        padding: 2vw;
      }
    }
}
.vue-pdf-embed {
    text-align: center;
    width: 515px;
    border: 1px solid #e5e5e5;
    margin: 0 auto;
    box-sizing: border-box;
}
</style> -->
