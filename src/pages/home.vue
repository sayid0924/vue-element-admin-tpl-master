<template>
  <div class="body">

    <center>

      <ul v-for="info in myInfo">
        <input type="text" v-model="info.city" disabled readonly>
        <input type="text" v-model="info.name" disabled readonly>
      </ul>
    </center>

  </div>
</template>
<script>


  export default {
    name: 'home',
    data () {
      return {
        title: '测试动态添加',
        city: '',
        name: '',
        info: '',
        myInfo: []
      }
    }
  }
</script>
<style type="text/css">
  .test {
    height: 40px;
    background: #ccc;
    margin-bottom: 15px;
  }
</style>
