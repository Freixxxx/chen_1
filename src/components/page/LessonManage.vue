<template>
    <div>
        <el-table :data="lessonData" style="width: 100%; line-height:normal;" height="120px"
            :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
            <el-table-column fixed prop="lessonid" label="课程号" width="150">
            </el-table-column>
            <el-table-column fixed prop="lessonname" label="课程名" width="150">
                <el-input v-model="tableData.lessonname"></el-input>
            </el-table-column>
            <el-table-column prop="useclass" label="上课地点" width="150">
                <el-input v-model="tableData.useclass"></el-input>
            </el-table-column>
            <el-table-column prop="teacher" label="老师号" width="150">
                <el-input v-model="tableData.teacher"></el-input>
            </el-table-column>
            <el-table-column prop="lessontime" label="上课时间" width="150">
                <template slot-scope="scope">
                    <el-select v-model="tableData.lessontime" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="major" label="班级" width="150">
                <el-input v-model="tableData.major"></el-input>
            </el-table-column>
            <el-table-column prop="endtime" label="课程截至时间" width="150">
                <template slot-scope="scope">
                    <el-date-picker v-model="tableData.endtime" type="date" placeholder="选择日期" format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                </template>
            </el-table-column>
            <el-table-column fixed="right" width="150">
                <template slot-scope="scope">
                    <el-button type="primary" @click="addlesson">添加课程</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div style="line-height:normal; float: left; padding-bottom: 1px;">
            <el-input v-model="lessonname" style="width: 150px; " placeholder="模糊搜索：课程"></el-input>
            <el-button round @click="handleQuery_lesson" type="primary">搜索课程名</el-button>
        </div>
        <el-table :data="sourceData" style="width: 100%; line-height:normal;" height="400px"
            :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
            <el-table-column fixed prop="lessonid" width="150">
            </el-table-column>
            <el-table-column fixed prop="lessonname" width="150">
            </el-table-column>
            <el-table-column fixed prop="useclass" width="150">
            </el-table-column>
            <el-table-column prop="user" width="150">
            </el-table-column>
            <el-table-column prop="lessontime" width="150">
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
            <el-table-column prop="major" width="150">
            </el-table-column>
            <el-table-column prop="endtime" width="150">
            </el-table-column>
            <el-table-column fixed="right" width="150">
                <template slot-scope="scope">
                    <el-button type="danger" @click="delete_lesson(scope.row)">删除课程</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'LessonManage',
    data() {
        return {
            id: "",
            lessonname: "",
            sourceData: [],
            lessonData: [{
                lessonid: "",
                lessonname: "",
                useclass: "",
                teacher: "",
                lessontime: "",
                major: "",
                endtime: ""
            }],
            tableData: {
                lessonid: "",
                lessonname: "",
                useclass: "",
                teacher: "",
                lessontime: "",
                major: "",
                endtime: ""
            },
            options: [{
                value: "use11",
                label: "周一8:00-9:35"
            }, {
                value: "use12",
                label: "周一9:50-12:15"
            }, {
                value: "use13",
                label: "周一13:00-16:00"
            }, {
                value: "use14",
                label: "周一18:00-20:45"
            }, {
                value: "use21",
                label: "周二8:00-9:35"
            }, {
                value: "use22",
                label: "周二9:50-12:15"
            }, {
                value: "use23",
                label: "周二13:00-16:00"
            }, {
                value: "use24",
                label: "周二18:00-20:45"
            }, {
                value: "use31",
                label: "周三8:00-9:35"
            }, {
                value: "use32",
                label: "周三9:50-12:15"
            }, {
                value: "use33",
                label: "周三13:00-16:00"
            }, {
                value: "use34",
                label: "周三18:00-20:45"
            }, {
                value: "use41",
                label: "周四8:00-9:35"
            }, {
                value: "use42",
                label: "周四9:50-12:15"
            }, {
                value: "use43",
                label: "周四13:00-16:00"
            }, {
                value: "use44",
                label: "周四18:00-20:45"
            }, {
                value: "use51",
                label: "周五8:00-9:35"
            }, {
                value: "use52",
                label: "周五9:50-12:15"
            }, {
                value: "use53",
                label: "周五13:00-16:00"
            }, {
                value: "use54",
                label: "周五18:00-20:45"
            }, {
                value: "use61",
                label: "周六8:00-9:35"
            }, {
                value: "use62",
                label: "周六9:50-12:15"
            }, {
                value: "use63",
                label: "周六13:00-16:00"
            }, {
                value: "use64",
                label: "周六18:00-20:45"
            }, {
                value: "use71",
                label: "周日8:00-9:35"
            }, {
                value: "use72",
                label: "周日9:50-12:15"
            }, {
                value: "use73",
                label: "周日13:00-16:00"
            }, {
                value: "use74",
                label: "周日18:00-20:45"
            }],
        }
    },
    methods: {
        addlesson() {
            console.log(this.tableData)
            this.$http.post('/lesson/insert', { "lessonname": this.tableData.lessonname, "lessontime": this.tableData.lessontime, "useclass": this.tableData.useclass, "teacher": this.tableData.teacher, "major": this.tableData.major, "endtime": this.tableData.endtime }
            ).then((response) => {
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            this.$message('添加成功');
        },
        handleQuery_lesson() {
            this.$http.post('/lesson/findByLessonname', { "lessonname": this.lessonname }
            ).then((response) => {
                console.log(response)
                this.sourceData = response.data
            }).catch(e => {
                console.log(e)
            })
        },
        delete_lesson(list) {
            this.$http.post('/lesson/delete', { "lessonid": list.lessonid, "classid": list.useclass, "lessontime": list.lessontime }
            ).then((response) => {
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            this.handleQuery_lesson()
            this.$message('删除成功');
            console.log(list)
        },
        query_teacher() {
            this.$http.post('/lesson/findByteacher', { "id": this.id }
            ).then((response) => {
                console.log(response)
                this.sourceData = response.data
            }).catch(e => {
                console.log(e)
            })
        }
    },
    created() {
        this.$http.get('/lesson/all'
        ).then((response) => {
            console.log(response)
            this.sourceData = response.data
        }).catch(e => {
            console.log(e)
        })
    },
    mounted() {

        this.$http.post('/userinfo', localStorage.getItem('token')
        ).then((response) => {
            console.log(response)
            this.id = response.data.data.id
            this.role = response.data.data.role
        }).catch(e => {
            console.log(e)
        })
        setTimeout(() => {
            if (this.role == "老师") {
                this.query_teacher()
            }
        }, 500)
    }
}
</script>