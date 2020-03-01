# IEntity

Интерфейс сущности. Used to obtain and modify information entities' data.  
Entities are everything that is freely movable in the world such as players, monsters, items on the ground any many more.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.entity.IEntity;`

## Наследование от ICommandSender

IEntity наследует от [ICommandSender](/Vanilla/Commands/ICommandSender/). That means that all methods that are availabel to [ICommandSender](/Vanilla/Commands/ICommandSender/) Objects also are available to IEntity Objects!

## Геттеры

| Геттер                   | Метод-геттер      | Возвращаемый тип (*может быть `null`*)                      |
| ------------------------ | ----------------- | ----------------------------------------------------------- |
| air                      | getAir()          | int                                                         |
| alive                    | isAlive()         | boolean                                                     |
| alwaysRenderNameTag      |                   | boolean                                                     |
| armorInventory           |                   | List<[IItemStack](/Vanilla/Items/IItemStack/)               |
| blockPos                 | getBlockPos()     | [IBlockPos](/Vanilla/World/IBlockPos/)                      |
| canBeAttackedWithItem    |                   | boolean                                                     |
| canBeCollidedWith        |                   | boolean                                                     |
| canPassengerSteer        |                   | boolean                                                     |
| canRiderInteract         |                   | boolean                                                     |
| controllingPassenger     |                   | *IEntity*                                                   |
| customName               | getCustomName()   | string                                                      |
| definition               |                   | *[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)* |
| dimension                | getDimension()    | int                                                         |
| doesTriggerPressurePlate |                   | boolean                                                     |
| equipmentAndArmor        |                   | List<[IItemStack](/Vanilla/Items/IItemStack/)               |
| eyeHeight                |                   | float                                                       |
| hasCustomName            |                   | boolean                                                     |
| hasNoGravity             |                   | boolean                                                     |
| heldEquipment            |                   | List<[IItemStack](/Vanilla/Items/IItemStack/)               |
| id                       |                   | int                                                         |
| immuneToFire             | isImmuneToFire()  | boolean                                                     |
| isBeingRidden            |                   | boolean                                                     |
| isBoss                   |                   | boolean                                                     |
| isBurning                |                   | boolean                                                     |
| isGlowing                |                   | boolean                                                     |
| isImmuneToExplosions     |                   | boolean                                                     |
| isInLava                 |                   | boolean                                                     |
| isInsideOpaqueBlock      |                   | boolean                                                     |
| isInvisible              |                   | boolean                                                     |
| isInvulnerable           |                   | boolean                                                     |
| isInWater                |                   | boolean                                                     |
| isOutsideBorder          |                   | boolean                                                     |
| isOverWater              |                   | boolean                                                     |
| isPushedByWater          |                   | boolean                                                     |
| isRiding                 |                   | boolean                                                     |
| isSilent                 |                   | boolean                                                     |
| isSneaking               |                   | boolean                                                     |
| isSprinting              |                   | boolean                                                     |
| lowestRidingEntity       |                   | *IEntity*                                                   |
| maxFallHeight            |                   | int                                                         |
| maxInPortalTime          |                   | int                                                         |
| parts                    |                   | IEntity[]                                                   |
| passengers               | getPassengers()   | List<IEntity\>                                             |
| passengersRecursive      |                   | List<IEntity\>                                             |
| portalCooldowne          |                   | int                                                         |
| position3f               | getPosition3f()   | [Position3f](/Vanilla/Utils/Position3f/)                    |
| ridingEntity             | getRidingEntity() | *IEntity*                                                   |
| shouldRiderSit           |                   | boolean                                                     |
| tags                     |                   | List<string\>                                              |
| team                     |                   | *[ITeam](/Vanilla/Game/ITeam/)*                             |
| wet                      | isWet()           | boolean                                                     |
| world                    |                   | [IWorld](/Vanilla/World/IWorld/)                            |
| x                        | getX()            | double                                                      |
| y                        | getY()            | double                                                      |
| z                        | getZ()            | double                                                      |
| motionX                  |                   | double                                                      |
| motionY                  |                   | double                                                      |
| motionZ                  |                   | double                                                      |
| posX                     |                   | double                                                      |
| posY                     |                   | double                                                      |
| posZ                     |                   | double                                                      |
| rotationYaw              |                   | float                                                       |
| rotationPitch            |                   | float                                                       |
| lookingDirection         |                   | [IVector3d](/Vanilla/World/IVector3d/)                      |

## Сеттеры

| Сеттер              | Метод-сеттер        | Тип параметра                          |
| ------------------- | ------------------- | -------------------------------------- |
| air                 | setAir(seconds)     | int                                    |
| alwaysRenderNameTag |                     | boolean                                |
| customName          | setCustomName(name) | string                                 |
| dimension           | setDimension(id)    | int                                    |
| fire                | setFire(seconds)    | int                                    |
| hasNoGravity        |                     | boolean                                |
| id                  |                     | int                                    |
| isGlowing           |                     | boolean                                |
| isInvisible         |                     | boolean                                |
| isOutsideBorder     |                     | boolean                                |
| isSilent            |                     | boolean                                |
| isSneaking          |                     | boolean                                |
| isSprinting         |                     | boolean                                |
| position            | setPosition(pos)    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| rotationYaw         |                     | float                                  |
| rotationPitch       |                     | float                                  |
| motionX             |                     | double                                 |
| motionY             |                     | double                                 |
| motionZ             |                     | double                                 |
| posX                |                     | double                                 |
| posY                |                     | double                                 |
| posZ                |                     | double                                 |

## Другие методы

- boolean attackEntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource/) source, float amount);
- boolean canTrample([IWorld](/Vanilla/World/IWorld/) world, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) block, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- double getDistanceSqToEntity(entity); → Returns the distance to the given Entity
- [IData](/Vanilla/Data/IData/) getNBT();
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
- boolean isEntityEqual(IEntity other);
- boolean isInvulnerableTo([IDamageSource](/Vanilla/Damage/IDamageSource/) source);
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
- void update([IData](/Vanilla/Data/IData/) data);