# Alliage

Le paquet `Alliage` vous permet d'ajouter ou de supprimer des recettes d'alliage.

## Appel en cours

Vous pouvez appeler le package Alliage en utilisant `mods.tconstruct.Alloy`

## Ajouter des recettes en alliage

```zenscript
//mods.tconstruct.Alloy.addRecipe(ILiquidStack, ILiquidStack[] entrées);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## Suppression des recettes d'alliage

```zenscript
//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```