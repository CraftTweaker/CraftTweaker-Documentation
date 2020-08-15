# Clay Knapping

## Pacchetto
```zenscript
import mods.terrafirmacraft.ClayKnapping;
```

## Addizione

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Rimozione

```zenscript
ClayKnapping.removeRecipe(IItemStack output);
ClayKnapping.removeRecipe(String registryName);
```

## Esempio
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```