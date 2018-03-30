# ManaDiscountEvent

The ManaDiscountEvent is fired whenever an item tries to take mana from your mana tablet.  
It cannot be canceled, but you can change the discount.  
Note that not all mana consumers call this event!

## Implementing EventClasses
The ManaDiscountEvent implements following EventClasses and thus is able to use all functionality they provide as well: 
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent)

## Event Class
You will need to cast the event in the function header as this class:  
`mods.botania.ManaDiscountEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name | ZenSetter Name |  Type                                   |
|----------------|----------------|-----------------------------------------|
| item           |                | [IItemStack](/Vanilla/Items/IItemStack) |
| discount       | discount       |                                         |