# BoundToolReleaseEvent

The BoundToolReleaseEvent is fired whenever abount tool's charge is about to be released.  
It can be canceled, which will result in the charge not being released.

## Implementing EventClasses
The BoundToolReleaseEvent implements following EventClasses and thus is able to use all functionality they provide as well: 

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)

## Event Class
You will need to cast the event in the function header as this class:  
`mods.bloodmagic.BoundToolReleaseEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name | ZenSetter Name | Type                                    |
|----------------|----------------|-----------------------------------------|
| item           |                | [IItemStack](/Vanilla/Items/IItemStack) |
| canceled       | canceled       | bool                                    |
| player         |                | [IPlayer](/Vanilla/Players/IPlayer)     |
| charge         | charge         | int                                     |