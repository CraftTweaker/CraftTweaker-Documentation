# IEntityLivingBase

一个活的实体是一个健康且可以死亡的实体。  
意味着怪物, 动物, 但也有 [IPlayers](/Vanilla/Players/IPlayer/)。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaker.entity. EntityLivingBase；`

## 扩展 [IEntity](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). That means all functions available to [IEntities](/Vanilla/Entities/IEntity/) also are available to IEntityLivingBase.

## ZenGetters

| ZenGetter              | 返回类型 (*可以为空*)                                        |
| ---------------------- | ---------------------------------------------------- |
| 活动药水效果                 | 列表<[IPotionEffect](/Vanilla/Potions/IPotionEffect/)> |
| AI移动速度                 | 浮点数                                                  |
| 箭头Inentity             | 整数                                                   |
| 攻击实体                   | *IEntityLivingBase*                                  |
| canBreatheUnderwater   | boolean                                              |
| 健康                     | 浮点数                                                  |
| isChild                | boolean                                              |
| isOnLader              | boolean                                              |
| isUndead               | boolean                                              |
| lastAttackedEntity     | *IEntityLivingBase*                                  |
| lastAttackedEntityTime | 整数                                                   |
| 最后的破坏源                 | [IDamageSource](/Vanilla/Damage/IDamageSource/)      |
| mainHandHeldItem       | [IItemStack](/Vanilla/Items/IItemStack/)             |
| 最大生命值                  | 浮点数                                                  |
| 脱机帮助物品                 | [IItemStack](/Vanilla/Items/IItemStack/)             |
| 报复目标                   | *IEntityLivingBase*                                  |
| 总装甲值                   | 整数                                                   |

## ZenSetter

| ZenSetter          | 参数类型 (*可以为空*)       |
| ------------------ | ------------------- |
| AI移动速度             | 浮点数                 |
| 箭头Inentity         | 整数                  |
| 健康                 | 浮点数                 |
| lastAttackedEntity | *IEntityLivingBase* |
| 报复目标               | *IEntityLivingBase* |

## 更多ZenMethods

- 布尔型攻击实体（IDamageSource源，浮点数） → 做什么...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- 布尔值 isPotionActive([IPotion](/Vanilla/Potions/IPotion/) pottion) = 如果神经药水处于活动状态则返回 true
- 布尔值 isPotionEffectable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) pottionEffect);
- 治疗(浮点数) -> 将实体恢复为给定的金额
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(String name) [返回给定的属性](/Vanilla/Entities/Attributes/IEntityAttributeInstance/)
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(IPotion 药水)；
- 无效添加药水效果([IPotionEffect](/Vanilla/Potions/IPotionEffect/) 药水效果);
- 无效 clearActivePotions() -> 从实体中移除所有活动的 [药剂](/Vanilla/Potions/IPotion/)
- 无效的 kackback([IEnty](/Vanilla/Entities/IEntity/) 实体, 浮动一个, 双双倍, 三倍);
- a. 在死亡时无效；
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);