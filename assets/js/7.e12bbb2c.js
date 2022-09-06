(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{428:function(e,t,v){"use strict";v.r(t);var a=v(65),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"后台管理项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后台管理项目"}},[e._v("#")]),e._v(" 后台管理项目")]),e._v(" "),v("p",[e._v("这个后台管理项目主要使用vue框架，element ui 组件库，echarts图表以及axios网络请求。")]),e._v(" "),v("p",[e._v("然后整个项目可以分为几个模块，包括：登录验证模块，基本视图模块，导航模块，网络请求模块等。")]),e._v(" "),v("h4",{attrs:{id:"登录验证模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#登录验证模块"}},[e._v("#")]),e._v(" 登录验证模块：")]),e._v(" "),v("p",[e._v("主要使用的是token验证机制，采用vuex+localstoreage的配合使用。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("首先配置一个全局的导航守卫，BeforeEach,判断vuex中是否保存有token,如果没有token的话，那么使用next函数，直接跳转至登录页面，如果有token的话，那么可以跳转至相应的页面，此时是没办法判断token是否有效的，但是在进入相应的页面的时候，我们会发送网络请求，携带token。如果服务器端验证之后返回了401，那么说明这个token是坏的，没用的。此时直接将页面跳转到登录页面。")])]),e._v(" "),v("li",[v("p",[e._v("关于登出页面")])])]),e._v(" "),v("p",[e._v("在退出登录，跳转至登录页面的时候，我会清理vuex中保存得token信息，localstorage中保存的token信息，以及vuex中保存的一些面包屑的列表信息，以及保存在vuex中的其他信息。")]),e._v(" "),v("h4",{attrs:{id:"基本视图模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本视图模块"}},[e._v("#")]),e._v(" 基本视图模块：")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("element-ui：因为后台管理系统中使用表格等组件比较多，所以我们引入element-ui组件库（包括样式表）。在这其中用的比较多的包括表单，表格，卡片等组件。当然为了减小项目的大小，我们采用按需引入的方法，对相应的组件进行引入。对于常用的一些表格表单组件，我会对其进行组件封装，需要使用的时候，对其进行引入，传入参数，这样的话，也能够减少很大一部分的代码量")])]),e._v(" "),v("li",[v("p",[e._v("echarts图表：因为项目中有些数据，需要进行可视化的展示，所以我们引入了echarts图表插件。主要使用折线图，柱状图以及饼状图")])])]),e._v(" "),v("h4",{attrs:{id:"导航栏模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导航栏模块"}},[e._v("#")]),e._v(" 导航栏模块：")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("vue-router：我们使用vue-rouer进行路由跳转，在初始导航栏部分，我们有一个折叠效果，用户登录进去，侧边导航是折叠进去的，可以进行按钮的点击，然后将它释放出来。这个状态的话，我们是保存在vuex之中。")])]),e._v(" "),v("li",[v("p",[e._v("动态路由：因为不同的用户，我们的后台管理系统给的权限是不一样的，所以，当用户登录账号的时候，后端接口会返回相应账户的权限，直接反应就是，我们根据不同的权限，进行导航栏的渲染，后端返回给我们路由信息，前端使用addRoutes函数，进行动态渲染")])])]),e._v(" "),v("h4",{attrs:{id:"axios网路请求模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#axios网路请求模块"}},[e._v("#")]),e._v(" Axios网路请求模块：")]),e._v(" "),v("ol",[v("li",[e._v("Axios二次封装：在引入axios网络请求模块之后，我会对它进行二次封装，暴露出一个网络请求类，在其中创建axios实例，在这个实例上面对它添加拦截器，例如请求拦截器，我可能会在请求体里面添加token值等，在响应拦截器中，可以直接判断服务端返回的状态码，若是401的话，就说明该用户没有权限，那么直接就跳转至登录页面；")])]),e._v(" "),v("p",[e._v("Vuex中保存了哪些东西：")]),e._v(" "),v("p",[e._v("​    1.路由")]),e._v(" "),v("p",[e._v("​\t2.token")]),e._v(" "),v("p",[e._v("​\t3.tag标签")]),e._v(" "),v("h4",{attrs:{id:"整体构建流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#整体构建流程"}},[e._v("#")]),e._v(" 整体构建流程：")]),e._v(" "),v("p",[e._v("首页整个ui 的搭建：")]),e._v(" "),v("ul",[v("li",[e._v("引入element-ui中的布局，将整个ui页面分为：侧边栏，头部，主显示区。")])]),e._v(" "),v("p",[e._v("左侧菜单栏的引入，一级菜单的实现，二级menu的实现，menu样式和路由：")]),e._v(" "),v("ul",[v("li",[e._v("​\t引入element-ui中的菜单组件，")]),e._v(" "),v("li",[e._v("​\t获得保存在vuex中的菜单（由用户权限(token)一并获得）,将导航分为有children和无children分别渲染")]),e._v(" "),v("li",[e._v("​    为每一个导航item绑定一个点击事件，点击事件：使用路由push方法，改变路由。同时往vuex中添加该item,用作tag标签使用")])]),e._v(" "),v("p",[e._v("header组件搭建，header组件样式：")]),e._v(" "),v("ul",[v("li",[e._v("将头部分为左右两个部分，左边部分：导航栏伸缩控制按钮（状态保存在vuex之中） + 面包屑，引入element-ui中的面包屑组件,面包屑中的to属性可以直接改变路由，面包屑中的数据由vuex获得")]),e._v(" "),v("li",[e._v("右边部分是一个下拉框，前往个人中心或者退出登录，退出登录：vuex中的菜单以及token都将被清除，同时跳转至login登录页面")])]),e._v(" "),v("p",[e._v("vuex实现左侧折叠：")]),e._v(" "),v("ul",[v("li",[e._v("使用导航栏组件中的collapse属性，将这一个属性动态绑定到变量isCollapse上面，")]),e._v(" "),v("li",[e._v("isCollapse通过按钮的点击事件来改变，并保存在vuex之中")])]),e._v(" "),v("p",[e._v("home组件布局：")]),e._v(" "),v("ul",[v("li",[e._v("引入element-ui中的layout布局组件，将整个home组件用el-row标签包裹，然后将页面使用el-col进行分列，分为两列，")]),e._v(" "),v("li",[e._v("第一列摆放用户信息，以及产品表格信息，这两个信息分别用el-tag卡片组件包裹，表格信息使用element-ui中的table组件，")]),e._v(" "),v("li",[e._v("绑定的data信息取自于tableData，tableData由后台返回。")]),e._v(" "),v("li",[e._v("第二列，使用echarts进行画图，事先将echarts组件进行封装。在该页面引入，传入从后端得到的数据，渲染视图。")])]),e._v(" "),v("p",[e._v("axios的基本使用，二次封装")]),e._v(" "),v("p",[e._v("​\t\tAxios二次封装：在引入axios网络请求模块之后，我会对它进行二次封装，暴露出一个网络请求类，在其中创建axios实例，在这个实例上面对它添加拦截器，例如请求拦截器，我可能会在请求体里面添加token值等，在响应拦截器中，可以直接判断服务端返回的状态码，若是401的话，就说明该用户没有权限，那么直接就跳转至登录页面；")]),e._v(" "),v("p",[e._v("mock数模拟实战：")]),e._v(" "),v("p",[e._v("​\t引入mockjs,调用mock函数对axios请求进行拦截，返回事先定义好的数据")]),e._v(" "),v("p",[e._v("echarts公共组件封装以及使用：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("传入两个参数：是否为坐标图，表格数据。data之中保存两个对象：坐标图配置对象，饼状图配置对象。")]),e._v(" "),v("ul",[v("li",[e._v("在watch里面监听表格数据，一旦改变，调用初始化表格函数initChart()，在initChart()首先调用initChartData()函数，判断是否是坐标图，若是，则将data中的坐标图对象中的data,series进行替换，若否，则将饼状图对象中的series进行替换。调用完initChart()之后，判断echarts组件是否已经存在，如果已经存在，那么直接调用this.echart.setOption函数将上一步已经修改了的配置对象传入。如果不存在，则先初始化这个组件，然后再调用this.echart.setOption函数。进行渲染")])])])]),e._v(" "),v("p",[e._v("面包屑实现：")]),e._v(" "),v("ul",[v("li",[e._v("引入element-ui中的面包屑组件，面包屑组件循环遍历tabs中的数据，tabs的数据取自vuex中保存的tabList，同时通过面包屑中的to属性，进行点击跳转")])]),e._v(" "),v("p",[e._v("tag点击与删除事件：")]),e._v(" "),v("p",[e._v("​\t\t引入element-ui中的tag组件，tag组件循环遍历tags中的数据，tags的数据取自vuex中保存的tabList,为tag组件绑定点击以及关闭事件，点击事件总调用this.$router.push()函数，进行路由的跳转。关闭事件：得到当前tags数组的长度，调用vuex中的删除函数，删除被点击的tag,判断点击关闭的tag是否是当前路由")]),e._v(" "),v("p",[e._v("如果不是，那么没事到此终止。如果是，继续判断当前tag是否是tags数组中最后一个如果是，将路由跳转至前一个。如果不是，则将路由跳转至后一个。")]),e._v(" "),v("p",[e._v("用户管理页面功能和form组件介绍")]),e._v(" "),v("p",[e._v("用户列表新增和编辑接口调用")]),e._v(" "),v("p",[e._v("用户列表table组件的使用")]),e._v(" "),v("ul",[v("li",[e._v("新增&&修改弹窗：使用element-ui中的dialog弹窗组件，组件根据变量operateType来判断标题名字是”新增用户“还是”更新用户“")])]),e._v(" "),v("p",[e._v("登录模块：")]),e._v(" "),v("p",[e._v("主要使用的是token验证机制，采用vuex+localstoreage的配合使用。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("首先配置一个全局的导航守卫，BeforeEach,判断vuex中是否保存有token,如果没有token的话，那么使用next函数，直接跳转至登录页面，如果有token的话，那么可以跳转至相应的页面，此时是没办法判断token是否有效的，但是在进入相应的页面的时候，我们会发送网络请求，携带token。如果服务器端验证之后返回了401，那么说明这个token是坏的，没用的。此时直接将页面跳转到登录页面。")])]),e._v(" "),v("li",[v("p",[e._v("关于登出页面")])])]),e._v(" "),v("p",[e._v("在退出登录，跳转至登录页面的时候，我会清理vuex中保存得token信息，localstorage中保存的token信息，以及vuex中保存的一些面包屑的列表信息，以及保存在vuex中的其他信息。")])])}),[],!1,null,null,null);t.default=_.exports}}]);