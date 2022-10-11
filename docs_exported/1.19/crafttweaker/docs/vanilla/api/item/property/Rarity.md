# Rarity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.property.Rarity;
```


## Enum Constants

Rarity is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:item/rarity:common>
<constant:minecraft:item/rarity:uncommon>
<constant:minecraft:item/rarity:rare>
<constant:minecraft:item/rarity:epic>
```
## Methods

:::group{name=color}

Gets the color of this Rarity

Returns: The color of this Rarity.  
Return Type: [ChatFormatting](/vanilla/api/text/ChatFormatting)

```zenscript
// Rarity.color() as ChatFormatting

myRarity.color();
```

:::


## Properties

| Name  |                        Type                        | Has Getter | Has Setter |          Description          |
|-------|----------------------------------------------------|------------|------------|-------------------------------|
| color | [ChatFormatting](/vanilla/api/text/ChatFormatting) | true       | false      | Gets the color of this Rarity |

