# Привязка кожи

## Пакет
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## Сложение

```zenscript
leatherKnapping.addRecipe(tring registryName, IItemStack output, String... pattern);
```

## Удаление

```zenscript
leatherKnapping.removeRecipe(IItemStack);
кожаный Knapping.removeRecipe(String registryName);
```

## Пример
```zenscript
// рецепт кожаного
кожаного Knapping.addRecipe("рецепт", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```