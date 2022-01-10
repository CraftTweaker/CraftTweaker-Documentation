# ItemAttributeModifierEvent

This event is fired when the attributes for an ItemStack are being calculated. Attributes are calculated on the server when equipping and un-equipping an item to add and remove attributes respectively, both must be consistent. Attributes are calculated on the client when rendering an item's tooltip to show relevant attributes.

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.ItemAttributeModifierEvent;
```


## Extending Event

ItemAttributeModifierEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in ItemAttributeModifierEvent

## Metodi

:::group{name=addModifier}

Adds a new AttributeModifier to the ItemStack.

Returns: True if the modifier was added. False otherwise.  
Return Type: boolean

```zenscript
// ItemAttributeModifierEvent.addModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation) as boolean

myItemAttributeModifierEvent.addModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION);
```

| Parametro | Tipo                                                                   | Descrizione                     |
| --------- | ---------------------------------------------------------------------- | ------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute to add.           |
| nome      | string                                                                 | The name of the modifier to add |
| valore    | double                                                                 | The value of the modifier.      |
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

| Parametro | Tipo                                                                   | Descrizione                    |
| --------- | ---------------------------------------------------------------------- | ------------------------------ |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute to add.          |
| uuid      | string                                                                 | The UUID of the modifier.      |
| nome      | string                                                                 | The name of the modifier.      |
| valore    | double                                                                 | The value of the modifier.     |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier. |


:::

:::group{name=clearModifiers}

Clears all AttributeModifiers from the ItemStack.

Return Type: void

```zenscript
// ItemAttributeModifierEvent.clearModifiers() as void

myItemAttributeModifierEvent.clearModifiers();
```

:::

:::group{name=getItemStack}

Gets the ItemStack that this event is being ran for.

Returns: The ItemStack this event is being ran for.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemAttributeModifierEvent.getItemStack() as IItemStack

myItemAttributeModifierEvent.getItemStack();
```

:::

:::group{name=getModifiers}

Gets the modifiers on the ItemStack

Returns: A Map of Attribute to a List of AttributeModifier.  
Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)]

```zenscript
// ItemAttributeModifierEvent.getModifiers() as stdlib.List<AttributeModifier>[Attribute]

myItemAttributeModifierEvent.getModifiers();
```

:::

:::group{name=getOriginalModifiers}

Gets the original modifiers on the ItemStack before being changed by any other event listener.

Returns: A Map of Attribute to a List of AttributeModifier.  
Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)]

```zenscript
// ItemAttributeModifierEvent.getOriginalModifiers() as stdlib.List<AttributeModifier>[Attribute]

myItemAttributeModifierEvent.getOriginalModifiers();
```

:::

:::group{name=getSlotType}

Gets the EquipmentSlotType that this event is being ran for.

 If you only want to add / remove a modifier from a specific slot, you can use this to filter based on the slot.

Returns: The EquipmentSlotType of this event.  
Return Type: [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)

```zenscript
// ItemAttributeModifierEvent.getSlotType() as EquipmentSlot

myItemAttributeModifierEvent.getSlotType();
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

| Parametro | Tipo                                                 | Descrizione              |
| --------- | ---------------------------------------------------- | ------------------------ |
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

| Parametro | Tipo                                                                 | Descrizione              |
| --------- | -------------------------------------------------------------------- | ------------------------ |
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

| Parametro | Tipo                                                 | Descrizione               |
| --------- | ---------------------------------------------------- | ------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) | The Attribute to remove.  |
| uuid      | string                                               | The UUID of the modifier. |


:::


## Proprietà

| Nome              | Tipo                                                                                                                                                      | Ha Getter | Ha Setter | Descrizione                                                                                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| itemstack         | [IItemStack](/vanilla/api/item/IItemStack)                                                                                                                | sì        | no        | Gets the ItemStack that this event is being ran for.                                                                                                                                                     |
| modifiers         | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)] | sì        | no        | Gets the modifiers on the ItemStack                                                                                                                                                                      |
| originalModifiers | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)] | sì        | no        | Gets the original modifiers on the ItemStack before being changed by any other event listener.                                                                                                           |
| slotType          | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)                                                                                              | sì        | no        | Gets the EquipmentSlotType that this event is being ran for. <br />  <br />  If you only want to add / remove a modifier from a specific slot, you can use this to filter based on the slot. |

