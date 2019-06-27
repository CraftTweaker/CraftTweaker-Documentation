# IMachineRegistry

You use the IMachineRegistry to register a new [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) to the game, or to retrieve a previously registered machine afterwards.

## Importing the package

If you want to shorten method calls or encounter any issues you might need to [import](/AdvancedFunctions/Import) the package.  
You can do so using

    import extrautilities2.Tweaker.IMachineRegistry;
    

## Create the machine

There are two types of machines:

- Machines
- Generators

Machines consume energy, generators emit energy, otherwise they behave almost identically.

    extrautilities2.Tweaker.IMachineRegistry.createNewMachine(
        name, 
        energyBufferSize, 
        energyTransferLimit, 
        inputSlots, 
        outputSlots, 
        frontTexture, 
        frontTextureActive, 
        color
    );
    
    
    extrautilities2.Tweaker.IMachineRegistry.createNewGenerator(
        name,
        energyBufferSize,
        energyTransferLimit,
        inputSlots,
        outputSlots,
        frontTexture,
        frontTextureActive,
        color
    );
    

As you can see, both methods accept the same parameters, the only difference is if they require or produce energy.  
The parameters are:

| Name                | Type                                                                |
| ------------------- | ------------------------------------------------------------------- |
| name                | string                                                              |
| energyBufferSize    | int                                                                 |
| energyTransferLimit | int                                                                 |
| inputSlots          | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots         | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture        | string                                                              |
| frontTextureActive  | string                                                              |
| color (optional)    | int (defaults to `0xffffff` (black))                                |

The slots accept a list of [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot). Lists can be created the same way as Arrays, by using [] around the slots. Both methods return an [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) object that represents the created machine.  
Keep this in mind, as you need that object to create recipes later on!

## Get existing machines

### Get machine by name

You can get already generated machines using the Registry as well:

    extrautilities2.Tweaker.IMachineRegistry.getMachine(String name);
    

This method will return the machine with the given name as [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) or `null`

### Get all registered machines

This will return all registered machines as list of [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine).

    extrautilities2.Tweaker.IMachineRegistry.getRegisterdMachineNames();
    

### Get XU2 machines

You can also use these getters to get machines from the XU2 mod as [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) object:

    extrautilities2.Tweaker.IMachineRegistry.crusher;
    extrautilities2.Tweaker.IMachineRegistry.enchanter;
    extrautilities2.Tweaker.IMachineRegistry.generator_culinary;
    extrautilities2.Tweaker.IMachineRegistry.generator_death;
    extrautilities2.Tweaker.IMachineRegistry.generator_dragon;
    extrautilities2.Tweaker.IMachineRegistry.generator_enchant;
    extrautilities2.Tweaker.IMachineRegistry.generator_ender;
    extrautilities2.Tweaker.IMachineRegistry.generator_furnace;
    extrautilities2.Tweaker.IMachineRegistry.generator_ice;
    extrautilities2.Tweaker.IMachineRegistry.generator_lava;
    extrautilities2.Tweaker.IMachineRegistry.generator_netherstar;
    extrautilities2.Tweaker.IMachineRegistry.generator_overclock;
    extrautilities2.Tweaker.IMachineRegistry.generator_pink;
    extrautilities2.Tweaker.IMachineRegistry.generator_potion;
    extrautilities2.Tweaker.IMachineRegistry.generator_redstone;
    extrautilities2.Tweaker.IMachineRegistry.generator_slime;
    extrautilities2.Tweaker.IMachineRegistry.generator_survivalist;
    extrautilities2.Tweaker.IMachineRegistry.generator_tnt;