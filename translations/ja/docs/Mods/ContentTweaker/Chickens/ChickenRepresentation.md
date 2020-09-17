# ChickenRepresentation

The ChickenRepresentation is a template of what your Chicken will do.  
By default, it will only exist and lay the egg you gave it as initial parameter.  
You can change this behavior to allow for better chickens by modifying the given properties.

## クラスのインポート

クラスをインポートしますか？ こちらへ：

```zenscript
import mods.contenttweaker.Chicken;
```

## ニワトリの登録

あなたのchickenRepresentationをあなたが望むものに設定した後、最も重要な部分はそれを登録することです。  
ただし、登録後にこのテンプレートに変更が加えられた場合でも有効になりますのでご注意ください。 だから、あなたがしたい各鶏のために新しいchickenRepresentationを作成する必要があります。

## ZenProperties

`オブジェクトにより、プロパティの現在の値を変更または取得できます。 ame = newValue <code> または` methods `object.setName(newValue);`

例

```zenscript
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| 名前              | タイプ                                                                                    |
| --------------- | -------------------------------------------------------------------------------------- |
| name            | 文字列                                                                                    |
| layItem         | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| dropItem        | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| backgroundColor | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                             |
| foregroundColor | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                             |
| textureLocation | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| spawnType       | 文字列                                                                                    |
| layCoefficient  | float型                                                                                 |
| parentOne       | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo       | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |