# CropGrowPreEvent

The CropGrowPre Event is fired when crops attempt to grow. It has a **result** which determines whether the default behaviour occurs or not:

- **allow**: the crop is forced to grow.
- **deny**: the crop is prevented from growing.
- **default**: the attack uses default Vanilla behaviour.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPreEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
CropGrowPost Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter            | ZenSetter | Type                                        |
| -------------------- | --------- | ------------------------------------------- |
| `originalBlockState` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`      |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
