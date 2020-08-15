# Mesa de alquimia

## Paquete

`mods.bloodmagic.AlchemyTable`

## Adicional

```zenscript
las entradas tienen un tamaño máximo de 6
//mods.bloodmagic.AlchemyTable.addRecipe(IItemStack de salida, IItemStack[] entradas, int syphon, int ticks, int minTier);
mods. loodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## Añadir poción

```zenscript
las entradas tienen un tamaño máximo de 5 para tener en cuenta los catalizadores (cualquier objeto contenedor de poción es descartado)
var pot = <potion:minecraft:strength>. akePotionEffect(6000, 1);
//mods.bloodmagic.AlchemyTable. ddPotionRecipe(ItemStack[] entradas, efectos IPotionEffect, int syphon, int tick, int minTier)
mods.bloodmagic.AlchemyTable.addPotionRecipe([<bloodmagic:potion_flask>, <minecraft:carrot>,<minecraft:potato>], pot, 20, 10, 0);
```

## Eliminar

```zenscript
las entradas tienen un tamaño máximo de 6
//mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] entradas);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```

## Eliminación de Poción

Cualquier eliminación se considera una poción potencial si no coincide con una receta en el registro de la API.

```zenscript
//mods.bloodMagic.AlchemyTable.removeRecipe(ItemStack[] entradas);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:ghast_tear>, <bloodmagic:potion_flask>]);
```