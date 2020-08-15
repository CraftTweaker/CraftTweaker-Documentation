# IEntity

实体接口。 用于获取和修改信息实体的数据。  
实体是世界上一切可以自由移动的东西，如玩家、怪物和地面上的物品。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaker.entity. Ientity;`

## 扩展 ICommander

IEntity extension [ICommander Sender](/Vanilla/Commands/ICommandSender/). 这意味着 [ICommandSender](/Vanilla/Commands/ICommandSender/) 对象的所有可用方法也都可供IEntity Objects使用！

<details><summary>派生方法</summary> 

- 显示名称
- 位置
- entity.世界
- entity.服务器
- entity.sendMessage(文本)</details>

## ZenGetters

| 获取名称                           | 获取方法              | 返回类型 (*可以为空*)                                       |
| ------------------------------ | ----------------- | --------------------------------------------------- |
| 空格                             | getAir()          | 整数                                                  |
| alive                          | isAlive()         | boolean                                             |
| alwaysRenderNameTag            |                   | boolean                                             |
| 防弹背包                           |                   | 列表<[IItemStack](/Vanilla/Items/IItemStack/)         |
| canBeAttackedWithItem #可以被物体攻击 |                   | boolean                                             |
| canBeCollidedWith #具有碰撞箱       |                   | boolean                                             |
| canPassengerSteer #可以乘坐        |                   | boolean                                             |
| canRiderInteract #是否可以互动       |                   | boolean                                             |
| controllingPassenger           |                   | *IEntity*                                           |
| 自定义名称                          | getCustomName()   | 字符串                                                 |
| definition                     |                   | *[IEntity定义](/Vanilla/Entities/IEntityDefinition/)* |
| 尺寸                             | getDimension()    | 整数                                                  |
| 不触发PressurePlate               |                   | boolean                                             |
| 装备AndArmor                     |                   | 列表<[IItemStack](/Vanilla/Items/IItemStack/)         |
| 眼睛高度                           |                   | 浮点数                                                 |
| hasCustom名称                    |                   | boolean                                             |
| 急性重力                           |                   | boolean                                             |
| 直升机装备                          |                   | 列表<[IItemStack](/Vanilla/Items/IItemStack/)         |
| id                             |                   | 整数                                                  |
| immuneToFire #免疫火焰             | isImmuneToFire()  | boolean                                             |
| isBeingRidden                  |                   | boolean                                             |
| isBoss                         |                   | boolean                                             |
| isBurning                      |                   | boolean                                             |
| isGlowing                      |                   | boolean                                             |
| isImmuneToExplosions           |                   | boolean                                             |
| isInLava                       |                   | boolean                                             |
| isInsideOpaqueBlock            |                   | boolean                                             |
| 不可见                            |                   | boolean                                             |
| isInvulnerable                 |                   | boolean                                             |
| isInWater                      |                   | boolean                                             |
| 外边框                            |                   | boolean                                             |
| 水量过载                           |                   | boolean                                             |
| isPushedByWater                |                   | boolean                                             |
| isRiding                       |                   | boolean                                             |
| isSilent                       |                   | boolean                                             |
| isSneaking                     |                   | boolean                                             |
| isSprinting                    |                   | boolean                                             |
| lowestRidingEntity             |                   | *IEntity*                                           |
| 最大降落高度                         |                   | 整数                                                  |
| 最大InPortalTime                 |                   | 整数                                                  |
| 部分                             |                   | IEntity[……]                                         |
| 旅客人数                           | getPassengers()   | 列表<IEntity\>                                       |
| passengersRecursive            |                   | 列表<IEntity\>                                       |
| portalCooldowne                |                   | 整数                                                  |
| 位置3f                           | getPosition3f()   | [位置3f](/Vanilla/Utils/Position3f/)                  |
| 漂亮实体                           | getRidingEntity() | *IEntity*                                           |
| 肩膀胱Sit                         |                   | boolean                                             |
| 标签                             |                   | 列表<string\>                                        |
| 团队                             |                   | *[ITeam](/Vanilla/Game/ITeam/)*                     |
| 湿度                             | isWet()           | boolean                                             |
| 世界                             |                   | [IWorld](/Vanilla/World/IWorld/)                    |
| x                              | getX()            | 双精度                                                 |
| 年                              | getY()            | 双精度                                                 |
| z                              | getZ()            | 双精度                                                 |
| 移动X                            |                   | 双精度                                                 |
| 移动Y                            |                   | 双精度                                                 |
| motionZ                        |                   | 双精度                                                 |
| posX                           |                   | 双精度                                                 |
| posY                           |                   | 双精度                                                 |
| posZ                           |                   | 双精度                                                 |
| 旋转Yaw                          |                   | 浮点数                                                 |
| 旋转音调                           |                   | 浮点数                                                 |
| 查找方向                           |                   | [IVector3d](/Vanilla/World/IVector3d/)              |

## ZenSetter

| 字幕名称                | 彩色方法              | 参数类型                                   |
| ------------------- | ----------------- | -------------------------------------- |
| 空格                  | setAir(秒)         | 整数                                     |
| alwaysRenderNameTag |                   | boolean                                |
| 自定义名称               | 设置 CustomName(名称) | 字符串                                    |
| 尺寸                  | 尺寸(id)            | 整数                                     |
| 开火的                 | setFire(秒)        | 整数                                     |
| 急性重力                |                   | boolean                                |
| id                  |                   | 整数                                     |
| isGlowing           |                   | boolean                                |
| 不可见                 |                   | boolean                                |
| 外边框                 |                   | boolean                                |
| isSilent            |                   | boolean                                |
| isSneaking          |                   | boolean                                |
| isSprinting         |                   | boolean                                |
| 位置                  | 设置位置(姿势)          | [IBlockPos](/Vanilla/World/IBlockPos/) |
| 旋转Yaw               |                   | 浮点数                                    |
| 旋转音调                |                   | 浮点数                                    |
| 移动X                 |                   | 双精度                                    |
| 移动Y                 |                   | 双精度                                    |
| motionZ             |                   | 双精度                                    |
| posX                |                   | 双精度                                    |
| posY                |                   | 双精度                                    |
| posZ                |                   | 双精度                                    |

## 更多ZenMethods

- 布尔型攻击实体([IDamageSource](/Vanilla/Damage/IDamageSource/) 源，浮点数)；
- 布尔can Trample([IWorld](/Vanilla/World/IWorld/) World, [IBlockDefine](/Vanilla/Blocks/IBlockDefinition/) block, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- 双倍getDistanceSqToEntity(实体); → 返回给定实体的距离
- [IData](/Vanilla/Data/IData/) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); -> 返回 [项](/Vanilla/Items/IItemStack/) 从该实体中获取(e)。 .该实体是一个物品或矿工物品的 id
- 无效添加标签(标签)；
- 无效灭火(); → 如果发生火灾，将实体灭绝。
- 无效的EntityUpdate();
- void onKillCommand();
- 无效更新();
- 无效移除标签(标签)；
- 无效的 setDead(); → 击杀实体
- 无效的 spawnRunningParticles();
- 无效移动旅客();
- 无效卸载RidingEntity();
- boolean isOnSameTeam(IEntity other);
- void setInWeb();
- boolean isEntityEqual(IEntity other);
- 布尔无法易受伤害的To([IDamageSource](/Vanilla/Damage/IDamageSource/) 来源);
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(双块ReachDistance, float partialTicks, @Opbolian stopOnLiquid, @Opbolian ignoreBlockWoutBoundingBox, @Optional(valueBoolia = true) 布尔返回 LastUncollidableBlock;
- 无效更新([IData](/Vanilla/Data/IData/) 数据);
- 布尔onGround(); -> 如果实体在地面上返回真值, 空时返回 false