<template>
    <div>
        <div style="line-height:normal; float: left; padding-bottom: 10px;">
            <el-input v-model="major" style="width: 150px;" placeholder="模糊搜索: 班级"></el-input>
            <el-button @click="handleQuery" type="primary">搜索班级名</el-button>
            <el-input v-model="lessonname" style="width: 150px; padding-left: 20px;" placeholder="模糊搜索：课程"></el-input>
            <el-button @click="handleQuery_lesson" type="primary">搜索课程名</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%; line-height:normal;" height="500px"
            :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
            <el-table-column fixed prop="lessonid" label="课程号" width="150">
            </el-table-column>
            <el-table-column fixed prop="lessonname" label="课程名" width="150">
            </el-table-column>
            <el-table-column fixed prop="useclass" label="上课地点" width="150">
            </el-table-column>
            <el-table-column fixed prop="user" label="老师" width="150">
            </el-table-column>
            <el-table-column fixed prop="lessontime" label="上课时间" width="150">
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
            <el-table-column fixed prop="major" label="班级" width="150">
            </el-table-column>
            <el-table-column fixed prop="endtime" label="课程截至时间" width="150">
            </el-table-column>
        </el-table>
        <el-pagination style="align:center; line-height: normal;" @size-change="handleSizeChange" :total="sourceData.length"
            @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
            :page-sizes="[10, 20, 200]" layout="sizes, prev, pager, next, jumper, total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'LessonList',
    data() {
        return {
            tableData: [{
                lessonid: "1",
                lessonname: "2",
                userclass: "3",
                teacher: "4",
                lessontime: "5",
                major: "6",
                endtime: "7"
            }],
            sourceData: [],
            currentPage: 1, //当前页
            pageSize: 10,
            major: "",
            lessonname:"",
        }
    },
    methods: {
        currentChangePage(list, currentPage) {
            let from = (currentPage - 1) * this.pageSize;
            let to = currentPage * this.pageSize;
            this.tableData = [];
            for (; from < to; from++) {
                if (list[from]) {
                    this.tableData.push(list[from]);
                }
            }
            console.log(this.tableData);
        },
        handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage;
            this.currentChangePage(this.sourceData, currentPage);
        },
        // 每页条数切换
        handleSizeChange: function (pageSize) {
            this.pageSize = pageSize;
            this.handleCurrentChange(this.currentPage);
            this.handleCurrentChange(1);
        },
        filterUse(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        handleQuery() {
            this.$http.post('/lesson/findByMajor', { "major": this.major }
            ).then((response) => {
                console.log(response)
                this.tableData = response.data.slice(0, 9)
                this.sourceData = response.data
            }).catch(e => {
                console.log(e)
            })
            console.log(this.major)
        },
        handleQuery_lesson() {
            this.$http.post('/lesson/findByLessonname', { "lessonname": this.lessonname }
            ).then((response) => {
                console.log(response)
                this.tableData = response.data.slice(0, 9)
                this.sourceData = response.data
            }).catch(e => {
                console.log(e)
            })
        },
    },
    created() {
        this.$http.get('/lesson/all'
        ).then((response) => {
            console.log(response)
            this.tableData = response.data
            // .slice(0, 9)
            this.sourceData = response.data
        }).catch(e => {
            console.log(e)
        })
    }
}
</script>