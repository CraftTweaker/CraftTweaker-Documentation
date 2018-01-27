# Bracket Handlers

ZenScript uses Brackets to reference game objects such as Items, Entities and Oredict.

## How to use Bracket Handlers

Brackets in ZenScript are defined using the `<` and `>` characters, anything inside these characters are considered a Bracket.

An example of a Bracket Handler would be the Item Bracket Handler, which gives you access to the items inside the game.

## Examples

An example of the [Item Bracket Handler](/Vanilla/Brackets/Bracket_Item) would be:

```
<minecraft:apple>
```

This will give you access to the `Apple` [item](/Vanilla/Items/IItemStack).

An example of the [OreDictEntry Bracket Handler](/Vanilla/Brackets/Bracket_Ore) would be:

```
<ore:ingotIron>
```

This will give you access to the [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) for `ingotIron`.