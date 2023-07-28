# FluidOnTopRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.FluidOnTopRecipe;
```


## Methods

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [FluidOnTopRecipe](/mods/ExNihiloSequentia/Fluid_On_Top)

```zenscript
FluidOnTopRecipe.create(recipeId as string) as FluidOnTopRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setFluidInTank}

Sets the fluid that should be in the barrel

Return Type: [FluidOnTopRecipe](/mods/ExNihiloSequentia/Fluid_On_Top)

```zenscript
FluidOnTopRecipe.setFluidInTank(fluidInTank as IFluidStack) as FluidOnTopRecipe
```

|  Parameter  |                    Type                     |  Description  |
|-------------|---------------------------------------------|---------------|
| fluidInTank | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid in Tank |


:::

:::group{name=setFluidOnTop}

Sets the fluid that should be on top of the barrel

Return Type: [FluidOnTopRecipe](/mods/ExNihiloSequentia/Fluid_On_Top)

```zenscript
FluidOnTopRecipe.setFluidOnTop(fluidOnTop as IFluidStack) as FluidOnTopRecipe
```

| Parameter  |                    Type                     |  Description  |
|------------|---------------------------------------------|---------------|
| fluidOnTop | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid in Tank |


:::

:::group{name=setResult}

Sets the result block that should be generated

Return Type: [FluidOnTopRecipe](/mods/ExNihiloSequentia/Fluid_On_Top)

```zenscript
FluidOnTopRecipe.setResult(result as IItemStack) as FluidOnTopRecipe
```

| Parameter |                    Type                    |  Description  |
|-----------|--------------------------------------------|---------------|
| result    | [IItemStack](/vanilla/api/item/IItemStack) | block or item |


:::


