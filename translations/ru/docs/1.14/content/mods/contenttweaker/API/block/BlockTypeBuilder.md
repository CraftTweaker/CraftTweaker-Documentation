# BlockTypeBuilder

Denotes a special builder that is used for building special block types. Используется в [mods.contenttweaker.block.BlockTypeBuilder#withType](/mods/contenttweaker/API/block/BlockTypeBuilder/#withtype)

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.block.BlockTypeBuilder
```

## Implemented Interfaces
BlockTypeBuilder implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Методы
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<BlockBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderBasic>().build("my_awesome_block");
```

| Параметр         | Тип    | Описание                             |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | String | The resource path to give this block |



