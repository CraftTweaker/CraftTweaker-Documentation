# MCItemGroup

An item Group (a.k.a. Creative Tab) is a grouping of items based on category.

This class was added by a mod with mod-id `contenttweaker`. 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Implemented Interfaces
MCItemGroup implements the following interfaces. つまり、これらのクラスで使用できるすべてのメソッドをこのクラスで使用することができます。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getPath

Gets the path of the item group. The path is what you use in the Bracket Expression after the `<itemgroup:` part.

Return type: String

```zenscript
<itemgroup:misc>.getPath();
```

### setBackgroundImageName

Sets the image name of the Background that is used for this tab in the creative menu Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(texture as String);
```

| パラメータ   | タイプ  | 説明                     |
| ------- | ---- | ---------------------- |
| texture | 文字列型 | The texture to be used |


### setNoScrollbar

Removes the scrollbar of the item Group in the creative inventory

 Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Removes the title of the item Group in the creative inventory

 Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## プロパティ

| 名称            | タイプ  | Has Getter | Has Setter |
| ------------- | ---- | ---------- | ---------- |
| commandString | 文字列型 | true       | false      |
| 小道            | 文字列型 | true       | false      |

