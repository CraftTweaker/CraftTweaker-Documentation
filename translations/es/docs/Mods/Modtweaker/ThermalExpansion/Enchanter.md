# Ensorcellator Arcano (también conocido como Energiador Arcano)

## Paquete

`mods.thermalexpansion.Enchanter`

## Adicional

```zenscript
mods.thermalexpansion.Eneguter.addRecipe(Salida de ItemStack, entrada de ItemStack, segundo ItemStack de ItemStack, energía de int, experiencia de int, empoderado booleano);

mods. hermalexpansion.Eneguter.addRecipe(<minecraft:enchanted_book>.withTag({StoredEnchantments: [{id: 35}]}), <minecraft:book>, <minecraft:diamond>, 12000, 3000, false);
```

## Eliminar

```zenscript
mods.thermalexpansion.Eneguter.removeRecipe(entrada IItemStack Iput, ItemStack secondInput);

mods.thermalexpansion.Eneguter.removeRecipe(<minecraft:book>, <minecraft:diamond>);
```