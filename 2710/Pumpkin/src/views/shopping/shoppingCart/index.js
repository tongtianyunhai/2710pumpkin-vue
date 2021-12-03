import {searchPage} from "@/api/cart";
import order from "@/views/order";

let cart = {
    data() {
        return {
            tableData: [],
            searchParams: {
                currentPage: 1,//当前页
                pageSize: 3,//每页显示条数
                customerId: ''//品牌名称
            },
            rowData:{},
            dialogVisible2: false,
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
        placeOrder(sid){
            this.tableData.forEach(data=>{
                if (data.sid === sid) {
                    this.rowData = data;
                }
            })
            console.log(sid+"====");
            console.log(this.rowData);////////////////////////bug/////////////////////////////
        },
        removefromcart(sid){
            this.tableData.forEach(data=>{
                if (data.sid === sid) {
                    this.rowData = data;
                }
            })
            console.log(sid+"====");
            console.log(this.rowData);////////////////////////bug/////////////////////////////
        }

    },

    created(){
        this.findPage();
    }
}
export default cart;
