<template>
    <div class="full-screen" style="position: relative;">
        <el-menu 
            style="padding-top: 20px;"
            :default-active=active
            :default-openeds=openeds
            class="el-menu-vertical-demo" 
            :collapse="isCollapse" 
            background-color="#001529"
            active-text-color="#ffd04b"
            text-color="#ddd">
            <NavMenu v-for="item in selectedMenu.children" :key="item.id" :menu="item"></NavMenu>
        </el-menu>
        
        <div class="collapse" @click="isCollapse = !isCollapse">
            <span v-if="isCollapse"><i class="el-icon-d-arrow-right"></i></span>
            <span v-else><i class="el-icon-d-arrow-left"></i> 收起侧栏</span>
        </div>
    </div>
</template>

<script>
import NavMenu from '../components/NavMenu.vue'
import menuList from '../util/menu.js'
import {mapGetters} from "vuex";
export default {
    data() {
        return {
            isCollapse: false,
            openeds: ['1'],
            active:'1-1',
            menuData: menuList
        };
    },
    components: {
        NavMenu,
    },
    computed:{
        ...mapGetters(["selectedMenu"])
    },
    mounted () {
        // this.$router.push('/home/displace')
    },
    watch: {
        selectedMenu(newValue, oldValue) {
            console.log('newValue',newValue)
        }
    },
}
</script>

<style lang="scss" scoped>
.collapse{
    height: 30px; 
    width: 100%; 
    background: #012548; 
    position: absolute; 
    bottom: 0; 
    left: 0; 
    text-align: left;
    overflow: hidden;
    cursor: pointer;
    white-space: nowrap;
    color: #fff;

    span{
        display: flex;
        padding-top: 5px;
        align-self: center;
        font-size: 14px; 
        color: #fff;
    }
    i{
       padding: 3px 10px 3px 24px;
    }
}
.collapse:hover{
    background: #013468; 
}
.project {
    vertical-align: text-bottom;
    font-size: 30px;
    padding: 20px 30px;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 600;
    background-image: -webkit-gradient(linear, 37.219838% 34.532506%, 36.425669% 93.178216%, from(#29cdff), to(#0a60ff), color-stop(0.37, #148eff));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>


<style>
/* .el-aside{
    min-width: 200px !important;
} */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
}
.el-menu {
    border-right: solid 1px #e6e6e600 !important;
    text-align: left;
}
.el-menu-item:hover{
    background: #0150a0 !important;
}
.el-submenu__title {
    padding: 0 40px 0 20px !important;
}
</style>