# SwordItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.sword.SwordItem;
```


## Extending TieredItem

SwordItem extends [TieredItem](/vanilla/api/item/type/tiered/TieredItem). That means all methods available in [TieredItem](/vanilla/api/item/type/tiered/TieredItem) are also available in SwordItem

## Implemented Interfaces
SwordItem implements the following interfaces. That means all methods defined in these interfaces are also available in SwordItem

- [Vanishable](/vanilla/api/item/Vanishable)

## Methods

:::group{name=getAttackDamage}

Gets the attack damage of this sword.

Returns: the attack damage of this sword.  
Return Type: float

```zenscript
// SwordItem.getAttackDamage() as float

mySwordItem.getAttackDamage();
```

:::


## Properties

|     Name     | Type  | Has Getter | Has Setter |              Description              |
|--------------|-------|------------|------------|---------------------------------------|
| attackDamage | float | true       | false      | Gets the attack damage of this sword. |

