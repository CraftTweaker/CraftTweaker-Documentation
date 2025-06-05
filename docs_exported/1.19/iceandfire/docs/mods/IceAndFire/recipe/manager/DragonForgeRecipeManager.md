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

```zenscript
// DragonForgeRecipeManager.addFireRecipe(name as string, output as IItemStack, input as IIngredient, blood as IIngredient, cookTime as int)

<recipetype:iceandfire:dragonforge>.addFireRecipe("fire_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:apple>, 200);
```

| Parameter |                        Type                        |         Description         |
|-----------|----------------------------------------------------|-----------------------------|
| name      | string                                             | The name of the recipe      |
| output    | [IItemStack](/vanilla/api/item/IItemStack)         | The output item             |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | The input Ingredient        |
| blood     | [IIngredient](/vanilla/api/ingredient/IIngredient) | The blood Ingredient        |
| cookTime  | int                                                | The cook time of the recipe |


:::

:::group{name=addIceRecipe}

Adds a new Ice Dragon Forge recipe.

```zenscript
// DragonForgeRecipeManager.addIceRecipe(name as string, output as IItemStack, input as IIngredient, blood as IIngredient, cookTime as int)

<recipetype:iceandfire:dragonforge>.addIceRecipe("ice_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:apple>, 200);
```

| Parameter |                        Type                        |         Description         |
|-----------|----------------------------------------------------|-----------------------------|
| name      | string                                             | The name of the recipe      |
| output    | [IItemStack](/vanilla/api/item/IItemStack)         | The output item             |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | The input Ingredient        |
| blood     | [IIngredient](/vanilla/api/ingredient/IIngredient) | The blood Ingredient        |
| cookTime  | int                                                | The cook time of the recipe |


:::

:::group{name=addJsonRecipe}

```zenscript
DragonForgeRecipeManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addLightningRecipe}

Adds a new Lightning Dragon Forge recipe.

```zenscript
// DragonForgeRecipeManager.addLightningRecipe(name as string, output as IItemStack, input as IIngredient, blood as IIngredient, cookTime as int)

<recipetype:iceandfire:dragonforge>.addLightningRecipe("lightning_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:apple>, 200);
```

| Parameter |                        Type                        |         Description         |
|-----------|----------------------------------------------------|-----------------------------|
| name      | string                                             | The name of the recipe      |
| output    | [IItemStack](/vanilla/api/item/IItemStack)         | The output item             |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | The input Ingredient        |
| blood     | [IIngredient](/vanilla/api/ingredient/IIngredient) | The blood Ingredient        |
| cookTime  | int                                                | The cook time of the recipe |


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

| Parameter |  Type  |
|-----------|--------|
| name      | string |


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

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
DragonForgeRecipeManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// DragonForgeRecipeManager.removeAll()

<recipetype:iceandfire:dragonforge>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
DragonForgeRecipeManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
DragonForgeRecipeManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
DragonForgeRecipeManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
DragonForgeRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

