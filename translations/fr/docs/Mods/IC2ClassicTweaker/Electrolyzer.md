# Électrolyseur

## Paquet

```zenscript
Importer mods.ic2. ClassicElectrolyzer ;
```

## Méthodes

### Ajouter les deux recettes

```zenscripts
mods.ic2.ClassicElectrolyzer.addBothRecipe(IItemStack, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) entrée** Doit être une ItemStack, pas d'orée ou autre chose.
- **int d'énergie** eu total reçu de la partie de décharge et de l'énergie totale utilisée pour charger une partie de la recette.

### Ajouter Recette de Frais

```zenscripts
mods.ic2.ClassicElectrolyzer.addChargeRecipe(IItemStack sortie, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) entrée** Doit être une ItemStack, pas d'orée ou autre chose.
- **int d'énergie** eu Total utilisé dans la recette.

### Ajouter une recette de sortie

```zenscripts
mods.ic2.ClassicElectrolyzer.addDischargeRecipe(IItemStack, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addDischargeRecipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) entrée** Doit être une ItemStack, pas d'orée ou autre chose.
- **int d'énergie** eu total reçu de la recette.

### Retirer

Désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.

