# Мистический Ensorcellator (a.k.a Enchanter)

## Пакет

`mods.thermalexpansion.Enchanter`

## Сложение

```zenscript
mods.thermalexpansion.Enchanter.addRecipe(IItemStack, IItemStack input, IItemStack secondInput, int energy, int experience, boolean empowered);

модов. hermalexpansion.Enchanter.addRecipe(<minecraft:enchanted_book>.withTag({StoredEnchantments: [{id: 35}]}), <minecraft:book>, <minecraft:diamond>, 12000, 3000, false);
```

## Удаление

```zenscript
mods.thermalexpansion.Enchanter.removeRecipe(IItemStack, IItemStack secondInput);

mods.thermalexpansion.Enchanter.removeRecipe(<minecraft:book>, <minecraft:diamond>);
```