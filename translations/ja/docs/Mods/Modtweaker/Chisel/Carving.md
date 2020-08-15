# 彫刻中

## パッケージ

`mods.chisel.Carving`

## 追加

```zenscript
//mods.chisel.Carving.addGroup(String name);
//mods.chisel.Carving.addVariation(String groupName, IItemStack stack);
mods.chisel.Carving.addGroup("test");
mods.chisel.Carving.addVariation("test", <minecraft:stone>);
```

## 削除

`/ct chiselGroups`を実行すると、グループ名を取得できます。

```zenscript
//mods.chisel.Carving.removeGroup(String name);
//mods.chisel.Carving.removeVariation(String groupName, IItemStack stack);
mods.chisel.Carving.removeGroup("test");
mods.chisel.Carving.removeVariation("test", <minecraft:stone>);
```