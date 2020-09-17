# IMobSpawnerBaseLogic

L'oggetto IMobSpawnerBaseLogic contiene tutti i tipi di informazioni su come e dove generare qualcosa.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters

| ZenGetter  | ZenSetter          |                                       |
| ---------- | ------------------ | ------------------------------------- |
| `nbtData`  | `nbtData`          | [IData](/Vanilla/Data/IData/)         |
|            | `entityDefinition` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `mondo`    |                    | [IWorld](/Vanilla/World/IWorld)       |
| `blockPos` |                    | [IBlockPos](/Vanilla/World/IBlockPos) |

## ZenMethods

```zenscript
void updateSpawner();

void setDelayToMin();
```