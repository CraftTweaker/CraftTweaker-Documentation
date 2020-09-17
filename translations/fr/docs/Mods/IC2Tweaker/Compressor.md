# Compresseur

## Paquet

`Importer mods.ic2.Compressor;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**

## Ajouter

```zenscript
mods.ic2.Compressor.addRecipe(IItemStack, IIngredient input);

mods.ic2.Compressor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Retirer

- Si vous utilisez Ic2 Experimental, pour supprimer une recette, supprimez simplement la ligne correspondante dans `config/ic2/compressor.ini`
- Si vous utilisez Ic2 Classic, pour supprimer une recette, désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.