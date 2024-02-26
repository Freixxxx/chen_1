<template>
    <div name="asideContianer">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" background-color="rgb(50, 65, 87)" text-color="#fff" active-text-color="#ffd04b">
            <h4>{{ isCollapse ? '教室' : '教室管理系统' }}</h4>
            <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name" @click="clickMenu(item)">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>

            <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{ item.label }}</span>
                </template>
                <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
                    <el-menu-item :index="subItem.name" @click="clickMenu(subItem)" :style="{ display: subItem.visible }">
                        <i :class="`el-icon-${subItem.icon}`"></i>
                        <span slot="title">{{ subItem.label }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>


        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            role: "",
            i: {},
            j: {},
            // isCollapse: false,
            menuData: [
                {
                    path: "/Home",
                    name: "Home",
                    label: "首页",
                    icon: "s-home",
                    url: "Home/home"
                },
                {
                    name: "classroom",
                    label: "教室",
                    icon: "school",
                    children: [
                        {
                            path: "/ClassroomList",
                            name: "ClassroomList",
                            label: "教室列表",
                            icon: "tickets",
                            url: "classroom/ClassroomList"
                        },
                        {
                            path: "/ClassroomManage",
                            name: "ClassroomManage",
                            label: "教室管理",
                            icon: "set-up",
                            url: "classroom/ClassroomManage"
                        }
                    ]
                },
                {
                    name: "lesson",
                    label: "课程",
                    icon: "files",
                    children: [
                        {
                            path: "/LessonList",
                            name: "LessonList",
                            label: "课程列表",
                            icon: "bank-card",
                            url: "lesson/LessonList",
                            visible: ""
                        },
                        {
                            path: "/LessonManage",
                            name: "LessonManage",
                            label: "课程管理",
                            icon: "cpu",
                            url: "lesson/LessonManage",
                            visible: "none"
                        },
                    ]
                },
                // {
                //     name: "file",
                //     label: "文件",
                //     icon: "folder",
                //     children: [
                //         {
                //             path: "/FileList",
                //             name: "FileList",
                //             label: "文件列表",
                //             icon: "folder-opened",
                //             url: "file/FileList",
                //             visible: "none"
                //         },
                //         {
                //             path: "/FileManage",
                //             name: "FileManage",
                //             label: "文件管理",
                //             icon: "document",
                //             url: "file/FileManage",
                //             visible: "none"
                //         }
                //     ]
                // }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item) {
            this.$router.push(item.path);
            console.log(item);
            this.$store.commit('menuChange', item)
        }
    },
    computed: {
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    },
    created() {
        // 身份校验
        this.$http.post('/userinfo', localStorage.getItem('token')
        ).then((response) => {
            console.log(response)
            this.role = response.data.data.role
            console.log(this.role)
        }).catch(e => {
            console.log(e)
        })
    },
    mounted() {
        setTimeout(() => {
            if (this.role === "管理员" || this.role === "老师") {
                for (this.i in this.menuData.filter(item => item.children)) {
                    for (this.j in this.menuData.filter(item => item.children)[this.i].children) {
                        if (this.menuData.filter(item => item.children)[this.i].children[this.j].name === "LessonManage") {
                            this.menuData.filter(item => item.children)[this.i].children[this.j].visible = ""
                        }
                        // console.log(this.menuData.filter(item => item.children)[this.i].children[this.j])
                    }
                    // console.log(this.menuData.filter(item => item.children)[this.i])
                }
            }
        }, 500)
    }

}
</script>

<style lang="less" scoped>
.el-menu {
    height: 100vh;
    text-align: left;
    border-right: none;

    h4 {
        color: #fff;
        text-align: center;
        line-height: 45px;
        font-size: 20px;
        font-weight: 400;
        padding: 0 10px;
    }
}
</style>
