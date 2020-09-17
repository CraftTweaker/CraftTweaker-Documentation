# MCImmutableStringReader

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCImmutableStringReader
```

## メソッド
### canRead

戻り値の型: boolean

```zenscript
myMCImmutableStringReader.canRead();
```


戻り値の型: boolean

```zenscript
myMCImmutableStringReader.canRead(arg0 as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| arg0  | int | 説明が提供されていません |


### getCursor

戻り値の種類: int

```zenscript
myMCImmutableStringReader.getCursor();
```

### getRead

戻り値の型: String

```zenscript
myMCImmutableStringReader.getRead();
```

### 残りの取得

戻り値の型: String

```zenscript
myMCImmutableStringReader.getRemaining();
```

### getRemainingLength

戻り値の種類: int

```zenscript
myMCImmutableStringReader.getRemainingLength();
```

### getString

戻り値の型: String

```zenscript
myMCImmutableStringReader.getString();
```

### 取得総長さ

戻り値の種類: int

```zenscript
myMCImmutableStringReader.getTotalLength();
```

### のぞき見る

戻り値の型: char。

```zenscript
myMCImmutableStringReader.peek();
```


戻り値の型: char。

```zenscript
myMCImmutableStringReader.peek(arg0 as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| arg0  | int | 説明が提供されていません |



