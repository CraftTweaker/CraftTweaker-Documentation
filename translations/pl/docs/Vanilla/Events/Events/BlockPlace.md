
# BlockPlaceEvent

The BlockBreak Event is fired whenever a block is being placed. You can cancel the event to prevent the block from being placed.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockPlaceEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
BlockPlace Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter       | ZenSetter | Typ                                          |
| --------------- | --------- | -------------------------------------------- |
| `gracz`         |           | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `bieżący`       |           | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| `placedAgainst` |           | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| `dłoń`          |           | Ciąg znaków                                  |
