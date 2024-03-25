# CrossbowItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.projectileweapon.CrossbowItem;
```


## Extending ProjectileWeaponItem

CrossbowItem extends [ProjectileWeaponItem](/vanilla/api/item/type/projectileweapon/ProjectileWeaponItem). That means all methods available in [ProjectileWeaponItem](/vanilla/api/item/type/projectileweapon/ProjectileWeaponItem) are also available in CrossbowItem

## Implemented Interfaces
CrossbowItem implements the following interfaces. That means all methods defined in these interfaces are also available in CrossbowItem

- [Vanishable](/vanilla/api/item/Vanishable)

## Static Methods

:::group{name=containsChargedProjectile}

Checks if the given stack has any charged items of the given type

Returns: true if it contains the charged item, false otherwise.  
Return Type: boolean

```zenscript
// CrossbowItem.containsChargedProjectile(crossbowStack as ItemStack, ammoItem as ItemDefinition) as boolean

CrossbowItem.containsChargedProjectile(<item:minecraft:crossbow>, <item:minecraft:arrow>);
```

|   Parameter   |                        Type                        |      Description      |
|---------------|----------------------------------------------------|-----------------------|
| crossbowStack | [ItemStack](/vanilla/api/item/ItemStack)           | The stack to check    |
| ammoItem      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The ammo to check for |


:::

:::group{name=getChargeDuration}

Gets the charged duration of the given stack.

Returns: the charged duration of the given stack.  
Return Type: int

```zenscript
// CrossbowItem.getChargeDuration(crossbowStack as ItemStack) as int

CrossbowItem.getChargeDuration(<item:minecraft:crossbow>);
```

|   Parameter   |                   Type                   |    Description     |
|---------------|------------------------------------------|--------------------|
| crossbowStack | [ItemStack](/vanilla/api/item/ItemStack) | The stack to check |


:::

:::group{name=isCharged}

Checks if the stack is charged

Returns: true if charged, false otherwise.  
Return Type: boolean

```zenscript
// CrossbowItem.isCharged(crossbowStack as ItemStack) as boolean

CrossbowItem.isCharged(<item:minecraft:crossbow>);
```

|   Parameter   |                   Type                   |    Description     |
|---------------|------------------------------------------|--------------------|
| crossbowStack | [ItemStack](/vanilla/api/item/ItemStack) | the stack to check |


:::

:::group{name=performShooting}

```zenscript
CrossbowItem.performShooting(level as Level, shooter as LivingEntity, hand as InteractionHand, crossbowStack as ItemStack, velocity as float, accuracy as float)
```

|   Parameter   |                         Type                         |
|---------------|------------------------------------------------------|
| level         | [Level](/vanilla/api/world/Level)                    |
| shooter       | [LivingEntity](/vanilla/api/entity/LivingEntity)     |
| hand          | [InteractionHand](/vanilla/api/util/InteractionHand) |
| crossbowStack | [ItemStack](/vanilla/api/item/ItemStack)             |
| velocity      | float                                                |
| accuracy      | float                                                |


:::

:::group{name=setCharged}

Sets the charged value on the given stack.

```zenscript
// CrossbowItem.setCharged(crossbowStack as ItemStack, charged as boolean)

CrossbowItem.setCharged(<item:minecraft:crossbow>, true);
```

|   Parameter   |                   Type                   |          Description          |
|---------------|------------------------------------------|-------------------------------|
| crossbowStack | [ItemStack](/vanilla/api/item/ItemStack) | the stack to set the value on |
| charged       | boolean                                  | the charged value             |


:::

