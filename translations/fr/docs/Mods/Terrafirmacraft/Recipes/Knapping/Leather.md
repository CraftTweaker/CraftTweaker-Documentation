# Leather Knapping

## Package
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## Ajouter

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Removal

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## Exemple
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```