# 有生命实体基础

一个有生命的实体是指一个有生命值且会死亡的实体。  
这包含怪物，动物也包括[玩家](/Vanilla/Players/IPlayer)。


## 导入相关包
为了避免发生一些不期而遇的问题（比如声明 [数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.entity.IEntityLivingBase;`

## 继承自[实体](IEntity)
有生命实体基础继承自[实体](IEntity)。这意味着[实体](IEntityLivingBase)对象的所有函数均可在有生命实体基础对象上使用。

## ZenGetters

| ZenGetter                                              | Return Type (*can be null*)                           |
|--------------------------------------------------------|-------------------------------------------------------|
| activePotionEffects                                    | List<[药水效果](/Vanilla/Potions/IPotionEffect)> |
| AIMovementSpeed                                        | float                                                 |
| arrowsInEntity                                         | int                                                   |
| attackingEntity                                        | *IEntityLivingBase*                                   |
| canBreatheUnderwater                                   | boolean                                               |
| health                                                 | float                                                 |
| isChild                                                | boolean                                               |
| isOnLadder                                             | boolean                                               |
| isUndead                                               | boolean                                               |
| lastAttackedEntity                                     | *IEntityLivingBase*                                   |
| lastAttackedEntityTime                                 | int                                                   |
| lastDamageSource                                       | [伤害来源](/Vanilla/Damage/IDamageSource)             |
| mainHandHeldItem                                       | [物品堆](/Vanilla/Items/IItemStack)                   |
| maxHealth                                              | float                                                 |
| offHandHeldItem                                        | [IItemStack](/Vanilla/Items/IItemStack)               |
| revengeTarget                                          | *IEntityLivingBase*                                   |
| totalArmorValue                                        | int                                                   |


## ZenSetters

| ZenSetter                                              | Parameter Type (*can be null*)                        |
|--------------------------------------------------------|-------------------------------------------------------|
| AIMovementSpeed                                        | float                                                 |
| arrowsInEntity                                         | int                                                   |
| health                                                 | float                                                 |
| lastAttackedEntity                                     | *IEntityLivingBase*                                   |
| revengeTarget                                          | *IEntityLivingBase*                                   |


## 更多 ZenMethods

- boolean attackEntityFrom(IDamageSource source, float amount) → 有点用...
- boolean canEntityBeSeen([IEntity](IEntity) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot) slot);
- boolean isPotionActive([IPotion](Vanilla/Potions/IPotion) potion) → Returns true if the goven potion is active
- boolean isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect) potionEffect);
- heal(float amount) → 治疗实体，治疗的生命值为传入的数值
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance) getAttribute(String name) → 返回传入的[实体属性](/Vanilla/Entities/Attributes/IEntityAttributeInstance)
- [IItemStack](/Vanilla/Items/IItemStack) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect) getActivePotionEffect(IPotion potion);
- void addPotionEffect([IPotionEffect](/Vanilla/Potions/IPotionEffect) potionEffect);
- void clearActivePotions() → Removes all active [potions](Vanilla/Potions/IPotion) from the Entity
- void knockBack([IEntity](IEntity) entity, float one, double two, double three);
- void onDeath();
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot) slot, [IItemStack](/Vanilla/Items/IItemStack) itemStack);
