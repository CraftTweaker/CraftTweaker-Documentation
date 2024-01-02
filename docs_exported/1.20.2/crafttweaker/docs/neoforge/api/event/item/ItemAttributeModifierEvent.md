# ItemAttributeModifierEvent

This event is fired when the attributes for an ItemStack are being calculated.
 Attributes are calculated on the server when equipping and un-equipping an item to add and remove attributes respectively, both must be consistent.
 Attributes are calculated on the client when rendering an item's tooltip to show relevant attributes.

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemAttributeModifierEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.ItemAttributeModifierEvent>(event => {
    println("ItemAttributeModifierEvent ran!");
});
```


## Supertype

ItemAttributeModifierEvent extends [Event](/neoforge/api/event/Event). That means all methods available in [Event](/neoforge/api/event/Event) are also available in ItemAttributeModifierEvent

## Methods

:::group{name=addModifier}

Adds a new AttributeModifier to the ItemStack.

Returns: True if the modifier was added. False otherwise.  
Return Type: boolean

```zenscript
// ItemAttributeModifierEvent.addModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation) as boolean

myItemAttributeModifierEvent.addModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION);
```

| Parameter |                                  Type                                  |           Description           |
|-----------|------------------------------------------------------------------------|---------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute to add.           |
| name      | string                                                                 | The name of the modifier to add |
| value     | double                                                                 | The value of the modifier.      |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.  |


:::

:::group{name=addModifier}

Adds a new AttributeModifier to the ItemStack.

Returns: True if the modifier was added. False otherwise.  
Return Type: boolean

```zenscript
// ItemAttributeModifierEvent.addModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation) as boolean

myItemAttributeModifierEvent.addModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION);
```

| Parameter |                                  Type                                  |          Description           |
|-----------|------------------------------------------------------------------------|--------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute to add.          |
| uuid      | string                                                                 | The UUID of the modifier.      |
| name      | string                                                                 | The name of the modifier.      |
| value     | double                                                                 | The value of the modifier.     |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier. |


:::

:::group{name=clearModifiers}

Clears all AttributeModifiers from the ItemStack.

```zenscript
// ItemAttributeModifierEvent.clearModifiers()

myItemAttributeModifierEvent.clearModifiers();
```

:::

:::group{name=removeAttribute}

Removes an Attribute from the ItemStack.

Returns: A List of the AttributeModifiers for the removed Attribute.  
Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;

```zenscript
// ItemAttributeModifierEvent.removeAttribute(attribute as Attribute) as stdlib.List<AttributeModifier>

myItemAttributeModifierEvent.removeAttribute(<attribute:minecraft:generic.attack_damage>);
```

| Parameter |                         Type                         |       Description        |
|-----------|------------------------------------------------------|--------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) | The Attribute to remove. |


:::

:::group{name=removeModifier}

Removes an AttributeModifier from the ItemStack.

Returns: True if the modifier was remove. False otherwise.  
Return Type: boolean

```zenscript
// ItemAttributeModifierEvent.removeModifier(attribute as Attribute, modifier as AttributeModifier) as boolean

myItemAttributeModifierEvent.removeModifier(<attribute:minecraft:generic.attack_damage>, modifier);
```

| Parameter |                                 Type                                 |       Description        |
|-----------|----------------------------------------------------------------------|--------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                 | The Attribute to remove. |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | The modifier to remove.  |


:::

:::group{name=removeModifier}

Removes an AttributeModifier from the ItemStack based on the modifier's UUID.

Returns: True if the modifier was remove. False otherwise.  
Return Type: boolean

```zenscript
// ItemAttributeModifierEvent.removeModifier(attribute as Attribute, uuid as string) as boolean

myItemAttributeModifierEvent.removeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3");
```

| Parameter |                         Type                         |        Description        |
|-----------|------------------------------------------------------|---------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) | The Attribute to remove.  |
| uuid      | string                                               | The UUID of the modifier. |


:::


## Properties

|       Name        |                                                                     Type                                                                      | Has Getter | Has Setter |                                                                                         Description                                                                                          |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| itemStack         | [IItemStack](/vanilla/api/item/IItemStack)                                                                                                    | true       | false      | Gets the ItemStack that this event is being ran for.                                                                                                                                         |
| modifiers         | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)] | true       | false      | Gets the modifiers on the ItemStack                                                                                                                                                          |
| originalModifiers | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)] | true       | false      | Gets the original modifiers on the ItemStack before being changed by any other event listener.                                                                                               |
| slotType          | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)                                                                                  | true       | false      | Gets the EquipmentSlotType that this event is being ran for. <br />  <br />  If you only want to add / remove a modifier from a specific slot, you can use this to filter based on the slot. |

