# Caminar

## Después de instalar

First things first, before starting to create Blocks and such, it is suggested you run Minecraft at least once with ContentTweaker installed. Esto permitirá a ContentTweaker crear la carpeta de recursos que necesita.

## Carpetas importantes

ContentTweaker debe crear una carpeta extra en tu directorio minecraft: "resources". The resources folder will be where all models, textures, and language files will be found. Más información en esta carpeta se explicará más adelante. The "scripts" folder added by CraftTweaker is where you should put all ContentTweaker scripts, however ContentTweaker scripts should begin with ```#loader contenttweaker``` en la parte superior del archivo.

## Primer bloque

So for the best example of how ContentTweaker's content works, I'll be showing you one of the basic content pieces you will be creating, a block. There is other content that can be created, but I won't be including them in this walk-through. Así que primero arriba, aquí está el script para el bloque que voy a usar como ejemplo. Explanation of these methods can be found at the Blocks Page.

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:ice>);
antiIceBlock.setLightOpacity(3);
antiIceBlock.setLightValue(0);
antiIceBlock. etBlockHardness(5.0);
antiIceBlock.setBlockResistance(5.0);
antiIceBlock.setToolClass("pickaxe");
antiIceBlock.setToolLevel(0);
antiIceBlock.setBlockSoundType(<soundtype:snow>);
antiIceBlock.setSlipperiness(0.3);
antiIceBlock.register();
```

Esto creará un bloque que se ve y actúa ligeramente como el bloque de hielo de Minecraft. You will want to put this script in the 'scripts' folder, following the same rules as in CraftTweaker's scripts.

## Recursos

You will also need to take a .png file and put it into 'resources/contenttweaker/textures/blocks' (This folder should be created for you, if you have run ContentTweaker already) The name of the file should match the name you put into createBlock, which in this case is 'anti_ice'. If you are planning on using a default cube shape with the block, ContentTweaker will generate the model jsons needed for it to function correctly.

La otra parte para esto será el archivo de idioma. ContentTweaker will have already generated the en_us.lang file you will need to a line that will look like `tile.contenttweaker.<block_name>.name=Block name` or in our case with the AntiIce it will be `tile.contenttweaker.anti_ice.name=Anti Ice`. With both lang and texture filed in, you should be able to load up the game and see your block which will have a model, texture, and name.