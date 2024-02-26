<template>
    <div>
        <el-dialog style="line-height: normal;" :visible.sync="dialogVisible2" width="60%" :before-close="handleClose2"
            height="500px">
            <el-table :data="dialogData" style="width: 100%; line-height:normal;"
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
                <el-table-column fixed="right" label="删除申请">
                    <template slot-scope="scope">
                        <el-button type="danger" @click="delete_borrow2(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>



        <el-dialog style="line-height: normal;" :visible.sync="dialogVisible" width="60%" :before-close="handleClose"
            height="500px">
            <el-table :data="dialogData" style="width: 100%; line-height:normal;"
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
                        <el-button type="primary" v-if="scope.row.accept === 1"
                            @click="accept_borrow(scope.row)">同意</el-button>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="拒绝申请">
                    <template slot-scope="scope">
                        <el-button type="primary" v-if="scope.row.accept === 1"
                            @click="refuse_borrow(scope.row)">拒绝</el-button>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="删除申请">
                    <template slot-scope="scope">
                        <el-button type="danger" @click="delete_borrow(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>

        <div style="line-height:normal; float: left; padding-bottom: 10px;">
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-button @click="hadleTimeQuery(value)" type="primary">搜素空闲时间</el-button>
            <!-- <el-input v-model="classid" style="width: 150px; padding-left: 10px;" placeholder="模糊搜索: 教室"></el-input>-->
            <el-button type="primary" :style="{ display: visible }" @click="openChange">查看借阅申请</el-button>
            <el-button type="primary" @click="openChange2">我的申请</el-button>
        </div>

        <el-table :data="tableData" style="width: 100%; line-height:normal;" height="500px"
            :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
            <el-table-column fixed prop="classid" label="教室号" width="150">
            </el-table-column>
            <el-table-column fixed prop="classsize" label="教室容量" width="150">
            </el-table-column>
            <el-table-column fixed prop="usetime" label="使用时间" width="150">
                {{ usetime }}
            </el-table-column>
            <el-table-column fixed prop="reason" label="借用理由" width="500">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.reason" type="text" />
                </template>
            </el-table-column>
            <el-table-column fixed prop="accept" label="借用申请" width="150">
                <template slot-scope="scope">
                    <el-button type="primary" @click="submit(scope.row)">申请</el-button>
                </template>
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
    name: 'ClassroomManage',
    data() {
        return {
            dialogVisible2: false,
            dialogVisible: false,
            dialogData: [{
                borrowid: "1",
                userid: "1",
                usetime: "1",
                classid: "1",
                reason: "1",
            }],
            tableData: [{
                classid: "",
                classsize: "",
                usetime: "",
            }],
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
            sourceData: [],
            value: "",
            classid: "",
            currentPage: 1, //当前页
            pageSize: 10,
            usetime: "",
            borrowData: {
                userid: "",
                usetime: "",
                classid: "",
                reason: "",
                accept: ""
            },
            visible: "none",
            role: "",
            message: ""

        }
    },
    created() {
        this.$http.post('/userinfo', localStorage.getItem('token')
        ).then((response) => {
            this.borrowData.userid = response.data.data.id
            this.role = response.data.data.role
        }).catch(e => {
            console.log(e)
        })
    },
    mounted() {
        setTimeout(() => {
            console.log(this.role)
            if (this.role === "管理员") {
                this.visible = ""
            }
        }, 500)
    },
    methods: {
        accept_borrow(list) {
            console.log(list)
            this.$http.post('/borrow/accept', {
                "borrowid": list.borrowid,
                "accept": "2",
                "classid": list.classid,
                "usetime": list.usetime
            }
            ).then((response) => {
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            this.openChange()
        },
        refuse_borrow(list) {
            console.log(list)
            this.$http.post('/borrow/accept', {
                "borrowid": list.borrowid,
                "accept": "0",
                "classid": list.classid,
                "usetime": list.usetime
            }
            ).then((response) => {
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            this.openChange()
        },
        delete_borrow(list) {
            console.log(list)
            this.$http.post('/borrow/accept', {
                "borrowid": list.borrowid,
                "accept": "3",
                "classid": list.classid,
                "usetime": list.usetime
            }
            ).then((response) => {
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            this.openChange()
        },
        delete_borrow2(list) {
            console.log(list)
            this.$http.post('/borrow/accept', {
                "borrowid": list.borrowid,
                "accept": "3",
                "classid": list.classid,
                "usetime": list.usetime
            }
            ).then((response) => {
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            this.openChange2()
        },
        openChange() {
            this.dialogVisible = true;
            setTimeout(() => {
                this.$http.get('/borrow/all',
                ).then((response) => {
                    console.log(response)
                    this.dialogData = response.data.data.borrow
                }).catch(e => {
                    console.log(e)
                })
            }, 500)
        },
        openChange2() {
            this.dialogVisible2 = true;
            setTimeout(() => {
                this.$http.post('/borrow/my',{"userid":this.borrowData.userid}
                ).then((response) => {
                    console.log(response)
                    this.dialogData = response.data.data.borrow
                }).catch(e => {
                    console.log(e)
                })
            }, 500)
        },
        handleClose() {
            this.dialogVisible = false;
        },
        handleClose2() {
            this.dialogVisible2 = false;
        },
        //借用教室
        submit(list) {
            this.borrowData.classid = list.classid
            this.borrowData.reason = list.reason
            this.borrowData.accept = 1
            this.$http.post('/borrow', this.borrowData
            ).then((response) => {
                console.log(response)
                this.message = response.data.message
            }).catch(e => {
                console.log(e)
            })
            console.log(this.borrowData)
            this.$message('提交成功');
        },
        filterUse(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
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
        hadleTimeQuery(value) {
            this.borrowData.usetime = value
            console.log(value)
            switch (value) {
                case "use11":
                    this.$http.post('/classes/findByUse11', { "use11": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    break
                case "use12":
                    this.$http.post('/classes/findByUse12', { "use12": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(12)
                    break
                case "use13":
                    this.$http.post('/classes/findByUse13', { "use13": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(13)
                    break
                case "use14":
                    this.$http.post('/classes/findByUse14', { "use14": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(14)
                    break
                case "use21":
                    this.$http.post('/classes/findByUse21', { "use21": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(21)
                    break
                case "use22":
                    this.$http.post('/classes/findByUse22', { "use22": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(22)
                    break
                case "use23":
                    this.$http.post('/classes/findByUse23', { "use23": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(23)
                    break
                case "use24":
                    this.$http.post('/classes/findByUse24', { "use24": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(24)
                    break
                case "use31":
                    this.$http.post('/classes/findByUse31', { "use31": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(31)
                    break
                case "use32":
                    this.$http.post('/classes/findByUse32', { "use32": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(32)
                    break
                case "use33":
                    this.$http.post('/classes/findByUse33', { "use33": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(33)
                    break
                case "use34":
                    this.$http.post('/classes/findByUse34', { "use34": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(34)
                    break
                case "use41":
                    this.$http.post('/classes/findByUse41', { "use41": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(41)
                    break
                case "use42":
                    this.$http.post('/classes/findByUse42', { "use42": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(42)
                    break
                case "use43":
                    this.$http.post('/classes/findByUse43', { "use43": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(43)
                    break
                case "use44":
                    this.$http.post('/classes/findByUse44', { "use44": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(44)
                    break
                case "use51":
                    this.$http.post('/classes/findByUse51', { "use51": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(51)
                    break
                case "use52":
                    this.$http.post('/classes/findByUse52', { "use52": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(52)
                    break
                case "use53":
                    this.$http.post('/classes/findByUse53', { "use53": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(53)
                    break
                case "use54":
                    this.$http.post('/classes/findByUse54', { "use54": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(54)
                    break
                case "use61":
                    this.$http.post('/classes/findByUse61', { "use61": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(61)
                    break
                case "use62":
                    this.$http.post('/classes/findByUse62', { "use62": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(62)
                    break
                case "use63":
                    this.$http.post('/classes/findByUse63', { "use63": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(63)
                    break
                case "use64":
                    this.$http.post('/classes/findByUse64', { "use64": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(64)
                    break
                case "use71":
                    this.$http.post('/classes/findByUse71', { "use71": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(71)
                    break
                case "use72":
                    this.$http.post('/classes/findByUse72', { "use72": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(72)
                    break
                case "use73":
                    this.$http.post('/classes/findByUse73', { "use73": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(73)
                    break
                case "use74":
                    this.$http.post('/classes/findByUse74', { "use74": 0 }
                    ).then((response) => {
                        console.log(response)
                        this.tableData = response.data.data.list.slice(0, 9)
                        this.sourceData = response.data.data.list
                        this.usetime = response.data.data.usetime
                    }).catch(e => {
                        console.log(e)
                    })
                    console.log(74)
                    break
                default:
                    console.log("null")
            }
        }
    }
}
</script>