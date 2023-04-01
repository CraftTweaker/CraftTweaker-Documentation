# ZenFluidItemRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenFluidItemRecipe;
```


## Static Methods

:::group{name=builder}

Return Type: [ZenFluidItemRecipe](/mods/ExNihiloSequentia/Fluid_To_Item)

```zenscript
ZenFluidItemRecipe.builder(recipeId as ResourceLocation) as ZenFluidItemRecipe
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| recipeId  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=setFluidInTank}

Sets the fluid that should be in the barrel

Return Type: [ZenFluidItemRecipe](/mods/ExNihiloSequentia/Fluid_To_Item)

```zenscript
ZenFluidItemRecipe.setFluidInTank(fluidInTank as IFluidStack) as ZenFluidItemRecipe
```

|  Parameter  |                    Type                     |  Description  |
|-------------|---------------------------------------------|---------------|
| fluidInTank | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid in Tank |


:::

:::group{name=setInputItem}

Sets the catalyst to create a new block

Return Type: [ZenFluidItemRecipe](/mods/ExNihiloSequentia/Fluid_To_Item)

```zenscript
ZenFluidItemRecipe.setInputItem(inputItem as IIngredient) as ZenFluidItemRecipe
```

| Parameter |                        Type                        | Description |
|-----------|----------------------------------------------------|-------------|
| inputItem | [IIngredient](/vanilla/api/ingredient/IIngredient) | Catalyst    |


:::

:::group{name=setResult}

Sets the result block that should be generated

Return Type: [ZenFluidItemRecipe](/mods/ExNihiloSequentia/Fluid_To_Item)

```zenscript
ZenFluidItemRecipe.setResult(result as IItemStack) as ZenFluidItemRecipe
```

| Parameter |                    Type                    |  Description  |
|-----------|--------------------------------------------|---------------|
| result    | [IItemStack](/vanilla/api/item/IItemStack) | block or item |


:::


