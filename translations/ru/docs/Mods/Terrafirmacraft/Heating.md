# Отопление

## Пакет
```zenscript
import mods.terrafirmacraft.Отопление;
```

## Сложение

```zenscript
Heating.addRecipe(String registryName, IItemStack input, IItemStack output, float transformTemp);
```
- Температура преобразователя при которой рецепт полностью преобразует ввод в выходной стек.
- maxTemp , при котором входная температура разрушается. Для получения полной информации обратитесь к [температурам отопления](/Mods/Terrafirmacraft/HeatingTemperatures)

## Удаление

```zenscript
Heating.removeRecipe(IItemStack);
Heating.removeRecipe(String registryName);
```