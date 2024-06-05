# SuspiciousStewForEmerald

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.SuspiciousStewForEmerald;
```


## Implemented Interfaces
SuspiciousStewForEmerald implements the following interfaces. That means all methods defined in these interfaces are also available in SuspiciousStewForEmerald

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Static Methods

:::group{name=of}

Return Type: [SuspiciousStewForEmerald](/vanilla/api/villager/trade/type/SuspiciousStewForEmerald)

```zenscript
SuspiciousStewForEmerald.of(effect as MobEffect, duration as int, xp as int) as SuspiciousStewForEmerald
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| xp        | int                                               |


:::

:::group{name=of}

Return Type: [SuspiciousStewForEmerald](/vanilla/api/villager/trade/type/SuspiciousStewForEmerald)

```zenscript
SuspiciousStewForEmerald.of(effects as SuspiciousStewEffects, xp as int, priceMultiplier as float) as SuspiciousStewForEmerald
```

|    Parameter    |                                    Type                                    |
|-----------------|----------------------------------------------------------------------------|
| effects         | [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects) |
| xp              | int                                                                        |
| priceMultiplier | float                                                                      |


:::

