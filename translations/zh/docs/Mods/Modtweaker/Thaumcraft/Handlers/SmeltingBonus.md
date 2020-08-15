# 冶炼加成

此软件包允许您将项目添加到/从冶炼红包列表中移除。  
冶炼加成列表是每当一个恶魔炉烧焦一件物品时会被询问的。

## 导入相关包

您可以 [导入](/AdvancedFunctions/Import/) 个软件包及其方法来方便检索这些方法。

```zenscript
导入 mods.thaumcraft.SmeltingBonus;
```

## 添加项目

注意：输入必须是 IItemStack 或 IOreDictEnter

```zenscript
//mods.thaumcraft.SmeltingBonus.addSmeltingBonus(IIngredient input, WeightedItemStack stack)
mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## 删除项目

注意：输入必须是 IItemStack 或 IOreDictEnter

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient input, IItemStack stack);
mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```