# Block

## Fields 
Required Fields will never have a default value, empty defaults means null.

All Fields can be set via set`Name` e.g. `block.setUnlocalizedName("name");` and gotten via get`Name`;

|Name                |Type                                                                                       |Required |Default Value                 |Notes                                                                                    |
|--------------------|-------------------------------------------------------------------------------------------|---------|------------------------------|-----------------------------------------------------------------------------------------|
|UnlocalizedName     |String                                                                                     |Yes      |                              |Name, should be all lowercase                                                            |
|CreativeTab         |[CreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_tab)                 |No       |Misc                          |The Creative tab the item will appear in                                                 |
|FullBlock           |boolean                                                                                    |No       |True                          |Can you see passed this block to those around it                                         |
|LightOpacity        |int                                                                                        |No       |255 if fullBlock is true or 0 |Does Light pass through                                                                  |
|Translucent         |boolean                                                                                    |No       |false                         |Is see through                                                                           |
|LightValue          |int                                                                                        |No       |0                             |Light level of block, max 15                                                             |
|BlockHardness       |float                                                                                      |No       |5.0                           |How long it takes to break                                                               |
|BlockResistance     |float                                                                                      |No       |5.0                           |Explosion resistance                                                                     |
|ToolClass           |String                                                                                     |No       |pickaxe                       |Tool required to Break Block                                                             |
|ToolLevel           |int                                                                                        |No       |2                             |Tool Level required to Break Block                                                       |
|BlockSoundType      |[SoundType](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition)                 |No       |Metal                         |The Block's sound type (determines things like the breaking sound)                       |
|BlockMaterial       |[IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition)        |No       |Iron                          |The Block's base material                                                                |
|EnumBlockRenderType |String                                                                                     |No       |"MODEL"                       |"INVISIBLE", "LIQUID", "ENTITYBLOCK_ANIMATED", "MODEL"  → Sets how the block is rendered |
|Slipperiness        |float                                                                                      |No       |0.6f                          |Ice blocks are 0.98f                                                                     |
|OnBlockPlace        |[IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction) |No       |                              |Called when Block is placed.                                                             |
|OnBlockBreak        |[IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction) |No       |                              |Called when Block is broken.                                                             |
|onUpdateTick        |[IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction) |No       |                              |Called when Block receives a block update.                                               |
|onRandomTick        |[IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction) |No       |                              |Called on a random tick event.                                                           |
|BlockLayer          |String                                                                                     |No       |"SOLID"                       |"SOLID", "CUTOUT_MIPPED", "CUTOUT", "TRANSLUCENT"                                        |
|axisAlignedBB       |[MCAxisAlignedBB](/Mods/ContentTweaker/Vanilla/Types/Block/MCAxisAlignedBB)                |No       |Full Block                    |Lets you set the block's bounding box                                                    |

## Examples
```
#loader contenttweaker

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