// import {} from '@/api/manager'
import pickerOptions from '@/utils/date';
import {getBase64Str} from '@/utils/base64Utils'
import base64 from '@/utils/getbase64Str2';
import {PUserController} from '@/api/login'


let login = {
    data() {
        return {
            puser: {},

        };
    },
    methods: {
         userlogin() {
            let res =PUserController(this.puser);
            console.log("88"+res.data);
                 this.$router.push({name: 'Main'});

            //console.log(this.admin);
            // 传到后端的数据为JSON数据格式
            //password: "123"
            //username: "123"
            //发送axios请求,登录成功
            // this.$router.push({name:'Index'});

            // instance.post("/user/login",this.user).then(res=>{
            //     // console.log(res.data);
            //     //console.log("返回的结果："+res);
            //     console.log(res);

            // const result = res.data;
            // if (result.success){
            //   //前端存储token信息
            //   localStorage.setItem("token",result.token);
            //   //切换路由到主页

            // }else {
            //   alert(result.msg);
            // }

        }

    }
}
export default login;