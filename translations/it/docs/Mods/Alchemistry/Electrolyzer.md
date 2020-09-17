# Elettrolyzer

# Pacchetto
```zenscript
`mods.alchemistry.Electrolyzer`
```

## Metodi
- **[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** - L'ingresso liquido della ricetta.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - L'ingresso elettrolitico della ricetta.
- **int electrolyteConsumptionChance** - Possibilità di consumo elettrolico
- **[IItemStack](/Vanilla/Items/IItemStack/) output** - Output per la ricetta

## Addizione
```zenscript
mods.alchimia.Electrolyzer.addRecipe(ingresso ILiquidStack, ingresso IItemStack, int electrolyteConsumptionChance, uscita IItemStack, output IItemStack 2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## Rimozione
```zenscript
mods.alchimia.Electrolyzer.removeRecipe(ingresso ILiquidStack, ingresso IItemStack);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.Electrolyzer.removeAllRicette();
```
