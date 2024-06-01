# ProjectileWeaponItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.projectileweapon.ProjectileWeaponItem;
```


## Extending ItemDefinition

ProjectileWeaponItem extends [ItemDefinition](/vanilla/api/item/ItemDefinition). That means all methods available in [ItemDefinition](/vanilla/api/item/ItemDefinition) are also available in ProjectileWeaponItem

## Static Methods

:::group{name=ARROW_ONLY}

A predicate which only accepts arrow items

Return Type: Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// ProjectileWeaponItem.ARROW_ONLY() as Predicate<ItemStack>

ProjectileWeaponItem.ARROW_ONLY();
```

:::

:::group{name=ARROW_OR_FIREWORK}

A predicate which supports arrow items and fireworks

Return Type: Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// ProjectileWeaponItem.ARROW_OR_FIREWORK() as Predicate<ItemStack>

ProjectileWeaponItem.ARROW_OR_FIREWORK();
```

:::

## Properties

|           Name           |                           Type                            | Has Getter | Has Setter |                                                                                          Description                                                                                           |
|--------------------------|-----------------------------------------------------------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allSupportedProjectiles  | Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true       | false      | Gets a predicate for the supported projectiles for this item.                                                                                                                                  |
| defaultProjectileRange   | int                                                       | true       | false      | Gets the default projectile range for this item.                                                                                                                                               |
| supportedHeldProjectiles | Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true       | false      | Gets a predicate for the supported held projectiles for this item. <br />   <br />  held projectiles are projectiles that can only be used when held in the off-hand while shooting / charging |

