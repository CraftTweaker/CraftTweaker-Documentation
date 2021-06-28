# Rarity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.Rarity;
```


## Extending Enum&lt;Rarity&gt;

Rarity extends Enum&lt;[Rarity](/vanilla/api/item/Rarity)&gt;. That means all methods available in Enum&lt;[Rarity](/vanilla/api/item/Rarity)&gt; are also available in Rarity

## Static Methods

:::group{name=create}

Creates a new Rarity with the given name and given color.

Returns: A new Rarity with the given name and color  
Return Type: [Rarity](/vanilla/api/item/Rarity)

```zenscript
// Rarity.create(name as string, formatting as TextFormatting) as Rarity

Rarity.create("insanely epic", <formatting:obfucated>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the new Rarity. |
| formatting | [TextFormatting](/vanilla/api/util/text/TextFormatting) | The color of the rarity. |


:::

## Static Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| COMMON | [Rarity](/vanilla/api/item/Rarity) | true | false | No Description Provided |
| EPIC | [Rarity](/vanilla/api/item/Rarity) | true | false | No Description Provided |
| RARE | [Rarity](/vanilla/api/item/Rarity) | true | false | No Description Provided |
| UNCOMMON | [Rarity](/vanilla/api/item/Rarity) | true | false | No Description Provided |

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

