# IEntityLivingBase

A living Entity is one that has health and that can die.  
That means Monsters, Animals but also [IPlayers](/Vanilla/Game/IPlayer).


## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityLivingBase;`

## Extending [IEntity](IEntity)
IEntityLivingBase extends [IEntity](IEntity). That means all functions available to [IEntities](IEntity) also are available to IEntityLivingBase.

## ZenGetters

| ZenGetter        | GetterMethod           | Return Type                             |
|------------------|------------------------|-----------------------------------------|
|                  | canBreatheUnderwater() | boolean                                 |
| health           | getHealth()            | float                                   |
|                  | isChild()              | boolean                                 |
|                  | isUndead()             | boolean                                 |
| maxHealth        | getMaxHealth()         | float                                   |
| mainHandHeldItem | getHeldItemMainHand()  | [IItemStack](/Vanilla/Items/IItemStack) |
| offHandHeldItem  | getHeldItemOffHand()   | [IItemStack](/Vanilla/Items/IItemStack) |


## ZenSetters

| ZenSetter | SetterMethod | Parameter Type |
|-----------|--------------|----------------|
| health    | setHealth()  | float          |


## More ZenMethods

- clearActivePotions() → Removes all active [potions](Vanilla/Porions/IPotion) from the Entity
- heal(float amount) → Heals the entity by the amount given
- boolean isPotionActive([IPotion](Vanilla/Porions/IPotion) potion) → Returns true if the goven potion is active
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance) getAttribute(String name) → Returns the given [Attribute](/Vanilla/Entities/Attributes/IEntityAttributeInstance)
- boolean attackEntityFrom(IDamageSource source, float amount) → Does something...