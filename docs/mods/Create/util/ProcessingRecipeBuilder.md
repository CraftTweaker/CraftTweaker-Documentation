::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# ProcessingRecipeBuilder

The ProcessingRecipeBuilder is a builder object which allows you to register some recipes using a builder like pattern instead of a single method call.

You can register recipes using this object by calling the `registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder>)` method in the following recipe types:

1) [Compacting](/mods/Create/Compacting)
2) [Crushing](/mods/Create/Crushing)
3) [Cutting](/mods/Create/Cutting)
4) [Deployer Application](/mods/Create/DeployerApplication)
5) [Emptying](/mods/Create/Emptying)
6) [Filling](/mods/Create/Filling)
7) [Milling](/mods/Create/Milling)
8) [Mixing](/mods/Create/Mixing)
9) [Pressing](/mods/Create/Pressing)
10) [Sand Paper Polishing](/mods/Create/SandPaperPolishing)
11) [Splashing](/mods/Create/Splashing)

## Methods

:::group{name=withItemIngredients}

Sets the ingredients for this recipe.

```zenscript
// ProcessingRecipeBuilder.withItemIngredients(ingredients as IIngredient[]);

builder.withItemIngredients(<item:minecraft:dirt>, <item:minecraft:diamond>);
```
:::

:::group{name=withSingleItemOutput}

Sets the output of this recipe to be a single ItemStack.

```zenscript
// ProcessingRecipeBuilder.withSingleItemOutput(output as IIngredient[]);

builder.withSingleItemOutput(<item:minecraft:dirt>);
```
:::

:::group{name=withItemOutputs}

Sets the outputs of this recipe to be an array of Weighted ItemStacks.

```zenscript
// ProcessingRecipeBuilder.withItemOutputs(output as MCWeightedItemStack[]);

builder.withItemOutputs(<item:minecraft:dirt> % 50);
```
:::

:::group{name=withFluidIngredients}

Sets the inputs of this recipe to be an array of CTFluidIngredient (Which accepts a MCFluidStack or a MCTag<MCFluid>).

```zenscript
// ProcessingRecipeBuilder.withFluidIngredients(ingredients as CTFluidIngredient[]);

builder.withFluidIngredients(<fluid:minecraft:water>, <tag:fluids:minecraft:lava>);
```
:::

:::group{name=withFluidOutputs}

Sets the output of this recipe to the given MCFluidStack array.

```zenscript
// ProcessingRecipeBuilder.withFluidOutputs(output as MCFluidStack[]);

builder.withFluidOutputs(<fluid:minecraft:water>);
```
:::

:::group{name=duration}

Sets the processing duration of this recipe.

```zenscript
// ProcessingRecipeBuilder.duration(ticks as int);

builder.duration(500);
```
:::

:::group{name=averageProcessingDuration}

Sets the processing duration to be the average processing duration for recipes, which is 100 ticks.

```zenscript
// ProcessingRecipeBuilder.averageProcessingDuration(ticks as int);

builder.averageProcessingDuration(500);
```
:::

:::group{name=requiresHeat}

Sets the [HeatCondition](HeatCondition) of this recipe.

```zenscript
// ProcessingRecipeBuilder.requiresHeat(condition as HeatCondition);

builder.requiresHeat(HeatCondition.SUPERHEATED);
```
:::

:::group{name=require}

Specifies that this recipe requires the given IIngredient or CTFluidIngredient.
This method can be chained together to have multiple ingredients.

```zenscript
// ProcessingRecipeBuilder.require(ingredient as IIngredient);

builder.require(<item:minecraft:dirt>);
```

```zenscript
// ProcessingRecipeBuilder.require(ingredient as CTFluidIngredient);

builder.require(<fluid:minecraft:water>);
```
:::

:::group{name=output}

Specifies that this recipe outputs the provided MCWeightedItemStack or the given MCFluidStack.
This method can be chained together to have multiple outputs.

```zenscript
// ProcessingRecipeBuilder.output(ingredient as IIngredient);

builder.output(<item:minecraft:dirt>);
```

```zenscript
// ProcessingRecipeBuilder.output(ingredient as CTFluidIngredient);

builder.output(<fluid:minecraft:water>);
```
:::