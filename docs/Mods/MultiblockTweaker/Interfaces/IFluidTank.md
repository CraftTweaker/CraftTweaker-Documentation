# IFluidTank

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.forge.fluids.IFluidTank;
```
## Information
Used for interacting with fluid tanks.

## ZenMethods

### Instance Methods
#### IFluidTank#getFluid()
-> ILiquidStack

 * **Returns:** The fluid in this tank.

#### IFluidTank#getFluidAmount()
-> int

 * **Returns:** How much fluid is in this tank, in mB.

#### IFluidTank#getCapacity()
-> int

 * **Returns:** How much fluid can fit in this tank, in mB.

#### IFluidTank#fill(ILiquidStack, boolean)
-> int

Try to fill this tank.

 * **Parameters:**
   * `fluidStack` — The [`ILiquidStack`](ILiquidStack) to try and fill the tank with.
   * `doFill` — `true` to actually do the filling, `false` to only simulate.
 * **Returns:** How much fluid was inserted, in mB.

#### IFluidTank#drain(int, boolean)
-> ILiquidStack

Try to drain this tank.

 * **Parameters:**
   * `maxDrain` — How much should be drained at most, in mB.
   * `doDrain` — `true` to actually do the draining, `false` to only simulate.
 * **Returns:** An [`ILiquidStack`](ILiquidStack) representing what was drained, `null` if there was nothing drained.
