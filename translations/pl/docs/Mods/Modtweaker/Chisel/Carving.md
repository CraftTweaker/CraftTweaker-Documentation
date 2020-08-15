# Rzeźba

## Pakiet

`Rzeźbianie`

## Dodanie

```zenscript
//mods.chisel.Carving.addGroup(Nazwa string);
//mods.chisel.Carving.addVariation(String groupName, IItemStack stack);
mods.chisel.Carving.addGroup("test");
mods.chisel.Carving.addVariation("test", <minecraft:stone>);
```

## Usuwanie

Nazwy grup można pobrać za pomocą `/ct chiselGroups`

```zenscript
//mods.chisel.Carving.removeGroup(Nazwa ciągu);
//mods.chisel.Carving.removeVariation(String groupName, IItemStack stack);
mods.chisel.Carving.removeGroup("test");
mods.chisel.Carving.removeVariation("test", <minecraft:stone>);
```