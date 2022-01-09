# IEntityLivingBase

A living Entity is one that has health and that can die.  
That means Monsters, Animals but also [IPlayers](/Vanilla/Players/IPlayer/).


## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityLivingBase;`

## Extending [IEntity](/Vanilla/Entities/IEntity/)
IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). That means all functions available to [IEntities](/Vanilla/Entities/IEntity/) also are available to IEntityLivingBase.

## ZenGetters

| ZenGetter                    | Return Type (*can be null*)                                     |
| ---------------------------- | --------------------------------------------------------------- |
| activeHand                   | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) |
| activeItemStack              | [IItemStack](/Vanilla/Items/IItemStack/)                        |
| activePotionEffects          | List<[IPotionEffect](/Vanilla/Potions/IPotionEffect/)>          |
| AIMovementSpeed              | 浮点数                                                             |
| arrowsInEntity               | int                                                             |
| attackingEntity              | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)       |
| canBreatheUnderwater #可以水下呼吸 | 布尔值                                                             |
| health                       | 浮点数                                                             |
| isActiveItemStackBlocking    | 布尔值                                                             |
| isChild                      | 布尔值                                                             |
| isElytraFlying               | 布尔值                                                             |
| isOnLadder                   | 布尔值                                                             |
| isUndead                     | 布尔值                                                             |
| lastAttackedEntity           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)       |
| lastAttackedEntityTime       | int                                                             |
| lastDamageSource             | [IDamageSource](/Vanilla/Damage/IDamageSource/)                 |
| mainHandHeldItem             | [IItemStack](/Vanilla/Items/IItemStack/)                        |
| maxHealth                    | 浮点数                                                             |
| offHandHeldItem              | [IItemStack](/Vanilla/Items/IItemStack/)                        |
| revengeTarget                | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)       |
| swingInProgress              | 布尔值                                                             |
| totalArmorValue              | int                                                             |
| moveForward                  | 浮点数                                                             |
| moveStrafing                 | 浮点数                                                             |
| moveVertical                 | 浮点数                                                             |



## ZenSetters

| ZenSetter          | Parameter Type (*can be null*)                            |
| ------------------ | --------------------------------------------------------- |
| AIMovementSpeed    | 浮点数                                                       |
| arrowsInEntity     | int                                                       |
| health             | 浮点数                                                       |
| lastAttackedEntity | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| revengeTarget      | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| swingProgress      | int                                                       |
| moveForward        | 浮点数                                                       |
| moveStrafing       | 浮点数                                                       |
| moveVertical       | 浮点数                                                       |

## More ZenMethods

- boolean attackEntityFrom(IDamageSource source, float amount) → Does something...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- boolean isPotionActive([IPotion](/Vanilla/Potions/IPotion/) potion) → Returns true if the goven potion is active
- boolean isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- heal(float amount) → Heals the entity by the amount given
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(String name) → Returns the given [Attribute](/Vanilla/Entities/Attributes/IEntityAttributeInstance/)
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(IPotion potion);
- void addPotionEffect([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- 无效移除药水效果([IPotion](/Vanilla/Potions/IPotion/) 药水)；
- 无效 clearActivePotions() -> 从实体中移除所有活动的 [药剂](/Vanilla/Potions/IPotion/)
- void knockBack([IEntity](/Vanilla/Entities/IEntity/) source, float strength, double xRatio, double zRatio);
- a. 在死亡时无效；
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);
- void resetActiveHand();
- void stopActiveHand();
