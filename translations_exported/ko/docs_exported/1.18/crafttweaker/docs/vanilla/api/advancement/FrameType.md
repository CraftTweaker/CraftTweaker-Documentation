# FrameType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.FrameType;
```


## Enum Constants

FrameType is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
FrameType.TASK
FrameType.CHALLENGE
FrameType.GOAL
```
## Methods

:::group{name=getChatColor}

Return Type: [ChatFormatting](/vanilla/api/text/ChatFormatting)

```zenscript
// FrameType.getChatColor() as ChatFormatting

myFrameType.getChatColor();
```

:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// FrameType.getDisplayName() as Component

myFrameType.getDisplayName();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// FrameType.getName() as string

myFrameType.getName();
```

:::

:::group{name=getTexture}

Return Type: int

```zenscript
// FrameType.getTexture() as int

myFrameType.getTexture();
```

:::


## Properties

| 이름          | Type                                               | Has Getter | Has Setter | Description             |
| ----------- | -------------------------------------------------- | ---------- | ---------- | ----------------------- |
| chatColor   | [ChatFormatting](/vanilla/api/text/ChatFormatting) | true       | false      | No Description Provided |
| displayName | [Component](/vanilla/api/text/Component)           | true       | false      | No Description Provided |
| name        | string                                             | true       | false      | No Description Provided |
| texture     | int                                                | true       | false      | No Description Provided |

