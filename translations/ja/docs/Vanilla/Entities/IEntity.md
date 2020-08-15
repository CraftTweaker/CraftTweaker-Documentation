# IEntity

エンティティインターフェース。 情報エンティティのデータの取得と変更に使用されます。  
エンティティは、プレイヤー、モンスター、地面にあるアイテムなど、世界中で自由に動かせるすべてのものです。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntity;`

## 拡張する ICommandSender

IEntity extends [ICommandSender](/Vanilla/Commands/ICommandSender/). つまり、 [ICommandSender](/Vanilla/Commands/ICommandSender/) オブジェクトが利用可能なすべてのメソッドが IEntity オブジェクトにも利用可能であるということです。

<details><summary>派生メソッド</summary> 

- entity.displayName
- entity.position
- entity.world
- entity.server
- entity.sendMessage(String text)</details>

## ZenGetters

| GetterName               | GetterMethod      | 戻り値の型（*は null* にできます）                                       |
| ------------------------ | ----------------- | ----------------------------------------------------------- |
| 空気                       | getAir()          | int型                                                        |
| alive                    | isAlive()         | boolean型                                                    |
| alwaysRenderNameTag      |                   | boolean型                                                    |
| アーマーインベントリformat@@0      |                   | List<[IItemStack](/Vanilla/Items/IItemStack/)               |
| canBeAttackedWithItem    |                   | boolean型                                                    |
| canBeCollidedWith        |                   | boolean型                                                    |
| canPassengerSteer        |                   | boolean型                                                    |
| canRiderInteract         |                   | boolean型                                                    |
| controllingPassenger     |                   | *IEntity*                                                   |
| customName               | getCustomName()   | 文字列型                                                        |
| 定義                       |                   | *[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)* |
| 寸法                       | getDimension()    | int                                                         |
| doesTriggerPressurePlate |                   | boolean型                                                    |
| equipmentAndArmor        |                   | List<[IItemStack](/Vanilla/Items/IItemStack/)               |
| eyeHeight                |                   | float型                                                      |
| hasCustomName            |                   | boolean型                                                    |
| hasNoGravity             |                   | boolean型                                                    |
| heldEquipment            |                   | List<[IItemStack](/Vanilla/Items/IItemStack/)               |
| id                       |                   | int型                                                        |
| immuneToFire             | isImmuneToFire()  | boolean型                                                    |
| isBeingRidden            |                   | boolean型                                                    |
| isBoss                   |                   | boolean型                                                    |
| isBurning                |                   | boolean型                                                    |
| isGlowing                |                   | boolean型                                                    |
| isImmuneToExplosions     |                   | boolean型                                                    |
| isInLava                 |                   | boolean型                                                    |
| isInsideOpaqueBlock      |                   | boolean型                                                    |
| isInvisible              |                   | boolean型                                                    |
| isInvulnerable           |                   | boolean型                                                    |
| isInWater                |                   | boolean型                                                    |
| isOutsideBorder          |                   | boolean型                                                    |
| isOverWater              |                   | boolean型                                                    |
| isPushedByWater          |                   | boolean型                                                    |
| isRiding                 |                   | boolean型                                                    |
| isSilent                 |                   | boolean型                                                    |
| isSneaking               |                   | boolean型                                                    |
| isSprinting              |                   | boolean型                                                    |
| lowestRidingEntity       |                   | *IEntity*                                                   |
| maxFallHeight            |                   | int                                                         |
| maxInPortalTime          |                   | int                                                         |
| 部品                       |                   | IEntity[]                                                   |
| 乗客の皆さん                   | getPassengers()   | リスト<IEntity\>                                              |
| passengersRecursive      |                   | リスト<IEntity\>                                              |
| portalCooldowne          |                   | int                                                         |
| position3f               | getPosition3f()   | [Position3f](/Vanilla/Utils/Position3f/)                    |
| ridingEntity             | getRidingEntity() | *IEntity*                                                   |
| shouldRiderSit           |                   | boolean型                                                    |
| タグ                       |                   | リスト<string\>                                               |
| チーム                      |                   | *[ITeam](/Vanilla/Game/ITeam/)*                             |
| 濡れている                    | isWet()           | boolean型                                                    |
| 世界                       |                   | [IWorld](/Vanilla/World/IWorld/)                            |
| x                        | getX()            | double                                                      |
| y                        | getY()            | double                                                      |
| z                        | getZ()            | double                                                      |
| motionX                  |                   | double                                                      |
| motionY                  |                   | double                                                      |
| motionZ                  |                   | double                                                      |
| posX                     |                   | double                                                      |
| posY                     |                   | double                                                      |
| posZ                     |                   | double                                                      |
| rotationYaw              |                   | float型                                                      |
| rotationPitch            |                   | float型                                                      |
| lookingDirection         |                   | [IVector3d](/Vanilla/World/IVector3d/)                      |

## ZenSetters

| SetterName          | SetterMethod        | パラメータタイプ                               |
| ------------------- | ------------------- | -------------------------------------- |
| 空気                  | setAir(seconds)     | int                                    |
| alwaysRenderNameTag |                     | boolean型                               |
| customName          | setCustomName(name) | 文字列                                    |
| 寸法                  | setDimension(id)    | int                                    |
| ファイヤー...            | setFire(秒)          | int                                    |
| hasNoGravity        |                     | boolean型                               |
| id                  |                     | int                                    |
| isGlowing           |                     | boolean型                               |
| isInvisible         |                     | boolean型                               |
| isOutsideBorder     |                     | boolean型                               |
| isSilent            |                     | boolean型                               |
| isSneaking          |                     | boolean型                               |
| isSprinting         |                     | boolean型                               |
| 位置                  | setPosition(pos)    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| rotationYaw         |                     | float型                                 |
| rotationPitch       |                     | float型                                 |
| motionX             |                     | double                                 |
| motionY             |                     | double                                 |
| motionZ             |                     | double                                 |
| posX                |                     | double                                 |
| posY                |                     | double                                 |
| posZ                |                     | double                                 |

## その他のZenMethods

- boolean attackEntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource/) source, float amount);
- boolean canTrample([IWorld](/Vanilla/World/IWorld/) world, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) block, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- double getDistanceSqToEntity(entity); → 指定されたエンティティまでの距離を返す
- [IData](/Vanilla/Data/IData/) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); → エンティティを取得する [アイテム](/Vanilla/Items/IItemStack/) を返します (e. をクリックします。エンティティIDはアイテムまたはトロッコアイテムです。
- void addTag(String tag);
- void 消火(); → 火災時にエンティティを消火する
- void onEntityUpdate();
- void onKillCommand();
- void onUpdate();
- void removeTag(String tag);
- void setDead(); → エンティティをキルする
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
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
- void update([IData](/Vanilla/Data/IData/) data);
- boolean onGround(); → エンティティが地上にある場合は true を、空中にある場合は false を返します。