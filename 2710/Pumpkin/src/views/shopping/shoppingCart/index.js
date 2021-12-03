import {searchPage,deleteEntity} from "@/api/cart";
import {addEntity} from "@/api/order";
import {findSale} from"@/api/merchandise"
import order from "@/views/order";

let cart = {
    data() {
        return {
            currentPrice:'',
            tableData: [],
            searchParams: {
                currentPage: 1,//当前页
                pageSize: 3,//每页显示条数
                customerId: ''//品牌名称
            },
            rowData:{},
            dialogVisible2: false,
            salesinfo:{},
            paramData:{
                mName:'',
                mBn:'',
            },
        }
    },

    methods:{
        async findPage(){
            this.searchParams.customerId=localStorage.getItem("token");
            console.log(this.customerId+"0000000000");
            searchPage(this.searchParams).then(response => {

                this.total = response.total;
                this.tableData = response.data;


                console.log(this.tableData+"000000000000");

            });
        },
        async currentPageChange(currentPage){
            //console.log(currentPage);
            this.searchParams.currentPage = currentPage;
            await this.findPage();
        },
        placeOrder(mbn,mname){
            this.tableData.forEach(data=>{
                if (data.mbn === mbn&&data.mname===mname) {
                    this.rowData = data;
                }
            })
            this.rowData.shipping="10";
            console.log(mbn+"===="+mname);
            console.log(this.rowData);


        },
        checkout(){
            addEntity(this.rowData);
            deleteEntity(this.rowData);
            this.findPage();
        },

        removefromcart(mbn,mname){
            this.tableData.forEach(data=>{
                if (data.mbn === mbn&&data.mname===mname) {
                    this.rowData = data;
                }
            })
            deleteEntity(this.rowData);
            this.findPage();
        }

    },

    created(){
        this.findPage();
    }
}
export default cart;
