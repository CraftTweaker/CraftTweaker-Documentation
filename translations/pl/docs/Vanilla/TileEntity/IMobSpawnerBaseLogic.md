# IMobSpawnerBaseLogic

Obiekt IMobSpawnerBaseLogic zawiera wszelkiego rodzaju informacje o tym, jak i gdzie stworzyć coś dla spawnerów potworów.

## Importing the class

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters/ZenSetters

| ZenGetter            | ZenSetter            | Description                                     | Type                                                      |
| -------------------- | -------------------- | ----------------------------------------------- | --------------------------------------------------------- |
| `nbtData`            | `nbtData`            | Dane NBT dla spawnera. (Patrz poniżej)          | [IData](/Vanilla/Data/IData/)                             |
| `Definicja podmiotu` | `Definicja podmiotu` | Definicja jednostki, która ma zostać utworzona. | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`              |                      | Świat, do którego należy spawner.               | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos`           |                      | Położenie bloku spawnera.                       | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## ZenMethods

```zenscript
Unieważnij updateSpawner(); // Aktualizuje spawner do spawnowania obiektu i odznaczania licznika spawnu.

unieważnia setDelayToMin(); // ustawia opóźnienie spawnera na minimalne opóźnienie następnego spawnu.
```