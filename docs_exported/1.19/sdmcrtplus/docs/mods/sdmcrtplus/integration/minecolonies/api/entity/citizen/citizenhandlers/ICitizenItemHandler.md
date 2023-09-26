# ICitizenItemHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenItemHandler;
```


## Methods

:::group{name=applyMending}

Return Type: double

```zenscript
ICitizenItemHandler.applyMending(var1 as double) as double
```

| Parameter |  Type  |
|-----------|--------|
| var1      | double |


:::

:::group{name=breakBlockWithToolInHand}

```zenscript
ICitizenItemHandler.breakBlockWithToolInHand(var1 as BlockPos?)
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos)? |


:::

:::group{name=damageItemInHand}

```zenscript
ICitizenItemHandler.damageItemInHand(var1 as InteractionHand, var2 as int)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| var1      | [InteractionHand](/vanilla/api/util/InteractionHand) |
| var2      | int                                                  |


:::

:::group{name=entityDropItem}

Return Type: [ItemEntity](/vanilla/api/entity/type/item/ItemEntity)

```zenscript
ICitizenItemHandler.entityDropItem(var1 as ItemStack) as ItemEntity
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=hitBlockWithToolInHand}

```zenscript
ICitizenItemHandler.hitBlockWithToolInHand(var1 as BlockPos?)
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos)? |


:::

:::group{name=hitBlockWithToolInHand}

```zenscript
ICitizenItemHandler.hitBlockWithToolInHand(var1 as BlockPos?, var2 as boolean)
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos)? |
| var2      | boolean                                      |


:::

:::group{name=pickupItems}

```zenscript
// ICitizenItemHandler.pickupItems()

myICitizenItemHandler.pickupItems();
```

:::

:::group{name=removeHeldItem}

```zenscript
// ICitizenItemHandler.removeHeldItem()

myICitizenItemHandler.removeHeldItem();
```

:::

:::group{name=setHeldItem}

```zenscript
ICitizenItemHandler.setHeldItem(var1 as InteractionHand, var2 as int)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| var1      | [InteractionHand](/vanilla/api/util/InteractionHand) |
| var2      | int                                                  |


:::

:::group{name=setMainHeldItem}

```zenscript
ICitizenItemHandler.setMainHeldItem(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=tryPickupItemEntity}

```zenscript
ICitizenItemHandler.tryPickupItemEntity(var1 as ItemEntity)
```

| Parameter |                          Type                          |
|-----------|--------------------------------------------------------|
| var1      | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity) |


:::

:::group{name=updateArmorDamage}

```zenscript
ICitizenItemHandler.updateArmorDamage(var1 as double)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | double |


:::


