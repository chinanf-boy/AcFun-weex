let utilFunc = {
    initIconFont () {
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
        });
        domModule.addRule('fontFace', {
            'fontFamily': "acfunicon",
            'src': "url('http://at.alicdn.com/t/font_459170_tq1d9u7ugxp0t3xr.ttf')"
        });
    }}

export default  utilFunc;