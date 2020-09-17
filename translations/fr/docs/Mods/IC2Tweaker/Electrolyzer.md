# Électrolyseur

## Paquet

`Importer mods.ic2. Electrolyzer ;`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[] sorte** tableau de toutes les sorties. Chaque créneau correspond à la direction Down-Up-Nord-Sud-Ouest-Est. La null de la trace peut être omise.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input
- **int power** Power consumption, measured in EU/tick
- **@Optional int time** Time cost. Valeur par défaut à 200 si non fournie.

## Ajouter

```zenscript
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] sorte, entrée ILiquidStack, puissance d'ints, @temps d'int optionnel);

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null], <liquid:water> * 1000, 30);
```