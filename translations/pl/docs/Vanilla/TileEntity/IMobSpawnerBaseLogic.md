# IMobSpawnerBaseLogic

The IMobSpawnerBaseLogic object contains all kinds of information on how and where to spawn something.

## Importowanie klasy

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters

| ZenGetter | ZenSetter          |                                       |
| --------- | ------------------ | ------------------------------------- |
| `nbtData` | `nbtData`          | [IData](/Vanilla/Data/IData/)         |
|           | `entityDefinition` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `świat`   |                    | [IWorld](/Vanilla/World/IWorld)       |
| `bloki`   |                    | [IBlockPos](/Vanilla/World/IBlockPos) |

## Metody ZenMethods

```zenscript
void updateSpawner();

void setDelayToMin();
```