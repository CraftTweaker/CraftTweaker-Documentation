# IEntityLivingBase

生きているエンティティは健康を持っており、それが死ぬ可能性があります。  
それはモンスター、動物だけでなく [IPlayers](/Vanilla/Players/IPlayer/) を意味します。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityLivingBase;`

## 拡張する [IEntity](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). つまり、 [IEntities](/Vanilla/Entities/IEntity/) で利用可能なすべての関数は、IEntityLivingBaseでも利用可能です。

## ZenGetters

| ZenGetter              | 戻り値の型（*は null* にできます）                                  |
| ---------------------- | ------------------------------------------------------ |
| activePotionEffects    | List<[IPotionEffect](/Vanilla/Potions/IPotionEffect/)> |
| AIMovementSpeed        | float型                                                 |
| arrowsInEntity         | int                                                    |
| attackingEntity        | *IEntityLivingBase*                                    |
| CanBreatheUnderwater   | boolean型                                               |
| 健康                     | float型                                                 |
| isChild                | boolean型                                               |
| isOnLadder             | boolean型                                               |
| isUndead               | boolean型                                               |
| lastAttackedEntity     | *IEntityLivingBase*                                    |
| lastAttackedEntityTime | int                                                    |
| lastDamageSource       | [IDamageSource](/Vanilla/Damage/IDamageSource/)        |
| mainHandHeldItem       | [IItemStack](/Vanilla/Items/IItemStack/)               |
| maxHealth              | float型                                                 |
| offHandHeldItem        | [IItemStack](/Vanilla/Items/IItemStack/)               |
| revengeTarget          | *IEntityLivingBase*                                    |
| totalArmorValue        | int                                                    |

## ZenSetters

| ZenSetter          | パラメータタイプ(*null* を指定できます) |
| ------------------ | ------------------------ |
| AIMovementSpeed    | float型                   |
| arrowsInEntity     | int                      |
| 健康                 | float型                   |
| lastAttackedEntity | *IEntityLivingBase*      |
| revengeTarget      | *IEntityLivingBase*      |

## その他のZenMethods

- boolean attackEntityFrom(IDamageSource source, float amount) → 何かを行う...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- boolean isPotionActive([IPotion](/Vanilla/Potions/IPotion/) pointion) → ゴーブンポーションがアクティブな場合は true を返します
- boolean isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- ヒーリング(浮動小数点数) → エンティティを与えられた数だけ回復する
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(String name) → 与えられた [Attribute](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) を返す
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(IPotionポーション);
- void addPotionEffect([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- void removePotionEffect([IPotion](/Vanilla/Potions/IPotion/) potion);
- void clearActivePotions() → エンティティから [ポーション](/Vanilla/Potions/IPotion/) をすべて削除する
- void knockBack([IEntity](/Vanilla/Entities/IEntity/) エンティティ, float 1, double 2, double three);
- void onDeath();
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);