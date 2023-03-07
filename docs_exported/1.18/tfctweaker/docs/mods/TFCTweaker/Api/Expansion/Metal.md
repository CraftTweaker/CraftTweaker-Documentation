# metal

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import tfc.api.metal;
```


## Static Methods

:::group{name=getAllMetals}

Get all the registered metals

Returns: an array containing all registered metals  
Return Type: [metal](/mods/TFCTweaker/Api/Expansion/Metal)[]

```zenscript
// metal.getAllMetals() as metal[]

metal.getAllMetals();
```

:::

:::group{name=getMetalFromIngot}

get the metal from ingot

Returns: metal found  
Return Type: [metal](/mods/TFCTweaker/Api/Expansion/Metal)

```zenscript
// metal.getMetalFromIngot(stack as IItemStack) as metal

metal.getMetalFromIngot(<item:tfc:metal/ingot/copper>);
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | ingot       |


:::

## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
// metal.getCommandString() as string

mymetal.getCommandString();
```

:::

:::group{name=getFluidStack}

get a fluidstack from a metal

Returns:   
Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
// metal.getFluidStack(amount as int) as IFluidStack

<metal:tfc:copper>.getFluidStack(100);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount    | int  | amount      |


:::

:::group{name=getMetalPart}

return the item corresponding to that metal part

Returns:   
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// metal.getMetalPart(partName as string) as IItemStack

<tfc:metal:copper>.getMetalPart("ingot");
```

| Parameter |  Type  |   Description   |
|-----------|--------|-----------------|
| partName  | string | metal part name |


:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| commandString | string | true       | false      |

