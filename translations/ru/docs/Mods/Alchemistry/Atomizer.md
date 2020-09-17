# Атомная

# Пакет
```zenscript
mods.alchemistry.Атомная
```

## Методы
**[IItemStack](/Vanilla/Items/IItemStack/) output** - вывод рецепта.

**[Ввод ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** - Ввод рецепта.


## Сложение
```zenscript
mods.alchemistry.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## Удаление
```zenscript
mods.alchemistry.Atomizer.removeRecipe(ILiquidStack); //Будет работать независимо от количества

модов.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();
```
