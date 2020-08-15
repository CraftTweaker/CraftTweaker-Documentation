# Młot parowy

Steam Hammer to maszyna, która przekształca dwa wejścia w element wyjściowy za pomocą pary.

## Pakiet
`mods.steamagerevolution.SteamHammer`.

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Wprowadzenie przepisu.
- **int craftTime** Czas tworzenia maszyny do przetworzenia
- **int SteamCost** Koszt Steam dla maszyny do przetworzenia

## Dodanie

```zenscript
mods.steamagerevolution.SteamHammer.addRecipe(IIngredient inputt, IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.SteamHammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```


## Usuwanie

```zenscript
mods.steamagerevolution.SteamHammer.removeRecipe(wyjście IItemStack);
mods.steamagerevolution.SteamHammer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.SteamHammer.removeAll();
```
