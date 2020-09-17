# Carven

## Paket

`mods.chisel.Carving`

## Addition

```zenscript
//mods.chisel.Carving.addGroup(String name);
//mods.chisel.Carving.addVariation(String groupName, IItemStack stack);
mods.chisel.Carving.addGroup("test");
mods.chisel.Carving.addVariation("test", <minecraft:stone>);
```

## Entfernen

Sie können die Namen der Gruppen erhalten, indem Sie `/ct chiselGroups auswählen`

```zenscript
//mods.chisel.Carving.removeGroup(String name);
//mods.chisel.Carving.removeVariation(String groupName, IItemStack stack);
mods.chisel.Carving.removeGroup("test");
mods.chisel.Carving.removeVariation("test", <minecraft:stone>);
```