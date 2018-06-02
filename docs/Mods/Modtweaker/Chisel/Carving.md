# 雕刻

## 相关包
`mods.chisel.Carving`

## 添加

```
//添加组
//mods.chisel.Carving.addGroup(String name);
//name 组名称
mods.chisel.Carving.addGroup("test");

//向组内添加方块
//mods.chisel.Carving.addVariation(String groupName, IItemStack stack);
//guoupName 组名称
//stack 物品
mods.chisel.Carving.addVariation("test", <minecraft:stone>);
```

## 移除

运行 `/ct chiselGroups` 可以获得所有组的名称
```
//移除组
//mods.chisel.Carving.removeGroup(String name);
//name 组名称
mods.chisel.Carving.removeGroup("test");

//移除组内方块
//mods.chisel.Carving.removeVariation(String groupName, IItemStack stack);
//groupName 组名
//stack 物品
mods.chisel.Carving.removeVariation("test", <minecraft:stone>);
```
