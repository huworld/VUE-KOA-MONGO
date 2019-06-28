export const toggle = {
    data(){
        return {
            showLoading:false
        }
    },
    methods: {
        toggle:function(){
            this.showLoading = !this.showLoading
            console.log('这是以恶')
        }
    },
}