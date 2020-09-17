# 特性代表

特性代表着Tinkers的构造特性。  
您可以从 [特性生成器](/Mods/ContentTweaker/Tinkers_Construct/TraitBuilder/) 或 [特性处理器](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Trait/) 获取这样一个对象。

## 导入类

如果您遇到任何问题，可能需要导入类 (例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)) 这样比抱歉更安全并添加导入。  
`导入mods.contenttweaker.tconstruct.Trait`

## ZenGetter

| ZenGetter            | 类型     |
| -------------------- | ------ |
| identifier           | string |
| commandString #命令字符串 | string |

## 添加特性项目

如果你将给定的成分与工具一起编织在一只修饰工具中，你可以将特性应用为修饰器。

```zenscript
//myTrait.addModifierItem(Iongredient item, @Optional(1) int amountNeed, @Optional(1) int amountMatched));
myTrait.addModifierItem(<item:minecraft:iron_pickaxe>);
myTrait.addModifierItem(<item:minecraft:iron_block>, 4, 2)
```

- `项目` 是匹配的物品。 您可以使用 [项目条件](/Vanilla/Items/Item_Conditions/) 但没有变压器。 
- `数量` 是匹配的项目数量。 你可以将它们拆分到工具构造提供的所有位置，这也允许你超过64。 在上面的示例中，你需要每个添加4个铁块。 默认值为 1。
- `数量匹配` 是按 `数量添加的特性点数量`。 在上面的例子中，四个铁块给出了两个特性点。 默认值为 1。

## 访问特性数据

特性数据是属于特性且是物品绑定的数据。 因此，您可以提供 [IItemStack](/Vanilla/Items/IItemStack/) 并检索 [TraitDataRepresentation](/Mods/ContentTweaker/Tinkers_Construct/TraitDataRepresentation/) 对象。

    val myTraitData = myTrait.getData(itemWtrait)；