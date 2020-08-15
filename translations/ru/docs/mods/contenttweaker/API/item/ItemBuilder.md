# Строитель предметов

Строитель предметов в... строите предметы (сюрприз!) <p> Позволяет задать различные свойства, которые изменит поведение предмета и то, что он может сделать. Вы также можете использовать [mods.contenttweaker.itemItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) , чтобы переключиться на более специализированный конструктор, если таковой есть. <p> Чтобы сказать CoT, что вы хотите, чтобы предмет появился в игре, вам нужно вызвать [mods.contenttweaker.itemItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) и укажите правильный путь доступа к ресурсу.

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.item.Строитель предметов
```

## Реализованные интерфейсы
ItemBuilder реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Конструкторы
Создает новый ItemBuilder. Помните, что это _не_ создаст новый блок в игре, вам нужно вызвать [mods.contenttweaker.itemItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) для этого.
```zenscript
new mods.contenttweaker.itemItemBuilder();
```

## Методы
### сборка

Инструкция CoT на самом деле строить то, что этот строитель должен быть построен.

```zenscript
новый ItemBuilder().build(resourceLocation как строка);
новый ItemBuilder().build("my_awesome_block");
```

| Параметр               | Тип    | Описание                       |
| ---------------------- | ------ | ------------------------------ |
| местоположение ресурса | String | Путь к ресурсу для этого блока |


### с группой

Позволяет установить группу элементов, в которую будет отображаться этот элемент. По умолчанию, элементы появятся в `misc`

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.itemСтроитель предметов](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
новый ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| Параметр         | Тип                                                                               | Описание                                             |
| ---------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------- |
| группа элементов | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Группа элементов, в которую должен появиться элемент |


### максимальный урон

Позволяет установить максимальный урон для этого предмета.<br/> Предупреждайте, что это не может быть использовано в сочетании с [mods.contenttweaker.itemItemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.itemСтроитель предметов](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
новый ItemBuilder().withMaxDamage(maxDamage as int);
новый ItemBuilder().withMaxDamage(250);
```

| Параметр  | Тип | Описание                  |
| --------- | --- | ------------------------- |
| maxDamage | int | Максимальный размер стека |


### с MaxStackSize

Установка максимального размера стека для этого предмета.<br/> Предупреждайте, что это не может быть использовано в сочетании с [mods.contenttweaker.itemСтроитель предметов#с максимальным уроном](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.itemСтроитель предметов](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
новый ItemBuilder().withMaxStackSize(maxStackSize как int);
новый ItemBuilder().withMaxStackSize(16);
```

| Параметр     | Тип | Описание                  |
| ------------ | --- | ------------------------- |
| maxStackSize | int | Максимальный размер стека |


### без ремонта

Устанавливает, что этот предмет не может быть почищен злом Возврат: `Этот конструктор используется для цепочки методов`

Тип возврата: [mods.contenttweaker.itemСтроитель предметов](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
новый ItemBuilder().withNoRepair();
```

### разнородность

Позволяет установить редкость предмета

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.itemСтроитель предметов](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
новый ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| Параметр | Тип    | Описание |
| -------- | ------ | -------- |
| редкость | String | Редкость |


### с типом

Устанавливает конкретный тип этого элемента. После того, как этот метод называется контекст конструктора переключится на более предоставленный конструктор типов. Это означает, что методы этого конструктора больше не будут доступны, чтобы все параметры, которые вы хотите установить, были заданы перед вызовом этого метода. Возвращается: `Строитель с заданным элементом.`

Тип возврата: Т

```zenscript
новый ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool>();
```

| Имя параметра | Границы                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------- |
| Т             | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


