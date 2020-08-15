# 粘土套装

## 所属包名
```zenscript
导入 mods.terrafirmacraft。a. ClayKnapping；
```

## 添加配方

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern)；
```

## 删除配方

```zenscript
ClayKnapping.removeRecipe(IItemStack 输出);
ClayKnapping.removeRecipe(String registryname);
```

## 例子
```zenscript
ClayKnapping.addRecipe("unfied_shipel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX");
```