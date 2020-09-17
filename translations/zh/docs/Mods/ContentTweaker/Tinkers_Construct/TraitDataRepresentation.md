# 特性数据表示

特性数据表示Tinkers构造特性数据，并且是物品绑定的。  
您可以通过向 `getData` 方法提供一个 IItemStack 从现有 [特性](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 对象中获取这样一个对象。

## 导入类

如果您遇到任何问题，可能需要导入类 (例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)) 这样比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.tconstruct.TraitDataRepresentatives`

## ZenGetter 和 ZenSetter

| 名称         | ZenGetter | ZenSetter | 返回值类型 |
| ---------- | --------- | --------- | ----- |
| color      | ✔         | ✔         | 整数    |
| 当前的        | ✔         | ✔         | 整数    |
| 额外信息       | ✔         | ✔         | 字符串   |
| identifier | ✔         | ✔         | 字符串   |
| 关卡         | ✔         | ✔         | 整数    |
| 最大值        | ✔         | ✔         | 整数    |
| 信息         | ✔         |           | 字符串   |
| 颜色字符串      | ✔         |           | 字符串   |

## ZenMethods

```zenscript
///是否与 myTraitData.info;
myTraitData.calcInfo();

//Does 与 myTraitData.colorString;
myTraitData.getColorString();
```