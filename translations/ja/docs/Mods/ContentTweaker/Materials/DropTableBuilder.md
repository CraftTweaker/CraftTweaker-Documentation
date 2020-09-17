# DropTableBuilder

DropTableBuilder は、複数のアイテムスタックを一度にドロップすることをサポートする鉱石やサンプルの「ドロップ」文字列を作成するために使用されます。 複数のアイテムと重み付きドロップを含むアイテムスタック。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.DropTableBuilder;`

## メソッド

これらのメソッドは、ドロップテーブルの作成と変更を可能にします。 すべてのビルダーメソッドは、実行されたビルダーを返し、メソッドの連鎖を可能にします。

| メソッド名           | 説明                                                       |
| --------------- | -------------------------------------------------------- |
| newSlot()       | 静的に実行する場合、またはドロップテーブルに新しいスロットを追加する場合は、新しいドロップテーブルを作成します。 |
| addItem()       | 指定したアイテムをドロップテーブルの現在のスロットに追加します。                         |
| enableFortune() | 現在のスロットを有効にして、幸運のエンチャントの恩恵を受けられます。                       |

### 使用方法:

#### `newSlot()`

DropTableBuilder.newSlot()が新しいビルダーを作成します。 \<builder\>.newSlot()は現在のスロットを終了し、新しいスロットを開始します。

#### `addItem(String[, int weight[, int count]])`

`itemStr` は、\<mod\>:\<item\>:\<meta\>のようなアイテムの名前、oredict:\<entry\>のような鉱石辞書のエントリ、または単語が空になることができます。 `weight` は、公式\を使用してアイテムがドロップする可能性を制御します。<item weight\>/\<sum of item weights within slot\>。 省略した場合はデフォルトは 1 です。 `count` は、選択されているアイテムドロップの数です。 省略した場合はデフォルトは 1 です。

#### `enableFortune()`

スロットがフォーチュンを有効にしている場合、スロットから使用されるアイテムまでのアイテムを選択します。 アイテムが1つだけのスロットでバニラの運命行動が一致します。

## ビルダーを使用した例

### ドロップテーブルの作成

```zenscript
var compliextable = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coul", 9)
                    .enableFortune()
                    .newSlot()
                    .addItem("oredict:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("empty");
```

このドロップテーブルは、運命、石1(100%)、石1(50%)、石1(50%)の恩恵を受ける2ダイヤモンド(10%)または石炭1(90%)をドロップします。

```zenscript
var lapistable = DropTableBuilder.newSlot()
                   .addItem("minecraft:lapis_lazuli", 1, 4)
                   .addItem("minecraft:lapis_lazuli", 1, 5)
                   .addItem("minecraft:lapis_lazuli", 1, 6)
                   .addItem("minecraft:lapis_lazuli", 1, 7)
                   .addItem("minecraft:lapis_lazuli", 1, 8)
                   .enableFortune();
```

このドロップテーブルは、バニララピスを模倣し、4-8ラピスを落とし、幸運の恩恵を受けます。

### ドロップテーブルの使用

ビルダーは、データ値を「ドロップ」として割り当てることによって使用されます。 データ値は文字列のみを受け付けるため、ビルダーは文字列として toString メソッドを使用してキャストされます。

```zenscript
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
var complexData = MaterialSystem.getMaterialBuilder()
                    .setName("Complex Ore").set("Complex Ore").set(12345678).build()
                    .registerPartor(").getData();
lapisDataDataValue("uedrops",lapistable);
complexData.
```

2 つのビルダーが一緒に追加されると、両方のテーブルのスロットで新しいテーブルが作成されます。