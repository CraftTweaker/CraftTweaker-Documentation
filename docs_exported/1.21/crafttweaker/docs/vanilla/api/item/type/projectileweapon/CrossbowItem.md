# CrossbowItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.projectileweapon.CrossbowItem;
```


## Extending ProjectileWeaponItem

CrossbowItem extends [ProjectileWeaponItem](/vanilla/api/item/type/projectileweapon/ProjectileWeaponItem). That means all methods available in [ProjectileWeaponItem](/vanilla/api/item/type/projectileweapon/ProjectileWeaponItem) are also available in CrossbowItem

## Static Methods

:::group{name=getChargeDuration}

Gets the charged duration of the given stack.

Returns: the charged duration of the given stack.  
Return Type: int

```zenscript
// CrossbowItem.getChargeDuration(crossbowStack as ItemStack, entity as LivingEntity) as int

CrossbowItem.getChargeDuration(<item:minecraft:crossbow>, entity);
```

|   Parameter   |                       Type                       |                Description                |
|---------------|--------------------------------------------------|-------------------------------------------|
| crossbowStack | [ItemStack](/vanilla/api/item/ItemStack)         | The stack to check                        |
| entity        | [LivingEntity](/vanilla/api/entity/LivingEntity) | The entity to get the charge duration for |


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

## Methods

:::group{name=performShooting}

```zenscript
CrossbowItem.performShooting(level as Level, shooter as LivingEntity, hand as InteractionHand, stack as ItemStack, power as float, accuracy as float, target as LivingEntity?)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)                    |
| shooter   | [LivingEntity](/vanilla/api/entity/LivingEntity)     |
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)             |
| power     | float                                                |
| accuracy  | float                                                |
| target    | [LivingEntity](/vanilla/api/entity/LivingEntity)?    |


:::


