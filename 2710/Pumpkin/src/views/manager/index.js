// import {} from '@/api/manager'
import pickerOptions from '@/utils/date';
import {getBase64Str} from '@/utils/base64Utils'
import base64 from '@/utils/getbase64Str2';
import {searchPage,deleteStaffById,addEntity,update,selectType,searchCustomer,updateCustomer} from '@/api/manager'


let manager = {
    data() {
        return {
            //日期变量名
            value2: '',
            //table的list
            tableData: [],
            tableData2: [],
            dialogVisible:false,
            total:0,
            searchParams: {
                currentPage: 1,//当前页
                pageSize: 3,//每页显示条数
            },
            labelposition: 'left',
            //修改表单
            formData:{},//新增表单信息
            fileList:[{
                name: '',
                url: '',
            }],
            formData2:{},
            formData3:{},//删除
            dialogVisible2: false,
            dialogVisible3: false,
            dialogVisible4: false,
            //upload picture


            //search staff
            staff:{
              sid:''
            },
            options: [],

            //addSort
            formData4:{
                name:'',
                department:'',
                address:'',
                city:'',
                zipcode:'',
                state:'',
                email:'',
                job:'',
            },
            customer:{
               uid: '',
            },
        };
    },
    methods:{
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`only accept 1 file，this time choose ${files.length} file，total choose ${fileList.length} file`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`are you sure to remove ${ file.name }？`);
        },
        //
        async searchType(){
            selectType().then(response => {
                this.options = response;
                console.log("options"+this.options);
            });
        },
        // searchCustomerInfo ById
        async findPage2(){
            searchCustomer(this.customer.uid).then(response => {
                this.tableData2 = response;
            });
        },

        clearAndAdd(sid){
            this.tableData.forEach(data=>{
                if (data.sid === sid) {
                    this.formData = data;
                }
            })
        },

        clearAndAdd2(uid){
            this.tableData2.forEach(data=>{
                if (data.uid === uid) {
                    this.formData3 = data;
                    this.formData2.uid=this.formData3.uid;
                    this.formData2.passWord=this.formData3.passWord;
                    this.formData2.nickName=this.formData3.nickName;
                    this.formData2.star=this.formData3.star;
                }
            })
        },
        //复选框的change事件，删除和修改拿到id
        async checkBoxSelectionChange(){

        },
        async currentPageChange(currentPage){
            //console.log(currentPage);
            this.searchParams.currentPage = currentPage;
            await this.findPage();
        },
        async findPage(){
            searchPage(this.staff.sid).then(response => {
                this.tableData = response;
                console.log("789"+this.tableData)
            });
        },

        async deleteById(){
            console.log(this.formData3.sid)
            await deleteStaffById(this.staff.sid);

            await this.findPage();
        },
        async resetForm(){
            this.searchParams={currentPage :1, pageSize:5};
            this.staff.sid='';
            this.customer.uid='';
        },
        async add(){
            await addEntity(this.formData);
            console.log("999"+this.fileList[0].url);
            await this.findPage();
        },
        async addStaff(){
            await addEntity(this.formData4);
            await this.findPage();
        },
        async Edit(){
            console.log(this.formData);
            await update(this.formData);
            await this.findPage();
        },
        //edit userInformation
        async Edit2(){
            console.log("vaild"+this.formData2.isvaild);
            console.log(this.formData2.uid);
            console.log(this.formData2);
            await updateCustomer(this.formData2);
        }
    },
    created(){

    }
};

export default manager;