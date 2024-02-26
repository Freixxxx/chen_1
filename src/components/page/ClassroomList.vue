<template>
    <div>
        <div style="line-height:normal; float: left; padding-bottom: 10px;">
            <el-input v-model="classid" style="width: 150px;" placeholder="模糊搜索"></el-input>
            <el-button @click="handleQuery" type="primary">搜索教室名</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%; line-height:normal; " height="500px"
            :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
            <el-table-column fixed prop="classid" label="教室号" width="150">
            </el-table-column>
            <el-table-column fixed prop="classsize" label="教室容量" width="120"
                :filters="[{ text: '100', value: 100 }, { text: '50', value: 50 }]" :filter-method="filterUse">
            </el-table-column>
            <el-table-column prop="use11" label="周一8:00-9:35" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use11 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use11 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use12" label="周一9:50-12:15" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use12 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use12 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use13" label="周一13:00-16:00" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use13 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use13 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use14" label="周一18:00-20:45" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use14 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use14 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use21" label="周二8:00-9:35" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use21 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use21 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use22" label="周二9:50-12:15" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use22 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use22 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use23" label="周二13:00-16:00" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use23 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use23 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use24" label="周二18:00-20:45" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use24 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use24 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use31" label="周三8:00-9:35" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use31 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use31 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use32" label="周三9:50-12:15" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use32 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use32 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use33" label="周三13:00-16:00" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use33 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use33 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use34" label="周三18:00-20:45" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use34 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use34 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use41" label="周四8:00-9:35" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use41 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use41 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use42" label="周四9:50-12:15" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use42 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use42 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use43" label="周四13:00-16:00" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use43 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use43 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use44" label="周四18:00-20:45" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use44 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use44 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use51" label="周五8:00-9:35" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use51 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use51 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use52" label="周五9:50-12:15" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use52 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use52 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use53" label="周五13:00-16:00" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use53 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use53 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use54" label="周五18:00-20:45" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use54 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use54 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use61" label="周六8:00-9:35" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use61 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use61 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use62" label="周六9:50-12:15" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use62 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use62 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use63" label="周六13:00-16:00" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use63 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use63 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
            <el-table-column prop="use64" label="周六18:00-20:45" width="150"
                :filters="[{ text: '空闲', value: 0 }, { text: '使用中', value: 1 }]" :filter-method="filterUse">
                <template slot-scope="scope">
                    <span v-if="scope.row.use64 === 1" style="color: crimson;">使用中</span>
                    <span v-if="scope.row.use64 === 0" style="color: lime;">空闲</span>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination style="align:center; line-height: normal;" @size-change="handleSizeChange" :total="sourceData.length"
            @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
            :page-sizes="[10, 100, 1000]" layout="sizes, prev, pager, next, jumper, total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'ClassroomList',
    data() {
        return {
            tableData: [{
                classid: "",
                classsize: "",
                use11: "",
                use12: "",
                use13: "",
                use14: "",
                use21: "",
                use22: "",
                use23: "",
                use24: "",
                use31: "",
                use32: "",
                use33: "",
                use34: "",
                use41: "",
                use42: "",
                use43: "",
                use44: "",
                use51: "",
                use52: "",
                use53: "",
                use54: "",
                use61: "",
                use62: "",
                use63: "",
                use64: "",
                use71: "",
                use72: "",
                use73: "",
                use74: "",
            }],
            sourceData: [],  //表格源数据
            currentPage: 1, //当前页
            pageSize: 10,
            classid: "",
        }
    },
    created() {
        this.$http.get('/classes/all'
        ).then((response) => {
            console.log(response)
            this.tableData = response.data.slice(0, 9)
            this.sourceData = response.data
        }).catch(e => {
            console.log(e)
        })
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
        //搜索功能
        handleQuery() {
            this.$http.post('/classes/findByid', { "classid": this.classid }
            ).then((response) => {
                console.log(response)
                this.tableData = response.data.slice(0, 9)
                this.sourceData = response.data
            }).catch(e => {
                console.log(e)
            })
            console.log(this.classid)
        },
    }
}
</script>