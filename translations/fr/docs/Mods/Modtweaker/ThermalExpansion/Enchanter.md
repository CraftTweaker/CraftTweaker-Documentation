# Ensorcellateur des arcanes (Enchanteur enchanteur)

## Paquet

`format@@0 mods.thermalexpansion.Enchanter`

## Ajouter

```zenscript
mods.thermalexpansion.Enchanter.addRecipe(sortie IItemStack, entrée IItemStack, IItemStack secondInput, int energy, int experience, boolean empowered);

mods. hermalexpansion.Enchanter.addRecipe(<minecraft:enchanted_book>.withTag({StoredEnchantments: [{id: 35}]}), <minecraft:book>, <minecraft:diamond>, 12000, 3000, false);
```

## Retirer

```zenscript
mods.thermalexpansion.Enchanter.removeRecipe(entrée IItemStack, IItemStack secondInput);

mods.thermalexpansion.Enchanter.removeRecipe(<minecraft:book>, <minecraft:diamond>);
```