# IFluidHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IFluidHandler;
```


## Methods

:::group{name=drain}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidHandler.drain(maxDrain as int, action as IFluidHandlerAction) as IFluidStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| maxDrain | int | No Description Provided |
| action | [IFluidHandlerAction](/vanilla/api/capability/IFluidHandlerAction) | No Description Provided |


:::

:::group{name=drain}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidHandler.drain(resource as IFluidStack, action as IFluidHandlerAction) as IFluidStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| resource | [IFluidStack](/vanilla/api/fluid/IFluidStack) | No Description Provided |
| action | [IFluidHandlerAction](/vanilla/api/capability/IFluidHandlerAction) | No Description Provided |


:::

:::group{name=fill}

Return Type: int

```zenscript
IFluidHandler.fill(resource as IFluidStack, action as IFluidHandlerAction) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| resource | [IFluidStack](/vanilla/api/fluid/IFluidStack) | No Description Provided |
| action | [IFluidHandlerAction](/vanilla/api/capability/IFluidHandlerAction) | No Description Provided |


:::

:::group{name=getFluidInTank}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidHandler.getFluidInTank(tank as int) as IFluidStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tank | int | No Description Provided |


:::

:::group{name=getTankCapacity}

Return Type: int

```zenscript
IFluidHandler.getTankCapacity(tank as int) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tank | int | No Description Provided |


:::

:::group{name=getTanks}

Return Type: int

```zenscript
// IFluidHandler.getTanks() as int

myIFluidHandler.getTanks();
```

:::

:::group{name=isFluidValid}

Return Type: boolean

```zenscript
IFluidHandler.isFluidValid(tank as int, stack as IFluidStack) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tank | int | No Description Provided |
| stack | [IFluidStack](/vanilla/api/fluid/IFluidStack) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| tanks | int | true | false | No Description Provided |

