# `TagIngredient`

A `TagIngredient` is an `IIngredient` implementation that allows you to use a [`Tag`](/Mods/Boson/Tags/Tag/) in recipes. You can only access this data from outside the [`tags` loader](/Mods/Boson/Loaders/Tags/). For more information regarding tags and how to obtain them, refer to [this page](/Mods/Boson/Tags/Concept/).

## Class Details
The class is situated in the `net.thesilkminer.mc.boson.zen.tag` package, making `net.thesilkminer.mc.boson.zen.tag.TagIngredient` its fully qualified name for importing.

## Creating a New Instance
Refer to [the bracket handler documentation](/Mods/Boson/Tags/BracketHandler/).

## `IIngredient`
Since `TagIngredient` is an `IIngredient`, it provides access to all the properties and methods of that interface. Refer to [`IIngredient`'s documentation page](/Vanilla/Variable_Types/IIngredient/) for more details. This documentation page only outlines additions and quirks that are particular of this class.

## Properties
A `TagIngredient` provides read-only access to an additional set of properties, as outlined in the following table:

| Property Name | Type                                     | Description                                                     |
| ------------- | ---------------------------------------- | --------------------------------------------------------------- |
| `tagName`     | [`NameSpacedString`](/Mods/Boson/Names/) | Name that uniquely identifies the tag this ingredient refers to |

## Example

```zenscript
val anyIngot = <tag-items:forge:ingots>;
val anyWool = <tag-items:minecraft:wool>;

recipes.addShaped("wool_infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool], [anyWool, anyIngot]]);
```
