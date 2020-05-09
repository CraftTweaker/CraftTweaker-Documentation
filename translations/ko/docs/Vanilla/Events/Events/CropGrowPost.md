# CropGrowPostEvent

The CropGrowPost Event is fired once a crop block has **successfully** grown. It cannot be canceled, and merely serves as a notification of crop growth.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPostEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
CropGrowPost Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter            | ZenSetter | Type                                        |
| -------------------- | --------- | ------------------------------------------- |
| `originalBlockState` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`      |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
