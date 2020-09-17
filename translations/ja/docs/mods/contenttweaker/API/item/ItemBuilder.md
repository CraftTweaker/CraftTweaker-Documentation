# ItemBuilder

アイテムビルダーはアイテムを作ることです（驚き！） <p> これにより、アイテムがどのように動作し、何ができるかを変更する様々なプロパティを設定できます。 [mods.contenttweaker.itemも使用できます。ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) を使用すると、より特殊なビルダーに切り替わります。 <p> Cotに、インガムを表示させたいと伝えるには、 [mods.contenttweaker.itemを呼び出す必要があります。ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) と有効なリソースロケーションパスを指定します。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.ItemBuilder
```

## 実装されたインターフェース
ItemBuilder は、以下のインターフェイスを実装します。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors
新しいアイテムビルダーを作成します。 これは _ではなく_ ゲーム内に新しいブロックを作成することに注意してください。 [mods.contenttweaker.itemを呼び出す必要があります。そのためのItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build)
```zenscript
new mods.contenttweaker.item.ItemBuilder();
```

## メソッド
### ビルド

このビルダーが構築されると思われるものは何でも実際に構築するようCoTに指示します。

```zenscript
new ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| パラメータ   | タイプ  | 説明               |
| ------- | ---- | ---------------- |
| リソースの場所 | 文字列型 | このブロックを与えるリソースパス |


### withItemGroup

このアイテムを表示するアイテムグループを設定できます。 デフォルトでは、アイテムは `その他` に着陸します

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.item。ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| パラメータ     | タイプ                                                                               | 説明                   |
| --------- | --------------------------------------------------------------------------------- | -------------------- |
| itemGroup | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | このアイテムを表示するアイテムグループ: |


### withMaxDamage

このアイテムの最大ダメージを設定できます。<br/> [mods.contenttweaker.itemと組み合わせて使用できないことに注意してください。ItemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.item。ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxDamage(maxDamage);
new ItemBuilder().withMaxDamage(250);
```

| パラメータ     | タイプ | 説明        |
| --------- | --- | --------- |
| maxDamage | int | 最大スタックサイズ |


### withMaxStackSize

このアイテムの最大スタックサイズを設定できます。<br/> [mods.contentweaker.itemと組み合わせて使用できないことに注意してください。ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.item。ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxStackSize(maxStackSize を int);
new ItemBuilder().withMaxStackSize(16);
```

| パラメータ        | タイプ | 説明        |
| ------------ | --- | --------- |
| maxStackSize | int | 最大スタックサイズ |


### with Norepair

このアイテムはアンビルで修理できないことを設定します。 戻り値: `このビルダーは、メソッドチェーンに使用されます。`

戻り値の型: [mods.contenttweaker.item。ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withNoRepair();
```

### withRarity

アイテムのレア度を設定できます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.item。ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| パラメータ | タイプ  | 説明  |
| ----- | ---- | --- |
| レア度   | 文字列型 | レア度 |


### withType

このアイテムの特定のタイプを設定します。 このメソッドが呼び出されると、ビルダーのコンテキストはより提供された型ビルダーに切り替わります。 つまり、このビルダーのメソッドは利用できなくなります。 このメソッドを呼び出す前に、設定したいプロパティを設定する必要があります。 戻り値: `指定されたアイテムを持つビルダー。`

戻り値の種類: T

```zenscript
new ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool>();
```

| パラメータ名 | バウンド数                                                                                     |
| ------ | ----------------------------------------------------------------------------------------- |
| T      | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


