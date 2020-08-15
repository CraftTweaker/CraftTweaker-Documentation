# Blok przesyłania

Blok odlewniczy jest maszyną, która przekształca płyn wejściowy w element wyjściowy.

## Pakiet
`Mods.steamagerevolution.CastingBlock`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** Wprowadzenie przepisu.
- **int craftTime** Czas tworzenia maszyny do przetworzenia

## Dodanie

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack, wyjście IItemStack, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## Usuwanie

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(wyjście IItemStack);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```
