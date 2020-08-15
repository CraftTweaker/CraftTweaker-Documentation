# Knapping In Cuoio

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
// ricetta faretra
pelletteria Knapping.addRecipe("ricetta", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```