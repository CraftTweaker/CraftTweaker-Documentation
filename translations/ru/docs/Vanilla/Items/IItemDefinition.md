# Определение IItemm

Объект IItemDefinition является прямой ссылкой на один из пунктов.  
Он отличается от [IItemStack](/Vanilla/Items/IItemStack/) , поскольку это относится только к элементу, не содержит метаинформации или NBT-значений!

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.item.IItemDefinition;`

## Как получить один

Самый простой путь - это [IItemStack](/Vanilla/Items/IItemStack/), но вы также можете получить список всех зарегистрированных IItemDefinitions в игре и сделать что-то с этим.

```zenscript
//IItemStack Zengetter "definition" -> single IItemDefinition
val itemDefinition = <minecraft:stone>.definition;

//IGame zengetter "items" -> LIST!
val itemDefinitionList = игровые элементы;
```

## Что делать с ним

### ZenGetters и безпараметрические методы ZenMethods

| Геттер                 | Что он делает                                                                                              | Возвращаемый тип                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| id                     | Возвращает ID элемента                                                                                     | string                                                           |
| name                   | Возвращает имя нелокализованного элемента                                                                  | string                                                           |
| ores                   | Возвращает все руды содержащие этот элемент. Также может содержать рудные записи, относящиеся к подпункту. | `Список<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)>` |
| владелец               | Возвращает имя мода, к которому принадлежит этот элемент.                                                  | string                                                           |
| экземпляр по умолчанию |                                                                                                            | [IItemStack](/Vanilla/Items/IItemStack/)                         |
| creativeTab            |                                                                                                            | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/)              |
| креативные вкладки     |                                                                                                            | [ICreativeTab[]](/Vanilla/CreativeTabs/ICreativeTab/)            |
| canItemEditБлоки       |                                                                                                            | bool                                                             |
| itemEnchantability     |                                                                                                            | int                                                              |
| subItems               |                                                                                                            | List<[IItemStack](/Vanilla/Items/IItemStack/)\>                 |

### ZenSetters и другие методы пустоты

| Способ ZenSetter/ZenSetd               | Тип параметра                                       |
| -------------------------------------- | --------------------------------------------------- |
| creativeTab                            | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| setNoRepair()                          | нет                                                 |
| setContainerItem(IItemDefinition item) | Определение IItemm                                  |

### ZenMethods

- `def.makeStack(meta);` Создает [IItemStack](/Vanilla/Items/IItemStack/) с данными метаданными. Метаданные являются подсказкой и OPTIONAL.
- `def.setHarvestLevel(String тип, int уровень);` Изменяет уровень сбора урожая на соответствующий тип и уровень
- `def.getSubItems(creativeTab);` Возвращает список <[IItemStack](/Vanilla/Items/IItemStack/)\> со всеми подпунктами для данного [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/).
- `def.getItemBurntime(item);` Возвращает подсказку, представляющую либо -1 (применится ванильная логика), 0 (Не плавить) или сгоревшие предметы