# Leather Knapping

## Package
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## Addition

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Removal

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## Example
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```