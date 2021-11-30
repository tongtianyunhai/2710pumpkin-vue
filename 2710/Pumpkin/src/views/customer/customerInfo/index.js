import {update,search} from '@/api/customer'

let customerInfo = {
    data() {
        return {
            //find userInfo
            tableData:[],

            formData: {},
            dialogVisible: false,
            //头像
        };
    },
            methods: {
                async onSubmit() {
                    this.formData[0].uid=localStorage.getItem("token");
                    console.log('submit!'+this.formData);
                    await update(this.formData[0]);
                },
                handleAvatarSuccess(res, file) {
                    this.formData.url = URL.createObjectURL(file.raw);
                },
                beforeAvatarUpload(file) {
                    const isJPG = file.type === 'image/jpeg';
                    const isLt2M = file.size / 1024 / 1024 < 2;

                    if (!isJPG) {
                        this.$message.error('上传头像图片只能是 JPG 格式!');
                    }
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 2MB!');
                    }
                    return isJPG && isLt2M;
                },

                clearAndAdd(){
                    search(localStorage.getItem("token")).then(response => {
                        this.formData= response;
                    });
                },


                async findPage(){
                    this.formData.uid=localStorage.getItem("token");
                   await search(this.formData.uid).then(response => {
                       console.log("uid"+this.formData.uid);
                        this.tableData = response;
                        console.log("0099"+localStorage.getItem("token"));
                    });
                },
            },
    created(){
        this.findPage();
        this.clearAndAdd();
    }
};

export default customerInfo;

