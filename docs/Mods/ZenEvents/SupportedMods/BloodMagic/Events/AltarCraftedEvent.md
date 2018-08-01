# AltarCraftedEvent

The AltarCraftedEvent is fired whenever an item in the Blood Altar is about to transform.  
It cannot be canceled, but you can change the output.

## Implementing EventClasses
The AltarCraftedEvent implements following EventClasses and thus is able to use all functionality they provide as well: 

- NONE

## Event Class
You will need to cast the event in the function header as this class:  
`mods.bloodmagic.AltarCraftedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name | ZenSetter Name | Type                                   |
|----------------|----------------|----------------------------------------|
| output         | output         |[IItemStack](/Vanilla/Items/IItemStack/) |