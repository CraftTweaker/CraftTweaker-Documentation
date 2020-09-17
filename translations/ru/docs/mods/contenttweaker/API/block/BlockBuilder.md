# BlockBuilder

Блокировщик используется... строить блоки (вы полностью не видели, что одно приходит, правда... верно?).<br> После создания вы можете установить различные свойства, которые будут описаны отдельными методами. <p> Вы также можете изменить тип блока, чтобы создать более специализированную форму блока (e. . Лестницы или блоки, которые могут быть повернуты одинаковым способом бревна. Чтобы сообщить CoT, что блок появится в игре, вам нужно вызвать [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) и указать правильный путь доступа к ресурсу.

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## Реализованные интерфейсы
BlockBuilder реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Конструкторы
Создает новый BlockBuilder. Помните, что это _не_ создаст новый блок в игре, вам нужно вызвать [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) для этого.
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Параметр | Тип                                                                                  | Описание                                | Необязательный | Значение по умолчанию        |
| -------- | ------------------------------------------------------------------------------------ | --------------------------------------- | -------------- | ---------------------------- |
| материал | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | Материал, который будет иметь этот блок | true           | `<blockmaterial:iron>` |



## Методы
### сборка

Инструкция CoT на самом деле строить то, что этот строитель должен быть построен.

```zenscript
myBlockBuilder.build(resourceLocation как строка);
myBlockBuilder.build("my_awesome_block");
```

| Параметр               | Тип    | Описание                       |
| ---------------------- | ------ | ------------------------------ |
| местоположение ресурса | String | Путь к ресурсу для этого блока |


### с жесткостью и сопротивлением

Устанавливает уровни твердости и сопротивления блока. В отличие от другого метода, этот параметр принимает только один параметр и будет использовать это значение для обоих свойств.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Параметр              | Тип   | Описание                                |
| --------------------- | ----- | --------------------------------------- |
| hardnessAndResistance | float | Значение для твердости и сопротивления. |



Устанавливает уровни твердости и сопротивления блока. В отличие от другого метода, этот метод позволяет задать каждому свойству одно отдельное значение.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessIn как плавущий, сопротивление как плавный);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Параметр      | Тип   | Описание                    |
| ------------- | ----- | --------------------------- |
| hardnessIn    | float | Значение для твердости      |
| сопротивление | float | Значение для сопротивления. |


### Уровень сбора урожая

Задает уровень добычи, необходимый для добычи этого блока

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(урожай уровень);
myBlockBuilder.withHarvestLevel(3);
```

| Параметр             | Тип | Описание                       |
| -------------------- | --- | ------------------------------ |
| Уровень сбора урожая | int | Необходим уровень сбора урожая |


### Урожай

Устанавливает инструмент, необходимый для сбора этого блока

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool как mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Параметр       | Тип                                                                             | Описание        |
| -------------- | ------------------------------------------------------------------------------- | --------------- |
| собрать урожай | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Тип инструмента |


### с группой

Устанавливает группу элементов, в которой будет отображаться этот блок

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(группа как mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Параметр | Тип                                                                               | Описание             |
| -------- | --------------------------------------------------------------------------------- | -------------------- |
| группа   | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Группа для установки |


### withLightЗначение

Устанавливает значение света блока.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn как int);
myBlockBuilder.withLightValue(15);
```

| Параметр              | Тип | Описание                 |
| --------------------- | --- | ------------------------ |
| значение lightValueIn | int | Установлен уровень света |


### withLootFrom

Инструкция CoT будет перекрывать таблицу добычи этого блока с одним из предоставленных блоков. В настоящее время это все еще создаст запись в таблице добычи, но игра будет проигнорирована.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(блокируется как rafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Параметр | Тип                                                           | Описание                                  |
| -------- | ------------------------------------------------------------- | ----------------------------------------- |
| blockIn  | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | Блок с таблицей добычи должен применяться |


### с MaxStackSize

Устанавливает максимальный размер стека, который этот блок может быть в вашем инвентаре. Будет 64, если не изменено.

 Возврат: `Этот строитель, используется для цепочки`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(размер int);
myBlockBuilder.withMaxStackSize(16);
```

| Параметр | Тип | Описание              |
| -------- | --- | --------------------- |
| size     | int | Размер для установки. |


### разнородность

Позволяет установить редкость этого блока.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(редкость как строка);
myBlockBuilder.withRarity("UNCOMMON");
```

| Параметр | Тип    | Описание |
| -------- | ------ | -------- |
| редкость | String | Редкость |


### сдвиг

Устанавливает скольжение.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn как плавный);
myBlockBuilder.withSlipperiness(0.5f);
```

| Параметр   | Тип   | Описание               |
| ---------- | ----- | ---------------------- |
| скольжение | float | Значение для установки |


### с типом

Устанавливает конкретный тип блока. После того, как этот метод называется контекст конструктора переключится на более предоставленный конструктор типов. Это означает, что методы этого конструктора больше не будут доступны, чтобы все параметры, которые вы хотите установить, были заданы перед вызовом этого метода.

 Возвращается: `Строитель с заданным блоком.`

Тип возврата: Т

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| Имя параметра | Границы                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------- |
| Т             | [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### без капли

Инструкция УТС о том, что этот блок не будет содержать никаких записей о добыче. В настоящее время это все еще создаст запись в таблице добычи, но игра будет проигнорирована.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutDrops();
```

### без блокировки движения

Инструкция CoT, что этот блок не будет блокировать движение.

 Возврат: `Этот строитель, используется для цепочки`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


