# ProcessingRecipeBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.ProcessingRecipeBuilder;
```


## Methods

:::group{name=averageProcessingDuration}

Sets the duration of the recipe to the average processing duration, which is 100 ticks.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
// ProcessingRecipeBuilder.averageProcessingDuration() as ProcessingRecipeBuilder<ProcessingRecipe<Container>>

myProcessingRecipeBuilder.averageProcessingDuration();
```

:::

:::group{name=duration}

Sets the duration of the recipe in ticks.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.duration(ticks as int) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter | Type |             Description              |
|-----------|------|--------------------------------------|
| ticks     | int  | The duration of the recipe in ticks. |


:::

:::group{name=output}

Sets the recipe to output the given [IFluidStack](/vanilla/api/fluid/IFluidStack).

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.output(fluidStack as IFluidStack) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter  |                     Type                      |     Description      |
|------------|-----------------------------------------------|----------------------|
| fluidStack | [IFluidStack](/vanilla/api/fluid/IFluidStack) | The fluid to output. |


:::

:::group{name=output}

Sets the recipe to output the given [Percentaged](/vanilla/api/util/random/Percentaged)&lt;T&gt; item.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.output(item as Percentaged<IItemStack>) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter |                                                 Type                                                  |     Description     |
|-----------|-------------------------------------------------------------------------------------------------------|---------------------|
| item      | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The item to output. |


:::

:::group{name=require}

Sets the recipe to require the given fluid ingredient.
 
 This can be chained multiple times for multiple ingredients.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.require(ingredient as FluidIngredient) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter  |                        Type                         |           Description            |
|------------|-----------------------------------------------------|----------------------------------|
| ingredient | [FluidIngredient](/forge/api/fluid/FluidIngredient) | The fluid ingredient to require. |


:::

:::group{name=require}

Sets the recipe to require the given item ingredient.
 
 This can be chained multiple times for multiple ingredients.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.require(ingredient as IIngredient) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter  |                        Type                        |           Description           |
|------------|----------------------------------------------------|---------------------------------|
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | The item ingredient to require. |


:::

:::group{name=requiresHeat}

Sets the recipe to require the specific [HeatCondition](/mods/CreateTweaker/recipe/HeatCondition).

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.requiresHeat(condition as HeatCondition) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter |                           Type                            |            Description            |
|-----------|-----------------------------------------------------------|-----------------------------------|
| condition | [HeatCondition](/mods/CreateTweaker/recipe/HeatCondition) | The heat condition of the recipe. |


:::

:::group{name=toolNotConsumed}

Sets the recipe to keep the tool.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
// ProcessingRecipeBuilder.toolNotConsumed() as ProcessingRecipeBuilder<ProcessingRecipe<Container>>

myProcessingRecipeBuilder.toolNotConsumed();
```

:::

:::group{name=withFluidIngredients}

Sets the fluid ingredients of the recipe.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.withFluidIngredients(ingredients as FluidIngredient[]) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

|  Parameter  |                         Type                          |             Description              |
|-------------|-------------------------------------------------------|--------------------------------------|
| ingredients | [FluidIngredient](/forge/api/fluid/FluidIngredient)[] | The fluid ingredients of the recipe. |


:::

:::group{name=withFluidOutputs}

Sets the fluid outputs of the recipe.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.withFluidOutputs(outputs as IFluidStack[]) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter |                      Type                       |           Description            |
|-----------|-------------------------------------------------|----------------------------------|
| outputs   | [IFluidStack](/vanilla/api/fluid/IFluidStack)[] | The fluid outputs of the recipe. |


:::

:::group{name=withItemIngredients}

Sets the item ingredients of the recipe.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.withItemIngredients(ingredients as IIngredient[]) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

|  Parameter  |                         Type                         |             Description             |
|-------------|------------------------------------------------------|-------------------------------------|
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | The item ingredients of the recipe. |


:::

:::group{name=withItemOutputs}

Sets the item outputs of the recipe.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.withItemOutputs(outputs as Percentaged<IItemStack>[]) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter |                                                  Type                                                   |        Description         |
|-----------|---------------------------------------------------------------------------------------------------------|----------------------------|
| outputs   | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The outputs of the recipe. |


:::

:::group{name=withSingleItemOutput}

Sets the single item output of the recipe.

Returns: This builder for further chaining.  
Return Type: [ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;[ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt;

```zenscript
ProcessingRecipeBuilder.withSingleItemOutput(output as IItemStack) as ProcessingRecipeBuilder<ProcessingRecipe<Container>>
```

| Parameter |                    Type                    |              Description               |
|-----------|--------------------------------------------|----------------------------------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | The single item output of this recipe. |


:::


