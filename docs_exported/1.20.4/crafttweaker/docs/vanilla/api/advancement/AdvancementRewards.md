# AdvancementRewards

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.AdvancementRewards;
```


## Extending Record

AdvancementRewards extends Record. That means all methods available in Record are also available in AdvancementRewards

## Methods

:::group{name=grant}

```zenscript
AdvancementRewards.grant(player as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::


## Properties

|  Name   |                                     Type                                      | Has Getter | Has Setter |
|---------|-------------------------------------------------------------------------------|------------|------------|
| recipes | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; | true       | false      |

