# Block

## Fields 
Required Fields will never have a default value, empty defaults means null.

All Fields can be set via set<field_name> e.g. `block.setUnlocalizedName("name");` and gotten via get<field_name>;

|Name|Type|Required|Default Value|Notes|
|---|---|---|---|---|
|UnlocalizedName|String|Yes||Name, should be all lowercase|
|CreativeTab|CreativeTabs|No|Misc|See [[Resources|Resources]] for info|
|FullBlock|boolean|No|True|Can you see passed this block to those around it|
|LightOpacity|int|No|255 if fullBlock is true or 0|Does Light pass through|
|Translucent|boolean|No|false|Is see through|
|LightValue|int|No|0|Light level of block, max 15|
|BlockHardness|float|No|5.0|How long it takes to break|
|BlockResistance|float|No|5.0|Explosion resistance|
|ToolClass|String|No|pickaxe|Tool required to Break Block|
|ToolLevel|int|No|2|Tool Level required to Break Block
|BlockSoundType|SoundType|No|Metal|See [[Resources|Resources]] for info|
|BlockMaterial|Material|No|Iron|See [[Resources|Resources]] for info|
|EnumBlockRenderType|EnumBlockRenderType|No|"MODEL"|See [[Models|Models]] for info|
|Slipperiness|float|No|0.6f|Ice blocks are 0.98f|
|OnBlockPlace|IBlockAction|No||Called when Block is placed. See [[Functions|Functions]] for more info|
|OnBlockBreak|IBlockAction|No||Called when Block is broken. See [[Functions|Functions]] for more info|
|BlockLayer|BlockRenderLayer|No|"SOLID"|See [[Models|Models]] for info|

## Examples
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