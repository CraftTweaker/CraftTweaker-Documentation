# Печь дуги

С помощью упаковки можно добавить/удалить рецепты из печи дуги погружения.

## Вызов пакета

Вы можете вызвать пакет ArcFurnace с помощью `mods.immersiveengineering.ArcFurnace`.

## Добавить рецепт

| Требуется | Тип                | Тип данных                                                                             |
| --------- | ------------------ | -------------------------------------------------------------------------------------- |
| Требуется | Вывод              | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Требуется | Input              | [Иингредиент](/Vanilla/Variable_Types/IIngredient/)                                    |
| Требуется | Slag               | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Требуется | Время              | Целое                                                                                  |
| Требуется | Энергия за выбор   | Целое                                                                                  |
| Optional  | Добавки            | [Ингредиент](/Vanilla/Variable_Types/IIngredient/) массив[]                            |
| Optional  | Особый тип рецепта | Строка [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace. ddRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering. rcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Руда");
мод. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```

## Удалить рецепт

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.ArcFurnace.removeRecipe(выход IItemstack);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```