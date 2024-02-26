export default{
    state:{
        //控制菜单栏状态变量
        isCollapse:false,
        //面包屑数据
        tabslist:[
            {
                path: "/Home",
                name: "Home",
                label: "首页",
                icon: "s-home",
                url: "Home/home" 
            }
        ]
    },
    mutations:{
        collapseChange(state){
            state.isCollapse = !state.isCollapse
        },
        menuChange(state,val){
            //更新面包屑的数据val菜单对象数据
            if(val.name !== 'Home'){
                const index = state.tabslist.findIndex(item => item.name === val.name)
                if(index === -1){
                    state.tabslist.push(val)
                }
            }
        },
        closeTag(state,val){
            const index = state.tabslist.findIndex(item => item.name === val.name)
            state.tabslist.splice(index,1)
        }
    }
}