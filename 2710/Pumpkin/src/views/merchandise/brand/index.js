import {searchPage,deleteBrandById,addEntity,update,selectType} from '@/api/brand'
let brand = {
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
                sortName: ''//品牌名称
            },
             labelposition: 'left',
            //修改表单
            formData:{},//新增表单信息
            fileList:[{
               name: '',
               url: '',
            }],
            formData2:{
                sortName:'',
                sortSize:'',
                sortColor:'',
                sortBn:'',
                parentid:'',
                createBy:'',
                createTime:'',
                isparent:'',
            },
            formData3:{},//删除
            dialogVisible2: false,

            //upload picture


            //select type
            options: [],
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
                console.log(this.tableData)
            });
        },



        clearAndAdd(sid){
            this.tableData.forEach(data=>{
                if (data.sid === sid) {
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
            });
        },

        async deleteById(){
            console.log(this.formData3.sid)
            await deleteBrandById(this.formData3.sid);

            await this.findPage();
        },
        async resetForm(){
            this.searchParams={  currentPage :1, pageSize:5};
        },
        async add(){
            await addEntity(this.formData);
            console.log("999"+this.fileList[0].url);
            await this.findPage();
        },
        async Edit(){
            console.log(this.formData)
            await update(this.formData);
            await this.findPage();
        }
    },
    created(){
        this.findPage();
        this.searchType();
    }
};

export default brand;