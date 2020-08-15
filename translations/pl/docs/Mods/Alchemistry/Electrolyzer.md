# Elektrolizator

# Pakiet
```zenscript
`mods.alchemistry.Elektroliza`
```

## Metody
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** - Płynne wejście receptury.
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** - Wejście elektrolitowe receptury.
- **int electrolyteConsumptionSzansa** - Szansa na zużycie elektrolitu
- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** - Wyjście dla przepisu

## Dodanie
```zenscript
mods.alchemistry.Electrolyzer.addRecipe(ILiquidStack Input, IItemStack input, int electrolyteConsumptionChance, IItemStack output, IItemStack output2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## Usuwanie
```zenscript
mods.alchemistry.Electrolyzer.removeRecipe(ILiquidStack, IItemStack input);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.b. „oprogramowanie” specjalnie zaprojektowane lub zmodyfikowane do „rozwoju”, „produkcji” lub „użytkowania” sprzętu wyszczególnionego w pozycjach 2B004, 2B006, 2B009, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109,
```
