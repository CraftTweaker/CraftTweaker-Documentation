# Fluid

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.Fluid;
```


## Methods

:::group{name=getBucket}

Return Type: [ItemDefinition](/vanilla/api/item/ItemDefinition)

```zenscript
// Fluid.getBucket() as ItemDefinition

myFluid.getBucket();
```

:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Fluid.getRegistryName() as ResourceLocation

myFluid.getRegistryName();
```

:::

:::group{name=isIn}

Return Type: boolean

```zenscript
Fluid.isIn(tag as KnownTag<Fluid>) as boolean
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |


:::

:::group{name=isSame}

Return Type: boolean

```zenscript
Fluid.isSame(other as Fluid) as boolean
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| other     | [Fluid](/vanilla/api/fluid/Fluid) |


:::

:::group{name=makeStack}

Creates a new [IFluidStack](/vanilla/api/fluid/IFluidStack) with the given amount of fluid.

Returns: a new (immutable) [IFluidStack](/vanilla/api/fluid/IFluidStack)  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// Fluid.makeStack(amount as int) as IFluidStack

myFluid.makeStack(1000);
```

| Parameter | Type |
|-----------|------|
| amount    | int  |


:::


## Properties

|     Name      |                            Type                            | Has Getter | Has Setter |
|---------------|------------------------------------------------------------|------------|------------|
| bucket        | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | true       | false      |
| commandString | string                                                     | true       | false      |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

