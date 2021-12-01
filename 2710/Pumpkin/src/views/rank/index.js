import {RankByTopOne,TheAmount,TopTen} from '@/api/rank'
import pickerOptions from '@/utils/date';
let rank = {
    data() {
        return {
            value:'',
            tableData: [],
            //choose Date
            pickerOptions:pickerOptions,
            searchParams:{},
        };
    },
    methods:{
        chooseTime(){
            this.searchParams.startTime=this.pickerOptions.startArrayDate[0];
            this.searchParams.endTime=this.pickerOptions.startArrayDate[1];
        },
        resetForm(){
            this.pickerOptions.startArrayDate ='';
        },
        async rankByTopOne(){
            RankByTopOne(this.searchParams).then(response => {
                this.tableData = response;
            });
        },
        async income(){
            TheAmount(this.searchParams).then(response => {
                this.tableData = response;
            });
        },
        async topTen(){
            TopTen(this.searchParams).then(response => {
                this.tableData = response;
            });
        },
    },
    created(){

    }
};

export default rank;