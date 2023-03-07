# FluidIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import tfc.api.ingredient.FluidIngredient;
```


## Static Methods

:::group{name=empty}

Create an empty fluid ingredient

Return Type: [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient)

```zenscript
// FluidIngredient.empty() as FluidIngredient

FluidIngredient.empty();
```

:::

:::group{name=of}

Create a fluid ingredient from a fluidstack

Returns:   
Return Type: [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient)

```zenscript
// FluidIngredient.of(fluid as IFluidStack) as FluidIngredient

FluidIngredient.of(<fluid:tfc:olive_oil>*100);
```

| Parameter |                    Type                     | Description |
|-----------|---------------------------------------------|-------------|
| fluid     | [IFluidStack](/forge/api/fluid/IFluidStack) | Fluidstack  |


:::

:::group{name=of}

Create a fluid ingredient from a list of fluids

Returns:   
Return Type: [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient)

```zenscript
// FluidIngredient.of(fluidStacks as IFluidStack[], amount as int) as FluidIngredient

FluidIngredient.of([<fluid:minecraft:water>, <fluid:minecraft:lava>], 1000);
```

|  Parameter  |                     Type                      |   Description   |
|-------------|-----------------------------------------------|-----------------|
| fluidStacks | [IFluidStack](/forge/api/fluid/IFluidStack)[] | array of fluids |
| amount      | int                                           | amount of fluid |


:::

:::group{name=of}

Create a fluid ingredient from a fluid tag

Returns:   
Return Type: [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient)

```zenscript
// FluidIngredient.of(fluids as KnownTag<Fluid>, amount as int) as FluidIngredient

FluidIngredient.of(<tag:fluids:minecraft:water>, 100);
```

| Parameter |                                        Type                                         |   Description   |
|-----------|-------------------------------------------------------------------------------------|-----------------|
| fluids    | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; | tag of fluids   |
| amount    | int                                                                                 | amount of fluid |


:::

