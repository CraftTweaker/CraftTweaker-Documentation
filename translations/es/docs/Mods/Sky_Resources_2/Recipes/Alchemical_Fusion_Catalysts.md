# Catalizadores de fusión alquímica

El paquete de *catalizadores* se utiliza para añadir o quitar catalizadores para Fusión Alquímica.

## Llamando

Puedes llamar al paquete de *catalizadores* usando `mods.skyresources.catalysts`

## Adición de catalizador

```zenscript
//mods.skyresources.catalysts.add(ItemStack stack, float value);
mods.skyresources.catalysts.add(<minecraft:diamond>, 4.20);
```

## Eliminación de catalizador

```zenscript
//mods.skyresources.catalysts.remove(Salida IItemStack);
mods.skyresources.catalysts.remove(<skyresources:alchemyitemcomponent:2>);
```