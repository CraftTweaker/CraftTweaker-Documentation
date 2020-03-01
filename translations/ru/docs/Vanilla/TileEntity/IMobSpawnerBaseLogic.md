# IMobSpawnerBaseLogic

Объект IMobSpawnerBaseLogic содержит всю информацию о том, как и где призывать что-нибудь.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.tileentity.IMobSpawnerBaseLogic`

## Геттеры

| Геттер     | Сеттер             |                                       |
| ---------- | ------------------ | ------------------------------------- |
| `nbtData`  | `nbtData`          | [IData](/Vanilla/Data/IData/)         |
|            | `entityDefinition` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `world`    |                    | [IWorld](/Vanilla/World/IWorld)       |
| `blockPos` |                    | [IBlockPos](/Vanilla/World/IBlockPos) |

## Методы ZenScript

```zenscript
void updateSpawner();

void setDelayToMin();
```