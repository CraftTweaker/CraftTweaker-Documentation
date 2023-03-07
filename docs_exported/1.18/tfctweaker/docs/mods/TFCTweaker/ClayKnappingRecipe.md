# ClayKnapping

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.ClayKnapping;
```


## Implemented Interfaces
ClayKnapping implements the following interfaces. That means all methods defined in these interfaces are also available in ClayKnapping

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
ClayKnapping.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a clay knapping recipe

```zenscript
// ClayKnapping.addRecipe(name as string, outside_slot_required as boolean, pattern as string[], output as IItemStack)

<recipetype:tfc:clay_knapping>.addRecipe("knapping_test", false, ["XXXXX", " XXX ", " XXX ", " XXX ", "XXXXX"], <item:tfc:ceramic/unfired_brick>);
```

|       Parameter       |                    Type                    |             Description              |
|-----------------------|--------------------------------------------|--------------------------------------|
| name                  | string                                     | name of the recipe                   |
| outside_slot_required | boolean                                    | should the outside slot be required? |
| pattern               | string[]                                   | the pattern                          |
| output                | [IItemStack](/vanilla/api/item/IItemStack) | the output item                      |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// ClayKnapping.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:clay_knapping>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
ClayKnapping.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// ClayKnapping.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:clay_knapping>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
ClayKnapping.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
ClayKnapping.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// ClayKnapping.removeAll()

<recipetype:tfc:clay_knapping>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
ClayKnapping.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
ClayKnapping.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
ClayKnapping.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
ClayKnapping.removeByRegex(regex as string, exclude as Predicate<string>)
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

