# ItemTypeBuilder

Denotes a special builder that is used for builing special item types. Used in [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)#withType

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.ItemTypeBuilder;
```


## Implemented Interfaces
ItemTypeBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in ItemTypeBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Methods

:::group{name=build}

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

Return Type: void

```zenscript
// ItemTypeBuilder.build(resourceLocation as string) as void

new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | string | 해당 블록의 리소스 경로 |


:::


