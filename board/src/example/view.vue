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
                <p>{{ post.title }}</p>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <p></p>
              </td>
            </tr>
            <tr>
              <td>분류</td>
              <td>
                <p></p>
              </td>
            </tr>
            <tr>
              <td>파일</td>
              <td>
                <p><a href="#">파일이름</a><span>oo MB</span><span>다운로드 횟수: <em>oo</em></span></p>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <p>
                  게시글 내용입니다.<br>
                  이미지도 보입니다.<br>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="buttons">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </section>

    </div>
  </main>
</template>
<script>
export default {
  data: ()=>({
    post:null
  }),
  created (){
    const id = this.$route.params.id;
    const indexId = Number(id) - 1;
    const { state:{ postList } } = this.$store;
    const post = postList[indexId];
    this.post = post;    
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