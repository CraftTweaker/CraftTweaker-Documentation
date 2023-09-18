# ContentTweaker:BlockItem Support
## Handlers Supported
The following handlers are supported:

* Blocks
* Items
Groups are the overall types variations can be chiseled in. For example Cyan Hex Plating would be the Variation of the Group Hex Plating.

Each of these handlers can have recipes added or removed:

```
Parameters with '@Optional' are optional and can be left out

//Blocks
//
//LocalizedNameString, UnlocalizedNameString, MaterialNameString, TextureNameString, @Optional CreativeTabString, renderType , @Optional IItemStackArrayDrops, @Optional Unbreakable, @Optional DoubleHardness, @Optional FloatLightLevel, @Optional IntLightOpacity
mods.content.Block.registerBlock("Content", "content_block", "rock", "content_block", "misc", 1, [<minecraft:dirt>, <minecraft:diamond>], false, 0.5f, 0.8f, 2);

//Items
//LocalizedNameString, UnlocalizedNameString, TextureNameString, CreativeTabString, MaxDamage, MaxStackSize, ToolTypeString, ToolLevel, isFull3D, LoreArrayString
mods.content.Item.registerItem("Content", "content", "content_item", "misc', 50, 1, "pickaxe", 2, true, ["I am the tooltip text", "I am also!"]);
```

## Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.
```
/mt [] - Outputs a list of /
```