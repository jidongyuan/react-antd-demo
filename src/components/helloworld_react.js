/**
 * Created by Administrator on 2017/4/10.
 */

var myStyle = {
    color:'red',
};
ReactDOM.render(
    <h1 style={myStyle}>Hello, world!{1+1}{console.log("测试测试")}</h1>,
    document.getElementById('example')
);

{/*控制台输出js*/}
function test1(a) {
    /* $(".a_class").text(a);*/
    console.log(a);
}

var i = 1;
ReactDOM.render(
    <div>
        <h1 classID="a_class">{i == 1 ? test1("true") : test1("false")}</h1>
    </div>
    ,
    document.getElementById('example2')
);

var arr = [
    <h1>菜鸟教程</h1>,
    <h2 style={myStyle}>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
    <div>以下是数组内容：<br />{arr}</div>,
    document.getElementById('example3')
);