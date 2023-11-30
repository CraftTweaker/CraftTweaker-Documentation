# FrameType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.FrameType;
```


## Enum Constants

FrameType is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:advancement/frametype:task>
<constant:minecraft:advancement/frametype:challenge>
<constant:minecraft:advancement/frametype:goal>
```
## Properties

|    Name     |                        Type                        | Has Getter | Has Setter |
|-------------|----------------------------------------------------|------------|------------|
| chatColor   | [ChatFormatting](/vanilla/api/text/ChatFormatting) | true       | false      |
| displayName | [Component](/vanilla/api/text/Component)           | true       | false      |
| name        | string                                             | true       | false      |

