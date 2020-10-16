# IMobSpawnerBaseLogic

Объект IMobSpawnerBaseLogic содержит все виды информации о том, как и где создать что-то для мобов спавнов.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.tileentity.IMobSpawnerBaseLogic`

## Геттеры/сеттеры

| Геттер             | Сеттер             | Description                                 | Тип                                                       |
| ------------------ | ------------------ | ------------------------------------------- | --------------------------------------------------------- |
| `nbtData`          | `nbtData`          | NBT данные для спавна. (см. ниже)           | [IData](/Vanilla/Data/IData/)                             |
| `entityDefinition` | `entityDefinition` | Определение сущности, подлежащее появлению. | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`            |                    | Мир, к которому принадлежит спавн.          | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos`         |                    | Позиция блока спавна.                       | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## Методы ZenScript

```zenscript
unid updateSpawner(); // Обновление спавна сущности и деление таймера спавна.

void setDelayToMin(); // Устанавливает задержку генератора на минимальную задержку на следующий спавн.
```