# Метание бассейнов

## Сложение

```zenscript
импортировать mods.cuisine.BasinThrowing;

BasinThrowing.add(IIngredient input, ILiquidStack inputFluid, IItemStack);

BasinThrowing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Удаление

```zenscript
import mods.cuisine.BasinThrowing;

// Удаляем по входам.
BasinThrowing.remove(IItemStack input, ILiquidStack inputFluid);

BasinThrowing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Удаление по идентификатору.
BasinThrowing.remove(tring id);

BasinThrowing.remove("recipe_name");

// Удаляем все!
BasinThrowing.removeAll();
```