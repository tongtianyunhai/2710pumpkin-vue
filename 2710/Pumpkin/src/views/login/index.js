// import {} from '@/api/manager'
import pickerOptions from '@/utils/date';
import {getBase64Str} from '@/utils/base64Utils'
import base64 from '@/utils/getbase64Str2';
import instance from "../../utils/request";
import {addEntity} from '@/api/user'
let login = {
    data() {
        return {
            //create new account
            puser: {
                userName:'',
                passWord:'',
            },
            dialogVisible:false,

        formData:{
                userName:'',
                passWord:'',
                nickName:'',
                email:'',
        },
            formData2:{
                userName:'',
                checkCode:'',
            },
            //reset password
            dialogVisible2:false,

        };
    },
    methods: {
         userlogin() {
            //console.log(this.admin);
            // 传到后端的数据为JSON数据格式
            //password: "123"
            //username: "123"
            //发送axios请求,登录成功
            // this.$router.push({name:'Index'});
            instance.post("/puser/selectUserByName",this.puser).then(res=>{
                // console.log(res.data);
                //console.log("返回的结果："+res);
                console.log(res);
                console.log(res.passWord)
                // console.log(res.data.status);
                this.$router.push({name: 'Main'});
                localStorage.setItem("token",res.uid);
                console.log("99"+localStorage.getItem("token"));
             // const result = res.data;
             // console.log(result+"111")
            // if (result.success){
            //   //前端存储token信息
            //   localStorage.setItem("token",result.token);
            //   //切换路由到主页
            // }else {
            //   alert(result.msg);
            // }
         });
        },
        async add(){
        await addEntity(this.formData);

    },

    edit(){

    },


    }
}
export default login;