# Arcane Ensorcellator (alias Enchanter)

## Pakiet

`Zaklęcie`

## Dodanie

```zenscript
mods.thermalexpansion.Enchanter.addRecipe(wyjście IItemStack, wejście IItemStack, IItemStack secondInput, energia intint, doświadczenie boolean empowered);

mods. hermalexpansion.Enchanter.addRecipe(<minecraft:enchanted_book>.withTag({StoredEnchantments: [{id: 35}]}), <minecraft:book>, <minecraft:diamond>, 12000, 3000, false);
```

## Usuwanie

```zenscript
mods.thermalexpansion.Enchanter.removeRecipe(wejście IItemStac, IItemStack secondInput);

mods.thermalexpansion.Enchanter.removeRecipe(<minecraft:book>, <minecraft:diamond>);
```