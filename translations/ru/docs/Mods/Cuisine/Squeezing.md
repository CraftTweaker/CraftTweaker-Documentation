# Сжатие бассейна

## Сложение

```zenscript
импортируйте mods.cuisine.BasinSqueezing;

BasinSqueezing.add(IIngredient input, ILiquidStack output, @Optional IItemStack extraOutput);

BasinSqueezing. dd(<item:minecraft:dirt>, <liquid:water> * 1000);
BasinSqueezing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Удаление

```zenscript
импорт mods.cuisine.BasinSqueezing;

// Удаляем по входам.
BasinSqueezing.remove(IItemStack input, ILiquidStack inputFluid);

BasinSqueezing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Удаляем по идентификатору.
BasinSqueezing.remove(tring id);

BasinSqueezing.remove("recipe_name");

// Удаляем все!
Басинкающий.removeAll();
```