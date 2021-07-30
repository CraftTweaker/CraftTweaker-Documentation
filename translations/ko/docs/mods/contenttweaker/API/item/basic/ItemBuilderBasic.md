# ItemBuilderBasic

The basic builder for items, also called by [mods.contenttweaker.item.basic.ItemBuilderBasic#build](/mods/contenttweaker/API/item/basic/ItemBuilderBasic/#build). Does not have any special properties, it exists.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.item.basic.ItemBuilderBasic
```

## Implemented Interfaces
ItemBuilderBasic implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Methods
### build

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

```zenscript
new ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | String | 해당 블록의 리소스 경로 |



