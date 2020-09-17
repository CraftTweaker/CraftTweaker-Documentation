# Piec parowy

Piec parowy to maszyna, która przekształca element wejściowy na element wyjściowy za pomocą pary.

## Pakiet
`[PLACEHOLDER] mods.steamagerevolution.SteamPiec`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Wprowadzenie przepisu.
- **int craftTime** Czas tworzenia maszyny do przetworzenia
- **int SteamCost** Koszt Steam dla maszyny do przetworzenia

## Dodanie

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient inputt, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.SteamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```


## Usuwanie

```zenscript mods.steamagerevolution.SteamFurnace.removeRecipe(wyjście IItemStack); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
