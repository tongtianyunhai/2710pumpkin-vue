// import {} from '@/api/manager'
import pickerOptions from '@/utils/date';
import {getBase64Str} from '@/utils/base64Utils'
import base64 from '@/utils/getbase64Str2';
import instance from "../../utils/request";
import {addEntity,searchUid,addCustomerInfo} from '@/api/user'
let login = {
    data() {
        return {
            //create new account
            tableData:[],
            customer:{
                userid:'',
            },
            pstaff: {
                sid:'',
                password:'',
            },
            puser: {
                uid:'',
                passWord:'',
            },
            dialogVisible:false,

        formData:{
                uid:'',
                passWord:'',
                nickName:'',
                email:'',
        },
            formData2:{
                uid:'',
                checkCode:'',
            },
            //reset password
            dialogVisible2:false,
            // src: '../login/image/test.jpg'
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
                this.$router.push({name: 'Show'});
                localStorage.setItem("token",res.uid);
                localStorage.setItem("nickName",res.nickName);
                localStorage.setItem("user",res.roleid);
                console.log("99"+localStorage.getItem("token"));
                console.log("user"+localStorage.getItem("user"))
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
       this.pstaff.password=this.puser.passWord;
       this.pstaff.sid=this.puser.uid;
         instance.post("/pstaff/selectUserByName",this.pstaff).then(res=>{
             localStorage.setItem("user",res.roleId);
             localStorage.setItem("nickName",res.name);
             localStorage.setItem("token",res.sid);
           this.$router.push({name: 'Show'});
             console.log("user"+localStorage.getItem("user"))
         });


        },
        async add(){

       await addEntity(this.formData);
       await  searchUid(this.formData).then(response => {
                this.tableData = response;
           this.customer.userid=this.tableData.uid;
            });
       await addCustomerInfo(this.customer);
    },

    edit(){

    },


    }
}
export default login;