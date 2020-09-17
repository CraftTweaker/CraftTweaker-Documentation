# 全局函数

全局函数是可以不使用[imported](/AdvancedFunctions/Import/)关键字的情况下调用的函数.  
列表如下

## 打印

将字符串信息打印到CraftTweaker的日志中。

```zenscript
//print(短信)；
打印("Hello World!")；
```

不返回任何内容

## 总计操作

```zenscript
// 总计动作();
总计动作();
```

返回一个int，显示注册了多少个全局函数。

## enableDebug

启用调试模式。  
推荐使用[Debug Preprocessor](/AdvancedFunctions/Preprocessors/DebugPreprocessor/)

```zenscript
//enableDebug();
enableDebug();
```

不返回任何内容

## isNull

检查给定的对象是否为空。  
在原始上不能工作！

```zenscript
//isNull(对象 o);
isNull(<minecraft:dirt>);
```

返回布尔值 注意：如果这对您不起作用，试着将对象投射到布尔值 `<minecraft:dirt> 作为布尔`

## 最大值

```zenscript
//max(int number 1, int number2);
max(10, 11);
```

返回整数

## 分钟

```zenscript
//min(int number 1, int number2);
min(10, 11);
```

返回整数

## pow

```zenscript
/粉末(双号1，双号2)；
粉末(2.0, 4.0)；
```

返回double型数据

## 全局字段

| 字段      | 说明                                                            |
| ------- | ------------------------------------------------------------- |
| 酿造中     | 访问 [酿造处理器](/Vanilla/Recipes/Recipes_Brewing_Stand/)           |
| 客户      | 访问 [客户端方法](/Vanilla/Game/IClient/)                            |
| 事件      | 访问 [事件处理程序](/Vanilla/Events/IEventManager/)                   |
| 格式      | 访问 [格式化处理器](/Vanilla/Utils/IFormatter/)                       |
| furnace | 访问 [转炉处理器](/Vanilla/Recipes/Furnace/Recipes_Furnace/)         |
| 游戏      | 访问 [游戏功能](/Vanilla/Game/IGame/)                               |
| 项目工具    | 访问 [个项目实用处理器](/Vanilla/Utils/IItemUtils/)                     |
| 已加载模组   | 访问 [已加载模组列表](/Vanilla/Game/Mods/)                             |
| logger  | 访问 [记录器](/Vanilla/Utils/Logger/)                              |
| oredict | 访问 [oreDictionary 处理器](/Vanilla/OreDict/IOreDict/)            |
| 配方      | 访问 [配方处理器](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/) |
| 服务器     | 访问 [服务器方法](/Vanilla/Game/IServer/)                            |
| vanilla | 访问原版功能 (目前只有 [个原版种子](/Vanilla/Recipes/Seeds/) 可用)             |