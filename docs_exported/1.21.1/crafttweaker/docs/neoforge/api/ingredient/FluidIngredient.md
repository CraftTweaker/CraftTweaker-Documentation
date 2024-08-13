# FluidIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.item.FluidIngredient;
```


## Implemented Interfaces
FluidIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in FluidIngredient

- Predicate

## Static Methods

:::group{name=of}

Return Type: [FluidIngredient](/neoforge/api/ingredient/FluidIngredient)

```zenscript
// FluidIngredient.of() as FluidIngredient

FluidIngredient.of();
```

:::

:::group{name=of}

Return Type: [FluidIngredient](/neoforge/api/ingredient/FluidIngredient)

```zenscript
FluidIngredient.of(fluids as Fluid[]) as FluidIngredient
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| fluids    | [Fluid](/vanilla/api/fluid/Fluid)[] |


:::

:::group{name=of}

Return Type: [FluidIngredient](/neoforge/api/ingredient/FluidIngredient)

```zenscript
FluidIngredient.of(fluids as IFluidStack[]) as FluidIngredient
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| fluids    | [IFluidStack](/vanilla/api/fluid/IFluidStack)[] |


:::

:::group{name=single}

Return Type: [FluidIngredient](/neoforge/api/ingredient/FluidIngredient)

```zenscript
FluidIngredient.single(fluid as Fluid) as FluidIngredient
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) |


:::

:::group{name=single}

Return Type: [FluidIngredient](/neoforge/api/ingredient/FluidIngredient)

```zenscript
FluidIngredient.single(stack as IFluidStack) as FluidIngredient
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| stack     | [IFluidStack](/vanilla/api/fluid/IFluidStack) |


:::

:::group{name=tag}

Return Type: [FluidIngredient](/neoforge/api/ingredient/FluidIngredient)

```zenscript
FluidIngredient.tag(tag as KnownTag<Fluid>) as FluidIngredient
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |


:::

## Casters

|                      Result Type                      | Is Implicit |
|-------------------------------------------------------|-------------|
| [FluidIngredient](/vanilla/api/fluid/FluidIngredient) | true        |

## Methods

:::group{name=asCTFluidIngredient}

Return Type: [FluidIngredient](/vanilla/api/fluid/FluidIngredient)

```zenscript
FluidIngredient.asCTFluidIngredient(amount as int) as FluidIngredient
```

| Parameter | Type |
|-----------|------|
| amount    | int  |


:::

:::group{name=test}

Return Type: boolean

```zenscript
FluidIngredient.test(fluidStack as invalid) as boolean
```

| Parameter  |    Type     |
|------------|-------------|
| fluidStack | **invalid** |


:::


## Properties

|    Name     |     Type      | Has Getter | Has Setter |
|-------------|---------------|------------|------------|
| empty       | boolean       | true       | false      |
| hasNoFluids | boolean       | true       | false      |
| simple      | boolean       | true       | false      |
| stacks      | **invalid**[] | true       | false      |

