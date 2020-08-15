# IMobSpawnerBaseLogic

Obiekt IMobSpawnerBaseLogic zawiera wszelkiego rodzaju informacje o tym, jak i gdzie coś pojawić.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters

| ZenGetter | ZenSetter            |                                       |
| --------- | -------------------- | ------------------------------------- |
| `nbtData` | `nbtData`            | [IData](/Vanilla/Data/IData/)         |
|           | `Definicja podmiotu` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `świat`   |                      | [IWorld](/Vanilla/World/IWorld)       |
| `bloki`   |                      | [IBlockPos](/Vanilla/World/IBlockPos) |

## Metody ZenMethods

```zenscript
void updateSpawner();

void setDelayToMin();
```