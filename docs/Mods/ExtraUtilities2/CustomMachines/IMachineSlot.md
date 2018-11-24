# IMachineSlot

A Machine slot is a slot that either accepts Items or liquids.  
You need them when creating a machine using the [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) later on.  

## Importing the package
If you want to shorten method calls or encounter any issues you might need to [import](/AdvancedFunctions/Import) the package.  
You can do so using  
```
import extrautilities2.Tweaker.IMachineSlot;
```

## Creating a new IMachineSlot

The IMachineSlot package offers methods to create new IMachineSlot objects:
```
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, stackCapacity);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional, stackCapacity);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, color, isOptional, backgroundTexture, stackCapacity);


newFluidSlot(name);
newFluidSlot(name, stackCapacity);
newFluidSlot(name, stackCapacity, filterLiquidStack);
newFluidSlot(name, stackCapacity, isOptional, filterLiquidStack);
newFluidSlot(name, stackCapacity, color, isOptional, filterLiquidStack);
```

All these methods will return the new Slot as IMachineSlot object.

The parameters are:

| Name              | Type                                          |
|-------------------|-----------------------------------------------|
| name              | string                                        |
| isOptional        | bool                                          |
| stackCapacity     | int                                           |
| color             | int                                           |
| backgroundTexture | string                                        |
| filterLiquidStack | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |


What the parameters do:

- `name`: The slot's name. Used for recipes later. Make sure that a machine has no 2 slots with the same name.
- `isOptional`: Dictates whether or not this slot must be filled for recipe checks to commence.
- `stackCapacity`: How many items/millibuckets can fit in this slot?
- `color`: What color will the slot have?
- `backgroundTexture`: A custom texture path for the background of this slot can be added here.
- `filterLiquidStack`: If you provide this [ILiquidStack](/Vanilla/Liquids/ILiquidStack) object, then only this fluid will be allowed to enter the slot.


## Getters
You can get basic information from an IMachineSlot as well.  
Don't expect these getters to magically return something different from what you set the slot when creating it, though.

| Name              | Type                                          |
|-------------------|-----------------------------------------------|
| name              | string                                        |
| optional          | bool                                          |
| stackCapacity     | int                                           |