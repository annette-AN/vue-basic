<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  async created (){
    const session = window.applicationSession;
    
    const loginResp = await axios.post("http://nineten11.net:7000/api/user/login",{
      email:"guest",
      password:""
    });

    console.log("loginResp", session, loginResp)

    //await axios.get("http://nineten11.net:7000/api/boards")
    
  }
}
</script>
