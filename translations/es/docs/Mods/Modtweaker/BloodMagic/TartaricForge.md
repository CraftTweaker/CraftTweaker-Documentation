# Forja Tartárica

## Paquete

`mods.bloodmagic.TartaricForge`

## Adicional

```zenscript
las entradas tienen un tamaño máximo de 4
//mods.bloodmagic.TartaricForge.addRecipe(Salida ItemStack, ItemStack[] entradas, dobles minSouls, doble soulDrain);
mods. loodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## Eliminar

```zenscript
las entradas tienen un tamaño máximo de 4
//mods.bloodmagic.TartaricForge.removeRecipe(IItemStack[] entradas);
mods.bloodmagic.TartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>]);
```