let main = {
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            user:{
                uid:'',
                nickName:'',
            },
            imgList:[
                {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
                {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
                {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
                {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
                {url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
            ]
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