# MCBlock

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.block.MCBlock
```

## メソッド
### canSpawnInBlock

Returns boolean

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## プロパティー

| 名称             | タイプ  | Has Getter | Has Setter |
| -------------- | ---- | ---------- | ---------- |
| lootTable      | 文字列型 | true       | false      |
| translationKey | 文字列型 | true       | false      |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| 文字列型        | false       |

