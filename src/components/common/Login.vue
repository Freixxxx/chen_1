<template>
    <div class="login_container">
        <div class="login_form">
            <p class="login_title">教室管理系统</p>
            <el-form :model="form" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
                <el-form-item label="学号" prop="id">
                    <el-input v-model="form.id" placeholder="请输入学号"></el-input>
                </el-form-item>
                <el-form-item label="账号" prop="username" style="display: none;">
                    <el-input v-model="form.username" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="medium" @click="checkForm">登录</el-button>
                    <el-button type="primary" size="medium" @click="submitForm" style="display: none;">更改密码</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import store  from '@/store'
export default {
    name: 'Login',
    data() {
        return {
            form: {
                id:"",
                username: "",
                password: "",
            },
            rules: {
                id: {
                    required: true, message: '请输入学号', trigger: 'blur'
                },
                username: {
                    required: false, message: '请输入账号', trigger: 'blur'
                },
                password: {
                    required: true, message: '请输入密码', trigger: 'blur'
                }
            }
        }
    },
    methods: {
        submitForm() {
            this.$http.post('/user/login', this.form,
            ).then((response) => {
                console.log(response.data)
                console.log(this.form)
            }).catch(e => {
                console.log(e)
            })
        }, checkForm() {
            this.$http.post('/user/log_in', this.form,
            ).then((response) => {
                console.log(response.data)
                console.log(this.form)
                if (response.data.success == true) {
                    store.commit('setToken',response.data.data.token);
                    this.$router.push('/Home');
                    console.log(localStorage.getItem('token'));
                } else {
                    const h = this.$createElement;

                    this.$notify({
                        title: '密码或账号或学号错误',
                        message: h('i', { style: 'color: teal' }, '修改你的账号或密码')
                    })
                }
            }).catch(e => {
                        console.log(e)
                    })
        }
    }
}
</script>

<style lang="less" scoped>
.login_container {
    width: 100%;
    height: 100vh;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    .login_form {
        width: 510px;
        margin: 0px auto;
        padding: 0 55px 15px 35px;
        background-color: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 25px #cac6c6;

        .login_title {
            font-family: '微软雅黑 Bold', '微软雅黑';
            font-weight: 700;
            text-decoration: none;
            color: rgb(0, 121, 254);
            font-size: 32px;
            margin-top: 50px;
            margin-bottom: 30px;
            text-align: center;
        }
    }
}
</style>