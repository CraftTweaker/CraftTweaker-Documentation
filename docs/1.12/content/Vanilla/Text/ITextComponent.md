# ITextComponent

The ITextComponent interface is the format Minecraft uses to send and display rich text to players.

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.text.ITextComponent;`

## Creating an ITextComponent

You can cast an [IFormattedText](/Vanilla/Utils/IFormattedText/) as ITextComponent (using the `AS` keyword, or the `asTextComponent()` method) or use these static methods below.

```zenscript
import crafttweaker.text.ITextComponent;

ITextComponent.fromString(String s);
ITextComponent.fromTranslation(String translationKey);
ITextComponent.fromTranslation(String translationKey, Object... args);

ITextComponent.fromData(IData data);
```

Note: the argument of `fromData` method is [raw JSON text format](https://minecraft.wiki/w/Raw_JSON_text_format).

## ZenGetters and ZenSetters

| ZenGetter                | ZenSetter | Type           | Description                                                                                              |
|--------------------------|-----------|----------------|----------------------------------------------------------------------------------------------------------|
| style                    | style     | [IStyle](/Vanilla/Text/IStyle) |                                                                                  |
| unformattedComponentText |           | string         | Gets the raw content of this component (but not its sibling components), without any formatting codes.   |
| unformattedText          |           | string         | Gets the text of this component *and all sibling components*, without any formatting codes.              |
| formattedText            |           | string         | Gets the text of this component *and all sibling components*, with formatting codes added for rendering. |
| siblings                 |           | List\<ITextComponent\> | Gets the sibling components of this one.                                                         |

## ZenMethod

`ITextComponent createCopy();`

Creates a copy of this component.  Almost a deep copy, except the style is shallow-copied.

## ZenOperators

You can add or concatenate two ITextComponent together using the respecting Operators: `+ ~`
