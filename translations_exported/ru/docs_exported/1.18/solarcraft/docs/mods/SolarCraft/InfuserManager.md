# InfuserManager



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.solarforge.InfuserManager;
```


## Implemented Interfaces
InfuserManager implements the following interfaces. That means all methods defined in these interfaces are also available in InfuserManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[InfusingRecipe](/mods/SolarCraft/Recipe/InfusingRecipe)&gt;

## Методы

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
InfuserManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Параметр | Тип                                  | Описание                |
| -------- | ------------------------------------ | ----------------------- |
| name     | string                               | No Description Provided |
| mapData  | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a new recipe to the Infuser Multiblock Setup. Some parameters have some constraints:

 The input ingredients two dimensional array must have a structure like this:
```
[
 [input1, input2, input3],

 [input4, input5],

 [input6, input7, input8],

 [input9, input10],

 [input11, input12, input13]

 ]
 ```

 So that it matches the Infuser Screen. Air can and should be used to pad out the recipe but the Array structure must match that or it will error.

 The catalysts two dimensional array must have a structure like this:
```
 [

 [block1, block2, block3],

 [block4, block5, block6],

 [block7, block8, block9],

 [block10, block11, block12]

 ]
 ```

 The catalysts array is transposed like this:
 ```
 [

 [North],

 [East],

 [South],

 [West]

 ]
 ```

 You can find out the list of usable catalyst blocks by using the `/ct dump solarforge_catalysts` command. Any other blocks that are present in the array but aren't considered a catalyst will be ignored.

 You can find out possible fragment ids by using the `/ct dump solarforge_fragments` command. These will be required by the player in order to be able to craft the recipe.

Return Type: void

```zenscript
// InfuserManager.addRecipe(name as string, output as IItemStack, ings as IIngredient[][], catalysts as Block[][], solarEnergy as int, processingTime as int, fragment as string, costs as RunicEnergyCost) as void

<recipetype:solarforge:infusing_new>.addRecipe("infuser_multiblock_test_recipe", <item:minecraft:egg>, [
 [<item:minecraft:iron_ingot>,<item:minecraft:air>, <item:minecraft:stick>],
 [<item:minecraft:iron_ingot>, <item:minecraft:stick>],
 [<item:minecraft:air>, <item:minecraft:iron_ingot>, <item:minecraft:air>],
 [<item:minecraft:stick>, <item:minecraft:iron_ingot>],
 [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:iron_ingot>]
 ], [
  [<block:minecraft:air>, <block:solarforge:urba_rune_block>, <block:minecraft:air>],
  [<block:minecraft:air>, <block:minecraft:air>, <block:minecraft:air>],
  [<block:minecraft:air>, <block:solarforge:ultima_rune_block>, <block:minecraft:air>],
  [<block:minecraft:air>, <block:minecraft:air>, <block:minecraft:air>],
 ], 0, 600, "crystals", RunicEnergyCost.EMPTY());
```

| Параметр       | Тип                                                      | Описание                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name           | string                                                   | The name of the recipe to add                                                                                                                                                                                                                                                                                                                                |
| output         | [IItemStack](/vanilla/api/item/IItemStack)               | The IItemStack to be outputted from the recipe.                                                                                                                                                                                                                                                                                                              |
| ings           | [IIngredient](/vanilla/api/ingredient/IIngredient)[][]   | The input IItemStacks[]. Does not support tags.                                                                                                                                                                                                                                                                                                              |
| catalysts      | [Block](/vanilla/api/block/Block)[][]                    | The required Block catalysts that should be placed in columns in order for the recipe to craft.                                                                                                                                                                                                                                                              |
| solarEnergy    | int                                                      | Required solar energy for recipe.                                                                                                                                                                                                                                                                                                                            |
| processingTime | int                                                      | The amount of time it should take the recipe to craft.                                                                                                                                                                                                                                                                                                       |
| fragment       | string                                                   | The id of the fragment to use.                                                                                                                                                                                                                                                                                                                               |
| costs          | [RunicEnergyCost](/mods/SolarCraft/Type/RunicEnergyCost) | The RunicEnergyCost this recipe has. <br />  <br />  Recipe will automatically assign itself the structure tier it needs. (If Runic energy cost > 0 tier will be Runic Energy, if solar energy > 0 tier will be Solar Energy. <br />  Solar Energy tier overrides Runic Energy tier. If both of the costs are 0, the tier will be First.). |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// InfuserManager.getAllRecipes() as stdlib.List<T>

<recipetype:solarforge:infusing_new>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
InfuserManager.getRecipeByName(name as string) as T
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// InfuserManager.getRecipeMap() as T[ResourceLocation]

<recipetype:solarforge:infusing_new>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
InfuserManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
InfuserManager.remove(output as IIngredient) as void
```

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// InfuserManager.removeAll() as void

<recipetype:solarforge:infusing_new>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
InfuserManager.removeByInput(input as IItemStack) as void
```

| Параметр | Тип                                        | Описание                |
| -------- | ------------------------------------------ | ----------------------- |
| input    | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
InfuserManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Параметр  | Тип                                 | Описание                | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| исключить | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
InfuserManager.removeByName(name as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
InfuserManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

