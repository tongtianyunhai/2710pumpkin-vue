
import {searchPage,findSale} from '@/api/merchandise'
import {addEntity} from '@/api/cart.js'
let detail = {
    data() {
        return {
            mprice:'',
            currentPrice:'',
            formData: {},
            tableData1: [],
            tableData2: [],
            paramData:{
                mName:'',
                mBn:'',
            },
            paramData2:{
                mName:'',
                mBn:'',
            },
            dialogVisible: false,
        };
    },
    methods:{
        getPageInfo(){

            console.log("======getinfo=======")
            this.paramData.mName=localStorage.getItem("mname");
            this.paramData.mBn=localStorage.getItem("mbn");

            searchPage(this.paramData).then(response => {
                this.tableData1 = response.data;
                console.log("============1==============");
                console.log(this.tableData1)
            });

            findSale(this.paramData).then(response => {

                this.tableData2=response.data;
                console.log("==============2============");
                console.log(this.tableData2);
                this.currentPrice=this.tableData2[0].discount*this.tableData1[0].mprice;
                console.log("discount"+this.tableData2[0].discount);
                console.log("mprice"+this.tableData1[0].mprice)
            });

            // this.formData.mName=this.$route.query.item.mname;
        },
        clearAndAdd(){
            console.log("showdialog")
            this.formData.mname=this.tableData1[0].mname;
            this.formData.mbn=this.tableData1[0].mbn;
            this.formData.sortName=this.tableData1[0].sortName;
            this.formData.currentPrice=this.tableData2[0].discount*this.tableData1[0].mprice;
        },
        async add(){
            console.log("--------------------")
            this.formData.customerId=localStorage.getItem("token");
            this.formData.createTime=new Date();
            this.formData.updateTime=this.formData.createTime;
            this.formData.updateBy= this.formData.customerId;
            this.formData.createBy= this.formData.customerId;
            console.log(this.formData)
            await addEntity(this.formData);
        }


    },
    created(){

        this.getPageInfo();
    },
};

export default detail;
