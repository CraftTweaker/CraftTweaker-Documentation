# Металлургический Инфектор

Начиная с 9.7.0 меканизма появилась возможность просматривать все рецептные строки пользователя Металлургического Инфузатора через команду `/ct mekrecipes metallurgicInfuser`

## Строка типа инфузии

Как добавление, так и удаление рецептов требуют строки "типа инфузии". Примеры меканизма по умолчанию:

| Тип установки | Добавляется |
| ------------- | ----------- |
| "CARBON"      | Меканизм    |
| "ПОДСКАЗЬ"    | Меканизм    |
| "DIAMOND"     | Меканизм    |
| "REDSTONE"    | Меканизм    |
| "ФУНГИ"       | Меканизм    |
| "BIO"         | Меканизм    |
| "OBSIDIAN"    | Меканизм    |

Если какой-либо другой мод регистрирует новый тип инфузии, этот тип может использоваться как в CraftTweaker, так и при условии точного указания имени зарегистрированного типа. ПРИМЕЧАНИЕ: *невозможно* определить **новые** вставку *типы* с CraftTweaker

Начиная с 9.7.0, теперь можно просматривать все зарегистрированные инфузии (в том числе и от других модов) через команду `/ct infuseTypes`

## Сложение

```zenscript
mods.mekanism.infuser.addRecipe(String infusionType, infusionConsumed, IIngredient inputStack, IItemStack);

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

В соответствии с Mekanism 9.7.0 можно использовать IIngredients как inputStack, а не только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional String infusionType);

mods.mekanism.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanism.infuser.removeRecipe(<minecraft:mycelium>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

По данным Меканизма 9.7.0, теперь можно удалить все рецепты Металлургического Инфектора. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.infuser.removeAllRecipes();
```