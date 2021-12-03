# Rarity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.Rarity;
```


## Enum Constants

Rarity is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
Rarity.COMMON
Rarity.UNCOMMON
Rarity.RARE
Rarity.EPIC
```
## Static Methods

:::group{name=create}

Creates a new Rarity with the given name and given color.

Returns: A new Rarity with the given name and color  
Return Type: [Rarity](/vanilla/api/item/Rarity)

```zenscript
// Rarity.create(name as string, formatting as TextFormatting) as Rarity

Rarity.create("insanely_epic", <formatting:obfucated>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the new Rarity. |
| formatting | [TextFormatting](/vanilla/api/util/text/TextFormatting) | The color of the rarity. |


:::

## Methods

:::group{name=color}

Gets the color of this Rarity

Returns: The color of this Rarity.  
Return Type: [TextFormatting](/vanilla/api/util/text/TextFormatting)

```zenscript
// Rarity.color() as TextFormatting

myRarity.color();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| color | [TextFormatting](/vanilla/api/util/text/TextFormatting) | true | false | Gets the color of this Rarity |

