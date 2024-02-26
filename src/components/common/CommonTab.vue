<template>
    <div class="tabs">
        <el-tag v-for="(item,index) in tags" :key="item.path" :effect="$route.name === item.name ?'dark':'plain'"
        @click="changemenu(item)" :closable="item.name !== 'Home'" @close="handleclose(item,index)">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState,mapMutations} from 'vuex';
export default {
    name: 'CommonTab',
    computed:{
        ...mapState({
            tags:state=>state.tab.tabslist
        })
    },
    methods:{
        ...mapMutations(['closeTag']),
        changemenu(item){
            this.$router.push(item.path)
        },
        handleclose(item,index){
            this.closeTag(item)
            if(this.$route.name !== item.name){
                return
            }
            this.$router.push(this.tags[index-1])
        }
    }
}
</script>

<style lang="less" scoped>
.tabs{
    position: relative;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 5px 10px #ddd;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-left: 10px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>