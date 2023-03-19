# DragonForgeRecipeManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.iceandfire.recipe.DragonForgeRecipeManager;
```


## Implemented Interfaces
DragonForgeRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in DragonForgeRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addFireRecipe}

Adds a new Fire Dragon Forge recipe.

Return Type: void

```zenscript
// DragonForgeRecipeManager.addFireRecipe(name as string, output as IItemStack, input as IIngredient, blood as IIngredient, cookTime as int) as void

<recipetype:iceandfire:dragonforge>.addFireRecipe("fire_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:apple>, 200);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the recipe |
| output | [IItemStack](/vanilla/api/item/IItemStack) | The output item |
| input | [IIngredient](/vanilla/api/ingredient/IIngredient) | The input Ingredient |
| blood | [IIngredient](/vanilla/api/ingredient/IIngredient) | The blood Ingredient |
| cookTime | int | The cook time of the recipe |


:::

:::group{name=addIceRecipe}

Adds a new Ice Dragon Forge recipe.

Return Type: void

```zenscript
// DragonForgeRecipeManager.addIceRecipe(name as string, output as IItemStack, input as IIngredient, blood as IIngredient, cookTime as int) as void

<recipetype:iceandfire:dragonforge>.addIceRecipe("ice_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:apple>, 200);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the recipe |
| output | [IItemStack](/vanilla/api/item/IItemStack) | The output item |
| input | [IIngredient](/vanilla/api/ingredient/IIngredient) | The input Ingredient |
| blood | [IIngredient](/vanilla/api/ingredient/IIngredient) | The blood Ingredient |
| cookTime | int | The cook time of the recipe |


:::

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
DragonForgeRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| mapData | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addLightningRecipe}

Adds a new Lightning Dragon Forge recipe.

Return Type: void

```zenscript
// DragonForgeRecipeManager.addLightningRecipe(name as string, output as IItemStack, input as IIngredient, blood as IIngredient, cookTime as int) as void

<recipetype:iceandfire:dragonforge>.addLightningRecipe("lightning_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:apple>, 200);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the recipe |
| output | [IItemStack](/vanilla/api/item/IItemStack) | The output item |
| input | [IIngredient](/vanilla/api/ingredient/IIngredient) | The input Ingredient |
| blood | [IIngredient](/vanilla/api/ingredient/IIngredient) | The blood Ingredient |
| cookTime | int | The cook time of the recipe |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// DragonForgeRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:iceandfire:dragonforge>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
DragonForgeRecipeManager.getRecipeByName(name as string) as T
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// DragonForgeRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:iceandfire:dragonforge>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
DragonForgeRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
DragonForgeRecipeManager.remove(output as IIngredient) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// DragonForgeRecipeManager.removeAll() as void

<recipetype:iceandfire:dragonforge>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
DragonForgeRecipeManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
DragonForgeRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| modid | string | No Description Provided | false |  |
| exclude | Predicate&lt;string&gt; | No Description Provided | true | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
DragonForgeRecipeManager.removeByName(names as string[]) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| names | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
DragonForgeRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| regex | string | No Description Provided | false |  |
| exclude | Predicate&lt;string&gt; | No Description Provided | true | (name as string) as bool => false |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| allRecipes | stdlib.List&lt;T&gt; | true | false | No Description Provided |
| recipeMap | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false | No Description Provided |

