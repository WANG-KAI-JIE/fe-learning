const{createApp,ref,reactive} = Vue;
createApp({
    setup(){
        const currentIdx = ref(0)
        const tabs = reactive([
            {
                icon: "/tab/images/shixiang.png",
                name: "事项",
                count: 5,
            },
            {
                icon: "/tab/images/caipu.png",
                name: "菜谱",
                count: 4,
            },
            {
                icon: "/tab/images/kecheng.png",
                name: "课程",
                count: 3,
            },
            {
                icon: "/tab/images/keyu.png",
                name: "课余",
                count:2
            },
        ]);

        const contents = reactive([
            {
                list: ["软考中级——软件设计师","前端进阶学习","后端进阶学习","CET6——450+","素质拓展"],
            },
            {
                list: ["石盘烤饭","咖喱鸡排饭","徐州烩饭","红烧牛肉面"],
            },
            {
                list: ["前端工程化","后端工程化","软件产品设计"],
            },
            {
                list: ["羊山公园春游","仙林金鹰逛吃"],
            },
        ]);

        //改变 currentIdx 的值为当前点击项的索引
        const changeTab = (index) => {
            currentIdx.value = index;
        };
        return{
            currentIdx,
            tabs,
            contents,
            changeTab,
        };
    },
}).mount("#app");