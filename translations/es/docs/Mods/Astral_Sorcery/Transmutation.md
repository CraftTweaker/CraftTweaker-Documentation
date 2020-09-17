# Transmutación de luz estelar

Puede añadir y eliminar Transmutaciones de Starlight

## Llamando

Puedes llamar al paquete LightTransmutings usando `mods.astralsorcery.LightTransmutation`.

## Eliminando

Esta función elimina la primera receta que encuentra que devuelve siempre [ItemStack](/Vanilla/Items/IItemStack/) `salida` y usa `matchStack` para determinar si también debe coincidir con Metadatas.  
Si hay múltiples recetas que devuelven la salida proporcionada, ¡necesitas llamar a este método varias veces!

```zenscript
//mods.astralsorcery.LightTransmutation.removeTransmutation(ItemStack stackToRemove, boolean matchMeta);
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## Adicional

```zenscript
//mods.astralsorcery.LightTransmutation.addTransmutation(pila de ItemStack en ItemStackIn, pila de ItemStack, doble costo);
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);
```