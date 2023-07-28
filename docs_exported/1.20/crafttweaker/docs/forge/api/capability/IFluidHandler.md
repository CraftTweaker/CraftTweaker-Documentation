# IFluidHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IFluidHandler;
```


## Methods

:::group{name=drain}

Drains fluid out of the internal tanks.

Returns: A new FluidStack representing the fluid that was drained along with how much was drained.  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidHandler.drain(maxDrain as int, action as IFluidHandlerAction) as IFluidStack

myIFluidHandler.drain(400, <constant:forge:fluid_action:execute>);
```

| Parameter |                               Type                               |                    Description                    |
|-----------|------------------------------------------------------------------|---------------------------------------------------|
| maxDrain  | int                                                              | How much fluid should be drained.                 |
| action    | [IFluidHandlerAction](/forge/api/capability/IFluidHandlerAction) | Determines if the drain is simulated or executed. |


:::

:::group{name=drain}

Drains fluid out of the internal tanks.

Returns: A new FluidStack representing the fluid that was drained along with how much was drained.  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidHandler.drain(resource as IFluidStack, action as IFluidHandlerAction) as IFluidStack

myIFluidHandler.drain(<fluid:minecraft:water> * 400, <constant:forge:fluid_action:execute>);
```

| Parameter |                               Type                               |                       Description                       |
|-----------|------------------------------------------------------------------|---------------------------------------------------------|
| resource  | [IFluidStack](/vanilla/api/fluid/IFluidStack)                    | The fluid and the maximum amount of the fluid to drain. |
| action    | [IFluidHandlerAction](/forge/api/capability/IFluidHandlerAction) | Determines if the drain is simulated or executed.       |


:::

:::group{name=fill}

Fills the internal tanks with the given fluid.

Returns: The amount of the fluid that will be used by the fill.  
Return Type: int

```zenscript
// IFluidHandler.fill(resource as IFluidStack, action as IFluidHandlerAction) as int

myIFluidHandler.fill(<fluid:minecraft:water>, <constant:forge:fluid_action:execute>);
```

| Parameter |                               Type                               |                   Description                    |
|-----------|------------------------------------------------------------------|--------------------------------------------------|
| resource  | [IFluidStack](/vanilla/api/fluid/IFluidStack)                    | The fluid to fill.                               |
| action    | [IFluidHandlerAction](/forge/api/capability/IFluidHandlerAction) | Determines if the fill is simulated or executed. |


:::

:::group{name=getFluidInTank}

Gets the fluid in the given tank.

Returns: The fluid in the tank.  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidHandler.getFluidInTank(tank as int) as IFluidStack

myIFluidHandler.getFluidInTank(0);
```

| Parameter | Type |          Description          |
|-----------|------|-------------------------------|
| tank      | int  | The tank to get the fluid of. |


:::

:::group{name=getTankCapacity}

Gets the capacity of the given tank.

Returns: The capacity of the given tank.  
Return Type: int

```zenscript
// IFluidHandler.getTankCapacity(tank as int) as int

myIFluidHandler.getTankCapacity(0);
```

| Parameter | Type |           Description            |
|-----------|------|----------------------------------|
| tank      | int  | The tank to get the capacity of. |


:::

:::group{name=getTanks}

Gets the number of tanks in this fluid handler.

 A single handler can have many tanks holding different fluids

Returns: The number of tanks in this fluid handler.  
Return Type: int

```zenscript
// IFluidHandler.getTanks() as int

myIFluidHandler.getTanks();
```

:::

:::group{name=isFluidValid}

Checks if the given fluid is valid for the given tank.

Returns: true if the fluid is valid, false otherwise.  
Return Type: boolean

```zenscript
// IFluidHandler.isFluidValid(tank as int, stack as IFluidStack) as boolean

myIFluidHandler.isFluidValid(0, <fluid:minecraft:water>);
```

| Parameter |                     Type                      |     Description     |
|-----------|-----------------------------------------------|---------------------|
| tank      | int                                           | The tank to check.  |
| stack     | [IFluidStack](/vanilla/api/fluid/IFluidStack) | The fluid to check. |


:::


## Properties

| Name  | Type | Has Getter | Has Setter |                                                          Description                                                          |
|-------|------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------|
| tanks | int  | true       | false      | Gets the number of tanks in this fluid handler. <br />  <br />  A single handler can have many tanks holding different fluids |

