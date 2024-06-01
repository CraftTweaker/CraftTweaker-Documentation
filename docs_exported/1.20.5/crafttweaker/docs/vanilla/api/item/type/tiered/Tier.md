# Tier

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.tiered.Tier;
```


## Methods

:::group{name=getAttackDamageBonus}

Return Type: float

```zenscript
// Tier.getAttackDamageBonus() as float

myTier.getAttackDamageBonus();
```

:::

:::group{name=getEnchantmentValue}

Return Type: int

```zenscript
// Tier.getEnchantmentValue() as int

myTier.getEnchantmentValue();
```

:::

:::group{name=getRepairIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// Tier.getRepairIngredient() as IIngredient

myTier.getRepairIngredient();
```

:::

:::group{name=getSpeed}

Return Type: float

```zenscript
// Tier.getSpeed() as float

myTier.getSpeed();
```

:::

:::group{name=getUses}

Return Type: int

```zenscript
// Tier.getUses() as int

myTier.getUses();
```

:::


## Properties

|       Name        |                        Type                        | Has Getter | Has Setter |
|-------------------|----------------------------------------------------|------------|------------|
| attackDamageBonus | float                                              | true       | false      |
| enchantmentValue  | int                                                | true       | false      |
| repairIngredient  | [IIngredient](/vanilla/api/ingredient/IIngredient) | true       | false      |
| speed             | float                                              | true       | false      |
| uses              | int                                                | true       | false      |

