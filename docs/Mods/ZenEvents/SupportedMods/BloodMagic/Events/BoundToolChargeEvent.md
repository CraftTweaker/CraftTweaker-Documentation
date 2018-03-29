# BoundToolChargeEvent

The BoundToolChargeEvent is fired whenever abount tool is being charged up.  
It can be canceled, which will result in the charging being canceled.

## Implementing EventClasses
The BoundToolChargeEvent implements following EventClasses and thus is able to use all functionality they provide as well: 

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)

## Event Class
You will need to cast the event in the function header as this class:  
`mods.bloodmagic.BoundToolChargeEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name | ZenSetter Name | Type                                    |
|----------------|----------------|-----------------------------------------|
| item           |                | [IItemStack](/Vanilla/Items/IItemStack) |
| canceled       | canceled       | bool                                    |
| player         |                | [IPlayer](/Vanilla/Players/IPlayer)     |