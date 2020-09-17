# Arcane Ensorcellator (alias Enchanter)

## Pacchetto

`mods.thermalexpansion.Enchanter`

## Addizione

```zenscript
mods.thermalexpansion.Enchanter.addRecipe(IItemStack output, IItemStack input, IItemStack secondInput, int energia, int experience, boolean empowered);

mods. hermalexpansion.Enchanter.addRecipe(<minecraft:enchanted_book>.withTag({StoredEnchantments: [{id: 35}]}), <minecraft:book>, <minecraft:diamond>, 12000, 3000, falso);
```

## Rimozione

```zenscript
mods.thermalexpansion.Enchanter.removeRecipe(IItemStack input, IItemStack secondInput);

mods.thermalexpansion.Enchanter.removeRecipe(<minecraft:book>, <minecraft:diamond>);
```