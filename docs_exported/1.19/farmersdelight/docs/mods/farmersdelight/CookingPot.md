# CookingPot

Farmer's Delight Cooking Pot recipes.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.farmersdelight.CookingPot;
```


## Implemented Interfaces
CookingPot implements the following interfaces. That means all methods defined in these interfaces are also available in CookingPot

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
CookingPot.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a cooking pot recipe.
 The Cooking Tab is optional.

```zenscript
// CookingPot.addRecipe(name as string, output as IItemStack, inputs as IIngredient[], cookingPotRecipeBookTab as CookingPotRecipeBookTab, container as IItemStack, experience as float, cookTime as int)

<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test", <item:minecraft:enchanted_golden_apple>, [<item:minecraft:gold_block>], <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:apple>, 100, 400);
```

|        Parameter        |                                  Type                                   |        Description        | Optional | Default Value |
|-------------------------|-------------------------------------------------------------------------|---------------------------|----------|---------------|
| name                    | string                                                                  | Name of the recipe to add | false    |               |
| output                  | [IItemStack](/vanilla/api/item/IItemStack)                              | Output item               | false    |               |
| inputs                  | [IIngredient](/vanilla/api/ingredient/IIngredient)[]                    | Input ingredients         | false    |               |
| cookingPotRecipeBookTab | [CookingPotRecipeBookTab](/mods/FarmersDelight/CookingPotRecipeBookTab) |                           | true     |               |
| container               | [IItemStack](/vanilla/api/item/IItemStack)                              | Container item            | true     |               |
| experience              | float                                                                   | Experience granted        | true     | 0.0           |
| cookTime                | int                                                                     | Cooking time              | true     | 200           |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CookingPot.getAllRecipes() as stdlib.List<T>

<recipetype:farmersdelight:cooking>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
CookingPot.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CookingPot.getRecipeMap() as T[ResourceLocation]

<recipetype:farmersdelight:cooking>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CookingPot.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
CookingPot.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// CookingPot.removeAll()

<recipetype:farmersdelight:cooking>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
CookingPot.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
CookingPot.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
CookingPot.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
CookingPot.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| regex     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::


## Properties

|    Name    |                             Type                              | Has Getter | Has Setter |
|------------|---------------------------------------------------------------|------------|------------|
| allRecipes | stdlib.List&lt;T&gt;                                          | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

