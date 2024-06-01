# ItemAttributeModifiersBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ItemAttributeModifiersBuilder;
```


## Methods

:::group{name=add}

Return Type: [ItemAttributeModifiersBuilder](/vanilla/api/item/component/ItemAttributeModifiersBuilder)

```zenscript
ItemAttributeModifiersBuilder.add(attribute as Attribute, modifier as AttributeModifier, slot as EquipmentSlotGroup) as ItemAttributeModifiersBuilder
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)   |
| slot      | [EquipmentSlotGroup](/vanilla/api/entity/equipment/EquipmentSlotGroup) |


:::

:::group{name=build}

Return Type: [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)

```zenscript
// ItemAttributeModifiersBuilder.build() as ItemAttributeModifiers

myItemAttributeModifiersBuilder.build();
```

:::


