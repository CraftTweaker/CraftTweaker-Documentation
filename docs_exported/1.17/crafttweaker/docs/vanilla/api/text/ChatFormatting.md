# ChatFormatting

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.ChatFormatting;
```


## Enum Constants

ChatFormatting is an enum. It has 22 enum constants. They are accessible using the code below.

```zenscript
ChatFormatting.BLACK
ChatFormatting.DARK_BLUE
ChatFormatting.DARK_GREEN
ChatFormatting.DARK_AQUA
ChatFormatting.DARK_RED
ChatFormatting.DARK_PURPLE
ChatFormatting.GOLD
ChatFormatting.GRAY
ChatFormatting.DARK_GRAY
ChatFormatting.BLUE
ChatFormatting.GREEN
ChatFormatting.AQUA
ChatFormatting.RED
ChatFormatting.LIGHT_PURPLE
ChatFormatting.YELLOW
ChatFormatting.WHITE
ChatFormatting.OBFUSCATED
ChatFormatting.BOLD
ChatFormatting.STRIKETHROUGH
ChatFormatting.UNDERLINE
ChatFormatting.ITALIC
ChatFormatting.RESET
```
## Casters

| Result type | Is Implicit |
|-------------|-------------|
| string | true |
| [Style](/vanilla/api/text/Style) | true |

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

Return Type: **invalid**

```zenscript
// ChatFormatting.getColor() as invalid

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

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| id | int | true | false | No Description Provided |
| isColor | boolean | true | false | No Description Provided |
| isFormat | boolean | true | false | No Description Provided |

