# MCBlockState

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.block.MCBlockState
```

## Implemented Interfaces
MCBlockState implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getAllowedValuesForProperty

Returns List<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| パラメータ | タイプ  | 説明                      |
| ----- | ---- | ----------------------- |
| name  | 文字列型 | No description provided |


### getProperties

Returns String[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

Returns List<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Returns String

```zenscript
myMCBlockState.getPropertyValue(name as String);
```

| パラメータ | タイプ  | 説明                      |
| ----- | ---- | ----------------------- |
| 名前    | 文字列型 | No description provided |


### hasProperty

Returns boolean

```zenscript
myMCBlockState.hasProperty(name as String);
```

| パラメータ | タイプ  | 説明                      |
| ----- | ---- | ----------------------- |
| 名前    | 文字列型 | No description provided |


### withProperty

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| パラメータ | タイプ  | 説明                      |
| ----- | ---- | ----------------------- |
| 名前    | 文字列型 | No description provided |
| 値     | 文字列型 | No description provided |



## プロパティー

| 名称              | タイプ                                                           | Has Getter | Has Setter |
| --------------- | ------------------------------------------------------------- | ---------- | ---------- |
| ブロック            | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true       | false      |
| canProvidePower | boolean型                                                      | true       | false      |
| commandString   | 文字列型                                                          | true       | false      |
| hasTileEntity   | boolean型                                                      | true       | false      |
| isSolid         | boolean型                                                      | true       | false      |
| isSticky        | boolean型                                                      | true       | false      |
| lightLevel      | int                                                           | true       | false      |
| ticksRandomly   | boolean型                                                      | true       | false      |

## Casters

| Result type                                                   | Is Implicit |
| ------------------------------------------------------------- | ----------- |
| 文字列型                                                          | false       |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true        |

