# IArmorMaterial

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.armor.IArmorMaterial;
```


## Methods

:::group{name=getDamageReductionAmount}

Gets the armor value of this material in the given slot. This is how many armor pieces this material fills in the armor bar.

Returns: The armor value of this material in the given slot.  
Return Type: int

```zenscript
IArmorMaterial.getDamageReductionAmount(slotIn as MCEquipmentSlotType) as int
```

| Parameter | Type                                                         | Description                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| slotIn    | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType) | The slot to get the value of. |


:::

:::group{name=getDurability}

Gets the default durability of Armor pieces made from this material in the given slot.

Returns: The default durability of the armor piece.  
Return Type: int

```zenscript
IArmorMaterial.getDurability(slotIn as MCEquipmentSlotType) as int
```

| Parameter | Type                                                         | Description                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| slotIn    | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType) | The slot to get the value of. |


:::

:::group{name=getEnchantability}

Gets the enchantability of this material.

Returns: The enchantability of this material.  
Return Type: int

```zenscript
// IArmorMaterial.getEnchantability() as int

myIArmorMaterial.getEnchantability();
```

:::

:::group{name=getKnockbackResistance}

Gets the knockback resistance of this material.

Returns: The knockback resistance of this material.  
Return Type: float

```zenscript
// IArmorMaterial.getKnockbackResistance() as float

myIArmorMaterial.getKnockbackResistance();
```

:::

:::group{name=getRepairMaterial}

Gets the repair material of this material.

Returns: The repair material of this material.  
Return Type: [IIngredient](/vanilla/api/items/IIngredient)

```zenscript
// IArmorMaterial.getRepairMaterial() as IIngredient

myIArmorMaterial.getRepairMaterial();
```

:::

:::group{name=getToughness}

Gets the toughness of this material.

Returns: The toughness of this material.  
Return Type: float

```zenscript
// IArmorMaterial.getToughness() as float

myIArmorMaterial.getToughness();
```

:::


## Properties

| Nombre              | Type                                          | Has Getter | Has Setter | Description                                     |
| ------------------- | --------------------------------------------- | ---------- | ---------- | ----------------------------------------------- |
| enchantability      | int                                           | true       | false      | Gets the enchantability of this material.       |
| knockbackResistance | float                                         | true       | false      | Gets the knockback resistance of this material. |
| repairMaterial      | [IIngredient](/vanilla/api/items/IIngredient) | true       | false      | Gets the repair material of this material.      |
| toughness           | float                                         | true       | false      | Gets the toughness of this material.            |

