# IEntity

Интерфейс сущности. Используется для получения и изменения данных информационных объектов.  
Сущности - это все, что свободно перемещается в мире, например, игроки, монстры, вещи на земле еще много.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.entity.IEntity;`

## Наследование от ICommandSender

IEntity наследует от [ICommandSender](/Vanilla/Commands/ICommandSender/). Это означает, что все методы, которые доступны для [ICommandSender](/Vanilla/Commands/ICommandSender/) Объекты также доступны для IEntity!

<details><summary>Задуманные методы</summary> 

- сущность.displayName
- сущность.позиция
- entity.world
- entity.server
- entity.sendMessage(String текст)</details>

## Геттеры

| Геттер                            | Метод-геттер      | Возвращаемый тип (*может быть `null`*)                      |
| --------------------------------- | ----------------- | ----------------------------------------------------------- |
| air                               | getAir()          | int                                                         |
| alive                             | isAlive()         | boolean                                                     |
| alwaysRenderNameTag               |                   | boolean                                                     |
| armorInventory                    |                   | Список<[IItemStack](/Vanilla/Items/IItemStack/)             |
| Снято с кем-предмета              |                   | boolean                                                     |
| canBeCollidedС                    |                   | boolean                                                     |
| canPassengerSteer                 |                   | boolean                                                     |
| canRiderInteract                  |                   | boolean                                                     |
| controllingPassenger              |                   | *IEntity*                                                   |
| customName                        | getCustomName()   | string                                                      |
| definition                        |                   | *[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)* |
| измерение                         | getDimension()    | int                                                         |
| не триггергергерметичная пластина |                   | boolean                                                     |
| снаряжениеAndArmor                |                   | Список<[IItemStack](/Vanilla/Items/IItemStack/)             |
| высота глаз                       |                   | float                                                       |
| имеет Настраиваемое Имя           |                   | boolean                                                     |
| hasNoGravity                      |                   | boolean                                                     |
| аппаратура                        |                   | Список<[IItemStack](/Vanilla/Items/IItemStack/)             |
| id                                |                   | int                                                         |
| immuneToFire                      | isImmuneToFire()  | boolean                                                     |
| isBeingRidden                     |                   | boolean                                                     |
| isBoss                            |                   | boolean                                                     |
| зажигающий                        |                   | boolean                                                     |
| isGlowing                         |                   | boolean                                                     |
| isImmuneToExplosions              |                   | boolean                                                     |
| isInLava                          |                   | boolean                                                     |
| InsideOpaqueBlock                 |                   | boolean                                                     |
| isInvisible                       |                   | boolean                                                     |
| неуязвимый                        |                   | boolean                                                     |
| isInWater                         |                   | boolean                                                     |
| isOutsideBorder                   |                   | boolean                                                     |
| isOverWater                       |                   | boolean                                                     |
| isPushedByWater                   |                   | boolean                                                     |
| езда                              |                   | boolean                                                     |
| isSilent                          |                   | boolean                                                     |
| isSneaking                        |                   | boolean                                                     |
| isSprinting                       |                   | boolean                                                     |
| lowestRidingEntity                |                   | *IEntity*                                                   |
| maxFallвысота                     |                   | int                                                         |
| maxInPortalTime                   |                   | int                                                         |
| запчасти                          |                   | IEntity[]                                                   |
| пассажиров                        | getPassengers()   | List<IEntity\>                                             |
| passengersRecursive               |                   | List<IEntity\>                                             |
| portalCooldowne                   |                   | int                                                         |
| position3f                        | getPosition3f()   | [Позиция3f](/Vanilla/Utils/Position3f/)                     |
| ездовой объект                    | getRidingEntity() | *IEntity*                                                   |
| должно быть RiderSit              |                   | boolean                                                     |
| тэги                              |                   | List<string\>                                              |
| команда                           |                   | *[ITeam](/Vanilla/Game/ITeam/)*                             |
| влажный                           | isWet()           | boolean                                                     |
| world                             |                   | [IWorld](/Vanilla/World/IWorld/)                            |
| х                                 | getX()            | double                                                      |
| у                                 | getY()            | double                                                      |
| z                                 | getZ()            | double                                                      |
| motionX                           |                   | double                                                      |
| motionY                           |                   | double                                                      |
| motionZ                           |                   | double                                                      |
| posX                              |                   | double                                                      |
| posY                              |                   | double                                                      |
| posZ                              |                   | double                                                      |
| rotationYaw                       |                   | float                                                       |
| rotationPitch                     |                   | float                                                       |
| направление поиска                |                   | [IVector3d](/Vanilla/World/IVector3d/)                      |

## Сеттеры

| Сеттер              | Метод-сеттер       | Тип параметра                          |
| ------------------- | ------------------ | -------------------------------------- |
| air                 | setAir(секунды)    | int                                    |
| alwaysRenderNameTag |                    | boolean                                |
| customName          | setCustomName(имя) | string                                 |
| dimension           | setDimension(id)   | int                                    |
| fire                | setFire(секунды)   | int                                    |
| hasNoGravity        |                    | boolean                                |
| id                  |                    | int                                    |
| isGlowing           |                    | boolean                                |
| isInvisible         |                    | boolean                                |
| isOutsideBorder     |                    | boolean                                |
| isSilent            |                    | boolean                                |
| isSneaking          |                    | boolean                                |
| isSprinting         |                    | boolean                                |
| position            | setPosition(pos)   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| rotationYaw         |                    | float                                  |
| rotationPitch       |                    | float                                  |
| motionX             |                    | double                                 |
| motionY             |                    | double                                 |
| motionZ             |                    | double                                 |
| posX                |                    | double                                 |
| posY                |                    | double                                 |
| posZ                |                    | double                                 |

## Другие методы

- boolean атакующий EntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource/) , количество float);
- boolean canTrample([IWorld](/Vanilla/World/IWorld/) мир, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) блок, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- двойное значение getDistanceSqToEntity(сущность); → Возвращает расстояние до данного объекта
- [IData](/Vanilla/Data/IData/) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); → Возвращает [элемент](/Vanilla/Items/IItemStack/) , который вернется (e. . предмет id которого является предмет или предмет для добычи)
- void addTag(tring tag);
- void restinguish(); → Исчезает сущность, если при огне
- void onEntityUpdate();
- void onKillCommand();
- void onUpdate();
- void removeTag(tring tag);
- void setDead(); → Убивает сущность
- void spawnRunningParticles();
- void removePassengers();
- void dismountRidingEntity();
- boolean isOnSameTeam(IEntity other);
- void setInWeb();
- boolean isEntityEqual(IEntity other);
- boolean isInvulnerableTo([IDamageSource](/Vanilla/Damage/IDamageSource/) источник);
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
- void update([IData](/Vanilla/Data/IData/) данные);
- boolean onGround(); → Возвращает истину, если сущность находится на земле, и если она находится в воздухе