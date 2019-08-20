<template>
  <main>
    <button class="menu-bar" @click="toggleMenuOpen">
      asfd
    </button>
    <!-- 1 제일 자주 씀 -->
    <div 
      class="main-gnb"
      :class="[ isMenuOpen ? 'open' : '' ]"
      :style="{ left: isMenuOpen ? '50px' : '0px' }"
    >
    </div>
    <!-- 두번째로 써 -->
    <div :class="gnbClassed" :style="{}">

    </div>
    <!-- 개발자들이 잘몰르는데 이런 방법이 있어 -->
    <div v-bind="gnbProps"></div>
  </main>
</template>
<script>
export default {
  data: ()=>({
    isMenuOpen: false
  }),
  methods: {
    toggleMenuOpen (){
      const { isMenuOpen } = this;
      this.isMenuOpen = !isMenuOpen;
    }
  },
  computed: {
    gnbClassed (){
      const classed = ['main-gnb'];
      const { isMenuOpen } = this;
      if(isMenuOpen) classed.push('open');
      return classed;
    },
    gnbProps (){
      const { isMenuOpen } = this;
      return {
        class: [ isMenuOpen ? 'open' : '' ],
        style: { left: isMenuOpen ? '50px' : '0px' }
      }
    }
  }
}
</script>
