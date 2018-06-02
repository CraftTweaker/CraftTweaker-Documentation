# 磨粉机

## 相关包
`mods.actuallyadditions.Crusher`

## 添加

```
//mods.actuallyadditions.Crusher.addRecipe(IItemStack output, IItemStack input, @Optional IItemStack outputSecondary, @Optional int outputSecondaryChance);
//output 输出
//input 输入
//outputSecondary 副产物
//outputSecondaryChance 副产物产出概率（可选）
mods.actuallyadditions.Crusher.addRecipe(<minecraft:iron_ingot>, <minecraft:iron_ore>, <minecraft:stone>, 50);
```

## 移除

```
//mods.actuallyadditions.Crusher.removeRecipe(IItemStack output);
//output 输出
mods.actuallyadditions.Crusher.removeRecipe(<minecraft:gold_ore>);
```
