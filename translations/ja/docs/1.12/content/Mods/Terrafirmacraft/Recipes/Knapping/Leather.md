# Leather Knapping

## Package
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## 加算

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Removal

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## 例
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```