# Arkane Ensorcellator (a.k.a Enchanter)

## Paket

`mods.thermalexpansion.Enchanter`

## Addition

```zenscript
mods.thermalexpansion.Enchanter.addRecipe(IItemStack Ausgabe, IItemStack Eingabe, IItemStack secondInput, int Energie, int Erfahrung, boolean empowered);

mods. hermalexpansion.Enchanter.addRecipe(<minecraft:enchanted_book>.withTag({StoredEnchantments: [{id: 35}]}), <minecraft:book>, <minecraft:diamond>, 12000, 3000, false);
```

## Entfernen

```zenscript
mods.thermalexpansion.Enchanter.removeRecipe(IItemStack-Eingang, IItemStack secondInput);

mods.thermalexpansion.Enchanter.removeRecipe(<minecraft:book>, <minecraft:diamond>);
```