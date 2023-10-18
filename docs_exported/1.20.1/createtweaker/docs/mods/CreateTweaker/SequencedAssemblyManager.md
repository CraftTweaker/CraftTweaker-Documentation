# SequencedAssemblyManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.SequencedAssemblyManager;
```


## Implemented Interfaces
SequencedAssemblyManager implements the following interfaces. That means all methods defined in these interfaces are also available in SequencedAssemblyManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
SequencedAssemblyManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds the recipe that the builder built.

```zenscript
// SequencedAssemblyManager.addRecipe(builder as SequencedAssemblyRecipeBuilder)

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_blast_brick")
 .transitionTo(<item:create:incomplete_large_cogwheel>)
 .require(<item:create:andesite_alloy>)
 .loops(3)
 .addOutput(<item:create:large_cogwheel> * 6, 32)
 .addOutput(<item:create:andesite_alloy>, 2)
 .addOutput(<item:minecraft:andesite>, 1)
 .addOutput(<item:create:cogwheel>, 1)
 .addOutput(<item:minecraft:stick>, 1)
 .addOutput(<item:minecraft:iron_nugget>, 1)
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<tag:items:minecraft:planks>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<tag:items:minecraft:wooden_buttons>))
 .addStep<mods.createtweaker.CuttingRecipe>((rb) => rb.duration(50))
 .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 50)));
```

| Parameter |                                            Type                                             |             Description              |
|-----------|---------------------------------------------------------------------------------------------|--------------------------------------|
| builder   | [SequencedAssemblyRecipeBuilder](/mods/CreateTweaker/recipe/SequencedAssemblyRecipeBuilder) | The builder that defines the recipe. |


:::

:::group{name=builder}

Gets a sequenced assembly recipe builder.

Returns: A builder used to make sequenced assembly recipes.  
Return Type: [SequencedAssemblyRecipeBuilder](/mods/CreateTweaker/recipe/SequencedAssemblyRecipeBuilder)

```zenscript
// SequencedAssemblyManager.builder(name as string) as SequencedAssemblyRecipeBuilder

<recipetype:create:sequenced_assembly>.builder("sequenced");
```

| Parameter |  Type  |       Description       |
|-----------|--------|-------------------------|
| name      | string | The name of the recipe. |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// SequencedAssemblyManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:sequenced_assembly>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
SequencedAssemblyManager.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SequencedAssemblyManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:sequenced_assembly>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
SequencedAssemblyManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=registerRecipe}

Registers a recipe with the given name and is built by the consumer.

```zenscript
// SequencedAssemblyManager.registerRecipe(name as string, recipeBuilder as Consumer<SequencedAssemblyRecipeBuilder>)

<recipetype:create:sequenced_assembly>.registerRecipe("build_sequence", (rb) => {
 rb.transitionTo(<item:minecraft:glass>);
 rb.require(<item:minecraft:arrow>);
 rb.loops(2);
 rb.addOutput(<item:minecraft:diamond>, 1);
 rb.addOutput(<item:minecraft:apple>, 1);
 rb.addStep<mods.createtweaker.CuttingRecipe>((rb1) => rb1.duration(50));
 rb.addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(500));
 rb.addStep<mods.createtweaker.DeployerApplicationRecipe>((rb1) => rb1.require(<item:minecraft:dirt>));
 rb.addStep<mods.createtweaker.FillingRecipe>((rb1) => rb1.require(<fluid:minecraft:water> * 50))
 });
```

|   Parameter   |                                                    Type                                                     |            Description             |
|---------------|-------------------------------------------------------------------------------------------------------------|------------------------------------|
| name          | string                                                                                                      | The name of the recipe.            |
| recipeBuilder | Consumer&lt;[SequencedAssemblyRecipeBuilder](/mods/CreateTweaker/recipe/SequencedAssemblyRecipeBuilder)&gt; | A consumer that builds the recipe. |


:::

:::group{name=remove}

```zenscript
SequencedAssemblyManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// SequencedAssemblyManager.removeAll()

<recipetype:create:sequenced_assembly>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
SequencedAssemblyManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
SequencedAssemblyManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
SequencedAssemblyManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
SequencedAssemblyManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

