import {searchPage} from '@/api/order'


let order = {
    data() {
        return {
            // tableData: [{
            //     merchandiseId: '01test10',
            //     date: 'test-test-test',
            //     price: 'test.00',
            //     quantity: '10',
            //     shipping: '10.05',
            //     orderId: '1test',
            //     remark: 'remarkremarkremarkremarkremarkremarkremarkremarkremarkremark'
            // }],
            tableData: [],
            searchParams: {
                currentPage: 1,//当前页
                pageSize: 3,//每页显示条数
                customerId: ''//品牌名称
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
        }
    },

    created(){
        this.findPage();
    }
}
export default order;
