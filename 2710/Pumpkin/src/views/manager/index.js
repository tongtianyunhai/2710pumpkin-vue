// import {} from '@/api/manager'
import pickerOptions from '@/utils/date';
import {getBase64Str} from '@/utils/base64Utils'
import base64 from '@/utils/getbase64Str2';


let manager = {
    data() {
        return {
            //日期组件
            pickerOptions:pickerOptions,
            //table的list
            tableData: [],
            total:0,
            searchParams:{
                currentPage :1,
                pageSize:5,
                spOrderid:'',
            },
            dialogVisible:false,
            formData:{},//删除表单信息
            formData2:{},//新增或修改表单
            dialogVisible2: false,
            dialogVisible3: false,
            imageUrl:'',



            options: [{
                value:'6',
                label: '特殊申诉申请单'
            }],
            value:'',


            options2: [
                {
                    value2:'2',
                    label2: '通过'
                },
                {
                    value2:'1',
                    label2: '不通过'
                },
                {
                    value2:'3',
                    label2: '待审核'
                }
            ],
            value2:'',

        };
    },
    methods:{
        clearAndAdd(spOrderid){
            this.tableData.forEach(data=>{
                if (data.spOrderid === spOrderid) {
                    this.formData2 = data;
                }
            })
        },

        //复选框的change事件，删除和修改拿到id
        checkBoxSelectionChange(){

            var single=this.formData.id;
            console.log(single);
        },
        currentPageChange(currentPage){
            //console.log(currentPage);
            this.searchParams.currentPage = currentPage;
            this.findPage();
        },
        /*  findPage(){
              searchPage(this.searchParams).then(response=>{
                 this.total= response.total;
                 this.tableData = response.data;
              })
          },  */
        //第二种写法：
        async findPage(){
            let response =  await searchPage(this.searchParams);
            this.total= response.total;
            this.tableData = response.data;
            // console.log(this.tableData);
        },
        chooseTime(){
            this.searchParams.startTime=this.pickerOptions.startArrayDate[0];
            this.searchParams.endTime=this.pickerOptions.startArrayDate[1];
        },
        resetForm(){
            this.searchParams={  currentPage :1, pageSize:5};
            this.pickerOptions.startArrayDate ='';
        },
        async  addcheck(){
            this.formData2.spHandletype=this.value;
            this.formData2.spCheckstatus=this.value2;
            console.log(this.formData2);
            await updatecheck(this.formData2);
            await this.findPage();

        },
        async  updatecheck(){
            console.log(this.formData2);
            await update(this.formData2);
            await this.findPage();

        },
        //async表示异步调用 await：表示执行完这条语句，才执行下面语句
        async deleteById(){
            await deleteById(this.formData.spOrderid);
            // console.log(this.tableData.spOrderid);
            this.findPage();
        },
        // getImgStr(e){
        //     console.log("imgstr===");
        //     console.log(e.file);
        //     let fileReader = new FileReader();
        //     fileReader.readAsDataURL(e.file);
        //     fileReader.onload= e=> {
        //         console.log("onload===");
        //         console.log(e);
        //         console.log("图片的base64 e.target.result====");
        //         console.log(e.target.result);
        //         this.formData.brandLogo=e.target.result;
        //         this.imageUrl = e.target.result;
        //
        //     }
        //
        // },
        // getImgStr(e){
        //   getBase64Str(e.file).then(response=>{
        //       this.formData.brandLogo = response;
        //       this.imageUrl =  response;
        //   })
        //  },

        // getImgStr(e){
        //     base64.getbase64Str(e.file).then(response=>{
        //         this.formData.brandLogo=response;
        //         this.imageUrl = response;
        //     })
        //
        // },
        async add(){
            console.log(this.formData2);
            await addEntity(this.formData2);
            this.findPage();

        },
        async Edit(){
            console.log(this.formData2)
            await update(this.formData2);
            await this.findPage();
        }
    },
    created(){
        this.findPage();
        // console.log(this.tableData);
    }
};

export default manager;