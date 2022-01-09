# IEntity

Entity Interface. Used to obtain and modify information entities' data.  
Entities are everything that is freely movable in the world such as players, monsters, items on the ground any many more.

## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntity;`

## Extending ICommandSender
IEntity extends [ICommandSender](/Vanilla/Commands/ICommandSender/). That means that all methods that are availabel to [ICommandSender](/Vanilla/Commands/ICommandSender/) Objects also are available to IEntity Objects!

<details><summary>Derived Methods</summary>
    <ul>    
        <li>entity.displayName</li>
        <li>entity.position</li>
        <li>entity.world</li>
        <li>entity.server</li>
            <li>entity.sendMessage(String text)</li>
    </ul>
</details>


## ZenGetters

| GetterName                     | GetterMethod             | Return Type (*can be null*)                               |
| ------------------------------ | ------------------------ | --------------------------------------------------------- |
| air                            | getAir()                 | int                                                       |
| alive                          | isAlive()                | 布尔值                                                       |
| alwaysRenderNameTag            |                          | 布尔值                                                       |
| armorInventory                 |                          | List<[IItemStack](/Vanilla/Items/IItemStack/)             |
| canBeAttackedWithItem #可以被物体攻击 |                          | 布尔值                                                       |
| canBeCollidedWith #具有碰撞箱       |                          | 布尔值                                                       |
| canPassengerSteer #可以乘坐        |                          | 布尔值                                                       |
| canRiderInteract #是否可以互动       |                          | 布尔值                                                       |
| controllingPassenger           |                          | *IEntity*                                                 |
| customName                     | getCustomName()          | string                                                    |
| definition                     |                          | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| dimension                      | getDimension()           | int                                                       |
| doesTriggerPressurePlate       |                          | 布尔值                                                       |
| equipmentAndArmor              |                          | List<[IItemStack](/Vanilla/Items/IItemStack/)             |
| eyeHeight                      |                          | 浮点数                                                       |
| hasCustomName                  |                          | 布尔值                                                       |
| hasNoGravity                   |                          | 布尔值                                                       |
| heldEquipment                  |                          | List<[IItemStack](/Vanilla/Items/IItemStack/)             |
| id                             |                          | int                                                       |
| immuneToFire #免疫火焰             | isImmuneToFire()         | 布尔值                                                       |
| isBeingRidden                  |                          | 布尔值                                                       |
| isBoss                         |                          | 布尔值                                                       |
| isBurning                      |                          | 布尔值                                                       |
| isGlowing                      |                          | 布尔值                                                       |
| isImmuneToExplosions           |                          | 布尔值                                                       |
| isInLava                       |                          | 布尔值                                                       |
| isInsideOpaqueBlock            |                          | 布尔值                                                       |
| isInvisible                    |                          | 布尔值                                                       |
| isInvulnerable                 |                          | 布尔值                                                       |
| isInWater                      |                          | 布尔值                                                       |
| isLightningbolt                |                          | 布尔值                                                       |
| isOutsideBorder                |                          | 布尔值                                                       |
| isOverWater                    |                          | 布尔值                                                       |
| isPushedByWater                |                          | 布尔值                                                       |
| isRiding                       |                          | 布尔值                                                       |
| isSilent                       |                          | 布尔值                                                       |
| isSneaking                     |                          | 布尔值                                                       |
| isSprinting                    |                          | 布尔值                                                       |
| lowestRidingEntity             |                          | *IEntity*                                                 |
| maxFallHeight                  |                          | int                                                       |
| maxInPortalTime                |                          | int                                                       |
| onGround                       | onGround()               | 布尔值                                                       |
| parts                          |                          | IEntity[]                                                 |
| passengers                     | getPassengers()          | List<IEntity\>                                           |
| passengersRecursive            |                          | List<IEntity\>                                           |
| portalCooldowne                |                          | int                                                       |
| position3f                     | getPosition3f()          | [Position3f](/Vanilla/Utils/Position3f/)                  |
| ridingEntity                   | getRidingEntity()        | *IEntity*                                                 |
| shouldRiderSit                 |                          | 布尔值                                                       |
| tags                           |                          | List<string\>                                            |
| team                           |                          | [ITeam](/Vanilla/Game/ITeam/)                             |
| wet                            | isWet()                  | 布尔值                                                       |
| world                          |                          | [IWorld](/Vanilla/World/IWorld/)                          |
| x                              | getX()                   | 双精度                                                       |
| y                              | getY()                   | 双精度                                                       |
| z                              | getZ()                   | 双精度                                                       |
| motionX                        |                          | 双精度                                                       |
| motionY                        |                          | 双精度                                                       |
| motionZ                        |                          | 双精度                                                       |
| posX                           |                          | 双精度                                                       |
| posY                           |                          | 双精度                                                       |
| posZ                           |                          | 双精度                                                       |
| rotationYaw                    |                          | 浮点数                                                       |
| rotationPitch                  |                          | 浮点数                                                       |
| lookingDirection               |                          | [IVector3d](/Vanilla/World/IVector3d/)                    |
| nbt                            | getNBT()                 | [IData #数据](/Vanilla/Data/IData/)                         |
| horizontalFacing               | gethorizontalFacing()    | [IFacing](/Vanilla/World/IFacing/)                        |
| updateBlocked                  | getUpdateBlocked()       | 布尔值                                                       |
| inPortal                       | getInPortal()            | 布尔值                                                       |
| portalCounter                  | getPortalCounter()       | int                                                       |
| lastPortalVec                  | getLastPortalVec()       | [IVector3d](/Vanilla/World/IVector3d/)                    |
| lastPortalPos                  | getLastPortalPos()       | [IBlockPos](/Vanilla/World/IBlockPos/)                    |
| lastPortalDirection            | getLastPortalDirection() | [IFacing](/Vanilla/World/IFacing/)                        |

## ZenSetters

| SetterName          | SetterMethod                      | 参数类型                                   |
| ------------------- | --------------------------------- | -------------------------------------- |
| air                 | setAir(seconds)                   | int                                    |
| alwaysRenderNameTag |                                   | 布尔值                                    |
| customName          | setCustomName(name)               | string                                 |
| dimension           | setDimension(id)                  | int                                    |
| fire                | setFire(seconds)                  | int                                    |
| hasNoGravity        |                                   | 布尔值                                    |
| id                  |                                   | int                                    |
| isGlowing           |                                   | 布尔值                                    |
| isInvisible         |                                   | 布尔值                                    |
| isOutsideBorder     |                                   | 布尔值                                    |
| isSilent            |                                   | 布尔值                                    |
| isSneaking          |                                   | 布尔值                                    |
| isSprinting         |                                   | 布尔值                                    |
| position            | setPosition(pos)                  | [IBlockPos](/Vanilla/World/IBlockPos/) |
| rotationYaw         |                                   | 浮点数                                    |
| rotationPitch       |                                   | 浮点数                                    |
| motionX             |                                   | 双精度                                    |
| motionY             |                                   | 双精度                                    |
| motionZ             |                                   | 双精度                                    |
| posX                |                                   | 双精度                                    |
| posY                |                                   | 双精度                                    |
| posZ                |                                   | 双精度                                    |
| nbt                 | setNBT(data)                      | [IData #数据](/Vanilla/Data/IData/)      |
| team                | setTeam(team)                     | [ITeam](/Vanilla/Game/ITeam/)          |
| updateBlocked       | setUpdateBlocked(value)           | 布尔值                                    |
| inPortal            | setInPortal(value)                | 布尔值                                    |
| portalCounter       | setPortalCounter(value)           | int                                    |
| lastPortalVec       | setLastPortalVec(vector)          | [IVector3d](/Vanilla/World/IVector3d/) |
| lastPortalPos       | setLastPortalPos(pos)             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| lastPortalDirection | setLastPortalDirection(direction) | [IFacing](/Vanilla/World/IFacing/)     |

## More ZenMethods

- boolean attackEntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource/) source, float amount);
- boolean canTrample([IWorld](/Vanilla/World/IWorld/) world, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) block, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- double getDistanceSqToEntity(entity); → Returns the distance to the given Entity
- [IItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); → Returns the [item](/Vanilla/Items/IItemStack/) that picking up the entity would return (e.g. the item id the entity is an item or the minecart item)
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
- void doWaterSplashEffect();
- boolean isEntityEqual(IEntity other);
- boolean isInvulnerableTo([IDamageSource](/Vanilla/Damage/IDamageSource/) source);
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
