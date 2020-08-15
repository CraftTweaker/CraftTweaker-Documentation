# 熔化

`熔化` 包允许您添加或移除熔融配方(熔炼中的项目->液体)。

## 导入包

You can call the Melting package using `mods.tconstruct.Melting`

## 添加熔化配方

```zenscript
//mods.tconstruct.Melting.addRecipe(ILiquidStack output, IIngredient input, @Optional int temp);
mods.tconstruct.Melting.addRecipe(<liquid:molten_gold> * 144,<minecraft:gold_ingot>);
mods.tconstruct.Melt.Melting.Melting. ddRecipe(<liquid:molten_iron> * 144,<minecraft:iron_ingot>, 500)；

/addEntityMelting(IEntityDefinition entity, ILiquidStack Stack)；
//您只能覆盖现有的配方，您不需要先删除它！
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:sheep>, <liquid:cryotheum>);
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:villager>, <liquid:cryotheum>);

```

## 移除熔化配方

```zenscript
//mods.tconstruct.Melting.removeRecipe(ILiquidStack output);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>);

/mods.tconstruct.Melting.removeRecipe(ILiquidStack output, IItemStack input);
mods.tconstruct.Melt.Melting.removeRecipe(<liquid:molten_iron>, <minecraft:iron_ingot>);

// removeEntityMeltity(IEntityDefining entity);
mods.tstruct.Melting.removeEntityMelting(<entity:minecraft:villager>);
```