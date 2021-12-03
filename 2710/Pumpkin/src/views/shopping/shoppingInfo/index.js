
import {findmsort,selectType,searchPage,deleteMerchandise} from '@/api/merchandise'
import {addEntity} from '@/api/cart.js'
import {router}from  '@/router/index.js'


let merchandise = {
    data() {
        return {
            //日期变量名
            value2: '',
            //table的list
            tableData: [],
            dialogVisible:false,
            total:0,
            searchParams: {
                currentPage: 1,//当前页
                pageSize: 3,//每页显示条数
                mName: '',//商品名称
                typeid:''//商品类型id
            },
            labelposition: 'left',
            //修改表单
            formData:{},//新增表单信息
            formData2:{
                mName:'',
                mSize:'',
                mColor:'',
                mBn:'',
                brandName:'',
                sortName:'',
                mIsvalid:'',
                sortPicture:'',
                merichandisePicture:'',
                parentid:'',
                createBy:'',
                createTime:'',
                isparent:'',
            },
            //删除
            formData3:{
                mName:'',
                mBn:'',
            },
            dialogVisible2: false,

            //upload picture


            //select type
            value: [],
            options:[],
            defaultParams:
                {
                    value: 'typeid',
                    label: 'typename',
                    children: 'children'
                }
            ,
            formData4: {
                mSort: '',
            },
        };
    },
    methods:{

        handleChange(searchParams) {
            searchPage(this.formData4).then(response => {
                this.total = response.total;
                this.tableData = response.data;
                console.log("good"+this.formData4)
                console.log(this.tableData)
            });
        },//级联选择器



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
                this.options=response;
                console.log(this.tableData)
            });
        },

        saveInfo(item){
            console.log("======saveinfo=======")
            localStorage.setItem("mname",item.mname);
            localStorage.setItem("mbn",item.mbn);
            console.log("======savefinish=======")
        },

        clearAndAdd(mname,mbn){
            console.log("show dialog:"+mname+" ,"+"mbn")
            this.tableData.forEach(data=>{
                if (data.mname === mname&&data.mbn===mbn) {
                    this.formData = data;
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
            searchPage(this.searchParams).then(response => {
                this.total = response.total;
                this.tableData = response.data;
                console.log(this.tableData)
                console.log(this.tableData[0].merichandisePicture+"000000000000000000000")
            });
        },

        async deleteMerchandise(){
            console.log("777"+this.formData3.mName+this.formData3.mBn)
            await deleteMerchandise(this.formData3);

            await this.findPage();
        },
        async resetForm(){
            this.searchParams={  currentPage :1, pageSize:5};
            this.pickerOptions.startArrayDate ='';
        },
        async add(){
            console.log("--------------------")
            this.formData.customerId=localStorage.getItem("token");
            this.formData.createTime=new Date();
            this.formData.currentPrice=this.formData.mprice;
            this.formData.updateTime=this.formData.createTime;
            this.formData.updateBy= this.formData.customerId;
            this.formData.createBy= this.formData.customerId;
            console.log(this.formData)
            await addEntity(this.formData);
            await this.findPage();
        },
        async Edit(){
            console.log(this.formData)
            await update(this.formData);
            await this.findPage();
        },



    },
    created(){
        this.findPage();
        this.searchType();
    }
};

export default merchandise;
