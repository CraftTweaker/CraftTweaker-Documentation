# CrucibleRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.CrucibleRecipe;
```


## Methods

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [CrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
CrucibleRecipe.create(recipeId as string) as CrucibleRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setAmount}

Sets the amount how much fluid the input will generate

Return Type: [CrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
CrucibleRecipe.setAmount(amount as int) as CrucibleRecipe
```

| Parameter | Type |            Description             |
|-----------|------|------------------------------------|
| amount    | int  | Sets the amount of fuild per input |


:::

:::group{name=setCrucibleType}

Sets the crucible type. Can only be fired or wood.

Return Type: [CrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
CrucibleRecipe.setCrucibleType(crucibleType as string) as CrucibleRecipe
```

|  Parameter   |  Type  |                   Description                   |
|--------------|--------|-------------------------------------------------|
| crucibleType | string | Sets the Crucible type (only "fired" or "wood") |


:::

:::group{name=setInput}

Sets the input that should be smelted

Return Type: [CrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
CrucibleRecipe.setInput(input as IIngredient) as CrucibleRecipe
```

| Parameter |                        Type                        |  Description  |
|-----------|----------------------------------------------------|---------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | smelting item |


:::

:::group{name=setResultFluid}

Sets the output fluid that should be generated

Return Type: [CrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
CrucibleRecipe.setResultFluid(fluid as IFluidStack) as CrucibleRecipe
```

| Parameter |                    Type                     |   Description    |
|-----------|---------------------------------------------|------------------|
| fluid     | [IFluidStack](/forge/api/fluid/IFluidStack) | generated output |


:::


