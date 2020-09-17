# Destylaty

Destylator jest maszyną, która przekształca płyn wejściowy w płyn wyjściowy i element za pomocą pary.

## Pakiet
`Destylator`

## Metody

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wyjście** wynik przepisu.
- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** Wprowadzenie przepisu.
- **int craftTime** Czas tworzenia maszyny do przetworzenia
- **int SteamCost** Koszt Steam dla maszyny do przetworzenia

## Dodanie

```zenscript
mods.steamagerevolution.Distiller.addRecipe(ILiquidStack, IItemStack outputStack, ILiquidStack, int craftTime, int steamCost);
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200;
```

## Usuwanie

```zenscript mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack); mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);

mods.steamagerevolution.Distiller.removeAll(); ``
