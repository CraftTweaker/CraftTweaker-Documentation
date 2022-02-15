# ItemBuilderBasic

The basic builder for items, also called by [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)#build.
 Does not have any special properties, it exists.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.basic.ItemBuilderBasic;
```


## Extending ItemTypeBuilder

ItemBuilderBasic extends [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder). That means all methods available in [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) are also available in ItemBuilderBasic

## Methods

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// ItemBuilderBasic.build(resourceLocation as string) as void

new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| resourceLocation | string | The resource path to give this block |


:::


