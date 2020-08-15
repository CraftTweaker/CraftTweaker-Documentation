# Sieving

## 所属包名

要访问 `Sieve` 而不澄清整个路径，您可以以下列方式导入您脚本顶部的包：

```zenscript
导入 mods.exnihilocreatio。Sieve;
```

## 使用方式

- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 块** 减去输出的块。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 从方块中掉落的物品...
- **浮动几率** 应在0-1之间。

## 字符串网格

```zenscript
Sieve.addStringMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Flint 网格h

```zenscript
Sieve.addFlintMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## 铁网格

```zenscript
Sieve.addIronMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addIRonMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## 钻石网格

```zenscript
Sieve.addDiamondMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1, );
```

## 移除

```zenscript
Sieve.removeAll();
```
