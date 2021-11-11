# TerraPlate



This class was added by a mod with mod-id `botania`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.TerraPlate;
```


## Implemented Interfaces
TerraPlate implements the following interfaces. That means all methods defined in these interfaces are also available in TerraPlate

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
TerraPlate.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a terra plate recipe

Return Type: void

```zenscript
// TerraPlate.addRecipe(name as string, output as IItemStack, mana as int, inputs as IIngredient[]) as void

<recipetype:botania:terra_plate>.addRecipe("terra_plate_test", <item:minecraft:diamond>, 20000, <item:minecraft:dirt>, <item:minecraft:cobblestone>, <item:minecraft:gravel>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the recipe to add |
| output | [IItemStack](/vanilla/api/items/IItemStack) | Output item |
| mana | int | Recipe mana cost |
| inputs | [IIngredient](/vanilla/api/items/IIngredient)[] | Input items |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// TerraPlate.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:botania:terra_plate>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
TerraPlate.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// TerraPlate.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:botania:terra_plate>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
TerraPlate.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// TerraPlate.removeAll() as void

<recipetype:botania:terra_plate>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
TerraPlate.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
TerraPlate.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
TerraPlate.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
TerraPlate.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
TerraPlate.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
TerraPlate.removeRecipe(output as IIngredient) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
TerraPlate.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
TerraPlate.removeRecipeByInput(input as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt; | true | false | No Description Provided |
| recipeMap | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true | false | No Description Provided |

