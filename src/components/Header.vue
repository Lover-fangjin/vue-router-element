<template>
    <el-row class="header" :gutter="10">
        <el-col :xs="4" :sm="1" :md="1" :lg="4" :xl="4" class="logo">
            <div class="grid-content bg-purple header-logo">
                <div class="logo_img"><img src="@/assets/logo.png" alt="" class="logo_img"></div> 
                <p class="logo_text" style="color:#fff;">城市级智慧停车管理平台</p>
            </div>
        </el-col>
        <el-col :xs="20" :sm="19" :md="19" :lg="20" :xl="20" class="header_center">
            <el-menu 
                :default-active="activeIndex2"
                mode="horizontal"
                @select="handleSelect"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
            <el-menu-item :index="item.id" v-for="(item,index) in menuData" :key="index">
                {{item.label}}
                <!-- <router-link :to="item.path">{{item.label}}</router-link> -->
            </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="header_right">
            <div>
                <span>(新消息5条)</span>
            </div>
            <div>
                <span class="test">管理员</span>
            </div>
            <div @click="onLogout">
                <span>退出</span>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import menuList from '../util/menu.js'
export default {
    data() {
        return {
            menuData: menuList,
            activeIndex2: '1'
        }
    },
    
    mounted () {
        let me = this;
        me.userInfo = JSON.parse(localStorage.getItem('user'));
        me.$store.commit('updateSelectedMenu', me.menuData[0]);
    },
    methods: {
        onLogout() {
            this.$api.logout().then(res => {
                if(res.code === 200) {
                    this.$router.push('/login')
                }
            });
        },
        handleSelect(key, keyPath) {
            let me = this;
            let list = me.menuData.filter(item =>{  return item.id == key })
            if(list.length == 0) { return; }
            let item = list[0]
            if(me.$route.path != item.path) {
                me.$store.commit('updateSelectedMenu', item)
                me.$router.push(item.path)
            }
        }
    },
    computed: {
      
    },
};
</script>

<style lang="scss" scoped>
// @import "@/assets/style/global.scss";

.el-menu-item{
    background: $siderbarBgColor !important;
}
.el-menu{
    border-right:none !important;
}
.header {
    display: flex;
    width: 100%;
    background: $siderbarBgColor;
    .logo {
        height: 61px;
        line-height: 61px;
        vertical-align: middle;
        .logo_text{
            vertical-align: middle;
            display: inline;
            margin-left: 10px;
        }
        .logo_img{
            vertical-align: middle;
            display: inline;
            width: 34px;
            height: 34px;
        }
    }
    .header_center{
        background: $siderbarBgColor;
        color: #fff !important;
        display: flex;
        .el-menu-item{
            flex: 1 ;
            text-align: center;
            line-height: 61px;
        }
    }

    .el-menu.el-menu--horizontal{
        background: $siderbarBgColor;
    }
    .el-menu--horizontal>.el-menu-item{
        color: #fff;
    }
    .header_right{
        display: flex;
        cursor:pointer; 
        div{
            margin-left: 10px;
            flex: 1;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            line-height: 61px;
            span{
                margin-left: 10px;
                color: #fff;
            }
        }
    }
}
</style>

