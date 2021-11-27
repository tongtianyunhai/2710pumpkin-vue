let main = {
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            user:{
                uid:'',
                nickName:'',
            },
        };
    },

    methods:{
        userShow(){
            this.user.nickName=localStorage.getItem("nickName");
        },
        signout(){
            localStorage.clear();
        }
    },
    created(){
        this.userShow();
    }
};

export default main;