# 实体

实体接口。用于获取和改变实体的数据。
实体是指一切可以在世界中自由移动的物体，比如玩家、怪物、掉落物等等。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.entity.IEntity;`

## 命令发送者对象的扩展
实体对象是 [命令发送者](/Vanilla/Commands/ICommandSender)的扩展。这说明适用于[命令发送者](/Vanilla/Commands/ICommandSender)的对象也适用于实体对象!


## ZenGetters

|        GetterName        |   GetterMethod    |         返回类型 (*有可能会为 null*)         |
| :----------------------: | :---------------: | :------------------------------------------: |
|           air            |     getAir()      |                     int                      |
|          alive           |     isAlive()     |                   boolean                    |
|   alwaysRenderNameTag    |                   |                   boolean                    |
|      armorInventory      |                   | List<[IItemStack](/Vanilla/Items/IItemStack) |
|         blockPos         |   getBlockPos()   |    [IBlockPos](/Vanilla/World/IBlockPos)     |
|  canBeAttackedWithItem   |                   |                   boolean                    |
|    canBeCollidedWith     |                   |                   boolean                    |
|    canPassengerSteer     |                   |                   boolean                    |
|     canRiderInteract     |                   |                   boolean                    |
|   controllingPassenger   |                   |                  *IEntity*                   |
|        customName        |  getCustomName()  |                    String                    |
|        definition        |                   |   *[IEntityDefinition](IEntityDefinition)*   |
|        dimension         |  getDimension()   |                     int                      |
| doesTriggerPressurePlate |                   |                   boolean                    |
|    equipmentAndArmor     |                   | List<[IItemStack](/Vanilla/Items/IItemStack) |
|        eyeHeight         |                   |                    float                     |
|      hasCustomName       |                   |                   boolean                    |
|       hasNoGravity       |                   |                   boolean                    |
|      heldEquipment       |                   | List<[IItemStack](/Vanilla/Items/IItemStack) |
|            id            |                   |                     int                      |
|       immuneToFire       | isImmuneToFire()  |                   boolean                    |
|      isBeingRidden       |                   |                   boolean                    |
|          isBoss          |                   |                   boolean                    |
|        isBurning         |                   |                   boolean                    |
|        isGlowing         |                   |                   boolean                    |
|   isImmuneToExplosions   |                   |                   boolean                    |
|         isInLava         |                   |                   boolean                    |
|   isInsideOpaqueBlock    |                   |                   boolean                    |
|       isInvisible        |                   |                   boolean                    |
|      isInvulnerable      |                   |                   boolean                    |
|        isInWater         |                   |                   boolean                    |
|     isOutsideBorder      |                   |                   boolean                    |
|       isOverWater        |                   |                   boolean                    |
|     isPushedByWater      |                   |                   boolean                    |
|         isRiding         |                   |                   boolean                    |
|         isSilent         |                   |                   boolean                    |
|        isSneaking        |                   |                   boolean                    |
|       isSprinting        |                   |                   boolean                    |
|    lowestRidingEntity    |                   |                  *IEntity*                   |
|      maxFallHeight       |                   |                     int                      |
|     maxInPortalTime      |                   |                     int                      |
|          parts           |                   |                  IEntity[]                   |
|        passengers        |  getPassengers()  |                List<IEntity\>                |
|   passengersRecursive    |                   |                List<IEntity\>                |
|     portalCooldowne      |                   |                     int                      |
|        position3f        |  getPosition3f()  |   [Position3f](/Vanilla/Utils/Position3f)    |
|       ridingEntity       | getRidingEntity() |                  *IEntity*                   |
|      shouldRiderSit      |                   |                   boolean                    |
|           tags           |                   |                List<string\>                 |
|           team           |                   |        *[ITeam](/Vanilla/Game/ITeam)*        |
|           wet            |      isWet()      |                   boolean                    |
|          world           |                   |       [IWorld](/Vanilla/World/IWorld)        |
|            x             |      getX()       |                    double                    |
|            y             |      getY()       |                    double                    |
|            z             |      getZ()       |                    double                    |
|         motionX          |                   |                    double                    |
|         motionY          |                   |                    double                    |
|         motionZ          |                   |                    double                    |
|           posX           |                   |                    double                    |
|           posY           |                   |                    double                    |
|           posZ           |                   |                    double                    |
|       rotationYaw        |                   |                    float                     |
|      rotationPitch       |                   |                    float                     |
|     lookingDirection     |                   |    [IVector3d](/Vanilla/World/IVector3d)     |


## ZenSetters

|     SetterName      |    SetterMethod     |               传入类型                |
| :-----------------: | :-----------------: | :-----------------------------------: |
|         air         |   setAir(seconds)   |                  int                  |
| alwaysRenderNameTag |                     |                boolean                |
|     customName      | setCustomName(name) |                String                 |
|      dimension      |  setDimension(id)   |                  int                  |
|        fire         |  setFire(seconds)   |                  int                  |
|    hasNoGravity     |                     |                boolean                |
|         id          |                     |                  int                  |
|      isGlowing      |                     |                boolean                |
|     isInvisible     |                     |                boolean                |
|   isOutsideBorder   |                     |                boolean                |
|      isSilent       |                     |                boolean                |
|     isSneaking      |                     |                boolean                |
|     isSprinting     |                     |                boolean                |
|      position       |  setPosition(pos)   | [IBlockPos](/Vanilla/World/IBlockPos) |
|     rotationYaw     |                     |                 float                 |
|    rotationPitch    |                     |                 float                 |
|       motionX       |                     |                double                 |
|       motionY       |                     |                double                 |
|       motionZ       |                     |                double                 |
|        posX         |                     |                double                 |
|        posY         |                     |                double                 |
|        posZ         |                     |                double                 |


## 更多 ZenMethods

- boolean attackEntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource) source, float amount);
- boolean canTrample([IWorld](/Vanilla/World/IWorld) world, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition) block, [IBlockPos](/Vanilla/World/IBlockPos) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial) material);
- double getDistanceSqToEntity(entity); → 返回指定实体的距离
- [IData](/Vanilla/Data/IData) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack) getPickedResult(); → Returns the [item](/Vanilla/Items/IItemStack) that picking up the entity would return (e.g. the item id the entity is an item or the minecart item)
- void addTag(String tag);
- void extinguish(); → 扑灭火中实体的身上的火
- void onEntityUpdate();
- void onKillCommand();
- void onUpdate();
- void removeTag(String tag);
- void setDead(); → 杀死实体
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
