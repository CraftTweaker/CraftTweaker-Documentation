# Leather Knapping

## 所属包
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## 添加

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## 移除

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## 例子
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```