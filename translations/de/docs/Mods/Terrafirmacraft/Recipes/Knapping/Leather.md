# Leather Knapping

## Paket
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## Addition

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Entfernen

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## Beispiel
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```