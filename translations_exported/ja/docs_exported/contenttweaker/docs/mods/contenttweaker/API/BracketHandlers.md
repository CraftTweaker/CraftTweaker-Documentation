# BracketHandler

このクラスの静的メソッドは、いつでもCrTのBEPにマージされる可能性があるため、直接使用しないことをお勧めします。 ブラケット式パーサーメソッドに動的にアクセスする必要がある場合は、
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.BracketHandlers
```

## メソッド
### getItemGroup

項目グループを取得します。 グループが見つからなかった場合はエラーが発生します

 戻り値: `見つかった MCItemGroup`

戻り値の型: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| パラメータ | タイプ  | 説明                          |
| ----- | ---- | --------------------------- |
| トークン  | 文字列型 | BEP呼び出しでDataCompoundを作成するもの |


### getToolType

[mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) を取得します。 指定されたものが存在しない場合、新しいものを作成します。

 戻り値: `見つかった場合は [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) または新しい MCToolType`

戻り値の型: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contentTweaker.BracketHandlers.getToolType(tokens as String);
mods.contenttweaker.BracketHandlers.getToolType("shovel");
```

| パラメータ | タイプ  | 説明                        |
| ----- | ---- | ------------------------- |
| トークン  | 文字列型 | BEP呼び出しでDataCompoundを作成する |



