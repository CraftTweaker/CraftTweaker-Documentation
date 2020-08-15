# IMobSpawnerBaseLogic

The IMobSpawnerBaseLogic object contains all kinds of information on how and where to spawn something.

## Importar la clase

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters

| ZenGetter  | Ajuste             |                                       |
| ---------- | ------------------ | ------------------------------------- |
| `nbtData`  | `nbtData`          | [IData](/Vanilla/Data/IData/)         |
|            | `entityDefinition` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `world`    |                    | [IWorld](/Vanilla/World/IWorld)       |
| `blockPos` |                    | [IBlockPos](/Vanilla/World/IBlockPos) |

## Métodos

```zenscript
void updateSpawner();

void setDelayToMin();
```