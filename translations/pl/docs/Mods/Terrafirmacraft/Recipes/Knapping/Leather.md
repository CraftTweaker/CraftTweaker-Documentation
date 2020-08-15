# Leather Knapping

## Pakiet
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## Dodanie

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Usuwanie

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## Przykład
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```