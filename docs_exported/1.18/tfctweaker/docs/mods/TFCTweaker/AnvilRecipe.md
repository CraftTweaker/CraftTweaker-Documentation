# Anvil

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.Anvil;
```


## Implemented Interfaces
Anvil implements the following interfaces. That means all methods defined in these interfaces are also available in Anvil

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Anvil.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add an anvil recipe

```zenscript
// Anvil.addRecipe(name as string, input as IIngredient, minTier as int, rules as ForgeRule[], applyForgingBonus as boolean, output as ItemStackProvider)

<recipetype:tfc:anvil>.addRecipe("anvil_test", <tfc:metal/ingot/copper>, 1, [<constant:tfc:forge_rule:hit_any>, <constant:tfc:forge_rule:draw_not_last>, <constant:tfc:forge_rule:hit_any>], true, ItemStackProvider.none(<tfc:metal/chisel_head/copper>));
```

|     Parameter     |                            Type                             |              Description               |
|-------------------|-------------------------------------------------------------|----------------------------------------|
| name              | string                                                      | recipe name                            |
| input             | [IIngredient](/vanilla/api/ingredient/IIngredient)          | input ingredient                       |
| minTier           | int                                                         | min anvil tier required for the recipe |
| rules             | [ForgeRule](/mods/TFCTweaker/Api/Expansion/ForgeRule)[]     | rules used to forge the item           |
| applyForgingBonus | boolean                                                     | should forging bonus be applied        |
| output            | [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider) | the output item                        |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Anvil.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:anvil>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Anvil.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Anvil.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:anvil>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Anvil.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
Anvil.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Anvil.removeAll()

<recipetype:tfc:anvil>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Anvil.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Anvil.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Anvil.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Anvil.removeByRegex(regex as string, exclude as Predicate<string>)
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

