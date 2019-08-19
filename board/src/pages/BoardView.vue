<template>
  <main class="sub view" id="main">
    <div id="main-wrap">
      <section class="list-horizon">
        <table>
          <colgroup>
            <!-- 모바일버전일때 width 100으로 스크립트 -->
            <col style="width:150px;">
            <col>
          </colgroup>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <p>
                  {{ post.title }}
                </p>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <p>운영자</p>
              </td>
            </tr>
            <tr>
              <td>분류</td>
              <td>
                <p>
                  {{ post.type | postType }}
                </p>
              </td>
            </tr>
            <tr>
              <td>파일</td>
              <td>
                <!-- 5자리로 -->
                <p v-for="file in post.file" class="file-basket">
                  <a>{{ file.name }}</a> <span class="file-size">{{ changeBytes ( file.size ) }}</span><span>다운로드 횟수: <em>oo</em></span>
                </p>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <p>
                  {{ post.desc }} <br>
                  {{ post.img }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="buttons">
          <button @click="modify(post)">수정</button>
          <button @click="remove(post)">삭제</button>
        </div>
      </section>

    </div>
  </main>
</template>

<script>
import { appendFile } from 'fs';
export default {
  data : ()=> ({
    post: null
  }),
  // filters: {
  //   postType (value){
  //     const option = this.$store.getters.typeOptions.find(({ value:optValue })=>{
  //       return optValue === value;
  //     });
  //     if(!option) {
  //       return "-";
  //     }
  //     return option.label;
  //   }
  // },
  // methods:{},
  computed:{},
  created () {
    this.$el === undefined;
    const {
      $store: { state: { postList } },
      $route: { params: { id } }
    } = this;

    const post = postList.find(listItem=>{
      return listItem.id === Number(id);
    });

    if(!post){
      this.post = { title:"게시물을 찾을 수 없습니다.", file:[], image:[] };
      return;
    }

    this.post = { ...post };

    // console.log('file', post.file);
  },
  methods: {
    modify (target) {
      this.$router.push('/board-write/' + this.post.id)
    },
    remove (target) {
      const { 
        $store: { state },
        $router
       } = this;
      state.postList = state.postList.filter((post) => post.id !== target.id );
      $router.replace('/board-list');
    },
    changeBytes ( size ) {
      if (size < 1024) return size + " Bytes";
      else if(size < 1048576) return(size / 1024).toFixed(3) + " KB";
      else if(size < 1073741824) return(size / 1048576).toFixed(3) + " MB";
    }
  }
  // ,
  // mounted (){
  //   this.$el !== undefined;
  // }
}
</script>



<style lang="scss">
.view {

  .list-horizon table td {
    text-align: left;

    &:first-child {
      background: pink;
    }
  }

  .buttons {
    margin: 20px auto;

    button {
      width: 50px;
      background: pink;

    }

    button+button {
      margin-left: 20px;
    }
  }

  .file-basket {
    a {
      display: inline-block;
      border-bottom: 1px solid rgb(156, 152, 152);
    }
    .file-size {
      display: inline-block;
      width: fit-content;
      padding: 2px 5px;
      margin-left: 10px;
    }
  }
}
</style>