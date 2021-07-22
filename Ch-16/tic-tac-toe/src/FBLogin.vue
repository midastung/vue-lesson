<template >
    <div>
        <span>{{connected}}</span>
        <!-- 登入後按鈕不見 -->
        <button
            v-if="!connected" 
            @click="connect"
        >
        Connect
        </button>
        <div v-else>
            <h4>{{ussername}}</h4>
            <img :src="picture" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            connected: false,
            username: '',
            userID: '',
            picture: '',
        }
    },  
    methods:{
        connect(){
            FB.login(this.statusGet);
        },
        statusGet(result){
            if(result.status === 'connected'){
                this.connected = true;
                FB.api('/me', 'GET', {
                    fields: ['picture', 'email'],
                },rs => {
                    this.userID = rs.id
                    this.username = rs.name;
                    this.picture = rs.picture.data.url;
                })
            }
        },
    },
    mounted(){
        FB.init({
            appId: 182706955649650,
            version: 'v2.12',
        });
        FB.getLoginStatus(this.statusGet);
    },
};
</script>
<style lang="">
    
</style>