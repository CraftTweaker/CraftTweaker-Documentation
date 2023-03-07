# FluidIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import tfc.api.ingredient.FluidIngredient;
```


## Static Methods

:::group{name=empty}

Empty Fluid Ingredient for when you don't want a fluid input

Return Type: [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient)

```zenscript
// FluidIngredient.empty() as FluidIngredient

FluidIngredient.empty();
```

:::

:::group{name=of}

Fluid Ingredient from a fluidstack

Return Type: [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient)

```zenscript
FluidIngredient.of(fluid as IFluidStack) as FluidIngredient
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| fluid     | [IFluidStack](/forge/api/fluid/IFluidStack) |


:::

:::group{name=of}

Fluid Ingredient from a tag

Return Type: [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient)

```zenscript
FluidIngredient.of(fluids as KnownTag<Fluid>, amount as int) as FluidIngredient
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| fluids    | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |
| amount    | int                                                                                 |


:::

:::group{name=of}

Return Type: [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient)

```zenscript
FluidIngredient.of(stack as IFluidStack[], amount as int) as FluidIngredient
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| stack     | [IFluidStack](/forge/api/fluid/IFluidStack)[] |
| amount    | int                                           |


:::

