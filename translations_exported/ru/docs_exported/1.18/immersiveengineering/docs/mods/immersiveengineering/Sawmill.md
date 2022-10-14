# Sawmill

Allows you to add or remove Sawmill recipes.

 Sawmill Recipes consist of an input, an optional, intermediate "stripped" output and a "cut" output.

 Each step (stripping and sawing) have possible secondary outputs. These won't be returned through the conveyor belt, but through the item output to the front, right next to the sawblade.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Sawmill;
```


## Implemented Interfaces
Sawmill implements the following interfaces. That means all methods defined in these interfaces are also available in Sawmill

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Методы

:::group{name=addJsonRecipe}

```zenscript
Sawmill.addJsonRecipe(name as string, mapData as MapData)
```

| Параметр | Тип                                  |
| -------- | ------------------------------------ |
| name     | string                               |
| mapData  | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a sawmill recipe. This method is a shorter version for recipes that do not require stripping. Note that recipes without an intermediate item will do nothing if the sawmill has no sawblade.

```zenscript
// Sawmill.addRecipe(recipePath as string, input as IIngredient, energy as int, output as IItemStack, outputSecondaries as IItemStack[])

<recipetype:immersiveengineering:sawmill>.addRecipe("splitting_bones", <item:minecraft:bone_block>, 1000, <item:minecraft:bone> * 5, [<item:minecraft:bone_meal> * 2]);
```

| Параметр          | Тип                                                | Описание                                                           |
| ----------------- | -------------------------------------------------- | ------------------------------------------------------------------ |
| recipePath        | string                                             | The recipe name, without the resource location                     |
| input             | [IIngredient](/vanilla/api/ingredient/IIngredient) | The item input                                                     |
| energy            | int                                                | The total energy required                                          |
| output            | [IItemStack](/vanilla/api/item/IItemStack)         | The item that is returned                                          |
| outputSecondaries | [IItemStack](/vanilla/api/item/IItemStack)[]       | The secondary outputs that are created alongside the `output` item |


:::

:::group{name=addRecipe}

Adds a sawmill recipe.

 Note that the recipe only works from start to final output.<br/> So if you remove the sawblade to get the intermediate item, you need a 2nd recipe starting from the intermediate item if you later want to process that item.

```zenscript
// Sawmill.addRecipe(recipePath as string, input as IIngredient, energy as int, strippedOutput as IItemStack, strippedOutputSecondaries as IItemStack[], output as IItemStack, outputSecondaries as IItemStack[])

<recipetype:immersiveengineering:sawmill>.addRecipe("shredding_seeds", <tag:minecraft:saplings>, 1200, <item:minecraft:dead_bush>, [<item:minecraft:grass>], <item:minecraft:stick> * 2, [<item:immersiveengineering:dust_wood>]);
```

| Параметр                  | Тип                                                | Описание                                                                                                      |
| ------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| recipePath                | string                                             | The recipe name, without the resource location                                                                |
| input                     | [IIngredient](/vanilla/api/ingredient/IIngredient) | The item input                                                                                                |
| energy                    | int                                                | The total energy required                                                                                     |
| strippedOutput            | [IItemStack](/vanilla/api/item/IItemStack)         | The intermediate Stripped output. Will be returned if no sawblade is present                                  |
| strippedOutputSecondaries | [IItemStack](/vanilla/api/item/IItemStack)[]       | The secondary outputs that are created while stripping. Must be empty if no intermediate output was provided. |
| output                    | [IItemStack](/vanilla/api/item/IItemStack)         | The output that is returned when a sawblade is present                                                        |
| outputSecondaries         | [IItemStack](/vanilla/api/item/IItemStack)[]       | The secondary outputs that are created alongside the `output` item                                            |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Sawmill.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:sawmill>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Sawmill.getRecipeByName(name as string) as T
```

| Параметр | Тип    |
| -------- | ------ |
| name     | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Sawmill.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:sawmill>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Sawmill.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Параметр | Тип                                                |
| -------- | -------------------------------------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Sawmill.removeAll()

<recipetype:immersiveengineering:sawmill>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Sawmill.removeByInput(input as IItemStack)
```

| Параметр | Тип                                        |
| -------- | ------------------------------------------ |
| input    | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Sawmill.removeByModid(modid as string, exclude as Predicate<string>)
```

| Параметр  | Тип                                 | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| исключить | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Sawmill.removeByName(names as string[])
```

| Параметр | Тип      |
| -------- | -------- |
| names    | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Sawmill.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Параметр  | Тип                                 | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | false    |                                   |
| исключить | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::


## Свойства

| Название   | Тип                                                           | Имеет Getter | Имеет Setter |
| ---------- | ------------------------------------------------------------- | ------------ | ------------ |
| allRecipes | stdlib.List&lt;T&gt;                              | true         | false        |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true         | false        |

