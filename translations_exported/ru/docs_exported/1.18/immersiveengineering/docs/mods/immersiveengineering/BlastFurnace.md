# BlastFurnace

Allows you to add or remove Blast Furnace recipes.

 Blast furnace recipes consist of an ingredient, an output and an optional slag result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.BlastFurnace;
```


## Implemented Interfaces
BlastFurnace implements the following interfaces. That means all methods defined in these interfaces are also available in BlastFurnace

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Методы

:::group{name=addJsonRecipe}

```zenscript
BlastFurnace.addJsonRecipe(name as string, mapData as MapData)
```

| Параметр | Тип                                  |
| -------- | ------------------------------------ |
| name     | string                               |
| mapData  | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a Blast furnace recipe

```zenscript
// BlastFurnace.addRecipe(recipePath as string, ingredient as IIngredientWithAmount, time as int, output as IItemStack, slag as IItemStack)

<recipetype:immersiveengineering:blast_furnace>.addRecipe("wool_to_charcoal", <tag:minecraft:wool>, 1000, <item:minecraft:charcoal>, <item:minecraft:string>);
```

| Параметр   | Тип                                                                    | Описание                                               | Optional | Default Value        |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------ | -------- | -------------------- |
| recipePath | string                                                                 | The recipe name, without the resource location         | false    |                      |
| ingredient | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The item input                                         | false    |                      |
| time       | int                                                                    | The time this recipe needs, in ticks                   | false    |                      |
| output     | [IItemStack](/vanilla/api/item/IItemStack)                             | The recipe output                                      | false    |                      |
| slag       | [IItemStack](/vanilla/api/item/IItemStack)                             | The item that should appear in the slag slot, optional | true     | <item:minecraft:air> |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// BlastFurnace.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:blast_furnace>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
BlastFurnace.getRecipeByName(name as string) as T
```

| Параметр | Тип    |
| -------- | ------ |
| name     | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// BlastFurnace.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:blast_furnace>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
BlastFurnace.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Параметр | Тип                                                |
| -------- | -------------------------------------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
BlastFurnace.remove(output as IIngredient)
```

| Параметр | Тип                                                |
| -------- | -------------------------------------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// BlastFurnace.removeAll()

<recipetype:immersiveengineering:blast_furnace>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
BlastFurnace.removeByInput(input as IItemStack)
```

| Параметр | Тип                                        |
| -------- | ------------------------------------------ |
| input    | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
BlastFurnace.removeByModid(modid as string, exclude as Predicate<string>)
```

| Параметр  | Тип                                 | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| исключить | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
BlastFurnace.removeByName(names as string[])
```

| Параметр | Тип      |
| -------- | -------- |
| names    | string[] |


:::

:::group{name=removeByRegex}

```zenscript
BlastFurnace.removeByRegex(regex as string, exclude as Predicate<string>)
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

