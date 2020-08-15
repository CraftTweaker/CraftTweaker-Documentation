# Haut fourneau

## Paquet

`Importer mods.ic2.BlastFurnace;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**
- **int totalFluidCost** Per-tick IC2 liquefied air cost, measured in mB/tick
- **int time** Total time cost, measured in ticks

## Ajouter

```zenscript
mods.ic2.BlastFurnace.addRecipe(IItemStack[] sortie, entrée Igredient, int totalFluidCost, temps d'int);

mods.ic2.BlastFurnace.addRecipe([<minecraft:diamond>, <minecraft:emerald>], <minecraft:dirt> * 64, 1, 1000);
```

## Retirer

Pour l'instant, supprimez simplement la ligne correspondante dans `config/ic2/blast_furnace.ini`.