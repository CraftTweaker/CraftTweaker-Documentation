# Fuentes de calor

El paquete *de fuentes de calor* se utiliza para añadir o quitar fuentes de calor para ciertas máquinas/procesos.

**Nota: Estas funciones sólo funcionan para elementos que tienen un formulario de bloque!**

## Llamando

Puedes llamar al paquete *de fuentes de calor* usando `mods.skyresources.heatsources`

## Adición de fuente de calor

```zenscript
//mods.skyresources.heatsources.add(IItemStack stack, int heatValue);
mods.skyresources.heatsources.add(<minecraft:ice>, 3);
```

## Eliminación de fuente de calor

```zenscript
//mods.skyresources.heatsources.remove(Salida IItemStack);
mods.skyresources.heatsources.remove(<minecraft:obsidian>);
```