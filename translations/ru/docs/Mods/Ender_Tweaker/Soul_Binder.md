# Усадьба из души

## Пакет

`import mods.enderio.SoulBinder;`

## Метод

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) входной элемент** Основной (non-soul vial) компонент.
- **Строки[] сущности** разрешенные сущности, которые должны присутствовать в душе виал для работы этого рецепта.
- **xp** Стоимость опыта для этого рецепта
- **int energyCost** Сколько FE использует рецепт. По умолчанию 5000.

## Сложение

```zenscript
mods.enderio.SoulBinder.addRecipe(IItemStack, IIngredient input, String[] сущностей, int xp, int energyCost);

mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
```

## Удаление

```zenscript
mods.enderio.SoulBinder.removeRecipe(выход IItemStack);

mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);
```