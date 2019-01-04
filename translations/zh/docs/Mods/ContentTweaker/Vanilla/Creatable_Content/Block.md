# Block

## Fields

Required Fields will never have a default value, empty defaults means null.

All Fields can be set via set`Name` e.g. `block.setUnlocalizedName("name");` and gotten via get`Name`;

| 名称                  | Type                                                                                                      | Required | Default Value                                                                                                  | Notes                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| axisAlignedBB       | [MCAxisAlignedBB](/Mods/ContentTweaker/Vanilla/Types/Block/MCAxisAlignedBB/)                              | No       | Full Block                                                                                                     | Lets you set the block's bounding box                                                   |
| beaconBase          | boolean                                                                                                   | No       | false                                                                                                          | Can this block be used as part of a beacon's base?                                      |
| blockColorSupplier  | [IBlockColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockColorSupplier/) | No       | -1 as color                                                                                                    | The block's color                                                                       |
| blockHardness       | float                                                                                                     | No       | 5.0                                                                                                            | How long it takes to break                                                              |
| blockLayer          | String                                                                                                    | No       | "SOLID"                                                                                                        | "SOLID", "CUTOUT_MIPPED", "CUTOUT", "TRANSLUCENT"                                       |
| blockMaterial       | [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)                      | No       | Iron                                                                                                           | The Block's base material                                                               |
| blockResistance     | float                                                                                                     | No       | 5.0                                                                                                            | Explosion resistance                                                                    |
| blockSoundType      | [SoundType](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/)                               | No       | Metal                                                                                                          | The Block's sound type (determines things like the breaking sound)                      |
| creativeTab         | [CreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                               | No       | Misc                                                                                                           | The Creative tab the item will appear in                                                |
| dropHandler         | [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/)     | No       |                                                                                                                | The Creative tab the item will appear in                                                |
| entitySpawnable     | boolean                                                                                                   | No       | true                                                                                                           | Can be used to prevent any entities from spawning on this block                         |
| enumBlockRenderType | String                                                                                                    | No       | "MODEL"                                                                                                        | "INVISIBLE", "LIQUID", "ENTITYBLOCK_ANIMATED", "MODEL" → Sets how the block is rendered |
| fullBlock           | boolean                                                                                                   | No       | True                                                                                                           | Used for rendering and light calculations                                               |
| gravity             | boolean                                                                                                   | No       | false                                                                                                          | Is this block affected by gravity                                                       |
| itemColorSupplier   | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)   | No       | -1 as color                                                                                                    | The block's color when it is in item form                                               |
| lightOpacity        | int                                                                                                       | No       | 255 if fullBlock is true or 0                                                                                  | Does Light pass through                                                                 |
| lightValue          | int                                                                                                       | No       | 0                                                                                                              | Light level of block, max 15                                                            |
| onBlockBreak        | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | No       |                                                                                                                | Called when Block is broken.                                                            |
| onBlockPlace        | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | No       |                                                                                                                | Called when Block is placed.                                                            |
| onRandomTick        | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | No       |                                                                                                                | Called on a random tick event.                                                          |
| onUpdateTick        | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | No       |                                                                                                                | Called when Block receives a block update.                                              |
| passable            | boolean                                                                                                   | No       | Depending on the [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) provided | Can players pass through this block?                                                    |
| replaceable         | boolean                                                                                                   | No       | Depending on the [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) provided | Can this block be replaced by another block?                                            |
| slipperiness        | float                                                                                                     | No       | 0.6f                                                                                                           | Ice blocks are 0.98f                                                                    |
| textureLocation     | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                    | No       | null                                                                                                           | The block's resource location, used for textures etc.                                   |
| toolClass           | String                                                                                                    | No       | pickaxe                                                                                                        | Tool required to Break Block                                                            |
| toolLevel           | int                                                                                                       | No       | 2                                                                                                              | Tool Level required to Break Block                                                      |
| translucent         | boolean                                                                                                   | No       | false                                                                                                          | Is see through                                                                          |
| unlocalizedName     | String                                                                                                    | Yes      |                                                                                                                | Name, should be all lowercase                                                           |
| witherProof         | boolean                                                                                                   | No       | false                                                                                                          | Can Wither's destroy this block                                                         |

## Examples

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
    

## Localising the block

You will need to add `tile.contenttweaker.blockName = Localized Name` to the responding language files.  
Alternatively, you could use CraftTweaker's [localization feature](/Vanilla/Game/IGame/), though it's recommended using the language files!