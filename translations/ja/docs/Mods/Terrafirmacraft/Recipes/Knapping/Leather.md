# Leather Knapping

## パッケージ
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## 追加

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## 削除

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## 例
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```