# ModInfo

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.modInfo
```

## プロパティー

| 名称          | タイプ                                                                                                | ゲッターあり | セッターあり |
| ----------- | -------------------------------------------------------------------------------------------------- | ------ | ------ |
| ブロック        | List&lt;[crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | true   | false  |
| displayName | 文字列型                                                                                               | true   | false  |
| エンティティタイプ   | List&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true   | false  |
| 項目          | List&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;          | true   | false  |
| modid       | 文字列型                                                                                               | true   | false  |
| 名前空間        | 文字列型                                                                                               | true   | false  |
| バージョン       | 文字列型                                                                                               | true   | false  |

