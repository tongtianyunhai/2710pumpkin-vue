import {update,search} from '@/api/customer'

let customerInfo = {
    data() {
        return {
            //find userInfo
            tableData:[],

            formData: {
                nickname: '',
                birthday: '',
                country: '',
                city: '',
                zipcode: '',
                street: '',
                state: '',
                url: '',
                gender:'',
                email:'',
                uid:'',
            },
            dialogVisible: false,
            //头像
        };
    },
            methods: {
                async onSubmit() {
                    this.formData.uid=localStorage.getItem("token");
                    await update(this.formData);
                    console.log('submit!');
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

                async findPage(){
                    search(localStorage.getItem("token")).then(response => {
                        this.tableData = response;
                        console.log(this.tableData[0].nickName);
                        console.log("888"+localStorage.getItem("token"))
                    });
                },
            },
    created(){
        this.findPage();
    }
};

export default customerInfo;

