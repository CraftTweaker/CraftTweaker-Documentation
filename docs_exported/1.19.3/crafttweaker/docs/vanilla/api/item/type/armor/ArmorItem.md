# ArmorItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.armor.ArmorItem;
```


## Extending ItemDefinition

ArmorItem extends [ItemDefinition](/vanilla/api/item/ItemDefinition). That means all methods available in [ItemDefinition](/vanilla/api/item/ItemDefinition) are also available in ArmorItem

## Implemented Interfaces
ArmorItem implements the following interfaces. That means all methods defined in these interfaces are also available in ArmorItem

- [Wearable](/vanilla/api/item/Wearable)

## Methods

:::group{name=getDefense}

Return Type: int

```zenscript
// ArmorItem.getDefense() as int

myArmorItem.getDefense();
```

:::

:::group{name=getEquipSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)?

```zenscript
// ArmorItem.getEquipSound() as SoundEvent?

myArmorItem.getEquipSound();
```

:::

:::group{name=getMaterial}

Return Type: [ArmorMaterial](/vanilla/api/item/type/armor/ArmorMaterial)

```zenscript
// ArmorItem.getMaterial() as ArmorMaterial

myArmorItem.getMaterial();
```

:::

:::group{name=getSlot}

Return Type: [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)

```zenscript
// ArmorItem.getSlot() as EquipmentSlot

myArmorItem.getSlot();
```

:::

:::group{name=getToughness}

Return Type: float

```zenscript
// ArmorItem.getToughness() as float

myArmorItem.getToughness();
```

:::


## Properties

|    Name    |                             Type                             | Has Getter | Has Setter |
|------------|--------------------------------------------------------------|------------|------------|
| defense    | int                                                          | true       | false      |
| equipSound | [SoundEvent](/vanilla/api/sound/SoundEvent)?                 | true       | false      |
| material   | [ArmorMaterial](/vanilla/api/item/type/armor/ArmorMaterial)  | true       | false      |
| slot       | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | true       | false      |
| toughness  | float                                                        | true       | false      |

