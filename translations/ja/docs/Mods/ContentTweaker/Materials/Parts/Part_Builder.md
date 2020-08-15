# パーツビルダー

[パーツ](/Mods/ContentTweaker/Materials/Parts/Part/)を作るには、パートビルダーが必要です！  
難しく聞こえないでしょうか？

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.PartBuilder;`

## そのようなオブジェクトを取得しています

[MaterialSystem Package](/Mods/ContentTweaker/Materials/MaterialSystem/) を使用して、新しい明確なビルダーを取得できます。

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
```

## 部品のプロパティを設定

これらのプロパティを設定できます。

| ZenMethod                           | パラメータ                                                               |
| ----------------------------------- | ------------------------------------------------------------------- |
| setHasOverlay(hasOverlay)           | boolean hasOverlay                                                  |
| setName(name)                       | 文字列名                                                                |
| setPartType(partType)               | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) partType |
| setOreDictName(prefix)              | 文字列プレフィックス                                                          |
| setAdditionalOreDictNames(prefixes) | ストリング... prefixes                                                   |

すべてのこれらのメソッドは2つのことを行います: まず、ビルダーのプロパティを変更し、次に修正されたビルダーを返します。  
この意味を以下に示す例のスクリプトで確認できます。

## 実際に材料を作る

材料を作るには、それを作る必要があります。

```zenscript
pBuilder.build();
```

これは [パート](/Mods/ContentTweaker/Materials/Parts/Part/) のオブジェクトを返します。

## スクリプト例

```zenscript
var pBuilder = mods.contentTweaker.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item"));
var denseGearPart = pBuilder.build();

var denseIngotPart = mods.contentTweaker.MaterialPartBuilder().setName("dense_ingot").setPartType(mods.content弱者.MaterialSystem.getPartType("Type"item").setOreDictName("superIngot").build();
```

## 注目すべき情報

### 材料部品のローカライズ中

The items you create with your new part will generally be named `contenttweaker.part.partname`  
If you want your item to include the material name, you will need to localize it, preferably in CoT's language files which can be found at `Resources/contenttweaker/lang`.  
Instead of the material name you write `%s`, so naming the dense gears ans ingots created above would look like this:

    contenttweaker.part.dense_gear=Dense %s Gear
    contenttweaker.part.dense_ingot=Dense %s Ingot
    

### テクスチャの追加

The items you create with your new part will look a bit edgy to you.  
If you want your part to have a specific icon you will need to add a `partname.png` file to `Resources/contenttweaker/textures/items`.  
So, giving the dense gears a texture would require us to add a file called `gear_dense.png` to that folder.