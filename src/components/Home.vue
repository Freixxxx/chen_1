<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="user">
                        <img :src="imgsrc" />
                        <div class="userinfo">
                            <p class="name">{{ username }}</p>
                            <p class="access">{{ role }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="login-info">
                        <p>班级：<span>{{ userclass }}</span></p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16" style="padding-left: 20px;">
                <el-card class="box-card system_bulletin">
                    <div slot="header" class="system_title">
                        <span>我的申请</span>
                    </div>
                    <el-table :data="systemData" style="width: 100%; line-height:normal;" height="200"
                        :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
                        <el-table-column fixed prop="borrowid" label="借用号" width="150">
                        </el-table-column>
                        <el-table-column fixed prop="classid" label="教室号">
                        </el-table-column>
                        <el-table-column label="学号" width="160">
                            <template slot-scope="scope" v-if="scope.row.userInfo">
                                <span>{{ scope.row.userInfo[0].id }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="名字">
                            <template slot-scope="scope" v-if="scope.row.userInfo">
                                <span>{{ scope.row.userInfo[0].username }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="班级" width="150">
                            <template slot-scope="scope" v-if="scope.row.userInfo">
                                <span>{{ scope.row.userInfo[0].userclass }}</span>
                                <span v-if="scope.row.userInfo[0].userclass === null">老师</span>
                            </template>
                        </el-table-column>
                        <el-table-column fixed prop="usetime" label="使用时间" width="150">
                            <template slot-scope="scope">
                                <span v-if="scope.row.usetime === 'use11'">周一8:00-9:35</span>
                                <span v-if="scope.row.usetime === 'use12'">周一9:50-12:15</span>
                                <span v-if="scope.row.usetime === 'use13'">周一13:00-16:00</span>
                                <span v-if="scope.row.usetime === 'use14'">周一18:00-20:45</span>
                                <span v-if="scope.row.usetime === 'use21'">周二8:00-9:35</span>
                                <span v-if="scope.row.usetime === 'use22'">周二9:50-12:15</span>
                                <span v-if="scope.row.usetime === 'use23'">周二13:00-16:00</span>
                                <span v-if="scope.row.usetime === 'use24'">周二18:00-20:45</span>
                                <span v-if="scope.row.usetime === 'use31'">周三8:00-9:35</span>
                                <span v-if="scope.row.usetime === 'use32'">周三9:50-12:15</span>
                                <span v-if="scope.row.usetime === 'use33'">周三13:00-16:00</span>
                                <span v-if="scope.row.usetime === 'use34'">周三18:00-20:45</span>
                                <span v-if="scope.row.usetime === 'use41'">周四8:00-9:35</span>
                                <span v-if="scope.row.usetime === 'use42'">周四9:50-12:15</span>
                                <span v-if="scope.row.usetime === 'use43'">周四13:00-16:00</span>
                                <span v-if="scope.row.usetime === 'use44'">周四18:00-20:45</span>
                                <span v-if="scope.row.usetime === 'use51'">周五8:00-9:35</span>
                                <span v-if="scope.row.usetime === 'use52'">周五9:50-12:15</span>
                                <span v-if="scope.row.usetime === 'use53'">周五13:00-16:00</span>
                                <span v-if="scope.row.usetime === 'use54'">周五18:00-20:45</span>
                                <span v-if="scope.row.usetime === 'use61'">周六8:00-9:35</span>
                                <span v-if="scope.row.usetime === 'use62'">周六9:50-12:15</span>
                                <span v-if="scope.row.usetime === 'use63'">周六13:00-16:00</span>
                                <span v-if="scope.row.usetime === 'use64'">周六18:00-20:45</span>
                                <span v-if="scope.row.usetime === 'use71'">周日8:00-9:35</span>
                                <span v-if="scope.row.usetime === 'use72'">周日9:50-12:15</span>
                                <span v-if="scope.row.usetime === 'use73'">周日13:00-16:00</span>
                                <span v-if="scope.row.usetime === 'use74'">周日18:00-20:45</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="reason" label="借用原因" width="200">
                        </el-table-column>
                        <el-table-column fixed="right" label="处理申请">
                            <template slot-scope="scope">
                                <span v-if="scope.row.accept === 2" style="color: lawngreen;">已通过</span>
                                <span v-if="scope.row.accept === 0" style="color: crimson;">拒绝申请</span>
                                <span v-if="scope.row.accept === 1" style="color: yellow;">等待申请</span>
                            </template>
                        </el-table-column>
                    </el-table>
                    <!-- <div v-for="item in systemData" :key="item.id" class="system_context item">
                        <div>
                            {{ item.title }}
                        </div>
                        <div>
                            <i :class="`el-icon-${item.icon}`">{{ item.date }}</i>
                        </div>
                    </div> -->
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-card class="box-card" style="margin-top:20px;">
                    <div class="b_table">
                        <el-table :data="tableData" stripe style="width: 100%" height="250"
                            :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }"
                            :default-sort="{ prop: 'lessontime', order: 'ascending' }">
                            <el-table-column prop="lessonname" label="课程名称" width="250"></el-table-column>
                            <el-table-column prop="useclass" label="上课地点" width="250"></el-table-column>
                            <el-table-column prop="lessontime" label="上课时间" width="250">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.lessontime === 'use11'">周一8:00-9:35</span>
                                    <span v-if="scope.row.lessontime === 'use12'">周一9:50-12:15</span>
                                    <span v-if="scope.row.lessontime === 'use13'">周一13:00-16:00</span>
                                    <span v-if="scope.row.lessontime === 'use14'">周一18:00-20:45</span>
                                    <span v-if="scope.row.lessontime === 'use21'">周二8:00-9:35</span>
                                    <span v-if="scope.row.lessontime === 'use22'">周二9:50-12:15</span>
                                    <span v-if="scope.row.lessontime === 'use23'">周二13:00-16:00</span>
                                    <span v-if="scope.row.lessontime === 'use24'">周二18:00-20:45</span>
                                    <span v-if="scope.row.lessontime === 'use31'">周三8:00-9:35</span>
                                    <span v-if="scope.row.lessontime === 'use32'">周三9:50-12:15</span>
                                    <span v-if="scope.row.lessontime === 'use33'">周三13:00-16:00</span>
                                    <span v-if="scope.row.lessontime === 'use34'">周三18:00-20:45</span>
                                    <span v-if="scope.row.lessontime === 'use41'">周四8:00-9:35</span>
                                    <span v-if="scope.row.lessontime === 'use42'">周四9:50-12:15</span>
                                    <span v-if="scope.row.lessontime === 'use43'">周四13:00-16:00</span>
                                    <span v-if="scope.row.lessontime === 'use44'">周四18:00-20:45</span>
                                    <span v-if="scope.row.lessontime === 'use51'">周五8:00-9:35</span>
                                    <span v-if="scope.row.lessontime === 'use52'">周五9:50-12:15</span>
                                    <span v-if="scope.row.lessontime === 'use53'">周五13:00-16:00</span>
                                    <span v-if="scope.row.lessontime === 'use54'">周五18:00-20:45</span>
                                    <span v-if="scope.row.lessontime === 'use61'">周六8:00-9:35</span>
                                    <span v-if="scope.row.lessontime === 'use62'">周六9:50-12:15</span>
                                    <span v-if="scope.row.lessontime === 'use63'">周六13:00-16:00</span>
                                    <span v-if="scope.row.lessontime === 'use64'">周六18:00-20:45</span>
                                    <span v-if="scope.row.lessontime === 'use71'">周日8:00-9:35</span>
                                    <span v-if="scope.row.lessontime === 'use72'">周日9:50-12:15</span>
                                    <span v-if="scope.row.lessontime === 'use73'">周日13:00-16:00</span>
                                    <span v-if="scope.row.lessontime === 'use74'">周日18:00-20:45</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="user" label="任课老师" width="220"></el-table-column>
                            <el-table-column prop="endtime" label="结束时间" width="220"></el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            id: "",
            imgsrc: "",
            username: "",
            role: "",
            userclass: "",
            tableData: [

            ],
            systemData: [

            ],
        }
    },
    created() {
        this.$http.post('/userinfo', localStorage.getItem('token')
        ).then((response) => {
            console.log(response)
            // this.imgsrc = require("@/assets/" + response.data.data.imgsrc)
            this.id = response.data.data.id
            this.imgsrc = require("C:/Vue/demo/classroom/public/imgSave/" + response.data.data.imgsrc)
            this.role = response.data.data.role
            this.username = response.data.data.username
            this.userclass = response.data.data.userclass
        }).catch(e => {
            console.log(e)
        })
    },
    mounted() {
        setTimeout(() => {
            console.log(this.userclass)
            if (this.userclass != null) {
                this.$http.post('/lesson/findByMajor', { "major": this.userclass }
                ).then((response) => {
                    console.log(response)
                    this.tableData = response.data
                }).catch(e => {
                    console.log(e)
                })
            }
            this.showBorrow()
        }, 500)
        

    },
    methods: {
        showBorrow() {
            this.$http.post('/borrow/my', { "userid": this.id }
            ).then((response) => {
                console.log(response)
                this.systemData = response.data.data.borrow
            }).catch(e => {
                console.log(e)
            })
        }
    }

}
</script>

<style lang="less" scoped>
.user {
    display: flex;
    align-items: center;
    padding-bottom: 40px;
    line-height: normal;

    img {
        margin-left: 40px;
        border-radius: 50%;
        width: 150px;
        height: 150PX;
        object-fit: cover;
        object-position: center;
    }

    .userinfo {
        margin-left: 40px;

        .name {
            font-size: 30px;
            margin-bottom: 10px;
        }

        .access {
            color: #999;
            margin-top: 0px;
        }
    }
}

.login-info {
    text-align: center;

    p {
        color: #999;
        line-height: 28px;

        span {
            color: #555;
            margin-left: 20px;
        }
    }
}

.b_table {
    line-height: normal;
}

.system_bulletin {
    line-height: normal;
    height: 283.6px;

    .system_title {
        font-size: 22px;
        color: #000;
    }

    .system_context {
        padding-bottom: 10px;
        border-bottom: 1px #f2f2f2 solid;
        margin-bottom: 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>