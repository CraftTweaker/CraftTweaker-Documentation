# 附魔者

## 所属包名

`导入 mods.enderio.Enchanter;`

## 方法

**- [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) 输出** 输出附魔。

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/) 输入** 它用来创造这个附魔的项目。

**- 英寸取决于等级** 每级附魔的输入项数量。

**- 双倍成本倍增器** 用于修改配方的昂贵程度。

## 添加配方

```zenscript
mods.enderio.Enchanter.addRecipe(IEnchantmentDefinition output, IIngredient input, int amountPerLevel, double costMultiplier);

mods.enderio.Enchanter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
```

## 移除

```zenscript
mods.enderio.Enchanter.removeRecipe(IEnchantmentDefinition output);

mods.enderio.Enchanter.removeRecipe(<enchantment:minecraft:sharpness>);
```