# Melting

`溶解` パッケージでは溶解レシピ（製錬所のアイテム>液体）を追加または削除できます。

## 発信中

`mods.tconstruct.Melting` を使って、Melting パッケージを呼び出すことができます。

## 溶解レシピを追加

```zenscript
//mods.tconstruct.Melting.addRecipe(ILiquidStack output, IIngredient input, @Optional int temp);
mods.tconstruct.Melting.addRecipe(<liquid:molten_gold> * 144,<minecraft:gold_ingot>);
mods.tconstruct.Melting.addRecipe(<liquid:molten_iron> * 144,<minecraft:iron_ingot>, 500);

//addEntityMelting(IEntityDefinition entity, ILiquidStack stack);
//You can just override an existing recipe, you don't need to remove it first!
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:sheep>, <liquid:cryotheum>);
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:villager>, <liquid:cryotheum>);

```

## 溶解レシピの削除

```zenscript
//mods.tconstruction.Melting.removeRecipe(ILiquidStack output);
mods.tconstruction.Melting.removeRecipe(<liquid:molten_iron>);

//mods.tconstruct.Melting.removeRecipe(ILiquidStack output, IItemStack input);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>, <minecraft:iron_ingot>);

///removeEntityMelting(IEntityDefinition entity);
mods.tconstruct.Melting.removeEntityMeltentityMelting() );<entity:minecraft:villager>
```