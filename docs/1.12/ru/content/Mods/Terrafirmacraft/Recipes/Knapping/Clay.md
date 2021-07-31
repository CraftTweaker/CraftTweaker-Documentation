# Clay Knapping

## Package
```zenscript
import mods.terrafirmacraft.ClayKnapping;
```

## Сложение

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Removal

```zenscript
ClayKnapping.removeRecipe(IItemStack output);
ClayKnapping.removeRecipe(String registryName);
```

## Пример
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```