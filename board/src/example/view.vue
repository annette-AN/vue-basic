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
              <td>{{ post.title }}</td>
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
                <p>{{ post.type }}</p>
              </td>
            </tr>
            <tr>
              <td>파일</td>
              <td>
                <!-- file 안에 있는 name, size를 가져오고 싶음 -->
                <p><a href="#">{{ post.file }}</a><span>oo MB</span><span>다운로드 횟수: <em>oo</em></span></p>
                <p><a href="#">{{ post.image }}</a><span>oo MB</span><span>다운로드 횟수: <em>oo</em></span></p>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <p>
                  {{ post.desc }}<br>
                  {{ post.image }}<br>
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
import { type } from 'os';
export default {
  data : ()=>({
    post: null
  }),
  created () {
    const {
      $route: { params: { id } },
      $store: { state: { postList } }
    } = this;

    const post = postList.find(listItem=>{
      return listItem.id === Number(id);
    });

    const post = postList.find(matchRule);

    // type value를 한글로 고치고 싶음

    this.post = { ...post };

    // console.log('post.title', post);
    // console.log('id', $route.params.id);
    console.log('post.file', post.file);
  },
  methods: {
    modify (target) {
      // $router.push('/board-write/2');
      //write로 넘어와서 수정

    },
    remove (target) {
      //TypeError: this.post.filter is not a function
      
      this.$store.state.postList = (this.$store.state.postList).filter((post) => post !== target );
      $router.replace('/board-list');
    }
  }
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
}
</style>