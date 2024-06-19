# ItemAttributeModifiersEntry

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ItemAttributeModifiersEntry;
```


## Extending Record

ItemAttributeModifiersEntry extends Record. That means all methods available in Record are also available in ItemAttributeModifiersEntry

## Static Methods

:::group{name=of}

Return Type: [ItemAttributeModifiersEntry](/vanilla/api/item/component/ItemAttributeModifiersEntry)

```zenscript
ItemAttributeModifiersEntry.of(attribute as Attribute, modifier as AttributeModifier, slot as EquipmentSlotGroup) as ItemAttributeModifiersEntry
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)   |
| slot      | [EquipmentSlotGroup](/vanilla/api/entity/equipment/EquipmentSlotGroup) |


:::

## Properties

|   Name    |                                  Type                                  | Has Getter | Has Setter |
|-----------|------------------------------------------------------------------------|------------|------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | true       | false      |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)   | true       | false      |
| slot      | [EquipmentSlotGroup](/vanilla/api/entity/equipment/EquipmentSlotGroup) | true       | false      |

