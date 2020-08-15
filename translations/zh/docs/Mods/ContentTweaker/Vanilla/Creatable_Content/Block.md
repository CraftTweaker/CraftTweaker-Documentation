# 封禁

## 字段

必填字段将永远不会有默认值，空默认表示为空。

所有字段都可以通过设置`名称` 例如： `block.setUnlocalizedName(");` 并通过获取`名称`;

| 名称                    | 类型                                                                                                        | 必填 | 默认值                                                                                        | 注                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------- | -- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 轴对齐 BB                | [MCAxisAlignedBB](/Mods/ContentTweaker/Vanilla/Types/Block/MCAxisAlignedBB/)                              | 否  | 完整块                                                                                        | 让你设置方块的边界框                                                           |
| 信标基础                  | boolean                                                                                                   | 否  | false                                                                                      | 这个方块可以用作信标基地的一部分吗？                                                   |
| blockColorSupplier    | [IBlockColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockColorSupplier/) | 否  | -1 作为颜色                                                                                    | 方块的颜色                                                                |
| blockHardness         | float                                                                                                     | 否  | 5.0                                                                                        | 中断需要多长时间                                                             |
| blockLayer            | 字符串[string]                                                                                               | 否  | "SOLID"                                                                                    | "SOLID", "CUT_MIPPED", "CUTOUT", "TRANSLUCENT"                       |
| 块材料                   | [IMaterial定义](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)                              | 否  | 铁色                                                                                         | 块的基础材料                                                               |
| 阻塞抗性                  | float                                                                                                     | 否  | 5.0                                                                                        | 爆炸抗性                                                                 |
| blockSoundType        | [声音类型](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/)                                    | 否  | 金属类                                                                                        | 块的声音类型 (决定像破碎声音)                                                     |
| creativeTab           | [创建选项卡](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                     | 否  | 其他                                                                                         | 项目将出现在创建标签页                                                          |
| 下拉处理器                 | [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/)     | 否  |                                                                                            | 项目将出现在创建标签页                                                          |
| entitySpawnable       | boolean                                                                                                   | 否  | true                                                                                       | 可以用来阻止任何实体在这个方块上生成                                                   |
| 枚举方块渲染类型              | 字符串[string]                                                                                               | 否  | “MODEL”                                                                                    | "INVISIBLE", "LIQUID", "ENTITYBLOCK_ANIMATED", "MODEL" -- 设置方块是如何渲染的 |
| fullBlock             | boolean                                                                                                   | 否  | 真的                                                                                         | 用于渲染和光量计算                                                            |
| 重力                    | boolean                                                                                                   | 否  | false                                                                                      | 此方块是否受重力影响                                                           |
| 项目颜色提供商               | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)   | 否  | -1 作为颜色                                                                                    | 方块的颜色，当它是项目窗体                                                        |
| 光不透明度                 | 整数                                                                                                        | 否  | 255如果完全方块为true或0                                                                           | 亮度通过                                                                 |
| 亮度值                   | 整数                                                                                                        | 否  | 0                                                                                          | 方块的亮度，范围从0到1。 此值乘以15来确定最终值。                                          |
| onBlockBreak          | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | 否  |                                                                                            | 方块损坏时拨打电话。                                                           |
| onBlockplace          | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | 否  |                                                                                            | 方块放置时拨打电话。                                                           |
| 随机显示                  | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | 否  |                                                                                            | 随机呼叫一个刻录事件。                                                          |
| onUpdateTick          | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | 否  |                                                                                            | 当区块收到块更新时拨打电话。                                                       |
| passable              | boolean                                                                                                   | 否  | 根据提供的 [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) | 玩家可以通过此方块吗？                                                          |
| replaceable           | boolean                                                                                                   | 否  | 根据提供的 [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) | 这个方块能被另一个方块替换吗？                                                      |
| 滑块                    | 浮点数                                                                                                       | 否  | 0.6f                                                                                       | 冰块是 0.98f                                                            |
| textureLocation（材质位置） | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                    | 否  | 空的                                                                                         | 块的资源位置，用于纹理等                                                         |
| 工具类                   | 字符串[string]                                                                                               | 否  | 小斧子                                                                                        | 打破方块所需的工具                                                            |
| 工具级别                  | 整数                                                                                                        | 否  | 2                                                                                          | 打破方块所需的工具级别                                                          |
| translucent           | boolean                                                                                                   | 否  | false                                                                                      | 看过                                                                   |
| unlocalizedName       | 字符串[string]                                                                                               | 否  |                                                                                            | 名字，应该是所有小写                                                           |
| witerProof            | boolean                                                                                                   | 否  | false                                                                                      | Wither可以摧毁这个方块                                                       |

## 例子

```zenscript
#loader contenttfinfinder

import mods.contenttweeper.VanillaFactory;
import mods.contenttweeper.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:ice>);
antiIceBlock.setLightOpacity(3);
antiIceBlock.setLightValue(0);
antiIceBlock. etBlockHardness(5.0)；
antiIceBlock.setBlockResistance(5.0)；
antiIceBlock.setToolClass("pickaxe")；
antiIceBlock.setToolLevel(0)；
antiIceBlock.setBlockSoundType(<soundtype:snow>)；
antiIceBlock.setSlipperiness(0.3)；
antiIceBlock.register()；
```

## 方块本地化

您需要将 `tile.contenttweeper.blockName = 本地化名称` 添加到响应语言文件。  
或者，您可以使用 CraftTweaker 的 [本地化功能](/Vanilla/Game/IGame/)，尽管建议使用语言文件！