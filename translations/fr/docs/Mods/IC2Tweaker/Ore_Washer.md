# Délaveur de minerai

## Paquet

`Importer mods.ic2.OreWasher;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**
- **@Optional int water** Amount of water required for one round of processing of this recipe, measured in mB. Par défaut à 1000 si non fourni.

## Ajouter

```zenscript
mods.ic2.OreWasher.addRecipe(IItemStack[] sortie, entrée IIngredient, @Optional int water);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Retirer

- Si vous utilisez Ic2 Experimental, pour supprimer une recette, supprimez simplement la ligne correspondante dans `config/ic2/ore_washer.ini`
- Si vous utilisez Ic2 Classic et Ic2c Extras, pour supprimer une recette, désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.