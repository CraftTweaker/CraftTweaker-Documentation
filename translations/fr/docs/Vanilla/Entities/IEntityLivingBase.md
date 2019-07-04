# IEntityLivingBase

A living Entity is one that has health and that can die.  
That means Monsters, Animals but also [IPlayers](/Vanilla/Players/IPlayer/).

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityLivingBase;`

## Extending [IEntity](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). That means all functions available to [IEntities](/Vanilla/Entities/IEntity/) also are available to IEntityLivingBase.

## ZenGetters

| ZenGetter              | Return Type (*can be null*)                            |
| ---------------------- | ------------------------------------------------------ |
| activePotionEffects    | List<[IPotionEffect](/Vanilla/Potions/IPotionEffect/)> |
| AIMovementSpeed        | float                                                  |
| arrowsInEntity         | int                                                    |
| attackingEntity        | *IEntityLivingBase*                                    |
| canBreatheUnderwater   | boolean                                                |
| health                 | float                                                  |
| isChild                | boolean                                                |
| isOnLadder             | boolean                                                |
| isUndead               | boolean                                                |
| lastAttackedEntity     | *IEntityLivingBase*                                    |
| lastAttackedEntityTime | int                                                    |
| lastDamageSource       | [IDamageSource](/Vanilla/Damage/IDamageSource/)        |
| mainHandHeldItem       | [IItemStack](/Vanilla/Items/IItemStack/)               |
| maxHealth              | float                                                  |
| offHandHeldItem        | [IItemStack](/Vanilla/Items/IItemStack/)               |
| revengeTarget          | *IEntityLivingBase*                                    |
| totalArmorValue        | int                                                    |

## ZenSetters

| ZenSetter          | Parameter Type (*can be null*) |
| ------------------ | ------------------------------ |
| AIMovementSpeed    | float                          |
| arrowsInEntity     | int                            |
| health             | float                          |
| lastAttackedEntity | *IEntityLivingBase*            |
| revengeTarget      | *IEntityLivingBase*            |

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
- void clearActivePotions() → Removes all active [potions](/Vanilla/Potions/IPotion/) from the Entity
- void knockBack([IEntity](/Vanilla/Entities/IEntity/) entity, float one, double two, double three);
- void onDeath();
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);