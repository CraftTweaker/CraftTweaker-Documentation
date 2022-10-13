# BlockBuilderAdvanced

A special builder that allows you to create blocks with advanced functionality. This builder doesn't provide extra methods. You should use advanced block bracket handler to get a [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced) instance and set functions in CraftTweaker scripts later.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.advance.BlockBuilderAdvanced;
```


## Extending BlockTypeBuilder

BlockBuilderAdvanced extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderAdvanced

## Methods

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// BlockBuilderAdvanced.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderAdvanced>().build("my_awesome_block");
```

| Parameter        | Type   | Description                          |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | string | The resource path to give this block |


:::


