# BowItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.projectileweapon.BowItem;
```


## Extending ProjectileWeaponItem

BowItem extends [ProjectileWeaponItem](/vanilla/api/item/type/projectileweapon/ProjectileWeaponItem). That means all methods available in [ProjectileWeaponItem](/vanilla/api/item/type/projectileweapon/ProjectileWeaponItem) are also available in BowItem

## Implemented Interfaces
BowItem implements the following interfaces. That means all methods defined in these interfaces are also available in BowItem

- [Vanishable](/vanilla/api/item/Vanishable)

## Static Methods

:::group{name=getPowerForTime}

Converts the given time to a power value between 0 and 1

Returns: the given time as a power value between 0 and 1  
Return Type: float

```zenscript
// BowItem.getPowerForTime(charge as int) as float

BowItem.getPowerForTime(5);
```

| Parameter | Type |      Description      |
|-----------|------|-----------------------|
| charge    | int  | The charge to convert |


:::

