# BucketPickup

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.block.BucketPickup;
```


## Methods

:::group{name=pickupBlock}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
BucketPickup.pickupBlock(levelAccessor as invalid, pos as BlockPos, blockState as BlockState) as ItemStack
```

|   Parameter   |                    Type                     |
|---------------|---------------------------------------------|
| levelAccessor | **invalid**                                 |
| pos           | [BlockPos](/vanilla/api/util/math/BlockPos) |
| blockState    | [BlockState](/vanilla/api/block/BlockState) |


:::


