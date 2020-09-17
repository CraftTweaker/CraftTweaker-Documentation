# Liquifier

# Пакет
```zenscript
mods.alchemistry.Liquifier
```

## Методы
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) output** - вывод рецепта.

**[IItemStack](/Vanilla/Items/IItemStack/) ввода** - Ввод рецепта.

## Сложение
```zenscript
mods.alchemistry.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## Удаление
```zenscript
mods.alchemistry.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRecipes();
```
