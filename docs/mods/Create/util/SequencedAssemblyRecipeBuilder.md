::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# SequencedAssemblyRecipeBuilder

The SequencedAssemblyRecipeBuilder is a builder object which allows you to register some recipes using a builder like pattern instead of a single method call.

## Methods

:::group{name=loops}

Sets how many loops the recipe requires.

```zenscript
// SequencedAssemblyRecipeBuilder.loops(loops as int);

builder.loops(5);
```
:::

:::group{name=addOutput}

Adds an output to this recipe with the given weight.

```zenscript
// SequencedAssemblyRecipeBuilder.addOutput(output as IItemStack, weight as float);

builder.addOutput(<item:minecraft:dirt>, 0.5);
```
:::

:::group{name=transitionTo}

Adds a transitional item to this recipe.

```zenscript
// SequencedAssemblyRecipeBuilder.transitionTo(item as MCItemDefinition);

builder.transitionTo(<item:minecraft:dirt>.definition);
```
:::

:::group{name=require}

Sets the required ingredient for this recipe.

```zenscript
// SequencedAssemblyRecipeBuilder.require(ingredient as IIngredient);

builder.require(<item:minecraft:diamond>);
```
:::

:::group{name=addStep}

Adds a step to this recipe of the specified type

```zenscript
// SequencedAssemblyRecipeBuilder.addStep(factory as ProcessingRecipeFactory);

builder.addStep(<recipetype:create:cutting>.factory());
```
:::

:::group{name=addStep}

Adds a step to this recipe of the specified type and custom values.

In this example, the recipe will need to be deployed with Dirt.

```zenscript
// SequencedAssemblyRecipeBuilder.addStep(factory as ProcessingRecipeFactory, builder as (ProcessingRecipebuilder) => ProcessingRecipebuilder);

builder.addStep(<recipetype:create:deploying>.factory(), (builder2) => builder2.require(<item:minecraft:dirt>));
```
:::