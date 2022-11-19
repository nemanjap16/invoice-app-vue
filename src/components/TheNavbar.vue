<template>
  <div class="nav w-max h-screen bg-nav-light overflow-hidden flex flex-col justify-between">
    <div class="box-1 w-[103px] h-[103px] bg-purple-dark flex items-center justify-center">
      <img class="logo z-10" src="/icons/logo.svg" alt="logo" width="45">
    </div>
    <div class="user flex flex-col items-center">
      <button class="theme-btn h-[103px]" aria-label="Theme switch">
        <TheMoon class="text-moon-color hover:text-moon-hover" />
      </button>
      <figure class="avatar h-[103px] border-t-[1px] border-solid border-slate-500 w-full grid place-content-center">
        <img class="rounded-full" src="/images/image-avatar.jpg" alt="avatar" width="46">
      </figure>
    </div>
  </div>
</template>

<script setup>
import TheMoon from './TheMoon.vue';

</script>

<style scoped>
.nav {
  position: relative;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  overflow: hidden;
}
@media (max-width: 768px) {
  .nav {
    flex-direction: row;
    border-radius: 0%;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
.box-1 {
 position: relative;
 border-bottom-right-radius: 24px;
}

.box-1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 50%;
  background-color: #9277FF;
  border-top-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

@media (max-width: 768px){
  .box-1 {
    height: 80px;
    width: 80px;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
  }

  .box-1::after {
     border-top-left-radius: 18px;
  }
  .user {
    flex-direction: row;
  }
  .avatar{
    width: 103px;
    border-top: 0;
    border-left: 1px solid rgb(100, 116, 139);
  }
  .theme-btn {
    width: 50px;
  }
  .logo{
    width: 28px;
  }
}
</style>
