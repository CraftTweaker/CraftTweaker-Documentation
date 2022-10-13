# ItemBuilderBasic

Базовый конструктор для элементов, также вызван [mods.contenttweaker.item.basic.ItemBuilderBasic#build](/mods/contenttweaker/API/item/basic/ItemBuilderBasic/#build). Does not have any special properties, it exists.

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.item.basic.ItemBuilderBasic
```

## Implemented Interfaces
ItemBuilderBasic implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Методы
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Параметр         | Тип    | Описание                             |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | String | The resource path to give this block |



