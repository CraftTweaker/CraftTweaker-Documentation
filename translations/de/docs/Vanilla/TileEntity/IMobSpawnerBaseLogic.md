# IMobSpawnerBaseLogic

The IMobSpawnerBaseLogic object contains all kinds of information on how and where to spawn something.

## Diese Klasse importieren

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetter

| ZenGetter  | ZenSetter          |                                       |
| ---------- | ------------------ | ------------------------------------- |
| `nbtData`  | `nbtData`          | [IData](/Vanilla/Data/IData/)         |
|            | `entityDefinition` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `world`    |                    | [IWorld](/Vanilla/World/IWorld)       |
| `blockPos` |                    | [IBlockPos](/Vanilla/World/IBlockPos) |

## ZenMethods

```zenscript
void updateSpawner();

void setDelayToMin();
```