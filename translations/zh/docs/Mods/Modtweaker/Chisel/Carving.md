# Carving

## 所属包名

`mods.chisel.Carving`

## 添加配方

```zenscript
//mods.chisel.Carving.addGroup(String name);
//mods.chisel.Carving.addVariation(String groupName, IItemStack stack);
mods.chisel.Carving.addGroup("test");
mods.chisel.Carving.addVariation("test", <minecraft:stone>);
```

## 删除配方

You can get the names of the groups by running `/ct chiselGroups`

```zenscript
//mods.chisel.Carving.removeGroup(String name);
//mods.chisel.Carving.removeVariation(String groupName, IItemStack stack);
mods.chisel.Carving.removeGroup("test");
mods.chisel.Carving.removeVariation("test", <minecraft:stone>);
```