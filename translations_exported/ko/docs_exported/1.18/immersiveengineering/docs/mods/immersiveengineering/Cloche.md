# Cloche

Allows you to add or remove Crops from the Garden Cloche.

 Cloche Recipes consist of a soil, an input item and output items.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Cloche;
```


## Implemented Interfaces
Cloche implements the following interfaces. That means all methods defined in these interfaces are also available in Cloche

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Cloche.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter | Type                                 |
| --------- | ------------------------------------ |
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the garden Cloche.

 Requires an additional [Block](/vanilla/api/block/Block) object that should be rendered in the game.<br/> Also requires a render type that states how the block should "grow" inside the cloche.<br/> These two parameters are solely for Rendering purposes and don't change what the recipe returns.

 By default these 4 renderers are present: "crop", can be used for any 1-block crops with an age property "stacking", can be used for stacking plants like sugarcane or cactus "stem", can be used for stem-grown plants like melon or pumpkin "generic", can be used for any block, making it grow in size, like mushrooms

```zenscript
// Cloche.addRecipe(recipePath as string, seed as IIngredient, soil as IIngredient, time as int, outputs as IItemStack[], renderBlock as Block, renderType as string)

<recipetype:immersiveengineering:cloche>.addRecipe("bonsai_oak", <item:minecraft:oak_sapling>, <item:minecraft:dirt>, 100, [<item:minecraft:apple>, <item:minecraft:oak_sapling>, <item:minecraft:oak_wood> * 5], <blockstate:minecraft:oak_sapling>.block, "generic");
```

| Parameter   | Type                                               | Description                                                            | Optional | Default Value |
| ----------- | -------------------------------------------------- | ---------------------------------------------------------------------- | -------- | ------------- |
| recipePath  | string                                             | recipePath The recipe name, without the resource location              | false    |               |
| seed        | [IIngredient](/vanilla/api/ingredient/IIngredient) | The seed that needs to be inserted in the Cloche's gui                 | false    |               |
| soil        | [IIngredient](/vanilla/api/ingredient/IIngredient) | The soil that this seeds need to grow on                               | false    |               |
| time        | int                                                | The time it takes for the crop to mature (without modifiers), in ticks | false    |               |
| outputs     | [IItemStack](/vanilla/api/item/IItemStack)[]       | The outputs this crop produces when it matures                         | false    |               |
| renderBlock | [Block](/vanilla/api/block/Block)                  | The block that should be rendered in world                             | false    |               |
| renderType  | string                                             | The render type that should be used                                    | true     | "generic"     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Cloche.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:cloche>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Cloche.getRecipeByName(name as string) as T
```

| Parameter | Type   |
| --------- | ------ |
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Cloche.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:cloche>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Cloche.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Cloche.removeAll()

<recipetype:immersiveengineering:cloche>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Cloche.removeByInput(input as IItemStack)
```

| Parameter | Type                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Cloche.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Cloche.removeByName(names as string[])
```

| Parameter | Type     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Cloche.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Removes the recipe based on its outputs. Removes the recipe as soon as one of its outputs matches the ingredient given.

```zenscript
// Cloche.removeRecipe(output as IIngredient)

<recipetype:immersiveengineering:cloche>.removeRecipe(<item:minecraft:melon>);
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | The output to match for |


:::


## Properties

| 이름         | Type                                                          | Has Getter | Has Setter |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

