var MyComponent = san.defineComponent({
    template: '<h1>Hello {{name}} !</h1>',
    initData: function(){
        return {
            name: 'San'
        };
    }
});

var HomeComponent = san.defineComponent({
    template: '<h2>Home</h2>'
});

var ListComponent = san.defineComponent({
    template: '<ul>list,list<ul>'
});

var AboutComponent = san.defineComponent({
    template: '<p>关于</p>'
});

// san-router
var sanRouter = window['san-router'];

// 路由 Link
var Link = sanRouter.Link;

var AppComponent = san.defineComponent({
    components:{
        'router-link': Link
    },
    template:`
        <div class="app-container">
        <div class="app-drawer">
            <div class="drawer-title">
                <h3>XXX管理系统</h3>
            </div>
            <div class="menu">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/list">List</router-link></li>
                    <li><router-link to="/about">about</router-link></li>
                </ul>
            </div>
        </div>
        <div class="app-bar">
            <div class="user-info">
                <span>userName</span>
            </div>
        </div>
        <div class="app-content">
            <div id="main"></div>
        </div>
        </div>`
});

// 实例化App组件,附加到指定元素上
var appComponent = new AppComponent();
appComponent.attach(document.getElementById("app"));

// 配置路由,监听,启动
var router = sanRouter.router;

var routes = [
    {
        rule: '/',
        Component: HomeComponent
    },
    {
        rule: '/list',
        Component: ListComponent
    },
    {
        rule: '/about',
        Component: AboutComponent
    }
];
//routes = [];

for(var i = 0, n = routes.length; i < n; i++){
    var route = routes[i];
    route.target = "#main";
    console.log(route);
    router.add(route);
}

// 设置路由模式,html5/hash,默认为hash
// router.setMode("hash");

// 路由监听
router.listen(function(e, config){
    // 在路由发生变换时
    console.log(e);
    console.log(config);
});

// 启动路由
router.start();

