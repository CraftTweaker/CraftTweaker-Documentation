# Grinder

Szlifierka jest maszyną, która przekształca element wejściowy w element wyjściowy za pomocą pary.

## Pakiet
`Migotanie`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Wprowadzenie przepisu.
- **int craftTime** Czas tworzenia maszyny do przetworzenia
- **int SteamCost** Koszt Steam dla maszyny do przetworzenia

## Dodanie

```zenscript
mods.steamagerevolution.Grinder.addRecipe(IIngredient inputt, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## Usuwanie

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(wyjście IItemStack);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
