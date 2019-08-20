<template>
  <div id="app">
    <a href="#main" id="skip-nav">본문 바로가기</a>
    <header>
      <nav id="main-tnb">
        <ul class="tnb-wrap">
          <li class="menu-bar"><a href="#"><i class="fas fa-bars"><span class="child-text-ir">메뉴바 아이콘</span></i></a></li>
          <li class="refresh"><a href="#"><i class="fas fa-redo"><span class="child-text-ir">새로고침 아이콘</span></i></a></li>
          <!-- bell .notice 를 넣으면 신호등 표시가 나옴 -->
          <li class="bell"><a href="#"><i class="far fa-bell"><span class="child-text-ir">알림종 아이콘</span></i></a></li>
          <li class="search-board">
            <label for="search-dashboard" class="child-text-ir">사이트 내 검색</label>
            <input type="text" placeholder="Search Dashboard" id="search-dashboard">
            <a href="#"><i class="fas fa-search"><span class="child-text-ir">돋보기 아이콘</span></i></a>
          </li>
        </ul>

        <div class="user-wrap">
          <div class="user-profile"><span class="child-text-ir">사용자프로필사진</span></div>     
          <ul class="user-info">
            <li>
              <a href="#"><i class="fas fa-cogs"><span class="child-text-ir">사용자 정보</span></i></a>
              <ul>
                <li><a href="#">my account</a></li>
                <li><a href="#">my calendar</a></li>
                <!-- inbox .notice 를 넣으면 신호등 표시가 나옴, 알림 개수는 content에 적으면 적용됨 -->
                <li class="inbox notice"><a href="#">my inbox</a></li>
                <li><a href="#"><i class="fas fa-power-off"><span class="child-text-ir">로그아웃 아이콘</span></i>log out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="main-gnb">
        <div id="main-gnb-header">
          <h1>web<span><span class="child-text-ir">동그라미 아이콘</span></span><strong>Admin</strong></h1>
          <ul>
            <li><a href="index.html"><i class="fas fa-home"><span class="child-text-ir">홈 바로가기 아이콘</span></i></a></li>
            <!-- mail .notice 를 넣으면 신호등 표시가 나옴 -->
            <li><a class="mail" href="#"><i class="fas fa-envelope"><span class="child-text-ir">메일 바로가기 아이콘</span></i></a></li>
          </ul>
        </div>

        <div id="main-gnb-contents">
          <div class="gnb-user-profile">
            <!-- 회원 프로필 사진영역 -->
            <div class="user-profile">
              <span class="child-text-ir">사용자프로필사진</span>
            </div>
            <h2>fred smith 
              <span>Life goes on...</span>
            </h2>
          </div>

          <ul class="main-gnb-menu">
            <li>
              <a href="index.html">
                <i class="fas fa-home"></i>
                <span>home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-cube"></i>
                <span>widgets</span>
              </a>
            </li>
            <li>
              <router-link to="/board-list">
                <i class="fas fa-list-alt"></i>
                <span>list</span>
              </router-link>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-ethereum"></i>
                <span>themes</span>
              </a>
              <ul>
                <li><a href="#">coporate</a></li>
                <li><a href="#">simple</a></li>
                <li><a href="#">elegant</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-layer-group"></i>
                <span>layouts</span>
                </a>
              <ul>
                <li><a href="#">layout options</a></li>
                <li><a href="#">boxed layout</a></li>
                <li><a href="#">inner boxed layout</a></li>
                <li><a href="#">extended layout</a></li>
                <li><a href="#">RTL layout</a></li>
                <li><a href="#">horizontal menu</a></li>
                <li><a href="#">horizontal menu &amp; boxed</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-tablet-alt"></i>
                <span>UI elements</span>
              </a>
              <ul>
                <li><a href="#">typography</a></li>
                <li><a href="#">messages &amp; notifications</a></li>
                <li><a href="#">notifications</a></li>
                <li><a href="#">icons</a></li>
                <li><a href="#">buttons</a></li>
                <li><a href="#">tabs &amp; accordions</a></li>
                <li><a href="#">sliders</a></li>
                <li><a href="#">group list</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                  <i class="fas fa-share-square"></i>
                  <span>forms</span>
                </a>
              <ul>
                <li><a href="#">form elements</a></li>
                <li><a href="#">form validations</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                  <i class="fas fa-th"></i>
                  <span>grids</span>
                </a>
              <ul>
                <li><a href="#">simple grids</a></li>
                <li><a href="#">draggable grids</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                  <i class="fas fa-table"></i>
                  <span>tables</span>
                </a>
              <ul>
                <li><a href="#">basic tables</a></li>
                <li><a href="#">data tables</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>maps</span>
                </a>
              <ul>
                <li><a href="#">google maps</a></li>
                <li><a href="#">vector maps</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                  <i class="fab fa-sketch"></i>
                  <span>extra</span>
                </a>
              <ul>
                <li><a href="#">user profile</a></li>
                <li><a href="#">time line</a></li>
                <li><a href="#">support ticket</a></li>
                <li><a href="#">gallery</a></li>
                <li><a href="#">calendar</a></li>
                <li><a href="#">search results</a></li>
                <li><a href="#">invoice</a></li>
                <li><a href="#">404 page</a></li>
                <li><a href="#">500 page</a></li>
                <li><a href="#">blank page</a></li>
                <li><a href="#">login</a></li>
                <li><a href="#">login v2</a></li>
                <li><a href="#">lockscreen</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                  <i class="fas fa-ellipsis-h"></i>
                  <span>menu levels</span>
                </a>
              <ul>
                <li><a href="#">level 1</a></li>
                <li><a href="#">level 2</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  mounted (){
    //click 할때
      //일부에서 튐
    $(document).on('click', 'a[href="#"]', function(e){
      e.preventDefault();
    });

    //header js
    $('.menu-bar').on('click', function(){
      var width = window.innerWidth;
      console.log(width);

      if (width < 767) {
        console.log('width767');
        if ($('#main-gnb').hasClass('open')) {
          $('#main-gnb').removeClass('open','');
          $('main').css({'margin-left': 0 + 'px'});
        } else {
          $('#main-gnb').addClass('open','');
          $('main').css({'margin-left': 50 + 'px'});
        }
      } else {
        if ($('header').hasClass('open')) {
          $('header').removeClass('open','');
        } else {
          $('header').addClass('open','');
        }

        if ($('.main-gnb-menu > li > ul').hasClass('show')) {
          $('ul').removeClass('show');
        }
      }
    });

    $('.user-info > li > a').on('click', function(){
      $('.user-info > li ul').toggleClass('on');
    });

    $('.main-gnb-menu > li > a').on('click', function(){
      if ($(this).next('ul').hasClass('show')) {
        $('ul').removeClass('show');
      } else {
        $('ul').removeClass('show');
        $(this).next('ul').toggleClass('show');
      }
    });

      //header가 open일 때 다른 영역을 클릭하면 자동닫힘
    $(document).on('click', function(){
      $('header').removeClass('open','');
    });

    $(document).on('click', 'header.open', function(e){
      e.stopPropagation();
    });
  }
}
</script>
