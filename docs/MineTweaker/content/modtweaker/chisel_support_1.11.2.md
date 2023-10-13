# Chisel Support 1.11.2
## Handlers Supported
The following handlers are supported:

* Groups
* Variations

Groups are the overall types variations can be chiseled in. For example Cyan Hex Plating would be the Variation of the Group Hex Plating.

Each of these handlers can have recipes added or removed:
```zenscript
//Groups
//Group
mods.chisel.Groups.addGroup("hardenedclay"); 
//Group
mods.chisel.Groups.removeGroup("andesite"); 

//Variations
//Group, ItemStack
mods.chisel.Groups.addVariation("hardenedclay", <minecraft:stained_hardened_clay:*>);
//ItemStack
mods.chisel.Groups.removeVariation(<chisel:hexPlating>);
```