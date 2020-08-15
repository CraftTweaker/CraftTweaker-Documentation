# 雕像

## 所属包名

`chisel.Caring`

## 添加配方

```zenscript
//mods.chisel.Carving.addGroup(String name);
/mods.chisel.Carving.addVariation(String groupName, IItemStack stack);
mods.chisel.Carving.addGroup("test");
mods.chisel.Carving.addVariation("test", <minecraft:stone>);
```

## 删除配方

您可以通过运行 `/ct chiselGroups` 获取群组名称 </code>

```zenscript
//mods.chisel.Carving.removeGroup(String name);
//mods.chisel.Carving.removeVariation(String groupName, IItemStack stack);
mods.chisel.Carving.removeGroup("test");
mods.chisel.Carving.removeVariation("test", <minecraft:stone>);
```