# Leather Knapping

## Пакет
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## Сложение

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Удаление

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## Пример
```zenscript
// quiver recipe
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```