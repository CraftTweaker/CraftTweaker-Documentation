# IItemTier

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.tiered.IItemTier;
```


## Methods

:::group{name=getAttackDamage}

Gets this tier's attack damage.

Returns: This tier's attack damage.  
Return Type: float

```zenscript
// IItemTier.getAttackDamage() as float

myIItemTier.getAttackDamage();
```

:::

:::group{name=getEfficiency}

Gets this tier's efficiency.

Returns: This tier's efficiency.  
Return Type: float

```zenscript
// IItemTier.getEfficiency() as float

myIItemTier.getEfficiency();
```

:::

:::group{name=getEnchantability}

Gets this tier's enchantability.

Returns: This tier's enchantability.  
Return Type: int

```zenscript
// IItemTier.getEnchantability() as int

myIItemTier.getEnchantability();
```

:::

:::group{name=getHarvestLevel}

Gets this tier's harvest level.

Returns: This tier's harvest level.  
Return Type: int

```zenscript
// IItemTier.getHarvestLevel() as int

myIItemTier.getHarvestLevel();
```

:::

:::group{name=getMaxUses}

Gets this tier's max uses.

Returns: This tier's max uses.  
Return Type: int

```zenscript
// IItemTier.getMaxUses() as int

myIItemTier.getMaxUses();
```

:::

:::group{name=getRepairMaterial}

Gets this tier's repair material.

Returns: This tier's repair material.  
Return Type: [Ingredient](/vanilla/api/item/Ingredient)

```zenscript
// IItemTier.getRepairMaterial() as Ingredient

myIItemTier.getRepairMaterial();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| attackDamage | float | true | false | Gets this tier's attack damage. |
| efficiency | float | true | false | Gets this tier's efficiency. |
| enchantability | int | true | false | Gets this tier's enchantability. |
| harvestLevel | int | true | false | Gets this tier's harvest level. |
| maxUses | int | true | false | Gets this tier's max uses. |
| repairMaterial | [Ingredient](/vanilla/api/item/Ingredient) | true | false | Gets this tier's repair material. |

