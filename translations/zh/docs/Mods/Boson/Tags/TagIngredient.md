# `Taggredient`

`Tag Ingredient` 是一个 `IIngredient` 实现使您可以在配方中使用一个 [`标签`](/Mods/Boson/Tags/Tag/) 您只能从 [`标签` 加载器](/Mods/Boson/Loaders/Tags/) 中访问此数据。 For more information regarding tags and how to obtain them, refer to [this page](/Mods/Boson/Tags/Concept/).

## 班级详细信息
该类位于 `net.thesilkmin.mc.boson.zen.tag` 包，生成 `net.thesilkminer.mc.boson.zen.tag.TagIngredient` 其完全合格的名称用于导入。

## 创建一个新实例
参考 [括号处理文档](/Mods/Boson/Tags/BracketHandler/)。

## `材料（IIngredient）`
既然 `Tag Ingredient` 是一个 `IIngredient`, 它可以访问该接口的所有属性和方法。 更多详细信息请参考 到 [`IIngredient`的文档页面](/Vanilla/Variable_Types/IIngredient/) 此文档页面 仅概述此类特定的添加和询问。

## 参数
`Tag Ingredient` 提供了只读访问另外一组属性的权限，如下表所示：

| 属性名称      | 返回值类型                                  | 描述             |
| --------- | -------------------------------------- | -------------- |
| `tagName` | [`名称SpacedString`](/Mods/Boson/Names/) | 唯一识别该成分所指标签的名称 |

## 例子

```zenscript
val anyIngot = <tag-items:forge:ingots>;
val anyWool = <tag-items:minecraft:wool>;

reciples.addShaped("wool_infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool], [anyWool, anyIngot]]);
```
