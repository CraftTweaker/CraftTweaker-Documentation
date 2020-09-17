# 材料

一种材料是一种物件，例如白金制造。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.Material;`

## 正在获取此对象

您可以使用 [材料系统](/Mods/ContentTweaker/Materials/MaterialSystem/) 检索现有材料，或者使用 [材料生成器](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) 创建一个全新的材料

## 字段

您可以从材料中检索以下信息：

| ZenMethod（ZenMethod） | 返回值类型   | 描述             |
| -------------------- | ------- | -------------- |
| getName()            | string  | 返回材料的名称        |
| getColor()           | int     | 返回材料的颜色        |
| isHasEffect()        | boolean | 如果材料带有发光效果，则返回 |
| getUnlocalizedName() | 字符串     | 返回材料的非本地化名称    |

## 注册 [材料元件](/Mods/ContentTweaker/Materials/Materials/MaterialPart/)

您可以使用 [部件对象](/Mods/ContentTweaker/Materials/Parts/Part/) 或它的名称字符串注册部件。  
您也可以一次注册一个或多个部分。  
因此您总共获得4个选项：

```zenscript
registerParts(String[…]部分)；
registerParts(IPart[…]部分)；


registerPart(String part名称)；
registerPart(IPart part)；
```

注册配件方法返回单个的 [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 对象。  
注册配件方法返回一个 [材料配件](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 列表。