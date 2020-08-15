# Métal ancien

## Paquet

`Importer mods.ic2.MetalFormer;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**

## Ajouter une recette de coupe

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(IItemStack sortie, IIngredient input);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## Supprimer la recette de coupe

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_cutting.ini`.
- Si vous utilisez Ic2 Classic et Ic2c Extras, pour supprimer une recette, désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.

## Ajouter une recette d'extraction

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(IItemStack sortie, IIngredient input);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Supprimer la recette d'extraction

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_extruding.ini`.
- Si vous utilisez Ic2 Classic et Ic2c Extras, pour supprimer une recette, désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.

## Ajouter une recette de roulement

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(IItemStack sortie, IIngredient input);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## Supprimer la recette de roulage

- Si vous utilisez Ic2 Experimental, pour supprimer une recette, supprimez simplement la ligne correspondante dans `config/ic2/metal_former_rolling.ini`
- Si vous utilisez Ic2 Classic et Ic2c Extras, pour supprimer une recette, désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.