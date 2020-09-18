# MCItemGroup

アイテムグループ (別名. Creative Tab)は、カテゴリに基づいてアイテムをグループ化したものです。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## 実装されたインターフェース
MCItemGroup は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getPath

アイテムグループのパスを取得します。 パスは、 `<itemgroup:` パートの後のブラケット式で使用するものです。

戻り値の型: String

```zenscript
<itemgroup:misc>.getPath();
```

### setBackgroundImageName

クリエイティブメニューでこのタブに使用される背景の画像名を設定します。 戻り値: `チェーン用のこのオブジェクト`

戻り値の型: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(texture as String);
```

| パラメータ                                                                                                          | タイプ  | 説明        |
| -------------------------------------------------------------------------------------------------------------- | ---- | --------- |
| テクスチャ|テクスチャ|テクスチャ|テクスチャ|テクスチャ|テクスチャ|テクスチャ|テクスチャ|テクスチャ||テクスチャ|テクスチャ|テクスチャ|テクスチャ||テクスチャ|テクスチャ|テクスチャ|テクスチャ|テクスチャ| | 文字列型 | 使用するテクスチャ |


### setNoScrollbar

クリエイティブインベントリ内のアイテムグループのスクロールバーを削除します

 戻り値: `チェーン用のこのオブジェクト`

戻り値の型: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

クリエイティブインベントリ内のアイテムグループのタイトルを削除します。

 戻り値: `チェーン用のこのオブジェクト`

戻り値の型: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## プロパティー

| 名称            | タイプ  | ゲッターあり | セッターあり |
| ------------- | ---- | ------ | ------ |
| commandString | 文字列型 | true   | false  |
| 小道            | 文字列型 | true   | false  |

