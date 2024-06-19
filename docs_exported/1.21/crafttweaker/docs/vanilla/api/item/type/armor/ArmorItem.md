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

- [Equipable](/vanilla/api/item/Equipable)

## Properties

|     Name      |                             Type                             | Has Getter | Has Setter |
|---------------|--------------------------------------------------------------|------------|------------|
| defense       | int                                                          | true       | false      |
| equipSound    | [SoundEvent](/vanilla/api/sound/SoundEvent)?                 | true       | false      |
| equipmentSlot | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | true       | false      |
| material      | [ArmorMaterial](/vanilla/api/item/type/armor/ArmorMaterial)  | true       | false      |
| toughness     | float                                                        | true       | false      |

