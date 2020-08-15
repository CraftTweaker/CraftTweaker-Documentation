# IEventCancelable

このインターフェイスは、キャンセルすることができるすべてのイベントによって拡張されます。  
つまり、CrTを使ってキャンセルしたり、キャンセルされたかどうかを確認することができます。

CrTがそれらを受け取る前にキャンセルされたイベントはハンドラによってチェックされないことに注意してください。  
また、複数のハンドラを登録し、そのうちの1つがイベントをキャンセルすると、他のCrTハンドラは引き続きそれを受け取ります!

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.event.IEventCancelable;`

## 何が彼らを使って行うことができますか?

- `event.cancel();` メソッド, void (なし) を返します。
- `event.canceled;` Getter, bool.
- `event.canceled = true;` Setter