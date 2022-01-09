# IEntityDrop

IEntityDrop представляет дроп [сущности](/Vanilla/Entities/IEntityDefinition/).

## Импорт пакета
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityDrop;`

## ZenGetters

Вы можете получить эту информацию из него.

| ZenGetter  | What does it do                                                                     | Return type                              | Usage             |
| ---------- | ----------------------------------------------------------------------------------- | ---------------------------------------- | ----------------- |
| chance     | Возвращает шанс дропа.                                                              | float                                    | `drop.chance`     |
| max        | Возвращает максимальное количество выброшенного предмета.                           | int                                      | `drop.max`        |
| min        | Возвращает минимальное количество выброшенного предмета.                            | int                                      | `drop.min`        |
| playerOnly | Returns whether the drop is playerOnly.                                             | boolean                                  | `drop.playerOnly` |
| range      | Возвращает промежуток от минимального до максимального числа выброшенного предмета. | IntegerRange                             | `drop.range`      |
| stack      | Возвращает выброшенный предмет.                                                     | [IItemStack](/Vanilla/Items/IItemStack/) | `drop.stack`      |