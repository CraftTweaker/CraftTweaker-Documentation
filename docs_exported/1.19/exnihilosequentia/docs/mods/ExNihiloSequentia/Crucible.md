# ZenCrucibleRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenCrucibleRecipe;
```


## Static Methods

:::group{name=builder}

Return Type: [ZenCrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
ZenCrucibleRecipe.builder(recipeId as ResourceLocation) as ZenCrucibleRecipe
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| recipeId  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=setAmount}

Sets the amount how much fluid the input will generate

Return Type: [ZenCrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
ZenCrucibleRecipe.setAmount(amount as int) as ZenCrucibleRecipe
```

| Parameter | Type |            Description             |
|-----------|------|------------------------------------|
| amount    | int  | Sets the amount of fuild per input |


:::

:::group{name=setCrucibleType}

Sets the crucible type. Can only be fired or wood.

Return Type: [ZenCrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
ZenCrucibleRecipe.setCrucibleType(crucibleType as string) as ZenCrucibleRecipe
```

|  Parameter   |  Type  |                   Description                   |
|--------------|--------|-------------------------------------------------|
| crucibleType | string | Sets the Crucible type (only "fired" or "wood") |


:::

:::group{name=setInput}

Sets the input that should be smelted

Return Type: [ZenCrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
ZenCrucibleRecipe.setInput(input as IIngredient) as ZenCrucibleRecipe
```

| Parameter |                        Type                        |  Description  |
|-----------|----------------------------------------------------|---------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | smelting item |


:::

:::group{name=setResultFluid}

Sets the output fluid that should be generated

Return Type: [ZenCrucibleRecipe](/mods/ExNihiloSequentia/Crucible)

```zenscript
ZenCrucibleRecipe.setResultFluid(fluid as IFluidStack) as ZenCrucibleRecipe
```

| Parameter |                    Type                     |   Description    |
|-----------|---------------------------------------------|------------------|
| fluid     | [IFluidStack](/forge/api/fluid/IFluidStack) | generated output |


:::


