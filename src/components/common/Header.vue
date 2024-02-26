<template>
    <div class="header-container">
        <div class="l-context">
            <el-button type="primary" icon="el-icon-arrow-left" circle size="medium" style="margin-left: 20px;"
                @click="handleMenu">
            </el-button>
            <el-breadcrumb separator="/" style="padding-left: 10px;">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label
                }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-context">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user_img" :src="imgsrc" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="user_info">个人信息</el-dropdown-item>
                    <el-dropdown-item @click.native="log_out">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '@/store';

export default {
    name: 'Header',
    data(){
        return{
            imgsrc:"",
        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseChange');
        },
        log_out() {
            console.log(localStorage.getItem('token'));
            store.commit('logout');
            this.$router.push('/Login');
            console.log(localStorage.getItem('token'));
        },
        user_info(){
            this.$router.push('/UserInfo')
        }
        // headphoto() {
        //     this.$http.post('/userinfo/img', localStorage.getItem('token')
        //     ).then((response) => {
        //         console.log(response)
        //         this.imgsrc = require("@/assets/" + response.data.data.imgsrc)
                
        //     }).catch(e => {
        //         console.log(e)
        //     })
        // }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabslist
        })
    },
    created(){
            this.$http.post('/userinfo', localStorage.getItem('token')
            ).then((response) => {
                console.log(response)
                this.imgsrc = require("C:/Vue/demo/classroom/public/imgSave/" + response.data.data.imgsrc)
                
            }).catch(e => {
                console.log(e)
            })
    }


};
</script>

<style lang="less" scoped>
.header-container {
    height: 60px;
    background-color: #242f42;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .l-context {
        display: flex;
        align-items: center;

        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;

                &.is-link {
                    color: #666;
                }
            }

            &:last-child {
                .el-breadcrumb__inner {
                    color: #FFF;
                }
            }
        }
    }

    .r-context {
        padding-right: 20px;
        padding-top: 25px;

        .user_img {
            border-radius: 50%;
            width: 40px;
            height: 40PX;
            object-fit: cover;
            object-position: center;
        }
    }
}</style>