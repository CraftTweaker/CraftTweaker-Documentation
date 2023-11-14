# WeldingRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.WeldingRecipe;
```


## Implemented Interfaces
WeldingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in WeldingRecipe

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
WeldingRecipe.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a welding recipe

```zenscript
// WeldingRecipe.addRecipe(name as string, input1 as IIngredient, input2 as IIngredient, tier as int, output as ItemStackProvider, combineForgingBonus as boolean)

<recipetype:tfc:welding>.addRecipe("welding_test", <item:tfc:metal/ingot/copper>, <item:tfc:metal/double_ingot/copper>, 1, ItemStackProvider.none(<item:tfc:metal/double_sheet/copper>);, true);
```

|      Parameter      |                                  Type                                  |     Description     |
|---------------------|------------------------------------------------------------------------|---------------------|
| name                | string                                                                 | name of the recipe  |
| input1              | [IIngredient](/vanilla/api/ingredient/IIngredient)                     | first input         |
| input2              | [IIngredient](/vanilla/api/ingredient/IIngredient)                     | second input        |
| tier                | int                                                                    | anvil tier required |
| output              | [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider) | output item         |
| combineForgingBonus | boolean                                                                |                     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// WeldingRecipe.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:welding>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
WeldingRecipe.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// WeldingRecipe.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:welding>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
WeldingRecipe.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
WeldingRecipe.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// WeldingRecipe.removeAll()

<recipetype:tfc:welding>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
WeldingRecipe.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
WeldingRecipe.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
WeldingRecipe.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
WeldingRecipe.removeByRegex(regex as string, exclude as Predicate<string>)
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

