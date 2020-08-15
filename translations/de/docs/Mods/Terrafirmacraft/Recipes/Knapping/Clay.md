# Clay Knapping

## Paket
```zenscript
import mods.terrafirmacraft.ClayKnapping;
```

## Addition

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Entfernen

```zenscript
ClayKnapping.removeRecipe(IItemStack output);
ClayKnapping.removeRecipe(String registryName);
```

## Beispiel
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```