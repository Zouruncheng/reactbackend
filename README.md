#react+antd通用后台管理脚手架工具
![示例](https://github.com/Zouruncheng/reactbackend/blob/master/src/resource/antd-form.png)

## 开始使用
  yarn install
  **注意安装react-router4.0 PC端**
  yarn add react-router-dom]@^4.3.1


## 配置实录
1. 安装create-react-app

2. 安装less和less-load以支持less
	"less": "^2.7.3",
    "less-loader": "^4.1.0",

3. 安装antd
	yarn add antd

4. [暴露出webpack，以支持less语法](https://juejin.im/post/5a4341a26fb9a04511716749)	

5. 动态加载less样式
```
#	1.https://ant.design/docs/react/use-with-create-react-app-cn
#	2.编辑/config/webpack.config.dev.js
#   在// Process JS with Babel.后加入
    options: {
      plugins:[
        ['import',[{
          libraryName:'antd',
          style:true,
        }]],
      ],
```
##附录：yarn使用
```
初始化一个新的项目

yarn init
添加一个依赖包

yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
更新一个依赖包

yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
删除一个依赖包

yarn remove [package]
安装所有的依赖包

yarn
or

yarn install
```