# IMobSpawnerBaseLogic

Das IMobSpawnerBaseLogic Objekt enthält alle Arten von Informationen darüber, wie und wo man etwas spawnen kann.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetter

| ZenGetter  | ZenSetter          |                                       |
| ---------- | ------------------ | ------------------------------------- |
| `nbtData`  | `nbtData`          | [IData](/Vanilla/Data/IData/)         |
|            | `entityDefinition` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `Welt`     |                    | [IWorld](/Vanilla/World/IWorld)       |
| `blockPos` |                    | [IBlockPos](/Vanilla/World/IBlockPos) |

## ZenMethoden

```zenscript
void updateSpawner();

void setDelayToMin();
```