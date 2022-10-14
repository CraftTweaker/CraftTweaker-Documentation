# CokeOven

Allows you to add or remove Coke Oven recipes.

 Coke Oven recipes consist of an input, an output and the amount of creosote produced

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.CokeOven;
```


## Implemented Interfaces
CokeOven implements the following interfaces. That means all methods defined in these interfaces are also available in CokeOven

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
CokeOven.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter | Type                                 |
| --------- | ------------------------------------ |
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a coke oven recipe

```zenscript
// CokeOven.addRecipe(recipePath as string, ingredient as IIngredientWithAmount, time as int, output as IItemStack, creosoteProduced as int)

<recipetype:immersiveengineering:coke_oven>.addRecipe("burn_a_stick", <item:minecraft:stick>, 100, <item:immersiveengineering:stick_treated>, 1);
```

| Parameter        | Type                                                                   | Description                                               | Optional | Default Value |
| ---------------- | ---------------------------------------------------------------------- | --------------------------------------------------------- | -------- | ------------- |
| recipePath       | string                                                                 | RecipePath The recipe name, without the resource location | false    |               |
| ingredient       | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The recipe's input                                        | false    |               |
| time             | int                                                                    | The time the recipe requires, in ticks                    | false    |               |
| output           | [IItemStack](/vanilla/api/item/IItemStack)                             | The produced item                                         | false    |               |
| creosoteProduced | int                                                                    | The amount of creosote produced                           | true     | 0             |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CokeOven.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:coke_oven>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
CokeOven.getRecipeByName(name as string) as T
```

| Parameter | Type   |
| --------- | ------ |
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CokeOven.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:coke_oven>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CokeOven.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
CokeOven.remove(output as IIngredient)
```

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// CokeOven.removeAll()

<recipetype:immersiveengineering:coke_oven>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
CokeOven.removeByInput(input as IItemStack)
```

| Parameter | Type                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
CokeOven.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| exclure   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
CokeOven.removeByName(names as string[])
```

| Parameter | Type     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
CokeOven.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | false    |                                   |
| exclure   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

