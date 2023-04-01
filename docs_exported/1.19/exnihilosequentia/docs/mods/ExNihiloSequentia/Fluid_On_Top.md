# ZenFluidOnTopRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenFluidOnTopRecipe;
```


## Static Methods

:::group{name=builder}

Return Type: [ZenFluidOnTopRecipe](/mods/ExNihiloSequentia/Fluid_On_Top)

```zenscript
ZenFluidOnTopRecipe.builder(recipeId as ResourceLocation) as ZenFluidOnTopRecipe
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| recipeId  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=setFluidInTank}

Sets the fluid that should be in the barrel

Return Type: [ZenFluidOnTopRecipe](/mods/ExNihiloSequentia/Fluid_On_Top)

```zenscript
ZenFluidOnTopRecipe.setFluidInTank(fluidInTank as IFluidStack) as ZenFluidOnTopRecipe
```

|  Parameter  |                    Type                     |  Description  |
|-------------|---------------------------------------------|---------------|
| fluidInTank | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid in Tank |


:::

:::group{name=setFluidOnTop}

Sets the fluid that should be on top of the barrel

Return Type: [ZenFluidOnTopRecipe](/mods/ExNihiloSequentia/Fluid_On_Top)

```zenscript
ZenFluidOnTopRecipe.setFluidOnTop(fluidOnTop as IFluidStack) as ZenFluidOnTopRecipe
```

| Parameter  |                    Type                     |  Description  |
|------------|---------------------------------------------|---------------|
| fluidOnTop | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid in Tank |


:::

:::group{name=setResult}

Sets the result block that should be generated

Return Type: [ZenFluidOnTopRecipe](/mods/ExNihiloSequentia/Fluid_On_Top)

```zenscript
ZenFluidOnTopRecipe.setResult(result as IItemStack) as ZenFluidOnTopRecipe
```

| Parameter |                    Type                    |  Description  |
|-----------|--------------------------------------------|---------------|
| result    | [IItemStack](/vanilla/api/item/IItemStack) | block or item |


:::


