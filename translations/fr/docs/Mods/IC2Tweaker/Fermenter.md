# Fermenteur

## Paquet

`Importer mods.ic2.Fermenter;`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) sortie** Le fluide fermenté
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input fluid
- **int chaleur** La quantité de chaleur requise pour la fermentation

## Ajouter

```zenscript
mods.ic2.Fermenter.addRecipe(ILiquidStack sortie, ILiquidStack entrée, int heat);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```