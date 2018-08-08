# TeleposeEvent

The TeleposeEvent is fired whenever a bloodmagic teleposer teleposes blocks or entities.  
It can be canceled, which will result in the transposition not taking place.

## Implementing EventClasses
The TeleposeEvent implements following EventClasses and thus is able to use all functionality they provide as well: 

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Event Class
You will need to cast the event in the function header as this class:  
`mods.bloodmagic.TeleposeEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name  | ZenSetter Name | Type                                      |
|-----------------|----------------|-------------------------------------------|
| initialWorld    |                | [IWorld](/Vanilla/World/IWorld/)           |
| initialBlockPos |                | [IBlockPos](/Vanilla/World/IBlockPos/)     |
| initialState    |                | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| finalWorld      |                | [IWorld](/Vanilla/World/IWorld/)           |
| finalBlockPos   |                | [IBlockPos](/Vanilla/World/IBlockPos/)     |
| finalState      |                | [IBlockState](/Vanilla/Blocks/IBlockState/) |