# Macerator

## Paquet

`importer mods.ic2.Macerator;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**

## Ajouter

```zenscript
mods.ic2.Macerator.addRecipe(sortie IItemStack, entrée IIngredient);

mods.ic2.Macerator.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Retirer

- Si vous utilisez Ic2 Experimental, pour supprimer une recette, supprimez simplement la ligne correspondante dans `config/ic2/macerator.ini`
- Si vous utilisez Ic2 Classic, pour supprimer une recette, désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.