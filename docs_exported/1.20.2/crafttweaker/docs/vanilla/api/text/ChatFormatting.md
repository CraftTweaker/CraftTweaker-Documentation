# ChatFormatting

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.ChatFormatting;
```


## Implemented Interfaces
ChatFormatting implements the following interfaces. That means all methods defined in these interfaces are also available in ChatFormatting

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

ChatFormatting is an enum. It has 22 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:formatting:black>
<constant:minecraft:formatting:dark_blue>
<constant:minecraft:formatting:dark_green>
<constant:minecraft:formatting:dark_aqua>
<constant:minecraft:formatting:dark_red>
<constant:minecraft:formatting:dark_purple>
<constant:minecraft:formatting:gold>
<constant:minecraft:formatting:gray>
<constant:minecraft:formatting:dark_gray>
<constant:minecraft:formatting:blue>
<constant:minecraft:formatting:green>
<constant:minecraft:formatting:aqua>
<constant:minecraft:formatting:red>
<constant:minecraft:formatting:light_purple>
<constant:minecraft:formatting:yellow>
<constant:minecraft:formatting:white>
<constant:minecraft:formatting:obfuscated>
<constant:minecraft:formatting:bold>
<constant:minecraft:formatting:strikethrough>
<constant:minecraft:formatting:underline>
<constant:minecraft:formatting:italic>
<constant:minecraft:formatting:reset>
```
## Casters

|           Result Type            | Is Implicit |
|----------------------------------|-------------|
| string                           | true        |
| [Style](/vanilla/api/text/Style) | true        |

## Methods

:::group{name=asStyle}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
// ChatFormatting.asStyle() as Style

myChatFormatting.asStyle();
```

:::

:::group{name=getChar}

Return Type: char

```zenscript
// ChatFormatting.getChar() as char

myChatFormatting.getChar();
```

:::

:::group{name=getColor}

Return Type: int??

```zenscript
// ChatFormatting.getColor() as int??

myChatFormatting.getColor();
```

:::

:::group{name=getId}

Return Type: int

```zenscript
// ChatFormatting.getId() as int

myChatFormatting.getId();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// ChatFormatting.getName() as string

myChatFormatting.getName();
```

:::

:::group{name=isColor}

Return Type: boolean

```zenscript
// ChatFormatting.isColor() as boolean

myChatFormatting.isColor();
```

:::

:::group{name=isFormat}

Return Type: boolean

```zenscript
// ChatFormatting.isFormat() as boolean

myChatFormatting.isFormat();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// ChatFormatting.toString() as string

myChatFormatting.toString();
```

:::


## Properties

|   Name   |  Type   | Has Getter | Has Setter |
|----------|---------|------------|------------|
| id       | int     | true       | false      |
| isColor  | boolean | true       | false      |
| isFormat | boolean | true       | false      |

