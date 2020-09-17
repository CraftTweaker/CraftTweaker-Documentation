# Fluid

これにより、ゲームに流体を追加することができます!

## 流体表示を作成

流体を追加する前に 追加する流体のプロパティを設定できる流体表示を作成する必要があります。  
[VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) がある場所:

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

## 表示パッケージをインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.Fluid;`

## ZenProperties

プロパティを取得/設定するには、respecting ZenGetters/SettersまたはZenMethodsを使用できます。

```zenscript
//プロパティ名: density
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.density= 500;
//ZenMethods
fluid.getDensity();
fluid.setDensity(1000);
```

| プロパティ名          | タイプ                                                                                      | 必須  | デフォルト値                           | 説明/メモ                                                          |
| --------------- | ---------------------------------------------------------------------------------------- | --- | -------------------------------- | -------------------------------------------------------------- |
| unlocalizedName | 文字列                                                                                      | はい  |                                  | 名前はすべて小文字でなければなりません                                            |
| density         | int                                                                                      | いいえ | 1000                             | 流体の中をどれくらい速く歩けるか。                                              |
| gaseous         | boolean型                                                                                 | いいえ | false                            | 流体ガス状(下方に流れるのではなく上方に流れる)ですか?                                   |
| 明るさ             | int                                                                                      | いいえ | 0                                | 流体によって放出される光のレベル                                               |
| 温度              | int                                                                                      | いいえ | 300                              | Fluidの温度                                                       |
| 色               | int                                                                                      | はい  |                                  | Fluidのカラーコード                                                   |
| colorize        | boolean型                                                                                 | いいえ | true                             | 流体の色コードは適用されますか?                                               |
| レア度             | 文字列                                                                                      | いいえ | 一般的な                             | 流体の希少性は、ToolTipの色を決定します ("COMMON", "UNCOMMON", "RARE", "EPIC") |
| 粘度|粘度           | int型                                                                                     | いいえ | 1000                             | 流体がどのくらい速く広がるか                                                 |
| fillSound       | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | いいえ | ITEM_BUCKET_FILL               | 液体がバケツで拾われたときに音が鳴ります                                           |
| emptySound      | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | いいえ | format@@0 number@@1              | 流体を配置したときの音                                                    |
| 気化する            | boolean型                                                                                 | いいえ | false                            | オランダに置かれると気化しますか?                                              |
| still Location  | 文字列                                                                                      | いいえ | contenttweaker:fluids/fluid      | 液体のテクスチャを見つける場所                                                |
| flowingLocation | 文字列                                                                                      | いいえ | contenttweaker:fluids/fluid_flow | 流れる流体のテクスチャを見つける場所                                             |
| 材料              | [IMaterial定義](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)             | いいえ | WATER                            | 流体が作られている材料                                                    |

## 流体の登録

You need to call this method to register the fluid in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the fluid or change any of it's properties!

```zenscript
fluid.register();
```

## スクリプト例

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;
import mods.contenttweaker.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex("FF69B4"));
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## 流体のローカライズ中

対応する言語ファイルに `fluid.fluidName = Localized Name` を追加する必要があります。 あるいは、CraftTweakerの [ローカライズ機能](/Vanilla/Game/IGame/)を使用することもできますが、言語ファイルを使用することをお勧めします。