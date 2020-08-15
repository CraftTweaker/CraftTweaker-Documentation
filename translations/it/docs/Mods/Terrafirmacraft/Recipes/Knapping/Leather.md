# Leather Knapping

## Pacchetto
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## Addizione

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Rimozione

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## Esempio
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```