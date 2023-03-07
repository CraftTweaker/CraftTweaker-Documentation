# Alloy

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.Alloy;
```


## Implemented Interfaces
Alloy implements the following interfaces. That means all methods defined in these interfaces are also available in Alloy

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Alloy.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add an alloy recipe

```zenscript
// Alloy.addRecipe(name as string, consumer as Consumer<AlloyBuilder>)

<recipetype:tfc:alloy>.addRecipe("alloy_test", (alloy) => {
    alloy.add("tfc:tin", 0.08, 0.12);
    alloy.add("tfc:copper", 0.88, 0.92);
    alloy.output("tfc:bronze");
    // can also do it this way
    // alloy.Add(<metal:tfc:tin>, 0.08, 0.12);
    // alloy.Add(<metal:tfc:copper>, 0.88, 0.92);
    // alloy.Output(<metal:tfc:bronze>);
 });
```

| Parameter |                             Type                              | Description |
|-----------|---------------------------------------------------------------|-------------|
| name      | string                                                        | recipe name |
| consumer  | Consumer&lt;[AlloyBuilder](/mods/TFCTweaker/AlloyBuilder)&gt; | builder     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Alloy.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:alloy>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Alloy.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Alloy.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:alloy>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Alloy.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
Alloy.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Alloy.removeAll()

<recipetype:tfc:alloy>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Alloy.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Alloy.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Alloy.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Alloy.removeByRegex(regex as string, exclude as Predicate<string>)
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

