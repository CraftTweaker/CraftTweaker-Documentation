# ArmorItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.armor.ArmorItem;
```


## Extending MCItemDefinition

ArmorItem extends [MCItemDefinition](/vanilla/api/item/MCItemDefinition). That means all methods available in [MCItemDefinition](/vanilla/api/item/MCItemDefinition) are also available in ArmorItem

## Implemented Interfaces
ArmorItem implements the following interfaces. That means all methods defined in these interfaces are also available in ArmorItem

- [IArmorVanishable](/vanilla/api/enchantment/IArmorVanishable)

## Methods

:::group{name=getArmorMaterial}

Gets the armor material of this Armor Item.

Returns: The IArmorMaterial of this Armor Item.  
Return Type: [IArmorMaterial](/vanilla/api/item/armor/IArmorMaterial)

```zenscript
// ArmorItem.getArmorMaterial() as IArmorMaterial

myArmorItem.getArmorMaterial();
```

:::

:::group{name=getDamageReduceAmount}

Gets the damage reduce amount of this Armor Item. This is how much armor protection this item applies.

Returns: The damage reduce amount of this Armor Item.  
Return Type: int

```zenscript
// ArmorItem.getDamageReduceAmount() as int

myArmorItem.getDamageReduceAmount();
```

:::

:::group{name=getEquipmentSlot}

Gets the equipment slot that this armor item goes into.

Returns: The EquipmentSlotType that thsi armor item goes into.  
Return Type: [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)

```zenscript
// ArmorItem.getEquipmentSlot() as MCEquipmentSlotType

myArmorItem.getEquipmentSlot();
```

:::

:::group{name=getToughness}

Gets the toughness of this Armor Item.

Returns: The toughness of this Armor Item.  
Return Type: float

```zenscript
// ArmorItem.getToughness() as float

myArmorItem.getToughness();
```

:::


## Properties

| Name               | Type                                                         | Has Getter | Has Setter | Description                                                                                            |
| ------------------ | ------------------------------------------------------------ | ---------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| armorMaterial      | [IArmorMaterial](/vanilla/api/item/armor/IArmorMaterial)     | true       | false      | Gets the armor material of this Armor Item.                                                            |
| damageReduceAmount | int                                                          | true       | false      | Gets the damage reduce amount of this Armor Item. This is how much armor protection this item applies. |
| equipmentSlot      | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType) | true       | false      | Gets the equipment slot that this armor item goes into.                                                |
| toughness          | float                                                        | true       | false      | Gets the toughness of this Armor Item.                                                                 |

