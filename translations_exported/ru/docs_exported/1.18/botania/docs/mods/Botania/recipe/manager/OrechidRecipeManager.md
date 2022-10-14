# OrechidRecipeManager



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.OrechidRecipeManager;
```


## Implemented Interfaces
OrechidRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in OrechidRecipeManager

- [IOrechidManagerBase](/mods/Botania/recipe/manager/base/IOrechidManagerBase)

## Методы

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
OrechidRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Параметр | Тип                                  | Описание                |
| -------- | ------------------------------------ | ----------------------- |
| name     | string                               | No Description Provided |
| mapData  | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// OrechidRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:orechid>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
OrechidRecipeManager.getRecipeByName(name as string) as T
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// OrechidRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:orechid>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
OrechidRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerOreWeight}

Registers a new ore weight.

Return Type: void

```zenscript
// OrechidRecipeManager.registerOreWeight(name as string, output as BlockIngredient, input as Block, weight as int) as void

<recipetype:botania:orechid>.registerOreWeight("orechid_test", <blockstate:minecraft:dirt>, <block:minecraft:diamond_ore>, 50);
```

| Параметр | Тип                                                   | Описание                |
| -------- | ----------------------------------------------------- | ----------------------- |
| name     | string                                                | The name of the weight. |
| output   | [BlockIngredient](/vanilla/api/block/BlockIngredient) | The blocks to output    |
| input    | [Block](/vanilla/api/block/Block)                     | The input block         |
| weight   | int                                                   | The weight              |


:::

:::group{name=remove}

Removes orechid weights that output the given blockstate.

Return Type: void

```zenscript
// OrechidRecipeManager.remove(output as BlockState) as void

<recipetype:botania:orechid>.remove(<blockstate:minecraft:dirt>);
```

| Параметр | Тип                                         | Описание                         |
| -------- | ------------------------------------------- | -------------------------------- |
| output   | [BlockState](/vanilla/api/block/BlockState) | The blockstate output to remove. |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// OrechidRecipeManager.removeAll() as void

<recipetype:botania:orechid>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
OrechidRecipeManager.removeByInput(input as IItemStack) as void
```

| Параметр | Тип                                        | Описание                |
| -------- | ------------------------------------------ | ----------------------- |
| input    | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
OrechidRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Параметр  | Тип                                 | Описание                | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| исключить | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
OrechidRecipeManager.removeByName(name as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
OrechidRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Параметр  | Тип                                 | Описание                | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| исключить | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Свойства

| Название   | Тип                                                           | Имеет Getter | Имеет Setter | Описание                |
| ---------- | ------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true         | false        | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true         | false        | No Description Provided |

