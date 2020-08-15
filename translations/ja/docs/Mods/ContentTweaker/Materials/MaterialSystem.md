# MaterialSystem

MaterialSystemは、CT内から新しい材料を作成したり、既存の材料を取得したりするために使用されます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.MaterialSystem;`

## [IPartType](/Mods/ContentTweaker/Materials/Parts/PartType/)

### 作成

```zenscript
createPartType(String name, IRegisterMaterialPart registerMaterialPart)
```

必要なパラメータ:

- 文字列名: 部品タイプの名前 → 例: "dense_gear"
- [IRegisterMaterialPart](/Mods/ContentTweaker/Materials/Materials/Functions/IRegisterMaterialPart/) registerMaterialPart → マテリアル部品の作成方法を扱う機能。

### 保留する

```zenscript
getPartType(String name);
```

必要なパラメータ:

- String name: The part type's name → e.g. "gear" For a list of all available part types check [the part type page](/Mods/ContentTweaker/Materials/Parts/PartType/).

## [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)

### 作成

PartType とは異なり、マテリアルを直接作成することはできず、代わりに MaterialBuilder を使用する必要があります。 [MaterialBuilder エントリ](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) を確認して、これらを使用する正確な操作についての情報を確認します。

```zenscript
val MB MaterialSystem.getMaterialBuilder();
MB.setName("Urubuntium");
MB.setColor(0);
MB.setHasEffect(false);
var builtMaterial = MB.build();
```

### 保留する

```zenscript
getMaterial(String name);
```

必要なパラメータ:

- 文字列名: マテリアルの名前 → 例: "プラチナ"

## [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)

### 作成

PartType とは異なり、PartType を直接作成することはできず、代わりに PartBuilder を使用する必要があります。 これらをどうするかについては、 [パートエントリ](/Mods/ContentTweaker/Materials/Parts/Part/) を確認してください。

```zenscript
val PB = MaterialSystem.getPartBuilder();
```

### 保留する

```zenscript
getPart(String name);
```

必要なパラメータ:

- 文字列名: パート名

## [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)

### 作成

    createPartDataPiece(String name, boolean required)
    

必要なパラメータ:

- 文字列名: データピースの名前
- boolean required: データピースが必要ですか?

## 複数の材料パーツを登録する

Even though you can also do this using the [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) own functionality, this Method allows you to register [Parts](/Mods/ContentTweaker/Materials/Parts/Part/) for a given Material

```zenscript
registerPartsForMaterial(Material material, String[] partNames);
```

必要なパラメータ:

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/) material: The material that the registred parts should be made of
- String[] partNames: 登録する必要がある部品の名前 → 例: ["歯車", "インゴット"]

## 既に登録されているものを取得：

これらのメソッドを使用して、文字列をキーとし、オブジェクトを値としてマップを取得できます。

| メソッド名              | 戻り値                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------- |
| getMaterialParts() | [`マップ<String, IMaterialPart>`](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) |
| getMaterials()     | [`マップ<String, IMaterial>`](/Mods/ContentTweaker/Materials/Materials/Material/)         |
| getParts()         | [`マップ<String, IPart>`](/Mods/ContentTweaker/Materials/Parts/Part/)                     |
| getPartType()      | [`マップ<String, IPartType>`](/Mods/ContentTweaker/Materials/Parts/PartType/)             |

    import mods.contenttweaker.MaterialPart;
    
    val part = MaterialSystem.getMaterialPart("name"); ///as MaterialPart
    
    val partMap = MaterialSystem.getMaterialPartsByRegex(".*"); ///as MaterialPart[string]