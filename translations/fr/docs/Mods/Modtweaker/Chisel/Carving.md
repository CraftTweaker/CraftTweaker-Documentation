# Sculpter

## Paquet

`Sculpture`

## Ajouter

```zenscript
//mods.chisel.Carving.addGroup(String name);
//mods.chisel.Carving.addVariation(String groupName, IItemStack stack);
mods.chisel.Carving.addGroup("test");
mods.chisel.Carving.addVariation("test", <minecraft:stone>);
```

## Retirer

Vous pouvez obtenir les noms des groupes en exécutant `/ct chiselGroups`

```zenscript
//mods.chisel.Carving.removeGroup(String name);
//mods.chisel.Carving.removeVariation(String groupName, IItemStack stack);
mods.chisel.Carving.removeGroup("test");
mods.chisel.Carving.removeVariation("test", <minecraft:stone>);
```