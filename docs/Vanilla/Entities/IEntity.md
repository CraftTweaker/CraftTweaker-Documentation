# 实体

实体接口。用于获取和改变实体的数据。
实体是指一切可以在世界中自由移动的物体，比如玩家、怪物、掉落物等等。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.entity.IEntity;`

## Extending ICommandSender
实体对象是 [命令发送者](/Vanilla/Commands/ICommandSender)的扩展。这说明适用于[命令发送者](/Vanilla/Commands/ICommandSender)的对象也适用于实体对象!


## ZenGetters

| GetterName                  | GetterMethod        | 返回类型                                      |
|-----------------------------|---------------------|----------------------------------------------|
| air                         | getAir()            | 整数                                          |
| alive                       | isAlive()           | 布尔值                                        |
| alwaysRenderNameTag         |                     | 布尔值                                        |
| armorInventory              |                     | List<[物品堆](/Vanilla/Items/IItemStack)      |
| blockPos                    | getBlockPos()       | [方块位置](/Vanilla/World/IBlockPos)          |
| canBeAttackedWithItem       |                     | 布尔值                                        |
| canBeCollidedWith           |                     | 布尔值                                        |
| canPassengerSteer           |                     | 布尔值                                        |
| canRiderInteract            |                     | 布尔值                                        |
| controllingPassenger        |                     | 实体对象                                      |
| customName                  | getCustomName()     | 字符串                                        |
| dimension                   | getDimension()      | 整数                                          |
| doesTriggerPressurePlate    |                     | 布尔值                                        |
| equipmentAndArmor           |                     | List<[物品堆](/Vanilla/Items/IItemStack)      |
| eyeHeight                   |                     | 浮点数                                        |
| hasCustomName               |                     | 布尔值                                        |
| hasNoGravity                |                     | 布尔值                                        |
| heldEquipment               |                     | List<[物品堆](/Vanilla/Items/IItemStack)      |
| id                          |                     | 整数                                          |
| immuneToFire                | isImmuneToFire()    | 布尔值                                        |
| isBeingRidden               |                     | 布尔值                                        |
| isBoss                      |                     | 布尔值                                        |
| isBurning                   |                     | 布尔值                                        |
| isGlowing                   |                     | 布尔值                                        |
| isImmuneToExplosions        |                     | 布尔值                                        |
| isInLava                    |                     | 布尔值                                        |
| isInsideOpaqueBlock         |                     | 布尔值                                        |
| isInvisible                 |                     | 布尔值                                        |
| isInvulnerable              |                     | 布尔值                                        |
| isInWater                   |                     | 布尔值                                        |
| isOutsideBorder             |                     | 布尔值                                        |
| isOverWater                 |                     | 布尔值                                        |
| isPushedByWater             |                     | 布尔值                                        |
| isRiding                    |                     | 布尔值                                        |
| isSilent                    |                     | 布尔值                                        |
| isSneaking                  |                     | 布尔值                                        |
| isSprinting                 |                     | 布尔值                                        |
| lowestRidingEntity          |                     | 实体对象                                      |
| maxFallHeight               |                     | 整数                                          |
| maxInPortalTime             |                     | 整数                                          |
| parts                       |                     | 实体对象[]                                    |
| passengers                  | getPassengers()     | List<实体对象\>                               |
| passengersRecursive         |                     | List<实体对象\>                               |
| portalCooldowne             |                     | 整数                                          |
| position3f                  | getPosition3f()     | [浮点型位置](/Vanilla/Utils/Position3f)       |
| ridingEntity                | getRidingEntity()   | 实体对象                                      |
| shouldRiderSit              |                     | 布尔值                                        |
| tags                        |                     | List<字符串\>                                 |
| wet                         | isWet()             | 布尔值                                        |
| world                       |                     | [世界](/Vanilla/World/IWorld)                 |
| x                           | getX()              | 双精度型                                      |
| y                           | getY()              | 双精度型                                      |
| z                           | getZ()              | 双精度型                                      |


## ZenSetters

| SetterName                  | SetterMethod        | 传入类型                                      |
|-----------------------------|---------------------|----------------------------------------------|
| air                         | setAir(seconds)     | 整数                                         |
| alwaysRenderNameTag         |                     | 布尔值                                       |
| customName                  | setCustomName(name) | 字符串                                       |
| dimension                   | setDimension(id)    | 整数                                         |
| fire                        | setFire(seconds)    | 整数                                         |
| hasNoGravity                |                     | 布尔值                                       |
| id                          |                     | 整数                                         |
| isGlowing                   |                     | 布尔值                                       |
| isInvisible                 |                     | 布尔值                                       |
| isOutsideBorder             |                     | 布尔值                                       |
| isSilent                    |                     | 布尔值                                       |
| isSneaking                  |                     | 布尔值                                       |
| isSprinting                 |                     | 布尔值                                       |
| position                    | setPosition(pos)    | [方块位置](/Vanilla/World/IBlockPos)         |


## More ZenMethods

- boolean attackEntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource) source, float amount);
- boolean canTrample([IWorld](/Vanilla/World/IWorld) world, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition) block, [IBlockPos](/Vanilla/World/IBlockPos) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial) material);
- double getDistanceSqToEntity(entity); → Returns the distance to the given Entity
- [IData](/Vanilla/Data/IData) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack) getPickedResult(); → Returns the [item](/Vanilla/Items/IItemStack) that picking up the entity would return (e.g. the item id the entity is an item or the minecart item)
- void addTag(String tag);
- void extinguish(); → Extinguishes the entity, if on fire
- void onEntityUpdate();
- void onKillCommand();
- void onUpdate();
- void removeTag(String tag);
- void setDead(); → Kills the entity
- void spawnRunningParticles();
- void removePassengers();
- void dismountRidingEntity();
- boolean isOnSameTeam(IEntity other);
- void setInWeb();
- boolean isEntityEqual(IEntity other);
- boolean isInvulnerableTo([IDamageSource](/Vanilla/Damage/IDamageSource) source);
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- isRidingSameEntity(IEntity other);
