# IEntityMod

A Mod.

## Dieses Paket importieren

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityMob;`

## Extending [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). That means all functions available to [IEntityCreature](/Vanilla/Entities/IEntityCreature/) objects also are available to IEntityMob.

## Methoden

### ZenMethods

#### Check if the mob is preventing a player's sleep

The Method requires an [IPlayer](/Vanilla/Players/IPlayer/) object.  
Returns a bool.

```zenscript
entMobObj.isPreventingPlayerRest(IPlayer player);
```