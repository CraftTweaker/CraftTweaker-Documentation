# IMobSpawnerBaseLogic

The IMobSpawnerBaseLogic object contains all kinds of information on how and where to spawn something for mob spawners.

## Importing the class

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters/ZenSetters

| ZenGetter          | ZenSetter          | Description                           | Type                                                      |
| ------------------ | ------------------ | ------------------------------------- | --------------------------------------------------------- |
| `nbtData`          | `nbtData`          | NBT Data for the spawner. (See below) | [IData](/Vanilla/Data/IData/)                             |
| `entityDefinition` | `entityDefinition` | Entity Definition to be spawned.      | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`            |                    | World that the spawner belongs to.    | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos`         |                    | The position of the spawner block.    | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## ZenMethods

```zenscript
void updateSpawner(); // Updates the spawner for spawning an entity and ticking down the spawn timer.

void setDelayToMin(); // Sets the delay of the spawner to the minimum delay for the next spawn.
```