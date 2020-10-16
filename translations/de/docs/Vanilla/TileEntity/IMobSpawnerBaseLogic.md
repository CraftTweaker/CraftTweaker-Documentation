# IMobSpawnerBaseLogic

Das IMobSpawnerBaseLogic Objekt enthält alle Arten von Informationen darüber, wie und wo man etwas für Mob-Spawner spawnen kann.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetter/ZenSetter

| ZenGetter          | ZenSetter          | Beschreibung                                  | Type                                                      |
| ------------------ | ------------------ | --------------------------------------------- | --------------------------------------------------------- |
| `nbtData`          | `nbtData`          | NBT Daten für den Spawner. (Siehe unten)      | [IData](/Vanilla/Data/IData/)                             |
| `entityDefinition` | `entityDefinition` | Entitäts-Definition, die erzeugt werden soll. | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`            |                    | Welt, zu der der Spawner gehört.              | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos`         |                    | Die Position des Spawnerblocks.               | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## ZenMethods

```zenscript
void updateSpawner(); // Aktualisiert den Spawner um eine Entität zu spawnen und den Spawn-Timer zu ticken.

void setDelayToMin(); // Setzt die Verzögerung des Spawners auf die minimale Verzögerung für den nächsten Spawn.
```