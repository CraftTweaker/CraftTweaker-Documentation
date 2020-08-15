# Wykuwanie stopów

Stop Forge jest maszyną, która przekształca dwa płyny wejściowe w jedną płyn wyjściowy.

## Pakiet
`mods.steamagerevolution.AlloyForge`

## Metody

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wyjście** wynik przepisu.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** Wprowadzenie przepisu.
- **int craftTime** Czas tworzenia maszyny do przetworzenia

## Dodanie

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(ILiquidStack, ILiquidStack, ILiquidStack output, int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```


## Usuwanie

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```
