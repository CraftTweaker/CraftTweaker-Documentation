# 部品タイプ

PartType は、複数の部品が適合するグループとして見ることができます。例えば、 `アイテム`

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.PartType;`

## そのようなオブジェクトを取得しています

You can use the [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) to either retrieve an existing PartType object or create an entirely new one.  
Check out below entry to learn how to create a new PartType.

<details>
    <summary>以下のタイプが事前登録されています:</summary>
    <ul>
        <li>項目</li>
        <li>ブロック</li>
        <li>鉱石</li>
        <li><unk></li>
        <li>アーマー</li>
        <li>minecart</li>
    </ul>
</details>

## ZenMethods

PartType から次の情報を取得できます:

| ZenMethod | 戻り値 |
| --------- | --- |
| getName() | 文字列 |

PartType: では、以下の情報を設定できます。

| ZenMethod                       | パラメータタイプ                                                                     |
| ------------------------------- | ---------------------------------------------------------------------------- |
| setData(IPartDataPiece[] data); | [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)[] data |

## 新しい部品タイプを作成

何らかの理由で新しいPartTypeを登録する必要がある場合は、次の2つのことを知る必要があります:

- 新しいpartTypeの名前は何ですか？
- How [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) created from [Parts](/Mods/ContentTweaker/Materials/Parts/Part/) that are of this type will be registred

1つ目はシンプルで、文字列です。  
2つ目は少しトリッキーで、MaterialPartを入力として受け取る関数です。

```zenscript
#loader contenttweaker


import mods.contenttweaker.MaterialSystem;

val ourType = MaterialSystem.createPartType("cool_type", function(materialPart){

});

//Use the new type to create a Part
val ourPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Create a new Material and register the newly created part.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```