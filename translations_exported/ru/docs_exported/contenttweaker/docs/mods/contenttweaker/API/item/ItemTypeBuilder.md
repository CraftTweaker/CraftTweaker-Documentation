# ItemTypeBuilder

Denotes a special builder that is used for builing special item types. Used in [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)#withType

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.ItemTypeBuilder;
```


## Implemented Interfaces
ItemTypeBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in ItemTypeBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Methods

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// ItemTypeBuilder.build(resourceLocation as string) as void

new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Параметр         | Тип    | Description                          |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | string | The resource path to give this block |


:::


