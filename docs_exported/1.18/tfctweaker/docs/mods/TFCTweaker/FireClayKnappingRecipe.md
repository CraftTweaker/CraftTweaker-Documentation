# FireClayKnappingRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.FireClayKnappingRecipe;
```


## Implemented Interfaces
FireClayKnappingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in FireClayKnappingRecipe

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
FireClayKnappingRecipe.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a fire clay knapping recipe

```zenscript
// FireClayKnappingRecipe.addRecipe(name as string, outside_slot_required as boolean, pattern as string[], output as IItemStack)

<recipetype:tfc:fire_clay_knapping>.addRecipe("knapping_test", false, ["XXXXX", " XXX ", " XXX ", " XXX ", "XXXXX"], <item:tfc:ceramic/unfired_fire_brick>);
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
// FireClayKnappingRecipe.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:fire_clay_knapping>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
FireClayKnappingRecipe.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// FireClayKnappingRecipe.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:fire_clay_knapping>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
FireClayKnappingRecipe.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
FireClayKnappingRecipe.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// FireClayKnappingRecipe.removeAll()

<recipetype:tfc:fire_clay_knapping>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
FireClayKnappingRecipe.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
FireClayKnappingRecipe.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
FireClayKnappingRecipe.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
FireClayKnappingRecipe.removeByRegex(regex as string, exclude as Predicate<string>)
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

