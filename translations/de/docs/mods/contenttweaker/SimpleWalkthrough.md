# Simple Walkthrough

Hey there, kindlich here. So you're trying out ContentTweaker for 1.15, huh?

Sometimes I'll usually abbreviate ContentTweaker with CoT to spare me a few letters (it's more an automatism from Discord already), so stay with me, okay? Then, first I recommend you also install a resource manager mod, so that the blocks/items that you have a way of adding textures and models for blocks and items later on.

ContentTweaker will try to create model files as well as a simple no-texture image in your resource folder, as long as it detects either the mod [The loader](https://www.curseforge.com/minecraft/mc-mods/the-loader) or [Open Loader](https://www.curseforge.com/minecraft/mc-mods/open-loader) installed. If neither of these is installed, it will only print a message to the log stating that it won't create textures for you. At some point it will also be possible to disable the generation of textures altogether, but not in the curren Alpha/Beta build.

For the generated textures, CoT will not override files if they already exist, so you can simple replace the existing files with your own ones and CoT will not undo these changes.


Now, let's get to it, shall we? I will give examples for some simple blocks and items. If you want to see everything these classes support, you can find the API export in the API folder right below this file in the navbar!

## Loader ContentTweaker
Since CraftTweaker in 1.14+ will load while the server is up and running, we need a way to load scripts somewhere else. That is what the `#loader contenttweaker` is for!  
Simply put it somewhere in (preferable the top of) your file and you're set to go.  
Remember **no crafttweaker scripts are allowed** in `#loader contenttweaker`as they run at different phases of the laod cycle!


## Blocks

For creating blocks you need to create a [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) object.  
Once you have that you can set most simple properties in a builder pattern.

You could then directly call `build(name)` on it and be done if you want to create a basic block.  
Or you could specialize the builder using `withType` and provide a specialized builder class, for example [BuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) or [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable). Check their respective pages to see what additional features they offer. Be aware that once you do the withType call, there is no going back, so set all basic properties before that call.

Remember, whatever you do, at the end of the chain you **need a `build(name)` call**, since otherwise nothing will happen!

Enough spoken, you want a copy/paste example, do you?

```zenscript
#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
import mods.contenttweaker.block.basic.BlockBuilderBasic;
import mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable;


//The simplest way, uses blockamterial IRON
new BlockBuilder()
    //Will delegate to the Basic Builder
    .build("generic_block");


//Sets a different block material.
new BlockBuilder(<blockmaterial:earth>)
    .withType<BlockBuilderBasic>()
    .build("earth_like_block");


//The Pillar Type is basically the same as logs, one texture on top/bottom and one for the sides.
//Can be rotated on all axes, just like logs.
//Texture names by default will be "block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noarg");


//Stairs.
//Has 3 Textures, top, bottom, sides, by default they will be "block_name" + "_top", "_bottom", "_sides"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("stairs_noarg");
```


## Items

For items you more or less do the same, but this time you need an [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder).  
You can again, either use a `build(name)` directly, or switch to a specialized version using `withType`.  
At the time of this writing there only exists [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool), though.

Remember, whatever you do, at the end of the chain you **need a `build(name)` call**, since otherwise nothing will happen!

Enough spoken, you want a copy/paste example, do you?
```zenscript
#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.item.tool.ItemBuilderTool;

//The simplest way of creating items.
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//With setting properties
new ItemBuilder()
    .withMaxStackSize(16) //MaxStackSize and MaxDamage contradict each other, so only use 1
    .build("other_item");


//If you want tools you'll need to set the type.
//From the moment of setting the type you will switch contexts, so the other methods will no longer be available.
//That means, that you need to set durability and the like _before_ the withType call.
new ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    .withToolType(<tooltype:axe>, 1) //Axe harvest level = 1
    .withToolType(<tooltype:shovel>, 3, 4.0F) //Shovel harvest level 3 and destroy speed 4.0
    .build("my_tool");



//If you want a tool that does damage, you can also use the tool type
new ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5.0F)
    .withDurabilityCostAttack(1) //By default: 2
    .build("my_mace");

```

## Names
So, how would you go about giving items proper names?  
For that, you need a lang file.  
At the time of this writing CoT did not yet create that one for ya, so you will need to create it yourself.  
In your resource pack, find the `assets/contenttweaker` folder.  
In there, create a folder named `lang` if it does not yet exist, and create a file named `en_us.json` in there.  
I recommend always starting with the en_us one, since that is what the game will fall back to if it cannot find the name for another language. Afterwards feel free to repeat this with other lang codes as well.

In there you will have to create a Key-Value map for your entries. The keys, also called Translation keys, or in earlier versions unlocalized Name, are dependent on the name of the block/item you used, and they will look like
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
For the value, you can set how the item is named ingame in there. If you are unsure about the syntax, check the example below, or try a JSON Validator if you got the syntax down.


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
{
  "block.contenttweaker.generic_block": "Generic Block",
  "item.contenttweaker.generic_item": "Generic Item",
  "item.contenttweaker.generic_item_2": "Generic Item the 2nd",
  "item.contenttweaker.generic_item_3": "Generic Item the charmed one"
}
```