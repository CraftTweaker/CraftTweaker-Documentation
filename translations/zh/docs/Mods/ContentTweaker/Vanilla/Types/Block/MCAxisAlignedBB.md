# MCAxisAlignedBB

MineCraft 轴对齐边界框对象允许你将 [块的](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) 边界边界变成给定的立方形状.

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.AxisAlignedBB；`

## 调用 MCAxisAlignedBB 对象

您可以使用 [块的](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) `轴对齐BB` 属性获得这样一个对象。  
或者，您可以使用此软件包创建一个新的 MCAxisAlignedBB 对象：

```zenscript
AxisalignedBB.create(双分钟、双分钟、双分钟、双最大X、双倍最大Y、双倍最大Z)；
```

此函数的所有参数在 0 和 1 之间加倍!

## ZenProperties

您可以使用 `getProperty()` 或 `object.property` 获取和设置每个属性。

| ZenProperty | 类型  |
| ----------- | --- |
| 最小值         | 双精度 |
| minY        | 双精度 |
| minZ        | 双精度 |
| maxX        | 双精度 |
| 最大 Y        | 双精度 |
| 最大Z         | 双精度 |