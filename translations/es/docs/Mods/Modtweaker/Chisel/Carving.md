# Taller

## Paquete

`mods.chisel.tallado`

## Adicional

```zenscript
//mods.chisel.Carving.addGroup(String name);
//mods.chisel.Carving.addVariation(String groupName, ItemStack stack);
mods.chisel.Carving.addGroup("test");
mods.chisel.Carving.addVariation("test", <minecraft:stone>);
```

## Eliminar

Puedes obtener los nombres de los grupos ejecutando `/ct chiselGroups`

```zenscript
//mods.chisel.Carving.removeGroup(String name);
//mods.chisel.Carving.removeVariation(String groupName, ItemStack stack);
mods.chisel.removeGroup("test");
mods.chisel.Carving.removeVariation("test", <minecraft:stone>);
```