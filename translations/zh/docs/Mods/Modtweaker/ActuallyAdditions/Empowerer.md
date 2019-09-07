# 充能台

## 所属包名

`mods.actuallyadditions.Empowerer`

## 添加配方

```zenscript
mods.actuallyadditions.Empowerer.addRecipe(物品输出, 物品输入, 合成所需物 1, 合成所需物 2, 合成所需 3, 合成所需物 4, 所需能量, 所需时间);
mods.actuallyadditions.Empowerer.addRecipe(物品输出, 物品输入, 合成所需物 1, 合成所需物 2, 合成所需 3, 合成所需物 4, 所需能量, 所需时间, 合成时的粒子效果的颜色的RBG数值);

mods.actuallyadditions.Empowerer.addRecipe(<minecraft:iron_ingot>, <minecraft:leaves>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100);
mods.actuallyadditions.Empowerer.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100, [0.5, 0.3, 0.2]);
```

## 删除配方

```zenscript
//mods.actuallyadditions.Empowerer.removeRecipe(删除该物品的该合成来源);
mods.actuallyadditions.Empowerer.removeRecipe(<actuallyadditions:item_crystal_empowered:5>);
```