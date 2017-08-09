/**
 * Created by PLC on 2017/8/6.
 */
//iframe自适应
$(window).on('resize', function() {
    var $content = $('.content');
    var width = $(this).width();
    var remove = 120;
    if(width <= 760) {  //宽度在760以下时，header会自动加高，因此要多减一部分
        remove = 170
    }
    $content.height($(this).height() - remove);
    $content.find('iframe').each(function() {
        $(this).height($content.height());
    });
}).resize();

var mainPanel = new Vue({
    el: '#main-panel',
    data:{
        loadUrl:"test/test1.html",
        navTitle:'navTitle'
    },
    methods:{
        test:function () {
            // window.location.href="test1.html"
        }
    }
});

function test2() {
    mainPanel.test();
}

console.log("parent");
console.log(parent);
parent.test2();

// test2();