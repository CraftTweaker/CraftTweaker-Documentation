# Coolant

The Coolant manager does not belong to any specific machine but manages coolant values for all other machines.  
For example the Enervation Dynamo uses the coolant values, as does the Magmatic Dynamo with the Ientropic Reservoir augment provided.


## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:  
```
import mods.thermalexpansion.Coolant;
```


## Add Coolant

Use this to register a new coolant to the manager.  
CoolantRF needs to be non-negative, and the coolant factor needs to be between 1 and 100 (inclusive).  
If those ranges are not met, the coolant will not be registered!

```
//mods.thermalexpansion.Coolant.addCoolant(ILiquidStack fluid, int coolantRf, int coolantFactor);
mods.thermalexpansion.Coolant.addCoolant(<liquid:lava>, 0, 1);


//These are two of the values TE uses by default:
//mods.thermalexpansion.Coolant.addCoolant(<liquid:water>, 250000, 20);
//mods.thermalexpansion.Coolant.addCoolant(<liquid:cryotheum>, 3000000, 60);
```


## Remove Coolant

Use this to deregister an existing coolant from the manager.  

```
//mods.thermalexpansion.Coolant.removeCoolant(ILiquidStack fluid);
mods.thermalexpansion.Coolant.removeCoolant(<liquid:water>);
```