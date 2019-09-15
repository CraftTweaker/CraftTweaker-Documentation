# IEntityDrop

IEntityDrop представляет дроп [сущности](/Vanilla/Entities/IEntityDefinition/).

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.entity.IEntityDrop;`

## Геттеры

Вы можете получить эту информацию из него.

| Геттер     | Что он делает                                             | Возвращаемый тип                         | Использование     |
| ---------- | --------------------------------------------------------- | ---------------------------------------- | ----------------- |
| chance     | Возвращает шанс дропа.                                    | float                                    | `drop.chance`     |
| max        | Возвращает максимальное количество выброшенного предмета. | int                                      | `drop.max`        |
| min        | Returns the minimum Amount of the drop.                   | int                                      | `drop.min`        |
| playerOnly | Returns whether the drop is playerOnly.                   | boolean                                  | `drop.playerOnly` |
| range      | Returns the minimum to maximum Amount range of the drop.  | IntegerRange                             | `drop.range`      |
| stack      | Returns the dropped Item.                                 | [IItemStack](/Vanilla/Items/IItemStack/) | `drop.stack`      |