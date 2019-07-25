<template>
  <main class="sub write" id="main">
    <div id="main-wrap">
      <section class="list-horizon">
        <h2>게시글 등록</h2>
        <table>
          <colgroup>
            <!-- 모바일버전일때 width 100으로 스크립트 -->
            <col style="width:150px">
            <col>
          </colgroup>
          <tbody>
            <tr>
              <td><label for="title">제목</label></td>
              <td>
                <input type="text" id="title" v-model="newPost.title">
              </td>
            </tr>
            <tr>
              <td>분류</td>
              <td v-model="newPost.type">
                <label for="use-information">
                  <input type="radio" name="kind-of" id="use-information">
                  이용안내
                </label>
                <label for="about-member">
                  <input type="radio" name="kind-of" id="about-member">
                  회원관련
                </label>
                <label for="order-etc">
                  <input type="radio" name="kind-of" id="order-etc">
                  주문/결제/배송
                </label>
                <label for="refund-etc">
                  <input type="radio" name="kind-of" id="refund-etc">
                  교환/환불/반품
                </label>
                <label for="saving-money">
                  <input type="radio" name="kind-of" id="saving-money">
                  적립금관련
                </label>
                <label for="other">
                  <input type="radio" name="kind-of" id="other">
                  기타
                </label>
              </td>
            </tr>
            <tr>
              <td><label for="editor">내용</label></td>
              <td>
                <textarea v-model="newPost.desc" name="editor" id="editor" cols="30" rows="10"></textarea>
              </td>
            </tr>
            <tr>
              <td>파일 첨부</td>
              <td v-model="newPost.file">
                <div>
                  <ul class="file-preview">
                  <!--  
                    파일 첨부 상태

                    1. 파일없음 : no-file
                      <li class="status-no-file">

                    2. 파일 업로드중: file-uploading
                      <li class="status-file-uploading">

                    3. 완료 (text or ppt) : status-text-file / status-ppt-file
                      <li class="status-text-file">
                      <li class="status-ppt-file">
                        
                   -->
                    <li class="status-no-file"><span><i class="fas fa-exclamation-triangle d-yellow"><span class="child-text-ir">빈 파일 아이콘</span></i><em>No file</em></span></li>
                    <li class="status-file-uploading"><span><i class="fas fa-spinner d-yellow"><span class="child-text-ir">로딩중 아이콘</span></i><em>Uploading...</em></span></li>
                    <li class="status-text-file"><span><i class="far fa-file-alt"><span class="child-text-ir">파일 아이콘</span></i><em>선택한 파일명.word</em></span>
                      <span class="file-size"><span>1.44</span> <span>MB</span></span>
                    </li>
                    <li class="status-ppt-file"><span><i class="far fa-file-powerpoint"><span class="child-text-ir">파일 아이콘</span></i><em>선택한 파일명.ppt</em></span>
                      <span class="file-size"><span>1.44</span> <span>MB</span></span>
                      <button class="file-delete"><i class="fas fa-times"><span class="child-text-ir">닫기 아이콘</span></i></button>
                    </li>
                  </ul>
                  <label for="file-up" class="child-text-ir">파일업로드</label>
                  <input type="file" multiple="multiple" id="file-up">
                </div>
              </td>
            </tr>
            <tr>
              <td>이미지 첨부</td>
              <td v-model="newPost.image">
                <div>
                  <ul class="image-preview">
                   <!--  
                    이미지 첨부 상태

                    1. 이미지없음 : no-file
                      <li class="status-no-image">

                    2. 이미지 업로드중: file-uploading
                      li class="status-image-uploading">

                    3. 완료 (text or ppt) : status-text-file / status-ppt-file
                      <li class="status-attached-image"> : 삭제버튼 없음
                      <li class="status-attached-image-fix"> : 삭제버튼있음
                   -->
                    <li class="status-no-image">
                      <div><i class="far fa-file d-yellow"><span class="child-text-ir">빈 이미지 아이콘</span></i></div>
                      <span><i class="fas fa-exclamation-triangle d-yellow"><span class="child-text-ir">빈 파일 아이콘</span></i><em>No image</em></span>
                    </li>
                    <li class="status-image-uploading">
                      <div><i class="fas fa-spinner d-green"><span class="child-text-ir">로딩중 아이콘</span></i></div>
                      <span><i class="fas fa-spinner d-yellow"><span class="child-text-ir">로딩중 아이콘</span></i><em>Uploading...</em></span>
                    </li>
                    <li class="status-attached-image">
                      <div><img src="@/assets/img/c.jpg" alt=""></div>
                      <span><i class="fas fa-file-image"><span class="child-text-ir">이미지 아이콘</span></i><em>파일명</em></span>
                      <span class="file-size"><span>1.44</span> <span>MB</span></span>
                    </li>
                    <li class="status-attached-image-fix">
                      <div><img src="@/assets/img/c.jpg" alt=""></div>
                      <span><i class="fas fa-file-image"><span class="child-text-ir">이미지 아이콘</span></i><em>파일명</em></span>
                      <span class="file-size"><span>1.44</span> <span>MB</span></span>
                      <button class="file-delete"><i class="fas fa-times"><span class="child-text-ir">닫기 아이콘</span></i></button>
                    </li>
                  </ul>
                  <label for="image-up" class="child-text-ir">이미지업로드</label>
                  <input type="file" multiple="multiple" id="image-up">
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="list-btn-style" @click="add">등록</button>
      </section>
  
    </div>

    <div>
      <pre v-html="$data"></pre>
    </div>
  </main>
</template>

<style>
.write .list-horizon table td {
  text-align: left;
}
</style>

<script>
export default {
  data() {
    return {
      newPost: this.creatPost(),
      postList: []
    }
  },
  methods: {
    creatPost() {
      return { title: '', type: '', desc: '', file: '', image: '' }
    },
    add() {
      const { newPost, postList } = this;
      const item = { ...newPost };

      postList.push(item);
    }
  }
}
</script>
