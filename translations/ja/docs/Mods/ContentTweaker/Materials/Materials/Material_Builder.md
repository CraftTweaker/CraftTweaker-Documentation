# Material Builder

[材料](/Mods/ContentTweaker/Materials/Materials/Material/)を作るには、Material Builderが必要です。  
難しく聞こえないでしょうか？

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.MaterialBuilder;`

## そのようなオブジェクトを取得しています

[MaterialSystem Package](/Mods/ContentTweaker/Materials/MaterialSystem/) を使用して、新しい明確なビルダーを取得できます。

```zenscript
var mBuilder = mods.contenttweaker.MaterialSystem.getMaterialBuilder();
```

## 材料のプロパティを設定

これらのプロパティを設定できます。

| ZenMethod               | パラメータ                                                            |
| ----------------------- | ---------------------------------------------------------------- |
| setName(name)           | 文字列名                                                             |
| setColor(color)         | int color                                                        |
| setColor(color)         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| setHasEffect(hasEffect) | boolean hasEffect                                                |

すべてのこれらのメソッドは2つのことを行います: まず、ビルダーのプロパティを変更し、次に修正されたビルダーを返します。  
この意味を以下に示す例のスクリプトで確認できます。

## 実際に材料を作る

材料を作るには、それを作る必要があります。

```zenscript
mBuilder.build();
```

これは [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/) オブジェクトを返します。

## スクリプト例

```zenscript
import mods.contentTweaker.MaterialSystem;

var builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urubuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubuntu = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build();
```