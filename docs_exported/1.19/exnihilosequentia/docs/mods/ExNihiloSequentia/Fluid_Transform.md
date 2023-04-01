# ZenFluidTransformRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenFluidTransformRecipe;
```


## Static Methods

:::group{name=builder}

Return Type: [ZenFluidTransformRecipe](/mods/ExNihiloSequentia/Fluid_Transform)

```zenscript
ZenFluidTransformRecipe.builder(recipeId as ResourceLocation) as ZenFluidTransformRecipe
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| recipeId  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=setCatalyst}

Sets the block that should be underneath the barrel

Return Type: [ZenFluidTransformRecipe](/mods/ExNihiloSequentia/Fluid_Transform)

```zenscript
ZenFluidTransformRecipe.setCatalyst(catalyst as IIngredient) as ZenFluidTransformRecipe
```

| Parameter |                        Type                        |    Description     |
|-----------|----------------------------------------------------|--------------------|
| catalyst  | [IIngredient](/vanilla/api/ingredient/IIngredient) | block under barrel |


:::

:::group{name=setFluidInTank}

Sets the fluid that should be in the barrel

Return Type: [ZenFluidTransformRecipe](/mods/ExNihiloSequentia/Fluid_Transform)

```zenscript
ZenFluidTransformRecipe.setFluidInTank(fluidInTank as IFluidStack) as ZenFluidTransformRecipe
```

|  Parameter  |                    Type                     |  Description  |
|-------------|---------------------------------------------|---------------|
| fluidInTank | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid in Tank |


:::

:::group{name=setResult}

Sets the result block that should be generated

Return Type: [ZenFluidTransformRecipe](/mods/ExNihiloSequentia/Fluid_Transform)

```zenscript
ZenFluidTransformRecipe.setResult(result as IFluidStack) as ZenFluidTransformRecipe
```

| Parameter |                    Type                     |  Description  |
|-----------|---------------------------------------------|---------------|
| result    | [IFluidStack](/forge/api/fluid/IFluidStack) | block or item |


:::


