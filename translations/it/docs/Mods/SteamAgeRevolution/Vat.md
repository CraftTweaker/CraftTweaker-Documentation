# Vat

Il Vat è una macchina che converte elementi di ingresso e fluidi in un fluido di uscita.

## Pacchetto
`mods.steamagerevolution.Vat`

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Il risultato della ricetta.
- **[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** Ingresso fluido della ricetta.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) inputItems** Items to input of the recipe.
- **int craftTime** Tempo di lavorazione della macchina da elaborare

## Aggiunta

```zenscript
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[] input, IIngredient[] inputItems, ILiquidStack output, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```

## Rimozione

```zenscript
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack output);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```
