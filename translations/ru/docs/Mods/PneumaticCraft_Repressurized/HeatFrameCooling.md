# Охлаждение теплового фрейма

Охлаждение тепловых кадров может быть использовано для преобразования одного предмета в другой, поместив предметы в сундук или другой инвентарь с прикрепленной тепловой рамкой, и охлаждать его ниже 0°С (обычно используя трубку Vortex).

## Звонок

Вы можете вызвать пакет теплового охлаждения с помощью `mods.pneumaticcraft.heatframecooling`

## Удаление

Эта функция удаляет первый рецепт, который он находит с данным [IIngredient](/Vanilla/Variable_Types/IIngredient/) `вывод`:

```zenscript
mods.pneumaticcraft.heatframecooling.removeRecipe(IIngredient output);
// Пример
mods.pneumaticcraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

Эта функция удаляет *всех рецептов охлаждения* тепловой рамки:

```zenscript
mods.pneumaticcraft.heatframecooling.removeAllRecipes();
```

## Добавление

Эти функции используются для добавления новых рецептов системы теплового охлаждения:

```zenscript
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```