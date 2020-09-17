# BlockBuilderBasic

Этот конструктор строит тип блоков, используемый по умолчанию в [mods.contenttweaker.block.basic.BlockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) Этот строитель не предлагает никаких специальных свойств для установки, вы можете только построить его.

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Реализованные интерфейсы
BlockBuilderBasic реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Методы
### сборка

Инструкция CoT на самом деле строить то, что этот строитель должен быть построен.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Параметр               | Тип    | Описание                       |
| ---------------------- | ------ | ------------------------------ |
| местоположение ресурса | String | Путь к ресурсу для этого блока |



