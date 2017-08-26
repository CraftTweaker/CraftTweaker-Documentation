# Walk-Through 

## After Install
First things first, before starting to create Blocks and such, it is suggested you run Minecraft at least once with
ContentTweaker installed. This will allow ContentTweaker to create the cot-scripts folder, and the resource folders
that it needs.

## Important Folders
ContentTweaker should create two folders in your minecraft directory: "cot-scripts" and "resources". "cot-scripts"
should be the location of all scripts related to ContentTweaker, as in most cases CraftTweaker scripts run too late for
ContentTweaker to properly generate the objects. "resources" will be where all models, textures, and language files will
be found. More on this folder will be explained later.

## First Block
So for the best example of how ContentTweaker's Objects works, I'll be showing you one of the basic objects you will be 
creating, a block. There are other objects that can be created, but I won't be including them in this 
walk-through. So first up, here is the script for the block I will using as example. Explanation of these methods can
be found at the Blocks Page.
```
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:ice>);
antiIceBlock.setLightOpacity(3);
antiIceBlock.setLightValue(0);
antiIceBlock.setBlockHardness(5.0);
antiIceBlock.setBlockResistance(5.0);
antiIceBlock.setToolClass("pickaxe");
antiIceBlock.setToolLevel(0);
antiIceBlock.setBlockSoundType(<soundtype:snow>);
antiIceBlock.setSlipperiness(0.3);
antiIceBlock.register();
```
This will create a Block that looks and acts slightly like Minecraft's Ice Block. You will want to put this script in
the 'cot-scripts' folder, following the same rules as in CraftTweaker's scripts. 

## Resources
You will also need to take a .png file and put it into 'resources/contenttweaker/textures/blocks' (This folder should be 
created for you, if you have run ContentTweaker already) The name of the file should match the name you put into 
createBlock, which in this case is 'anti_ice'. If you are planning on using a default cube shape with the block, 
ContentTweaker will generate the model jsons needed for it to function correctly.

The other part for this will be the language file. ContentTweaker will have already generated the en_us.lang file you 
will need to a line that will look like `tile.contenttweaker.<block_name>=Block name` or in our case with the AntiIce it 
will be `tile.contenttweaker.anti_ice=Anti Ice`. With both lang and texture filed in, you should be able to load up the 
game and see your block which will have a model, texture, and name.

