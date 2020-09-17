# Нагрев бассейна

## Сложение

```zenscript
импортируйте mods.cuisine.BasinHeating;

BasinHeating.add(ILiquidStack input, IItemStack output); // Используйте 1 в качестве теплового значения
BasinОтопления. dd(ILiquidStack input, IItemStack output, int heatValue);

BasinHeating.add(<liquid:lava> * 1000, <item:minecraft:diamond>);
BasinHeating.add(<liquid:water> * 1000, <item:minecraft:diamond>, 100);
```

## Удаление

```zenscript
import mods.cuisine.BasinHeating;

// Удаляем по вводу.
BasinHeating.remove(ILiquidStack);

BasinHeating.remove(<liquid:lava> * 1000);

// Удаляем по идентификатору.
BasinHeating.remove(tring id);

BasinHeating.remove("recipe_name");

// Удаляем все!
BasinHeating.removeAll();
```