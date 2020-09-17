# Früher Metall

## Paket

`importieren mods.ic2.MetalFormer;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**

## Schneidenrezept hinzufügen

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(IItemStack Output, IIngrediente Input);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## Schneidenrezept entfernen

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_cutting.ini`.
- Wenn Ic2 Classic und Ic2c Extras verwendet werden, um ein Rezept zu entfernen, deaktivieren Sie einfach das entsprechende Rezept in `config/ic2/ic2machineRecipes.json`.

## Extruding Rezept hinzufügen

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(IItemStack Output, IIngrediente Input);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Extruding Rezept entfernen

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_extruding.ini`.
- Wenn Ic2 Classic und Ic2c Extras verwendet werden, um ein Rezept zu entfernen, deaktivieren Sie einfach das entsprechende Rezept in `config/ic2/ic2machineRecipes.json`.

## Rollendes Rezept hinzufügen

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(IItemStack Ausgabe, IIngrediente Eingang);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## Rollendes Rezept entfernen

- Wenn Ic2 Experimental verwendet wird, um ein Rezept zu entfernen, entfernen Sie einfach die entsprechende Zeile in `config/ic2/metal_former_rolling.ini`
- Wenn Ic2 Classic und Ic2c Extras verwendet werden, um ein Rezept zu entfernen, deaktivieren Sie einfach das entsprechende Rezept in `config/ic2/ic2machineRecipes.json`.