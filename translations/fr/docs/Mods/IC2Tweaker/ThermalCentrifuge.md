# Centrifuge thermique

## Paquet

`Importer mods.ic2.ThermalCentrifuge ;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**
- **@Optional int minHeat**

## Ajouter

```zenscript
mods.ic2.ThermalCentrifuge.addRecipe([IItemStack[] sortie, entrée IIngredient, @Optional int minHeat);

mods.ic2.ThermalCentrifuge.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Retirer

- Si vous utilisez Ic2 Experimental, pour supprimer une recette, supprimez simplement la ligne correspondante dans `config/ic2/thermal_centrifuge.ini`
- Si vous utilisez Ic2 Classic et Ic2c Extras, pour supprimer une recette, désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.