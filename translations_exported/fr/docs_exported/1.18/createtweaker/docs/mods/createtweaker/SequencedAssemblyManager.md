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

Return Type: void

```zenscript
SequencedAssemblyManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds the recipe that the builder built.

Return Type: void

```zenscript
// SequencedAssemblyManager.addRecipe(builder as SequencedAssemblyRecipeBuilder) as void

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

| Parameter    | Type                                                                                        | Description                          |
| ------------ | ------------------------------------------------------------------------------------------- | ------------------------------------ |
| constructeur | [SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder) | The buidler that defines the recipe. |


:::

:::group{name=builder}

Gets a sequenced assembly recipe builder.

Returns: A builder used to make sequenced assembly recipes.  
Return Type: [SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder)

```zenscript
// SequencedAssemblyManager.builder(name as string) as SequencedAssemblyRecipeBuilder

<recipetype:create:sequenced_assembly>.builder("sequenced");
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
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

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


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

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe with the given name and is built by the consumer.

Return Type: void

```zenscript
// SequencedAssemblyManager.registerRecipe(name as string, recipeBuilder as Consumer<SequencedAssemblyRecipeBuilder>) as void

<recipetype:create:sequenced_assembly>.registerRecipe("build_sequence", (rb) => {
 rb.transitionTo(<item:minecraft:glass>);
 rb.require(<item:minecraft:arrow>);
 rb.loops(2);
 rb.addOutput(<item:minecraft:diamond>, 1);
 rb.addOutput(<item:minecraft:apple>, 1);
 rb.addStep<mods.createtweaker.CuttingRecipe>((rb1) => rb1.duration(50));
 rb.addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(500));
 rb.addStep<mods.createtweaker.DeployerApplicationRecipe>((rb1) => rb1.require(<item:minecraft:dirt>));
 rb.addStep<mods.createtweaker.FillingRecipe>((rb1) => rb.require(<fluid:minecraft:water> * 50))
 });
```

| Parameter     | Type                                                                                                                    | Description                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| name          | string                                                                                                                  | The name of the recipe.            |
| recipeBuilder | Consumer&lt;[SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder)&gt; | A consumer that builds the recipe. |


:::

:::group{name=remove}

Return Type: void

```zenscript
SequencedAssemblyManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// SequencedAssemblyManager.removeAll() as void

<recipetype:create:sequenced_assembly>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
SequencedAssemblyManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
SequencedAssemblyManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| exclure   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
SequencedAssemblyManager.removeByName(names as string[]) as void
```

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
SequencedAssemblyManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| exclure   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter | Description             |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | No Description Provided |

