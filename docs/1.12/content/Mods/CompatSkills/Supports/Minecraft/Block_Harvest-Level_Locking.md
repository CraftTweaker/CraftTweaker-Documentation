# Block Harvest-Level Locking

## Feature:
This lock makes it so the player can't break a block with the set Harvest-Level unless a set of Requirements are met.
For example below, you can see that Blocks with a Harvest-Level of 3 can only be broken in the End.
This example is not really that great in practice, but it does show what this type of lock is capable of doing.

## Syntax:
```
mods.compatskills.HarvestLock.addBlockLevelLock(int level, String... requirements);

mods.compatskills.HarvestLock.addBlockLevelLock(3, "dim|1");
```