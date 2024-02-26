<template>
    <div>
        <el-dialog style="line-height: normal;" title="修改个人信息" :visible.sync="dialogVisible" width="60%"
            :before-close="handleClose">
            <el-form :model="form" :rules="rules" ref="form" label-width="150px">
                <div class="updateinfo">
                    <div class="left">
                        <el-form-item label="上传头像(点击图片):" prop="imgsrc">
                            <el-upload name="upload" action="http://localhost:8088/userinfo/upload" :show-file-list="false"
                                :before-upload="beforeAvatarUpload" accept=".png" :on-success="show">
                                <img class="img" :src="imgform.imgsrc" />
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="修改密码:" prop="password">
                            <el-input type="password" v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码:" prop="password2">
                            <el-input type="password" v-model="password2"></el-input>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="学号" prop="id">
                            <el-input v-model="imgform.id" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="姓名" prop="username">
                            <el-input v-model="imgform.username" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="班级" prop="userclass">
                            <el-input v-model="imgform.userclass" disabled></el-input>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="submit">提 交</el-button>
            </span>
        </el-dialog>



        <el-card>
            <el-descriptions style="line-height: normal;" title="个人信息" :column="1" :border="true"
                :contentStyle="{ 'text-align': 'center' }" :labelStyle="{ 'text-align': 'center' }">

                <template slot="extra">
                    <el-button type="primary" @click="openChange">操作</el-button>
                </template>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-picture-outline"></i>
                        头像
                    </template>
                    <img class="img" :src="imgform.imgsrc" alt="" />
                </el-descriptions-item>

                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-user"></i>
                        用户名
                    </template>
                    {{ imgform.username }}
                </el-descriptions-item>

                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-ice-cream-square"></i>
                        学号
                    </template>
                    {{ imgform.id }}
                </el-descriptions-item>

                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-s-custom"></i>
                        身份
                    </template>
                    {{ imgform.role }}
                </el-descriptions-item>

                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-school"></i>
                        班级
                    </template>
                    {{ imgform.userclass }}
                </el-descriptions-item>

            </el-descriptions>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
    data() {
        return {
            dialogVisible: false,
            password2: "",
            form: {
                id: "",
                username: "",
                password: "",
                // password2: "",
                // imgsrc: "",
            },
            imgform: {
                id: "",
                username: "",
                imgsrc: "",
                userclass: "",
                role: ""
            },
            rules: {
                password: [
                    { required: true, message: "密码不能为空", trigger: "blur" },
                ],
                // password2: [
                //     { required: true, message: "前后两次密码不一致", trigger: "blur" },
                // ],
            },
        }
    },
    created() {
        this.$http.post('/userinfo', localStorage.getItem('token')
        ).then((response) => {
            console.log(response)
            this.imgform.imgsrc = require("C:/Vue/demo/classroom/public/imgSave/" + response.data.data.imgsrc)
            this.imgform.role = response.data.data.role
            this.imgform.username = response.data.data.username
            this.form.username = response.data.data.username
            this.imgform.userclass = response.data.data.userclass
            this.form.id = response.data.data.id
            this.imgform.id = response.data.data.id
            this.form.password = response.data.data.password
        }).catch(e => {
            console.log(e)
        })
    },
    methods: {
        openChange() {
            this.dialogVisible = true;
        },
        handleClose() {
            this.dialogVisible = false;
        },
        submit() {
            if (this.form.password == this.password2) {
                this.$http.post('/user', this.form
                ).then((response) => {
                    console.log(response)
                })
                this.dialogVisible = false
                //成功提示
                const h = this.$createElement;

                this.$notify({
                    title: '密码修改成功',
                    message: h('i', { style: 'color: teal' }, '修改成功！')
                })
            } else {
                this.$message.error('两次密码输入不一致');
            }
            // console.log(this.form)
        },
        beforeAvatarUpload(file) {
            const isLt10M = file.size / 1024 / 1024 < 10;
            // console.log(file)
            if (!isLt10M) {
                this.$message.error('上传头像图片大小不能超过 10MB!');
            }
            return isLt10M;
        },
        show(file) {
            console.log(file.data.imgsrc)
            this.imgform.imgsrc = file.data.imgsrc
            this.$http.post('/userinfo/change', this.imgform
            ).then((response) => {
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
        }

    }

}
</script>

<style lang="less" scoped>
.img {
    margin-left: 40px;
    border-radius: 50%;
    width: 150px;
    height: 150PX;
    object-fit: cover;
    object-position: center;
}

.updateinfo {
    height: 350px;
    overflow: auto;
}

.left {
    /* width: 330px; */
    float: left;
}

.right {
    overflow: hidden;
}
</style>