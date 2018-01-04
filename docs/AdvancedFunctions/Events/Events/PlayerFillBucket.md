# PlayerFillBucket

The PlayerFillBucket Event is fired whenever a player fills a bucket.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerFillBucketEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                               |
|-------------|-------------------------------------------|
| `canceled`  | boolean                                   |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)       |
| `result`    | [IItemStack](/Vanilla/Item/IItemStack)    |
| `x`         | int                                       |
| `y`         | int                                       |
| `z`         | int                                       |
| `blocks`    | [IBlockGroup](/Vanilla/World/IBlockGroup) |
| `block`     | [IBlock](/Vanilla/Block/IBlock)           |
| `dimension` | [IDimension](/Vanilla/World/IDimension)   |

## ZenMethods

- `event.cancel()` sets the event as cancelled.