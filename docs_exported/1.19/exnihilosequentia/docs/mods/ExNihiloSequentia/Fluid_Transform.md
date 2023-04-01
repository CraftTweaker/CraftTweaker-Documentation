# FluidTransformRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.FluidTransformRecipe;
```


## Methods

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [FluidTransformRecipe](/mods/ExNihiloSequentia/Fluid_Transform)

```zenscript
FluidTransformRecipe.create(recipeId as string) as FluidTransformRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setCatalyst}

Sets the block that should be underneath the barrel

Return Type: [FluidTransformRecipe](/mods/ExNihiloSequentia/Fluid_Transform)

```zenscript
FluidTransformRecipe.setCatalyst(catalyst as IIngredient) as FluidTransformRecipe
```

| Parameter |                        Type                        |    Description     |
|-----------|----------------------------------------------------|--------------------|
| catalyst  | [IIngredient](/vanilla/api/ingredient/IIngredient) | block under barrel |


:::

:::group{name=setFluidInTank}

Sets the fluid that should be in the barrel

Return Type: [FluidTransformRecipe](/mods/ExNihiloSequentia/Fluid_Transform)

```zenscript
FluidTransformRecipe.setFluidInTank(fluidInTank as IFluidStack) as FluidTransformRecipe
```

|  Parameter  |                    Type                     |  Description  |
|-------------|---------------------------------------------|---------------|
| fluidInTank | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid in Tank |


:::

:::group{name=setResult}

Sets the result block that should be generated

Return Type: [FluidTransformRecipe](/mods/ExNihiloSequentia/Fluid_Transform)

```zenscript
FluidTransformRecipe.setResult(result as IFluidStack) as FluidTransformRecipe
```

| Parameter |                    Type                     |  Description  |
|-----------|---------------------------------------------|---------------|
| result    | [IFluidStack](/forge/api/fluid/IFluidStack) | block or item |


:::


