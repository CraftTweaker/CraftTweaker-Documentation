# IOrechidManagerBase&LT;T : invalid&GT;



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.base.IOrechidManagerBase;
```


## Implemented Interfaces
IOrechidManagerBase implements the following interfaces. That means all methods defined in these interfaces are also available in IOrechidManagerBase

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;T&gt;

## Methods

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
IOrechidManagerBase.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// IOrechidManagerBase.getAllRecipes() as stdlib.List<T>

<recipetype:botania:orechid>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
IOrechidManagerBase.getRecipeByName(name as string) as T
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// IOrechidManagerBase.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:orechid>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
IOrechidManagerBase.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerOreWeight}

Registers a new ore weight.

Return Type: void

```zenscript
// IOrechidManagerBase.registerOreWeight(name as string, output as BlockIngredient, input as Block, weight as int) as void

<recipetype:botania:orechid>.registerOreWeight("orechid_test", <blockstate:minecraft:dirt>, <block:minecraft:diamond_ore>, 50);
```

| Parameter | Type                                                  | Description             |
| --------- | ----------------------------------------------------- | ----------------------- |
| name      | string                                                | The name of the weight. |
| output    | [BlockIngredient](/vanilla/api/block/BlockIngredient) | The blocks to output    |
| input     | [Block](/vanilla/api/block/Block)                     | The input block         |
| weight    | int                                                   | The weight              |


:::

:::group{name=remove}

Removes orechid weights that output the given blockstate.

Return Type: void

```zenscript
// IOrechidManagerBase.remove(output as BlockState) as void

<recipetype:botania:orechid>.remove(<blockstate:minecraft:dirt>);
```

| Parameter | Type                                        | Description                      |
| --------- | ------------------------------------------- | -------------------------------- |
| output    | [BlockState](/vanilla/api/block/BlockState) | The blockstate output to remove. |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// IOrechidManagerBase.removeAll() as void

<recipetype:botania:orechid>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
IOrechidManagerBase.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
IOrechidManagerBase.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| wyklucz   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
IOrechidManagerBase.removeByName(name as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
IOrechidManagerBase.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| wyklucz   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter | Description             |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | No Description Provided |

