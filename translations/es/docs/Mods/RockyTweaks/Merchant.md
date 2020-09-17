# Comerciante

## Comandos

Los siguientes comandos se añaden para recuperar información sobre las profesiones de comerciantes disponibles & carreras:

- `/ct Merchant professions` - produce un registro de profesiones de comerciante válidas
- `/ct merchant careers [profession]` - produce un registro de cuidadores válidos para todo o la profesión especificada

## Paquete

`mods.rockytweaks.Merchant`

## Adicional

Las operaciones pueden añadirse a una profesión específica de comerciante & carrer.

```zenscript
// addTrade(String profession, String career, Itemstack input1, @Optional Itemstack input2, Itemstack output, int level);
mods.rockytweaks.Merchant.addTrade("minecraft:nitwit", "nitwit", <minecraft:emerald>, <minecraft:diamond>, <minecraft:cobblestone>, 1);
```

## Eliminar

La eliminación de comercio comercial no es posible actualmente.
