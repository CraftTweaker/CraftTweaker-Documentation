# ItemBuilderTool

Специальный строитель, который позволяет создавать предметы, которые можно использовать в качестве инструментов. Перед изменением этого строителя необходимо задать максимальный урон предмета. <p> Имеет специальные методы, позволяющие задать уровень добычи нескольких инструментов, а также урон от атаки.

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.item.tool.ItemBuilderTool
```

## Реализованные интерфейсы
ItemBuilderTool реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Методы
### сборка

Инструкция CoT на самом деле строить то, что этот строитель должен быть построен.

```zenscript
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Параметр               | Тип    | Описание                       |
| ---------------------- | ------ | ------------------------------ |
| местоположение ресурса | String | Путь к ресурсу для этого блока |


### с атачным уроном

Позволяет задать бонус к урону атаки, который вы получаете при удерживании этого предмета

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Параметр   | Тип   | Описание                     |
| ---------- | ----- | ---------------------------- |
| Урон атаки | float | Дополнительный урон от атаки |


### с скоростью атаки

Позволяет вам установить бонус скорости атаки, который вы получите, удерживая этот предмет.

 Возврат: `Этот конструктор используется для цепи методов.`

Тип возврата: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(скорость атаки дважды);
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Параметр       | Тип    | Описание       |
| -------------- | ------ | -------------- |
| скорость атаки | double | Скорость атаки |


### затратная атака при выпадении прочности

Позволяет задать количество урона, которое будет получено этим предметом при попадании в врага. По умолчанию это `0`

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Параметр                     | Тип | Описание                                  |
| ---------------------------- | --- | ----------------------------------------- |
| стоимость атаки на прочность | int | Очки урона за этот предмет будут получены |


### затратодобывающая мощность

Позволяет задать количество урона, которое будет получено этим предметом при добыче блоков. По умолчанию это `0`

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining как int);
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Параметр                 | Тип | Описание                                  |
| ------------------------ | --- | ----------------------------------------- |
| долговечность Комбинации | int | Очки урона за этот предмет будут получены |


### с типом инструментов

Позволяет добавить тип инструмента в этот инструмент. Вы можете указать тип, уровень добычи и, по желанию, скорость добычи при наступлении этого типа.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
новый ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel как int, miningSpeed as float);
new ItemBuilder(). ithMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Параметр        | Тип                                                                             | Описание                                                     | Необязательный | Значение по умолчанию |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------ | -------------- | --------------------- |
| тип инструмента | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Тип инструмента                                              | false          | `null`                |
| майнинг-уровень | int                                                                             | Уровень добычи для данного типа инструмента                  | false          | `null`                |
| скорость добычи | float                                                                           | Как быстро этот инструмент может добывать блоки данного типа | true           | `1.0`                 |



