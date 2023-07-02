# FluidItemRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.FluidItemRecipe;
```


## Methods

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [FluidItemRecipe](/mods/ExNihiloSequentia/Fluid_To_Item)

```zenscript
FluidItemRecipe.create(recipeId as string) as FluidItemRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setFluidInTank}

Sets the fluid that should be in the barrel

Return Type: [FluidItemRecipe](/mods/ExNihiloSequentia/Fluid_To_Item)

```zenscript
FluidItemRecipe.setFluidInTank(fluidInTank as IFluidStack) as FluidItemRecipe
```

|  Parameter  |                    Type                     |  Description  |
|-------------|---------------------------------------------|---------------|
| fluidInTank | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid in Tank |


:::

:::group{name=setInputItem}

Sets the catalyst to create a new block

Return Type: [FluidItemRecipe](/mods/ExNihiloSequentia/Fluid_To_Item)

```zenscript
FluidItemRecipe.setInputItem(inputItem as IIngredient) as FluidItemRecipe
```

| Parameter |                        Type                        | Description |
|-----------|----------------------------------------------------|-------------|
| inputItem | [IIngredient](/vanilla/api/ingredient/IIngredient) | Catalyst    |


:::

:::group{name=setResult}

Sets the result block that should be generated

Return Type: [FluidItemRecipe](/mods/ExNihiloSequentia/Fluid_To_Item)

```zenscript
FluidItemRecipe.setResult(result as IItemStack) as FluidItemRecipe
```

| Parameter |                    Type                    |  Description  |
|-----------|--------------------------------------------|---------------|
| result    | [IItemStack](/vanilla/api/item/IItemStack) | block or item |


:::


