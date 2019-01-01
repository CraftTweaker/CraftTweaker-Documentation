# IMachine

An IMachine is the actual machine object, you can get it from the [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry).

## Importing the package
It might be required for you to [import](/AdvancedFunctions/Import) the 
```
import extrautilities2.Tweaker.IMachine;
```

## Add Recipes

There are two methods for adding recipes, one uses a probability map for the outputs, one allows for the use of [WeightedItemStack](/Vanilla/Items/WeightedItemStack) and [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) objects.  
Both methods use [maps](/AdvancedFunctions/Associative_Arrays) with strings as indices.  
These strings will be the names of the input/output slots given, which is why you should not have two slots with the same name in a machine.


### Using a probability map

```
myMachine.addRecipe(inputs, outputs, energy, time, probabilities);
```

This method uses the following parameters:

| Name          | Type                                                        |
|---------------|-------------------------------------------------------------|
| inputs        | [IIngredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs       | [IIngredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| energy        | int                                                         |
| time          | int                                                         |
| probabilities | float[string\]                                              |



### Using only the outputs map

You can also only use the outputs map, then ExtUtils2 will check for any [WeightedItemStack](/Vanilla/Items/WeightedItemStack) and [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) objects and use their chances.

```
myMachine.addRecipe(inputs, outputs, energy, time);
```

This method uses the following parameters:

| Name          | Type                                                        |
|---------------|-------------------------------------------------------------|
| inputs        | [IIngredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs       | Object[string\]                                             |
| energy        | int                                                         |
| time          | int                                                         |


## Remove recipes

You can also remove recipes.
Again, you use [maps](/AdvancedFunctions/Associative_Arrays) with strings as indices.  

There are two methods, one uses [IIngredient](/Vanilla/Variable_Types/IIngredient) as values, and one that accepts a map with [IItemStack](/Vanilla/Items/IItemStack) and a map with [ILiquidStack](/Vanilla/Liquids/ILiquidStack) values.

### Using IIngredient
```
myMachine.removeRecipe(inputs);
```


| Name          | Type                                                        |
|---------------|-------------------------------------------------------------|
| inputs        | [IIngredient](/Vanilla/Variable_Types/IIngredient)[string\] |

### Using separate maps for Items and Liquids

```
myMachine.removeRecipe(items, liquids);
```

| Name          | Type                                                        |
|---------------|-------------------------------------------------------------|
| items         | [IItemStack](/Vanilla/Items/IItemStack)[string\]            |
| liquids       | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[string\]      |



## Retrieving machine information

You can also retrieve some information on the machine using the following methods:

- `getInputSlots()`: Returns all input slots as a List of [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getOutputSlots()`: Returns all output slots as a List of [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getSlot()`: Returns the [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) matching the name.


## Naming the machine
So far, all our machines will be named `machine.crafttweaker:your_machine_name` where `your_machine_name` is whatever name you used to create the machine.

If you want the machine name localized, use either CrT's [IGame](/Vanilla/Game/IGame) capabilities or a custom lang file, though latter is preferred since there are some issues with CrT's way of doing the localization.

So if your machine name was `time_machine`, you would need to add this to a lang file
```
machine.crafttweaker:time_machine=Space Time distorter (Time machine)
```
