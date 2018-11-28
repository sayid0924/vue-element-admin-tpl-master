<template>
  <div class="fillcontain">
    <div class="table_container">

      <el-table
        :loading="loading"
        :data="formData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="出生日期">
                <span>{{ props.row.birthday }}</span>
              </el-form-item>
              <el-form-item label="学历">
                <span>{{ props.row.education }}</span>
              </el-form-item>
              <el-form-item label="身高">
                <span>{{ props.row.height }}</span>
              </el-form-item>
              <el-form-item label="体重">
                <span>{{ props.row.weight }}</span>
              </el-form-item>
              <el-form-item label="证件号码">
                <span>{{ props.row.idNumber }}</span>
              </el-form-item>
              <el-form-item label="挂号金额">
                <span>{{ props.row.guoHaoMoney }}</span>
              </el-form-item>
              <el-form-item label="特长">
                <span>{{ props.row.specialty }}</span>
              </el-form-item>
              <el-form-item label="简介">
                <span>{{ props.row.intro }}</span>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>

        <el-table-column
          label="医生姓名"
          prop="doctorName">
        </el-table-column>

        <el-table-column
          label="性别"
          prop="sex">
        </el-table-column>

        <el-table-column
          label="职称"
          prop="title">
        </el-table-column>

        <el-table-column
          label="手机号码"
          prop="mobile">
        </el-table-column>

        <el-table-column
          label="地址"
          prop="address">
        </el-table-column>

        <el-table-column
          label="婚姻情况"
          prop="marriage">
        </el-table-column>

        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <m-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </m-button>
            <m-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </m-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="Pagination" style="text-align: left;margin-top: 10px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="count">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="医院ID" prop="hospitalId">
          <el-input v-model="formData.hospitalId"></el-input>
        </el-form-item>

        <el-form-item label="医院科室ID" prop="hospitalDeptId">
          <el-input v-model="formData.hospitalDeptId"></el-input>
        </el-form-item>

        <el-form-item label="医生名称" prop="doctorName">
          <el-input v-model="formData.doctorName"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-select v-model="formData.sex" placeholder="请选择">
            <el-option
              v-for="item in sexOptions"
              :key="item.sexValue"
              :label="item.label"
              :value="item.sexValue">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="婚姻情况">
          <el-select v-model="formData.marriage" placeholder="请选择">
            <el-option
              v-for="item in marriageOptions"
              :key="item.marriageValue"
              :label="item.label"
              :value="item.marriageValue">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生日期">
          <el-date-picker
            v-model="formData.birthday"
            type="date"
            @change.prevent="dateChangebirthday"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="行政区代码" prop="pcaCode">
          <el-input v-model="formData.pcaCode"></el-input>
        </el-form-item>

        <el-form-item label="详细地址" prop="address">
          <el-input v-model="formData.address"></el-input>
        </el-form-item>

        <el-form-item label="邮政编码" prop="postCode">
          <el-input v-model="formData.postCode"></el-input>
        </el-form-item>

        <el-form-item label="手机号码" prop="mobile">
          <el-input v-model="formData.mobile"></el-input>
        </el-form-item>

        <el-form-item label="简介" prop="intro">
          <el-input v-model="formData.intro"></el-input>
        </el-form-item>


        <el-form-item label="是否专家">
          <el-select v-model="formData.isExpert" placeholder="请选择">
            <el-option
              v-for="item in isExpertOptions"
              :key="item.isExpertValue"
              :label="item.label"
              :value="item.isExpertValue">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="特长" prop="specialty">
          <el-input v-model="formData.specialty"></el-input>
        </el-form-item>

        <el-form-item label="区域编码" prop="areaCode">
          <el-input v-model="formData.areaCode"></el-input>
        </el-form-item>

        <el-form-item label="学历" prop="education">
          <el-input v-model="formData.education"></el-input>
        </el-form-item>

        <el-form-item label="职称" prop="title">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>

        <el-form-item label="社会机构及职务" prop="duties">
          <el-input v-model="formData.duties"></el-input>
        </el-form-item>

        <el-form-item label="机构编码" prop="orgCode">
          <el-input v-model="formData.orgCode"></el-input>
        </el-form-item>

        <el-form-item label="证件类型" prop="idType">
          <el-input v-model="formData.idType"></el-input>
        </el-form-item>

        <el-form-item label="证件号码" prop="idNumber">
          <el-input v-model="formData.idNumber"></el-input>
        </el-form-item>

        <el-form-item label="证书编号" prop="certificateNo">
          <el-input v-model="formData.certificateNo"></el-input>
        </el-form-item>

        <el-form-item label="证件图片" prop="idUrl">
          <el-input v-model="formData.idUrl"></el-input>
        </el-form-item>

        <el-form-item label="认证状态">
          <el-select v-model="checkStateValue" placeholder="请选择">
            <el-option
              v-for="item in checkStateOptions"
              :key="item.checkStateValue"
              :label="item.label"
              :value="item.checkStateValue">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="签名图片URL" prop="signatureUrl">
          <el-input v-model="formData.signatureUrl"></el-input>
        </el-form-item>

        <el-form-item label="上传手持证件图片" label-width="180px">
          <el-upload
            class="avatar-uploader"
            :action="baseUrl + '/v1/addimg/shop'"
            :show-file-list="false"
            :on-success="handleShopAvatarScucess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="上传医师执业证书图片" label-width="180px">
          <el-upload
            class="avatar-uploader"
            :action="baseUrl + '/v1/addimg/shop'"
            :show-file-list="false"
            :on-success="handleShopAvatarScucess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="上传医生图像图片" label-width="180px">
          <el-upload
            class="avatar-uploader"
            :action="baseUrl + '/v1/addimg/shop'"
            :show-file-list="false"
            :on-success="handleShopAvatarScucess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="BJCA医生唯一标识" prop="idUrl" label-width="180px">
          <el-input v-model="formData.idUrl"></el-input>
        </el-form-item>

        <el-form-item label="身高" prop="height">
          <el-input v-model="formData.height"></el-input>
        </el-form-item>

        <el-form-item label="体重" prop="weight">
          <el-input v-model="formData.weight"></el-input>
        </el-form-item>

        <el-form-item label="BPM指数" prop="bpm">
          <el-input v-model="formData.bpm"></el-input>
        </el-form-item>

        <el-form-item label="挂号金额" prop="guoHaoMoney">
          <el-input v-model="formData.guoHaoMoney"></el-input>
        </el-form-item>

        <el-form-item label="备注" prop="description">
          <el-input v-model="formData.description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <m-button @click="dialogFormVisible = false">取 消</m-button>
        <m-button type="primary" @click.prevent="updateDoctor">确 定</m-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import {getFindDoctorByCondition, fetchDeleteDoctor} from '@/api/getData'
  import {baseUrl} from '@/config/env'

  export default {
    data () {
      return {
        baseUrl,
        loading: true,
        dateChangebirthday: null,
        beforeAvatarUpload: null,
        handleShopAvatarScucess: null,
        dialogFormVisible: false,
        formData: [],
        currentRow: null,
        pageNum: 1,
        count: 0,
        currentPage: 1,
        sexOptions: [{
          sexValue: 0,
          label: '男性'
        }, {
          sexValue: 1,
          label: '女性'
        }],
        sexValue: '',
        marriageOptions: [{
          marriageValue: 0,
          label: '未婚'
        }, {
          marriageValue: 1,
          label: '已婚'
        }],
        marriageValue: '',
        isExpertOptions: [{
          isExpertValue: true,
          label: '是'
        }, {
          isExpertValue: false,
          label: '否'
        }],
        isExpertValue: '',
        checkStateOptions: [{
          checkStateValue: 0,
          label: '未认证'
        }, {
          checkStateValue: 1,
          label: '已通过'
        }, {
          checkStateValue: 2,
          label: '未通过'
        }, {
          checkStateValue: 3,
          label: '驳回'
        }],
        checkStateValue: '',
        birthday: ''
      }
    },
    created () {
      this.initData()
    },
    methods: {
      async initData () {
        try {
          const doctorData = await getFindDoctorByCondition({
            hospitalDeptId: 1,
            pageNum: this.pageNum,
            pageSize: 10
          })
          if (doctorData.code === 0) {
            this.count = doctorData.data.total
            this.formData = []
            doctorData.data.list.forEach(item => {
              const formData = {}
              formData.id = item.id
              formData.doctorName = item.doctorName
              formData.birthday = item.birthday
              formData.title = item.title
              if (item.sex === 1) { // 0-男、1-女、2-未知
                formData.sex = '女'
              } else {
                formData.sex = '男'
              }
              if (item.marriage === 1) { // 婚姻情况(0-未婚、1-已婚、2-未知)
                formData.marriage = '已婚'
              } else {
                formData.marriage = '未婚'
              }
              formData.mobile = item.mobile
              formData.height = item.height
              formData.weight = item.weight
              formData.address = item.address
              formData.education = item.education
              formData.guoHaoMoney = item.guoHaoMoney
              formData.idNumber = item.idNumber
              formData.intro = item.intro
              formData.specialty = item.specialty
              this.formData.push(formData)
            })
          } else {
            throw new Error('获取数据失败')
          }
        } catch (err) {
          console.log('获取数据失败', err)
        }
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(val)
        this.pageNum = val
        this.getDoctorList()
      },
      async handleEdit (index, row) {
        console.log(row)
        this.dialogFormVisible = true
      },
      async updateDoctor () {
        console.log('fffff')
        this.dialogFormVisible = false
      },
      async handleDelete (index, row) {
        try {
          const res = await fetchDeleteDoctor({doctorId: row.id})
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: '删除医生成功'
            })
            this.formData.splice(index, 1)
          } else {
            throw new Error(res.message)
          }
        } catch (err) {
          this.$message({
            type: 'error',
            message: err.message
          })
          console.log('删除医生失败')
        }
      },
      async getDoctorList () {
        const doctorData = await getFindDoctorByCondition({
          hospitalDeptId: 1,
          pageNum: this.pageNum,
          pageSize: 10
        })
        if (doctorData.code === 0) {
          this.formData = []
          this.loading = false
          doctorData.data.list.forEach(item => {
            const formData = {}
            formData.doctorName = item.doctorName
            formData.birthday = item.birthday
            formData.title = item.title
            this.formData.push(formData)
          })
        } else {
          throw new Error('获取数据失败')
        }
      }
    }
  }
</script>

<style lang="less">
  @import '../style/mixin';

  .table_container {
    padding: 20px;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .table_container {
    padding: 20px;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
