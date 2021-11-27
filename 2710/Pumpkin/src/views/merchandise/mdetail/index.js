// import {} from '@/api/manager'
import {getBase64Str} from '@/utils/base64Utils'
import {findmsort,selectType,searchPage,deleteMerchandise,selectBrand,addEntity,update} from '@/api/mdetail'

let mdetail = {
    data() {
        return {
            //日期变量名
            value2: '',
            //table的list
            tableData: [],
            tableData2:[],
            dialogVisible:false,
            total:0,
            searchParams: {
                currentPage: 1,//当前页
                pageSize: 3,//每页显示条数
                mName: '',//商品名称
                typeid:''//商品类型id
            },
            labelposition: 'left',

            formData:{},//新增表单信息
            formData2:{
                mName:'',
                mSize:'',
                mColor:'',
                mPrice:'',
                mBn:'',
                mSort:'',
                mIsvaild:'',
                url:'',
                createBy:'',
                createTime:'',
            },

            //storage
            storage:{
              sid:'',
              wareName:'',
              wareColor:'',
            },

            //删除
            formData3:{},
            dialogVisible2: false,
            dialogVisible3: false,
            dialogVisible4: false,

            //upload picture


            //select type
            value: [],
            options:[],
            options2:[],
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
            });
        },
        async searchBrand(){
            selectBrand().then(response => {
                this.options2=response.data;
            });
        },
        clearAndAdd(mname,mbn){
            this.tableData.forEach(data=>{
                if (data.mbn === mbn&&data.mname===mname) {
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
            });
        },

        async deleteMerchandise(){
            console.log("777"+this.formData3.mname+this.formData3.mbn)
            await deleteMerchandise(this.formData3);
            await this.findPage();
        },
        async resetForm(){
            this.searchParams={  currentPage :1, pageSize:5};
            this.pickerOptions.startArrayDate ='';
        },
        async add(){
        console.log("add"+this.formData.mName);
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
        this.searchBrand();
    }
};

export default mdetail;