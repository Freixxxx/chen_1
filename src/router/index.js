import VueRouter from "vue-router";
import Vue from "vue";

import ClassroomList from '../components/page/ClassroomList.vue'
import ClassroomManage from '../components/page/ClassroomManage.vue'
import FileList from '../components/page/FileList.vue'
import FileManage from '../components/page/FileManage.vue'
import LessonList from '../components/page/LessonList.vue'
import LessonManage from '../components/page/LessonManage.vue'
import Home from '../components/Home.vue'
import Login from '../components/common/Login.vue'
import MainPage from '../components/common/MainPage.vue'
import UserInfo from '../components/page/UserInfo.vue'

Vue.use(
    VueRouter
)

const router = new VueRouter({
    routes: [
        // { path: '/' , redirect: '/Home'},
        // { path: '/Home', name: 'Home', component: Home },
        // { path: '/ClassroomList', name: 'ClassroomList', component: ClassroomList },
        // { path: '/ClassroomManage', name: 'ClassroomManage', component: ClassroomManage },
        // { path: '/FileList', name: 'FileList', component: FileList },
        // { path: '/FileManage', name: 'FileManage', component: FileManage },
        // {
        //     path:'/Login',
        //     name:'Login',
        //     component: Login
        // }
        // { path: '/' , redirect: '/Home'},
        { 
            path: '/', 
            name: 'MainPage',
            component:MainPage,
            redirect:'Home',
            children:[
                { path: 'Home', name: 'Home', component: Home },
                { path: 'ClassroomList', name: 'ClassroomList', component: ClassroomList },
                { path: 'ClassroomManage', name: 'ClassroomManage', component: ClassroomManage },
                { path: 'FileList', name: 'FileList', component: FileList },
                { path: 'FileManage', name: 'FileManage', component: FileManage },
                { path: 'UserInfo', name: 'UserInfo', component: UserInfo},
                { path: 'LessonList', name: 'LessonList', component: LessonList},
                { path: 'LessonManage', name: 'LessonManage', component: LessonManage},
        ]},
        {
            path:'/Login',
            name:'Login',
            component:Login
        }
    ]

})

//避免到当前位置的冗余导航
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}



export default router