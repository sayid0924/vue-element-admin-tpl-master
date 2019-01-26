<template>

  <div class="body">

    <center>
      <p style="font-size:30px;color: black">更新床头卡APP</p>
    </center>


    <div style="margin:0 auto;  width:300px; height:200px; ">
      <el-upload
        class="upload-demo"
        drag
        ref="upload"
        action="http://localhost:8100/uploadFile/upload"
        :multiple = "false"
        :auto-upload="false"
        :before-upload="beforeUploadFile"
        :data="uploadData"
        :on-success="handleAvatarSuccess"
        :on-error = "handleAvatarError"
        :on-change="fileChange"
        :limit = "1"
        :file-list="formData.fileList"
        :disabled = "formData.disabled">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将新的床头卡app文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </div>

    <div style="margin:100px auto;width:300px;">
      <el-input placeholder="请输入内容" v-model="uploadData.appVersionNumber" prop="appVersionNumber">
        <template slot="prepend">版本号:</template>
      </el-input>
    </div>

    <div style="width:300px;text-align:center; margin: 20px auto 0;">
      <m-button type="info" @click.prevent="submitForm()">立即创建</m-button>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'updateapp',
    data () {
      return {
        formData: {
          fileList: [],
          disabled: false
        },
        uploadData: {
          appVersionNumber: '',
          name: '',
          size: 0
        },
        rules: {
          appVersionNumber: [
            {required: true, message: '床头卡版本号', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm () {
        console.log(this.uploadData.appVersionNumber)
        if (this.uploadData.name === '' || this.uploadData.size === 0) {
          this.$alert('请选择文件进行上传', '提示信息', {
            confirmButtonText: '确定'
          })
        } else if (this.uploadData.appVersionNumber === '') {
          this.$alert('请填写版本号', '提示信息', {
            confirmButtonText: '确定'
          })
        } else {
          if (this.formData.disabled === false) {
            this.$refs.upload.submit()
            this.formData.disabled = true
          }
        }
      },
      // 上传之前
      beforeUploadFile (file) {
        if (file.type !== 'application/vnd.android.package-archive') {
          this.$alert('请上传的格式是apk', '提示信息', {
            confirmButtonText: '确定'
          })
          return false
        }
      },
      // 上传成功
      handleAvatarSuccess (response, file) {
        console.log(response)
        this.formData.disabled = false
        this.$alert('上传成功', '提示信息', {
          confirmButtonText: '确定'
        })
      },
      // 上传失败
      handleAvatarError (response, file) {
        console.log(response.toString())
        this.formData.disabled = false
        this.$alert('上传失败请重新上传', '提示信息', {
          confirmButtonText: '确定'
        })
      },
      // 文件状态改变时的钩子
      fileChange (file, fileList) {
        console.log('0000000000000')
        console.log(file)
        this.uploadData.name = file.name
        this.uploadData.size = file.raw.size
      }
    }
  }
</script>

<style scoped>

</style>
