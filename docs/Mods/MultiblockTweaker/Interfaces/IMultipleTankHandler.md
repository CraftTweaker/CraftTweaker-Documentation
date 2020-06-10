# IMultipleTankHandler

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.fluids.IMultipleTankHandler;
```
## Information
Used for interacting with multiple fluid tanks.

## ZenMethods

### Instance Methods
#### IMultipleTankHandler#getFluidTanks()
-> IFluidTank[]

 * **Returns:** All of the fluid tanks.

#### IMultipleTankHandler#getTanks()
-> int

 * **Returns:** How many fluid tanks there are.

#### IMultipleTankHandler#getTankAt(int)
-> IFluidTank

 * **Parameters:** `i` — The index of the tank.
 * **Returns:** The tank at the index.

#### IMultipleTankHandler#fill(ILiquidStack, boolean)
-> int

Try to fill the tank with a fluid.

 * **Parameters:**
   * `fluidStack` — The fluid to fill with.
   * `doFill` — Whether the filling should actually be done.
 * **Returns:** How much of the fluid was inserted.

#### IMultipleTankHandler#drain(ILiquidStack, boolean)
-> ILiquidStack

Try to drain the tank of a fluid.

 * **Parameters:**
   * `fluidStack` — The fluid to drain.
   * `doDrain` — Whether the draining should actually be done.
 * **Returns:** How much of the fluid was drained.

#### IMultipleTankHandler#drain(int, boolean)
-> ILiquidStack

Try to drain the tank of fluid.

 * **Parameters:**
   * `maxDrain` — How much fluid to drain.
   * `doDrain` — Whether the draining should actually be done.
 * **Returns:** How much of the fluid was drained.
