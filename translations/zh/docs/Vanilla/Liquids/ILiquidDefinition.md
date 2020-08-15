# Liquid定义

ILiquidDefine 定义了液体 [IliquidStack](/Vanilla/Liquids/ILiquidStack/) 所包含的液体。 与ILiquidStack不同，这个接口允许您更改液体属性。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaker.liquidDefinities;`

## 方法

那么，我们可以对此做些什么？

### 乘

乘用ILiquid定义生成一个新的 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 和指定数量的毫巴克

```zenscript
val def = <liquid:lava>.definition;

/基本相同
val bucketOfLava = def * 1000;
val bucketOfLava 1 = <liquid:lava> * 1000;
```

## 获取并设置流体属性

ILiquidDefine 表示一个液体，你可以获取，但也可以设置它的属性。 查看下表以了解更多信息。

与上面的表格一样，您在ILiquidDefinition末尾设置Zengetter/setter 。 根据ZenSetter，一些ZenGetter没有，您需要依靠其他手段来更改这些属性。

但要小心Zensetters，不过，它们只会改变液体注册，不会对世界上的液体产生任何影响。 您可能只需要在使用 [Tinkers 构造冶炼炉燃料](/Mods/Modtweaker/TConstruct/Fuel/) 时才需要温度设置。

```zenscript
val definition = <liquid:lava>.definition;

//Zengetter: luminity
val lavAL = definition.luminosity;

//Zensetter: luminosity
definition.luminacity = 0;
```

| Zengetter   | Zensetter | 这是什么？             | 返回/设置类型 |
| ----------- | --------- | ----------------- | ------- |
| name（名称）    |           | 这返回未本地化的液体名称      | 字符串     |
| displayName |           | 这返回本地化的液体名称       | 字符串     |
| 亮度          | 亮度        | 这个返回/设置所指液体的亮度    | 整数      |
| 密度：         | 密度：       | 这个返回/设置所指液体的强度    | 整数      |
| 温度          | 温度        | 这个返回/设置所指液体的温度    | 整数      |
| 视觉性         | 视觉性       | 这个返回/设置所指液体的粘度    | 整数      |
| 气压          | 气压        | 这个返回/设置所指的液体是否气体？ | boolean |