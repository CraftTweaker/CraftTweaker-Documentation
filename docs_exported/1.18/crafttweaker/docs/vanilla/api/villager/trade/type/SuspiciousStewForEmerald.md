# SuspiciousStewForEmerald

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.SuspiciousStewForEmerald;
```


## Implemented Interfaces
SuspiciousStewForEmerald implements the following interfaces. That means all methods defined in these interfaces are also available in SuspiciousStewForEmerald

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new SuspiciousStewForEmerald(effect as MobEffect, duration as int, xp as int) as SuspiciousStewForEmerald
new SuspiciousStewForEmerald(<effect:minecraft:haste>, 200, 2);
```
| Parameter |                       Type                        |                       Description                       |
|-----------|---------------------------------------------------|---------------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) | The mob effect that the stew will give.                 |
| duration  | int                                               | How long will the effect last in ticks                  |
| xp        | int                                               | How much experience does this trade reward the villager |



