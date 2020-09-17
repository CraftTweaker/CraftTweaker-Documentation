# Altar de sangre

## Paquete

`mods.bloodmagic.BloodAltar`

## Adicional

Esto crea una receta de altar de sangre que utiliza el `artículo de entrada` dado y produce el `de salida` dado.  
Para obtener el `mínimo`, sustrae 1 de lo que te dice el JEI/la emblema, así que un altar T1 requeriría `0`.  
El `syphon` valor es la cantidad de Esencia de Vida al sinfón del Altar de Sangre durante el curso de la fabricación.  
The `consumeRate` is how quickly the Life Essence is syphoned.  
The `drainRate` es la rapidez con que se pierde el progreso si el Altar de Sangre se queda sin Esencia de Vida durante la fabricación.

```zenscript
//mods.bloodmagic.BloodAltar.addRecipe(Salida ItemStack, entrada ItemStack, int minimumTier, int syphon, int consumeinRate);
mods.bloodmagic.BloodAltar.addRecipe(<minecraft:glass>, <minecraft:stick>, 0, 20,30,40);
```

## Eliminar

```zenscript
//mods.bloodmagic.BloodAltar.removeRecipe(ItemStack input);
mods.bloodmagic.BloodAltar.removeRecipe(<minecraft:stone>);
```