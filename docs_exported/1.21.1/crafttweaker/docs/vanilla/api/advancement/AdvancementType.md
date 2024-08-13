# AdvancementType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.AdvancementType;
```


## Implemented Interfaces
AdvancementType implements the following interfaces. That means all methods defined in these interfaces are also available in AdvancementType

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

AdvancementType is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:advancement/type:task>
<constant:minecraft:advancement/type:challenge>
<constant:minecraft:advancement/type:goal>
```
## Methods

:::group{name=createAnnouncement}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
AdvancementType.createAnnouncement(advancement as AdvancementHolder, serverPlayer as ServerPlayer) as MutableComponent
```

|  Parameter   |                              Type                               |
|--------------|-----------------------------------------------------------------|
| advancement  | [AdvancementHolder](/vanilla/api/advancement/AdvancementHolder) |
| serverPlayer | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)    |


:::


## Properties

|    Name     |                        Type                        | Has Getter | Has Setter |
|-------------|----------------------------------------------------|------------|------------|
| chatColor   | [ChatFormatting](/vanilla/api/text/ChatFormatting) | true       | false      |
| displayName | [Component](/vanilla/api/text/Component)           | true       | false      |
| name        | string                                             | true       | false      |

