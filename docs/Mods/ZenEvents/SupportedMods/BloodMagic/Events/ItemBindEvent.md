# ItemBindEvent

The ItemBindEvent is fired whenever Player tries to bind a bindable item.  
It can be canceled, which will result player failing to bind the item.

## Implementing EventClasses
The ItemBindEvent implements following EventClasses and thus is able to use all functionality they provide as well: 

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)

## Event Class
You will need to cast the event in the function header as this class:  
`mods.bloodmagic.ItemBindEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name | ZenSetter Name | Type                                    |
|----------------|----------------|-----------------------------------------|
| item           |                | [IItemStack](/Vanilla/Items/IItemStack) |
| canceled       | canceled       | bool                                    |
| player         |                | [IPlayer](/Vanilla/Players/IPlayer)     |