# Leather Knapping

## 所属包名
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## 添加配方

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## 删除配方

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## 例子
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```