# CropGrowPostEvent

The CropGrowPost Event is fired once a crop block has **successfully** grown. It cannot be canceled, and merely serves as a notification of crop growth.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPostEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
CropGrowPost Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter            | ZenSetter | Typ                                          |
| -------------------- | --------- | -------------------------------------------- |
| `originalBlockState` |           | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`      |           | [IBlock](/Vanilla/Blocks/IBlock/)            |
