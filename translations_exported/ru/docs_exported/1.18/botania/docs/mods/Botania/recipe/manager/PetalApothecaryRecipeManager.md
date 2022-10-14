# PetalApothecaryRecipeManager



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.PetalApothecaryRecipeManager;
```


## Implemented Interfaces
PetalApothecaryRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in PetalApothecaryRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Методы

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
PetalApothecaryRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Параметр | Тип                                  | Описание                |
| -------- | ------------------------------------ | ----------------------- |
| name     | string                               | No Description Provided |
| mapData  | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds the specified petal apothecary recipe.

Return Type: void

```zenscript
// PetalApothecaryRecipeManager.addRecipe(name as string, output as IItemStack, inputs as IIngredient[]) as void

<recipetype:botania:petal_apothecary>.addRecipe("rune_altar_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:apple>);
```

| Параметр | Тип                                                  | Описание                  |
| -------- | ---------------------------------------------------- | ------------------------- |
| name     | string                                               | Name of the recipe to add |
| output   | [IItemStack](/vanilla/api/item/IItemStack)           | Output item               |
| inputs   | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | Input items               |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// PetalApothecaryRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:petal_apothecary>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
PetalApothecaryRecipeManager.getRecipeByName(name as string) as T
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// PetalApothecaryRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:petal_apothecary>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
PetalApothecaryRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
PetalApothecaryRecipeManager.remove(output as IIngredient) as void
```

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// PetalApothecaryRecipeManager.removeAll() as void

<recipetype:botania:petal_apothecary>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
PetalApothecaryRecipeManager.removeByInput(input as IItemStack) as void
```

| Параметр | Тип                                        | Описание                |
| -------- | ------------------------------------------ | ----------------------- |
| input    | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PetalApothecaryRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Параметр  | Тип                                 | Описание                | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| исключить | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
PetalApothecaryRecipeManager.removeByName(name as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
PetalApothecaryRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

