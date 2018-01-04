# IEntityLivingBase

A living Entity is one that has health and that can die.  
That means Monsters, Animals but also [IPlayers](/Vanilla/Players/IPlayer).


## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityLivingBase;`

## Extending [IEntity](IEntity)
IEntityLivingBase extends [IEntity](IEntity). That means all functions available to [IEntities](IEntity) also are available to IEntityLivingBase.

## ZenGetters

| ZenGetter                                              | Return Type                                           |
|--------------------------------------------------------|-------------------------------------------------------|
| activePotionEffects                                    | List<[IPotionEffect](/Vanilla/Potions/IPotionEffect)> |
| AIMovementSpeed                                        | float                                                 |
| arrowsInEntity                                         | int                                                   |
| attackingEntity                                        | IEntityLivingBase                                     |
| canBreatheUnderwater                                   | boolean                                               |
| health                                                 | float                                                 |
| isChild                                                | boolean                                               |
| isOnLadder                                             | boolean                                               |
| isUndead                                               | boolean                                               |
| lastAttackedEntity                                     | IEntityLivingBase                                     |
| lastAttackedEntityTime                                 | int                                                   |
| lastDamageSource                                       | [IDamageSource](/Vanilla/Damage/IDamageSource)        |
| mainHandHeldItem                                       | [IItemStack](/Vanilla/Items/IItemStack)               |
| maxHealth                                              | float                                                 |
| offHandHeldItem                                        | [IItemStack](/Vanilla/Items/IItemStack)               |
| revengeTarget                                          | IEntityLivingBase                                     |
| totalArmorValue                                        | int                                                   |


## ZenSetters

| ZenSetter                                              | Parameter Type                                        |
|--------------------------------------------------------|-------------------------------------------------------|
| AIMovementSpeed                                        | float                                                 |
| arrowsInEntity                                         | int                                                   |
| health                                                 | float                                                 |
| lastAttackedEntity                                     | IEntityLivingBase                                     |
| revengeTarget                                          | IEntityLivingBase                                     |


## More ZenMethods

- boolean attackEntityFrom(IDamageSource source, float amount) → Does something...
- boolean canEntityBeSeen([IEntity](IEntity) other);
- boolean isPotionActive([IPotion](Vanilla/Porions/IPotion) potion) → Returns true if the goven potion is active
- boolean isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect) potionEffect);
- heal(float amount) → Heals the entity by the amount given
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance) getAttribute(String name) → Returns the given [Attribute](/Vanilla/Entities/Attributes/IEntityAttributeInstance)
- [IPotionEffect](/Vanilla/Potions/IPotionEffect) getActivePotionEffect(IPotion potion);
- void addPotionEffect([IPotionEffect](/Vanilla/Porions/IPotionEffect) potionEffect);
- void clearActivePotions() → Removes all active [potions](Vanilla/Porions/IPotion) from the Entity
- void knockBack([IEntity](IEntity) entity, float one, double two, double three);
- void onDeath();
- void onLivingUpdate();