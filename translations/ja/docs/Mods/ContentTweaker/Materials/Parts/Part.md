# パート

部品とは、例えばギアや鉱石など、アイテムが入っている形のことです。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.Part;`

## そのようなオブジェクトを取得しています

[MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) を使用して既存の部品を取得するか、 [部品ビルダー](/Mods/ContentTweaker/Materials/Parts/Part_Builder/) を使用して全く新しい部品を作成することができます。

<details>
    <summary>以下のタイプが事前に登録されています (見出しは <a href="../PartType">部品タイプ</a> です):</summary>
    <h4>アイテム:</h4>
        <ul>
            <li>ビーム<img src="../Assets/beam.png" alt="アイコン"></li>
            <li>ボルト<img src="../Assets/bolt.png" alt="アイコン"></li>
            <li>Casing<img src="../Assets/casing.png" alt="アイコン"></li>
            <li>クランプします。<img src="../Assets/clump.png" alt="アイコン"></li>
            <li>クリスタル<img src="../Assets/crystal.png" alt="アイコン"></li>
            <li>粉砕した鉱石<img src="../Assets/crushed_ore.png" alt="アイコン"></li>
            <li>高密度の板（高密度の板）<img src="../Assets/dense_plate.png" alt="アイコン"></li>
            <li>Dirty Dust (dirty_dust)<img src="../Assets/dirty_dust.png" alt="アイコン"></li>
            <li>粉末<img src="../Assets/dust.png" alt="アイコン"></li>
            <li>装備<img src="../Assets/gear.png" alt="アイコン"></li>
            <li>Ingot<img src="../Assets/ingot.png" alt="アイコン"></li>
            <li>ナゲット<img src="../Assets/nugget.png" alt="アイコン"></li>
            <li>プレート<img src="../Assets/plate.png" alt="アイコン"></li>
            <li>Rod<img src="../Assets/rod.png" alt="アイコン"></li>
            <li>シャード<img src="../Assets/shard.png" alt="アイコン"></li>
        </ul>
    <h4>ブロック:</h4>
        <ul>
            <li>ブロック<img src="../Assets/block.png" alt="アイコン"></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>鉱石</li>
            <li>Dense Ore (dense_ore)</li>
            <li>貧弱な鉱石(貧乏)</li>
        </ul>
    <h4>流体:</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>よろいかぶと <img src="../Assets/armor_head.png" alt="ヘッドアイコン"><img src="../Assets/armor_chest.png" alt="チェストアイコン"><img src="../Assets/armor_legs.png" alt="レッグアイコン"><img src="../Assets/armor_feet.png" alt="足のアイコン"></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## フィールド

部品から次の情報を取得できます:

| ZenMethod                 | 戻り値                                                                         |
| ------------------------- | --------------------------------------------------------------------------- |
| hasOverlay()              | boolean型                                                                    |
| getName()                 | 文字列                                                                         |
| getUnlocalizedName()      | 文字列                                                                         |
| getShortUnlocalizedName() | 文字列                                                                         |
| getPartType()             | [部品タイプ](/Mods/ContentTweaker/Materials/Parts/PartType/)                     |
| getPartTypeName()         | 文字列                                                                         |
| getOreDictPrefix()        | 文字列                                                                         |
| getData()                 | List<[IPartDataPie](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## 材料に登録する

この部品に1つまたは複数の材料を登録するために使用することができます

```zenscript
part.registerToMaterial(Material material);
part.registerToMaterials(Material[] materials);
```

関数は単一の [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) オブジェクトまたはリストを返します。 一度に1つまたは複数の資料を登録するかどうかによって異なります