# ブロック

## フィールド

必須項目は決してデフォルト値を持たず、空のデフォルトはnullを意味します。

すべてのフィールドは`名前` で設定できます。例: `block.setUnlocalizedName("name");` を経由して取得します。`名前`;

| 名称               | タイプ                                                                                                     | 必須  | デフォルト値                                                                                             | メモ                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------- | --- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| axisAlignedBB    | [MCAxisAlignedBB](/Mods/ContentTweaker/Vanilla/Types/Block/MCAxisAlignedBB/)                            | いいえ | 完全なブロック                                                                                            | ブロックのバウンディングボックスを設定しましょう                                                                |
| beaconBase       | boolean型                                                                                                | いいえ | false                                                                                              | このブロックはビーコンの拠点の一部として使用できますか？                                                            |
| blockColorサプライヤー | [IBlockColorサプライヤー](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockColorSupplier/) | いいえ | 色として-1                                                                                             | ブロックの色                                                                                  |
| blockHardness    | float型                                                                                                  | いいえ | 5.0                                                                                                | 壊れるまでにかかる時間                                                                             |
| blockLayer       | 文字列型                                                                                                    | いいえ | "SOLID"                                                                                            | "SOLID", "CUTOUT_MIPPED", "CUTOUT", "TRANSLUTENT"                                       |
| blockMaterial    | [IMaterial定義](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)                            | いいえ | 合金                                                                                                 | ブロックの基本素材                                                                               |
| blockResistance  | float型                                                                                                  | いいえ | 5.0                                                                                                | 耐爆発性                                                                                    |
| blockSoundType   | [サウンドタイプ](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/)                               | いいえ | 合金                                                                                                 | ブロックのサウンドタイプ（壊れる音のようなものを決定します）                                                          |
| creativeTab      | [CreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                             | いいえ | その他                                                                                                | アイテムが表示されるクリエイティブタブ                                                                     |
| dropHandler      | [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/)   | いいえ |                                                                                                    | アイテムが表示されるクリエイティブタブ                                                                     |
| entitySpawnable  | boolean型                                                                                                | いいえ | true                                                                                               | このブロックにエンティティがスポーンするのを防ぐために使用できます。                                                      |
| enumRenderType   | 文字列型                                                                                                    | いいえ | "MODEL"                                                                                            | "INVISIBLE", "LIQUID", "ENTITYBLOCK_ANIMATED", "MODEL" → Sets how the block is rendered |
| fullBlock        | boolean型                                                                                                | いいえ | True                                                                                               | レンダリングとライト計算に使用                                                                         |
| 重力|重力|重力|<unk>   | boolean型                                                                                                | いいえ | false                                                                                              | このブロックは重力によって影響を受けますか？                                                                  |
| 商品カラーサプライヤー      | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/) | いいえ | 色として-1                                                                                             | アイテム形式のブロックの色                                                                           |
| lightOpacity     | int                                                                                                     | いいえ | 255 if fullBlock is true or 0                                                                      | 光が通過する                                                                                  |
| lightValue       | int                                                                                                     | いいえ | 0                                                                                                  | ブロックの明るいレベルは、0-1 の範囲です。 この値には15を掛けて最終値を決定します。                                           |
| onBlockBreak     | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)             | いいえ |                                                                                                    | ブロックが壊れたときに呼び出されます。                                                                     |
| onBlockPlace     | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)             | いいえ |                                                                                                    | ブロックが置かれたときに呼び出されます。                                                                    |
| onRandomTick     | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)             | いいえ |                                                                                                    | ランダムティックイベントで呼び出されます。                                                                   |
| onUpdateTick     | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)             | いいえ |                                                                                                    | ブロックがブロックの更新を受け取ったときに呼び出されます。                                                           |
| passable         | boolean型                                                                                                | いいえ | 提供されている [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) に応じて、 | プレイヤーはこのブロックを通過できますか？                                                                   |
| 交換可能             | boolean型                                                                                                | いいえ | 提供されている [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) に応じて、 | このブロックを別のブロックに置き換えることはできますか？                                                            |
| 滑りやすい            | float型                                                                                                  | いいえ | 0.6f                                                                                               | 氷ブロックは0.98fです                                                                           |
| textureLocation  | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                  | いいえ | null                                                                                               | ブロックのリソースの場所。テクスチャなどに使用されます。                                                            |
| toolClass        | 文字列型                                                                                                    | いいえ | ツルハシ                                                                                               | ブロックを破壊するために必要なツール                                                                      |
| toolLevel        | int                                                                                                     | いいえ | 2                                                                                                  | ブロックを破壊するために必要なツールレベル                                                                   |
| 半透明の             | boolean型                                                                                                | いいえ | false                                                                                              | を通して見ることができます                                                                           |
| unlocalizedName  | 文字列型                                                                                                    | はい  |                                                                                                    | 名前はすべて小文字でなければなりません                                                                     |
| witherProof      | boolean型                                                                                                | いいえ | false                                                                                              | ウィザーはこのブロックを破壊できますか？                                                                    |

## 使用例

```zenscript
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

## ブロックのローカライズ中

You will need to add `tile.contenttweaker.blockName = Localized Name` to the responding language files.  
Alternatively, you could use CraftTweaker's [localization feature](/Vanilla/Game/IGame/), though it's recommended using the language files!