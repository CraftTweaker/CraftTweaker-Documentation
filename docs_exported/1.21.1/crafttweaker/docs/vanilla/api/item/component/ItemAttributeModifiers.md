# ItemAttributeModifiers

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ItemAttributeModifiers;
```


## Extending Record

ItemAttributeModifiers extends Record. That means all methods available in Record are also available in ItemAttributeModifiers

## Static Methods

:::group{name=builder}

Return Type: [ItemAttributeModifiersBuilder](/vanilla/api/item/component/ItemAttributeModifiersBuilder)

```zenscript
// ItemAttributeModifiers.builder() as ItemAttributeModifiersBuilder

ItemAttributeModifiers.builder();
```

:::

:::group{name=of}

Return Type: [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)

```zenscript
ItemAttributeModifiers.of(modifiers as stdlib.List<ItemAttributeModifiersEntry>, showInTooltip as boolean) as ItemAttributeModifiers
```

|   Parameter   |                                                   Type                                                    |
|---------------|-----------------------------------------------------------------------------------------------------------|
| modifiers     | stdlib.List&lt;[ItemAttributeModifiersEntry](/vanilla/api/item/component/ItemAttributeModifiersEntry)&gt; |
| showInTooltip | boolean                                                                                                   |


:::

## Methods

:::group{name=compute}

Return Type: double

```zenscript
ItemAttributeModifiers.compute(baseValue as double, slot as EquipmentSlot) as double
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| baseValue | double                                                       |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

:::group{name=forEach}

```zenscript
ItemAttributeModifiers.forEach(slot as EquipmentSlot, consumer as BiConsumer<Attribute,AttributeModifier>)
```

| Parameter |                                                                    Type                                                                     |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)                                                                                |
| consumer  | BiConsumer&lt;[Attribute](/vanilla/api/entity/attribute/Attribute),[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt; |


:::

:::group{name=withModifierAdded}

Return Type: [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)

```zenscript
ItemAttributeModifiers.withModifierAdded(attribute as Attribute, modifier as AttributeModifier, slot as EquipmentSlotGroup) as ItemAttributeModifiers
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)   |
| slot      | [EquipmentSlotGroup](/vanilla/api/entity/equipment/EquipmentSlotGroup) |


:::

:::group{name=withTooltip}

Return Type: [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)

```zenscript
ItemAttributeModifiers.withTooltip(showInTooltip as boolean) as ItemAttributeModifiers
```

|   Parameter   |  Type   |
|---------------|---------|
| showInTooltip | boolean |


:::


## Properties

|     Name      |                                                   Type                                                    | Has Getter | Has Setter |
|---------------|-----------------------------------------------------------------------------------------------------------|------------|------------|
| modifiers     | stdlib.List&lt;[ItemAttributeModifiersEntry](/vanilla/api/item/component/ItemAttributeModifiersEntry)&gt; | true       | false      |
| showInTooltip | boolean                                                                                                   | true       | false      |

