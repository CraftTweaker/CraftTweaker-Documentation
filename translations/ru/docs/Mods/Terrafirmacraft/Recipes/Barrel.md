# Ствол

## Пакет
```zenscript
import mods.terrafirmacraft.Ствол;
```

## Сложение
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidOutput, int hour);
```

## Удаление

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(Название регистрации)
```
- Для удаления и добавления рецептов должен быть указан хотя бы один выходной вывод (жидкость или предмет).