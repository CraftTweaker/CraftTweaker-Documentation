# ItemTypeBuilder

Обозначает специальный конструктор, который используется для построения специальных типов предметов. Используется в [mods.contenttweaker.item.ItemTypeBuilder#withType](/mods/contenttweaker/API/item/ItemTypeBuilder/#withtype)

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.item.ItemTypeBuilder
```

## Реализованные интерфейсы
ItemTypeBuilder реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Методы
### сборка

Инструкция CoT на самом деле строить то, что этот строитель должен быть построен.

```zenscript
новый ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation как строка);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Параметр               | Тип    | Описание                       |
| ---------------------- | ------ | ------------------------------ |
| местоположение ресурса | String | Путь к ресурсу для этого блока |



