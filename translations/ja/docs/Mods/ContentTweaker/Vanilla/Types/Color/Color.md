# 色

Color int オブジェクトの作成方法が不明な場合は、Color Object を代わりに使用できます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.Color;`

## 静的メソッド

Static Methods は、Object 自体ではなくパッケージ名で呼び出されます。  
これらのメソッドはすべて、Color Object を返します。

| ZenMethod      | パラメータタイプ |
| -------------- | -------- |
| fromInt(color) | int      |
| fromHex(color) | 文字列      |

## 非静的メソッド

Nonstatic メソッドはパッケージ名ではなく、Object 自体で呼び出されます。

| ZenMethod     | 戻り値 |
| ------------- | --- |
| getIntColor() | int |