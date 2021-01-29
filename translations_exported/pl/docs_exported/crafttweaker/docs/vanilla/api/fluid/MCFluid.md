# MCFluid

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.MCFluid;
```


## Methods

### makeStack

Creates a new [IFluidStack](/vanilla/api/fluid/IFluidStack) with the given amount of fluid.

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
MCFluid.makeStack(amount as int) as IFluidStack
myMCFluid.makeStack(1000);
```
| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |


## Properties

| Name          | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | string | true       | false      |

