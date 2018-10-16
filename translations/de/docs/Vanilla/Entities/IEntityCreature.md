# IEntityCreature

A Creature.

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityCreature;`

## Extending [IEntityLiving](/Vanilla/Entities/IEntityLiving/)

IEntityCreature extends [IEntityLiving](/Vanilla/Entities/IEntityLiving/). That means all functions available to [IEntityLiving](/Vanilla/Entities/IEntityLiving/) objects also are available to IEntityCreature.

## Methods

### ZenGetters/Setters

| ZenGetter            | Type                                   |
| -------------------- | -------------------------------------- |
| hasPath              | bool                                   |
| isWithinHomeDistance | bool                                   |
| homePosition         | [IBlockPos](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance  | float                                  |
| hasHome              | bool                                   |

### ZenMethods

#### play living sound

Method expects nothing.  
Returns nothing.

    entCreObj.playLivingSound();
    

#### Set or detach home

First method expects an [IBlockPos](/Vanilla/World/IBlockPos/) object and an int.  
Second method expects nothing.  
Both methods return nothing.

    entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
    entAnObj.detachHome();
    

#### Check if a position is within the home distance

Method expects an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns a bool.

    entAnObj.isPositionWithinHomeDistance