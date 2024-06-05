# SizedFluidIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.item.SizedFluidIngredient;
```


## Static Methods

:::group{name=of}

Return Type: [SizedFluidIngredient](/neoforge/api/ingredient/SizedFluidIngredient)

```zenscript
SizedFluidIngredient.of(stack as invalid) as SizedFluidIngredient
```

| Parameter |    Type     |
|-----------|-------------|
| stack     | **invalid** |


:::

:::group{name=of}

Return Type: [SizedFluidIngredient](/neoforge/api/ingredient/SizedFluidIngredient)

```zenscript
SizedFluidIngredient.of(fluid as Fluid, amount as int) as SizedFluidIngredient
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) |
| amount    | int                               |


:::

:::group{name=of}

Return Type: [SizedFluidIngredient](/neoforge/api/ingredient/SizedFluidIngredient)

```zenscript
SizedFluidIngredient.of(tag as KnownTag<Fluid>, amount as int) as SizedFluidIngredient
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |
| amount    | int                                                                                 |


:::

## Casters

|                     Result Type                     | Is Implicit |
|-----------------------------------------------------|-------------|
| [FluidIngredient](/forge/api/fluid/FluidIngredient) | true        |

## Methods

:::group{name=test}

Return Type: boolean

```zenscript
SizedFluidIngredient.test(stack as IFluidStack) as boolean
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| stack     | [IFluidStack](/vanilla/api/fluid/IFluidStack) |


:::


## Properties

|    Name    |                            Type                             | Has Getter | Has Setter |
|------------|-------------------------------------------------------------|------------|------------|
| amount     | int                                                         | true       | false      |
| fluids     | [IFluidStack](/vanilla/api/fluid/IFluidStack)[]             | true       | false      |
| ingredient | [FluidIngredient](/neoforge/api/ingredient/FluidIngredient) | true       | false      |

