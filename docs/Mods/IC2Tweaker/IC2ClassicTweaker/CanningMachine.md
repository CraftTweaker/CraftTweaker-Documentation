## Canning Machine

## Package

```java
import mods.ic2.CanningMachine;
```

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/)... inputs** The inputs getting the food can effect.
- **int id** The effectID you want to apply to the specified items. Valid effect ids are as follows:

* 1: Hunger (Rotten Flesh) (80% chance)
* 2: Poison (Spider Eye)
* 3: Hunger (Raw Chicken) (30% chance)
* 4: Golden Apple
* 5: Notch Apple
* 6: Corus Fruit

## Register Items For Effect (int id, IItemstack... inputs)
```zenscript
    CanningMachine.registerItemsForEffect(int id, IItemstack... inputs);    

	CanningMachine.registerItemsForEffect(4, <minecraft:fish>);
```
- **int id** The effectID you want to remove from filled can. Refer to above for valid effect ids.
- **boolean deleteItems** Whether to remove items with that effect from filed cans too. Currently this boolean may not work.

## Delete Effect Id (int id, boolean deleteItems)
```zenscript    
    CanningMachine.deleteEffectId(int id, boolean deleteItems);

	CanningMachine.deleteEffectId(5, false);
```

- **int fuelValue** How much fuel the specified item is worth.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** The item to register that fuel value for. It can even be items with existing values, in which case the previously specified value will be overwritten. Note: must be an itemstack, no oredicts allowed.
    
## Register Fuel Value (int fuelValue, IItemStack input)    
```zenscript
	CanningMachine.registerFuelValue(int fuelValue, IItemStack input);

    CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

    CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); //Formerly had a value of 2548.
```

- **float fuelMultiplier** What percentage the previously input value is increased by. for example 1 = 100%, 0.5 = 50%, 0 = 0%, ect.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** The item to register that fuel multiplier for. It can even be items with existing multipliers, in which case the previously specified multiplier will be overwritten. Note: must be an itemstack, no oredicts allowed.

## Register Fuel Multiplier (float fuelMultiplier, IItemStack input)
```zenscript
	CanningMachine.registerFuelMultiplier(float fuelMultiplier, IItemStack input);

    CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) input** The item to be removed from being an input for the fuel can.

## Delete Item Fuel (IItemStack input)
```zenscript
	CanningMachine.deleteItemFuel(IItemStack input);

    CanningMachine.deleteItemFuel(<ic2:itemmisc:102>);
```

See [here](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) for info on how fuel cans work.


- **[IItemStack](/Vanilla/Items/IItemStack/) output** The product
- **[IItemStack](/Vanilla/Items/IItemStack/) container** The itemstack to be "filled"
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) filler** The ingredient with which is filled into the container

## Add Canning Recipe (IItemStack output, IIngredient filler, IItemStack container)
```zenscript
    CanningMachine.addCanningRecipe(IItemStack output, IIngredient filler, IItemStack container);	

    CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
