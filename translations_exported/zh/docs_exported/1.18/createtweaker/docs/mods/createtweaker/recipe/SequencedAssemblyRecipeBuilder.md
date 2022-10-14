# SequencedAssemblyRecipeBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.SequencedAssemblyRecipeBuilder;
```


## 使用方式

:::group{name=addOutput}

Adds an output to the recipe.

Returns: This builder for further chaining.  
Return Type: [SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder)

```zenscript
SequencedAssemblyRecipeBuilder.addOutput(output as IItemStack, weight as float) as SequencedAssemblyRecipeBuilder
```

| 参数         | 类型                                         | 描述                        |
| ---------- | ------------------------------------------ | ------------------------- |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack) | The item output.          |
| weight     | float                                      | The weight of the output. |


:::

:::group{name=addStep}

Adds a step to the recipe.

Returns: This builder for further chaining.  
Return Type: [SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder)

```zenscript
SequencedAssemblyRecipeBuilder.addStep<T : ProcessingRecipe>() as SequencedAssemblyRecipeBuilder
```

| 参数 | 类型                                                                   | 描述                                    |
| -- | -------------------------------------------------------------------- | ------------------------------------- |
| T  | [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe) | The type of recipe to add a step for. |


:::

:::group{name=addStep}

Adds a step to the recipe.

Returns: This builder for further chaining.  
Return Type: [SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder)

```zenscript
SequencedAssemblyRecipeBuilder.addStep<T : ProcessingRecipe>(builder as Function<ProcessingRecipeBuilder<T>,ProcessingRecipeBuilder<T>>) as SequencedAssemblyRecipeBuilder
```

| 参数  | 类型                                                                                                                                                                                                                                | 描述                                                       |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 生成器 | Function&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;,[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder to allow configuration of the recipe. |
| T   | [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe)                                                                                                                                                              | The type of recipe to add a step for.                    |


:::

:::group{name=loops}

Sets the amount of loops the recipe has.

Returns: This builder for further chaining.  
Return Type: [SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder)

```zenscript
SequencedAssemblyRecipeBuilder.loops(loops as int) as SequencedAssemblyRecipeBuilder
```

| 参数    | 类型  | 描述                                  |
| ----- | --- | ----------------------------------- |
| loops | int | The amount of loops the recipe has. |


:::

:::group{name=require}

Sets that the recipe requires the given ingredient.

Returns: This builder for further chaining.  
Return Type: [SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder)

```zenscript
SequencedAssemblyRecipeBuilder.require(ingredient as IIngredient) as SequencedAssemblyRecipeBuilder
```

| 参数         | 类型                                                     | 描述                         |
| ---------- | ------------------------------------------------------ | -------------------------- |
| ingredient | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | The ingredient to require. |


:::

:::group{name=transitionTo}

Sets the transition item of the sequence.

Returns: This builder for further chaining.  
Return Type: [SequencedAssemblyRecipeBuilder](/mods/createtweaker/recipe/SequencedAssemblyRecipeBuilder)

```zenscript
SequencedAssemblyRecipeBuilder.transitionTo(item as ItemDefinition) as SequencedAssemblyRecipeBuilder
```

| 参数   | 类型                                                 | 描述                         |
| ---- | -------------------------------------------------- | -------------------------- |
| item | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The item to transition to. |


:::


