# XPrice
H5价格组件
#### 使用方式
````
1. 本插件仅支持esm引入方式, 非UMD
2. 为了减少打包后体积, 不打包依赖, 只做编译
3. 使用本组件依赖react@16, lodash-es
// 调用代码
import xprice from 'xprice'
````
#### 基于reactJS的组件
````
1. 组件开箱即用, 无需编译, 有reactJS环境就能用
2. 解决了transform之后文字抖动的问题
3. 解决了baseline对齐兼容transform的问题
4. 替代canvas兼容reactJS在类似tab组件中解决实例缓存问题
5. 能解决大部分价格组件使用场景
6. 基于rem布局计算, 传入参数无需换算, 按照2X设计图直接传px像素
````
#### 强兼容性
````
1. 安卓最低4.4 机型覆盖主流机型
2. ios最低8.0 覆盖iphone5等小屏幕机型
````

