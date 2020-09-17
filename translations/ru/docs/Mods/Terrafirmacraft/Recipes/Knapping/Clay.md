# Привязка глины

## Пакет
```zenscript
import mods.terrafirmacraft.КлейKnapp;
```

## Сложение

```zenscript
ClayKnapping.addRecipe(tring registryName, IItemStack, String... pattern);
```

## Удаление

```zenscript
ClayKnapping.removeRecipe(IItemStack);
ClayKnapping.removeRecipe(String registryName);
```

## Пример
```zenscript
ClayKnapping.addRecipe("Неfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```