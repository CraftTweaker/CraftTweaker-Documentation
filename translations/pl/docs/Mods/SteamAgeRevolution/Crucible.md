# Tygiel

Tygiel to maszyna, która przekształca element wejściowy w płyn wyjściowy za pomocą pary.

## Pakiet
`[PLACEHOLDER] mods.steamagerevolution.Crucible`

## Metody

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wyjście** wynik przepisu.
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście** Wprowadzenie przepisu.
- **int craftTime** Czas tworzenia maszyny do przetworzenia
- **int SteamCost** Koszt Steam dla maszyny do przetworzenia

## Dodanie

```zenscript
mods.steamagerevolution.Crucible.addRecipe(IIngredient inputt, ILiquidStack output, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## Usuwanie

```zenscript
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack);
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Crucible.removeAll();
```
