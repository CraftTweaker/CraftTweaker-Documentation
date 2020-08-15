# 皮革套装

## 所属包名
```zenscript
导入 mods.terraft.leatherKnapping;
```

## 添加配方

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern)；
```

## 删除配方

```zenscript
leatherKnapping.removeRecipe(IItemStack 输出);
leatherKnapping.removeRecipe(String registryname);
```

## 例子
```zenscript
// 退出
leatherKnapping.addRecipe("recipe", <tfc:quiver>, "XXXX", "X XXX", "X XXX", "X XXX", "X XXX";
```