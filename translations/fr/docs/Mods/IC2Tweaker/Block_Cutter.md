# Coupeur de bloc

## Paquet

`Importer mods.ic2.BlockCutter ;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**
- **Dureté d'int @optionnelle** Nécessité de dureté minimale pour la lame.

## Ajouter

```zenscript
mods.ic2.BlockCutter.addRecipe(sortie IItemStack, entrée IIngredient, @Optional int hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## Retirer

Pour l'instant, supprimez simplement la ligne correspondante dans `config/ic2/block_cutter.ini`.