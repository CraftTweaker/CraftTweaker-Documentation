# Clay Knapping

## Pakiet
```zenscript
import mods.terrafirmacraft.ClayKnapping;
```

## Dodanie

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Usuwanie

```zenscript
ClayKnapping.removeRecipe(IItemStack output);
ClayKnapping.removeRecipe(String registryName);
```

## Przykład
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```