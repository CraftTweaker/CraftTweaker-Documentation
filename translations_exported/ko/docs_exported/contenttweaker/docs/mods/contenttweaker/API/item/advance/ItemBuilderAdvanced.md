# ItemBuilderAdvanced

A special builder that allows you create items with advanced functionality. This build doesn't provide extra methods. You should use advanced item bracket handler to get [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced) instance and set functions in CraftTweaker scripts later.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.advance.ItemBuilderAdvanced;
```


## Extending ItemTypeBuilder

ItemBuilderAdvanced extends [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder). That means all methods available in [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) are also available in ItemBuilderAdvanced

## Methods

:::group{name=build}

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

Return Type: void

```zenscript
// ItemBuilderAdvanced.build(resourceLocation as string) as void

new ItemBuilder().withType<ItemBuilderAdvanced>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | string | 해당 블록의 리소스 경로 |


:::


