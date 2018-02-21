# 全局函数

全局函数指的是不需要[导入](/AdvancedFunctions/Import)即可调用的函数。  
这里列出了所有的全局函数：

## print 函数

将字符串打印到 crafttweaker 日志中。

``` js
//print("需要输出的字符串");
print("你好，世界！");
```
无返回值。

## totalActions 函数

``` js
//totalActions();
totalActions();
```
返回一个整型数，显示当前已经注册的全局函数数量。

## enableDebug 函数

启用调试模式。  
使用[调试预处理器](/AdvancedFunctions/Preprocessors/DebugPreprocessor)的首选。

``` js
//enableDebug();
enableDebug();
```
无返回值。

## isNull 函数

检查给予的对象是否为空。  
对基元对象无效。

``` js
//isNull(Object o);
isNull(<minecraft:dirt>);
```
返回一个布尔值。
注意：如果此函数无效，可以直接创建一个布尔值对象 `<minecraft:dirt> as bool`。


## max 函数

``` js
//max(整型数1, 整型数2);
max(10, 11);
```
返回值为整型。

## min 函数

``` js
//min(整型数1, 整型数2);
min(10, 11);
```
返回值为整型。

## pow 函数

``` js
//pow(双精度浮点数1, 双精度浮点数2);
pow(2.0, 4.0);
```
返回值为双精度浮点数。



## 全局字段

| 字段      | 简介                                                                                   |
|:----------:|:---------------------------------------------------------------------------------------------:|
| brewing    | 访问[酿造配方](/Vanilla/Recipes/Recipes_Brewing_Stand)                        |
| client     | 访问[客户端方法](/Vanilla/Game/IClient)                                              |
| events     | 访问[事件](/AdvancedFunctions/Events/IEventManager)                         |
| format     | 访问[格式化处理器](/Vanilla/Utils/IFormatter)                                  |
| furnace    | 访问[熔炉配方](/Vanilla/Recipes/Recipes_Furnace)                              |
| game       | 访问[游戏函数](/Vanilla/Game/IGame)                                                |
| itemUtils  | 访问[物品实用工具](/Vanilla/Utils/IItemUtils)                                   |
| loadedMods | 访问[加载 mod 列表](/Vanilla/Game/Mods)                                           |
| logger     | 访问[记录器](/Vanilla/Utils/Logger)                                                  |
| oreDict    | 访问[矿物词典](/Vanilla/OreDict/IOreDict)                               |
| recipes    | 访问[工作台配方](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table)               |
| server     | 访问[服务端方法](/Vanilla/Game/IServer)                                              |
| vanilla    | 访问原版函数（目前仅有[原版种子掉落](/Vanilla/Recipes/Seeds)可用） |
