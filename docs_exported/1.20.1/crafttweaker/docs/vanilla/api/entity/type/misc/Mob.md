# Mob

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.misc.Mob;
```


## Extending LivingEntity

Mob extends [LivingEntity](/vanilla/api/entity/LivingEntity). That means all methods available in [LivingEntity](/vanilla/api/entity/LivingEntity) are also available in Mob

## Implemented Interfaces
Mob implements the following interfaces. That means all methods defined in these interfaces are also available in Mob

- [Targeting](/vanilla/api/entity/Targeting)

## Methods

:::group{name=ate}

```zenscript
// Mob.ate()

myMob.ate();
```

:::

:::group{name=canBeLeashed}

Return Type: boolean

```zenscript
Mob.canBeLeashed(leashHolder as Player) as boolean
```

|  Parameter  |                       Type                       |
|-------------|--------------------------------------------------|
| leashHolder | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=canFireProjectileWeapon}

Return Type: boolean

```zenscript
Mob.canFireProjectileWeapon(weapon as ProjectileWeaponItem) as boolean
```

| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| weapon    | [ProjectileWeaponItem](/vanilla/api/item/type/projectileweapon/ProjectileWeaponItem) |


:::

:::group{name=canHoldItem}

Return Type: boolean

```zenscript
Mob.canHoldItem(stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=canReplaceEqualItem}

Return Type: boolean

```zenscript
Mob.canReplaceEqualItem(toReplace as ItemStack, with as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| toReplace | [ItemStack](/vanilla/api/item/ItemStack) |
| with      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=checkSpawnObstruction}

Return Type: boolean

```zenscript
Mob.checkSpawnObstruction(level as LevelReader) as boolean
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [LevelReader](/vanilla/api/world/LevelReader) |


:::

:::group{name=checkSpawnRules}

Return Type: boolean

```zenscript
Mob.checkSpawnRules(level as LevelAccessor, spawnType as MobSpawnType) as boolean
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| level     | [LevelAccessor](/vanilla/api/world/LevelAccessor) |
| spawnType | [MobSpawnType](/vanilla/api/entity/MobSpawnType)  |


:::

:::group{name=clearRestriction}

```zenscript
// Mob.clearRestriction()

myMob.clearRestriction();
```

:::

:::group{name=dropLeash}

```zenscript
Mob.dropLeash(broadcastPacket as boolean, dropLeash as boolean)
```

|    Parameter    |  Type   |
|-----------------|---------|
| broadcastPacket | boolean |
| dropLeash       | boolean |


:::

:::group{name=equipItemIfPossible}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Mob.equipItemIfPossible(stack as ItemStack) as ItemStack
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=isMaxGroupSizeReached}

Return Type: boolean

```zenscript
Mob.isMaxGroupSizeReached(size as int) as boolean
```

| Parameter | Type |
|-----------|------|
| size      | int  |


:::

:::group{name=isWithinMeleeAttackRange}

Return Type: boolean

```zenscript
Mob.isWithinMeleeAttackRange(entity as LivingEntity) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=isWithinRestriction}

Return Type: boolean

```zenscript
Mob.isWithinRestriction(position as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=lookAt}

```zenscript
Mob.lookAt(entity as Entity, maxXRotIncrease as float, maxYRotIncrease as float)
```

|    Parameter    |                 Type                 |
|-----------------|--------------------------------------|
| entity          | [Entity](/vanilla/api/entity/Entity) |
| maxXRotIncrease | float                                |
| maxYRotIncrease | float                                |


:::

:::group{name=playAmbientSound}

```zenscript
// Mob.playAmbientSound()

myMob.playAmbientSound();
```

:::

:::group{name=restrictTo}

```zenscript
Mob.restrictTo(restrictCenter as BlockPos, restrictRadius as int)
```

|   Parameter    |                    Type                     |
|----------------|---------------------------------------------|
| restrictCenter | [BlockPos](/vanilla/api/util/math/BlockPos) |
| restrictRadius | int                                         |


:::

:::group{name=setDropChance}

```zenscript
Mob.setDropChance(slot as EquipmentSlot, chance as float)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |
| chance    | float                                                        |


:::

:::group{name=setGuaranteedDrop}

```zenscript
Mob.setGuaranteedDrop(slot as EquipmentSlot)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

:::group{name=setLeashedTo}

```zenscript
Mob.setLeashedTo(leashHolder as Entity, broadcastPacket as boolean)
```

|    Parameter    |                 Type                 |
|-----------------|--------------------------------------|
| leashHolder     | [Entity](/vanilla/api/entity/Entity) |
| broadcastPacket | boolean                              |


:::

:::group{name=setPersistenceRequired}

```zenscript
// Mob.setPersistenceRequired()

myMob.setPersistenceRequired();
```

:::

:::group{name=wantsToPickUp}

Return Type: boolean

```zenscript
Mob.wantsToPickUp(stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::


## Properties

|         Name          |                    Type                     | Has Getter | Has Setter |
|-----------------------|---------------------------------------------|------------|------------|
| aggressive            | [Mob](/vanilla/api/entity/type/misc/Mob)    | true       | true       |
| ambientSoundInterval  | int                                         | true       | false      |
| baby                  | [Mob](/vanilla/api/entity/type/misc/Mob)    | false      | true       |
| canPickUpLoot         | boolean                                     | true       | true       |
| getRestrictCenter     | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| getRestrictRadius     | float                                       | true       | false      |
| hasRestriction        | boolean                                     | true       | false      |
| isPersistenceRequired | boolean                                     | true       | false      |
| isWithinRestriction   | boolean                                     | true       | false      |
| leashed               | boolean                                     | true       | false      |
| leftHanded            | [Mob](/vanilla/api/entity/type/misc/Mob)    | true       | true       |
| maxHeadRotSpeed       | int                                         | true       | false      |
| maxHeadXRot           | int                                         | true       | false      |
| maxHeadYRot           | int                                         | true       | false      |
| maxSpawnClusterSize   | int                                         | true       | false      |
| noAi                  | [Mob](/vanilla/api/entity/type/misc/Mob)    | true       | true       |
| target                | [Mob](/vanilla/api/entity/type/misc/Mob)    | false      | true       |

