# IProcessableEvent

This interface is extended by all events that can be processed.  
These events are to be set as processed after everything they are made for has been completed and other event handlers should not change the event any more.  
Bear in mind that they still can!

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.event.IPlayerEvent;`

## これらを使ってできること

- `event.process();` メソッド, void (nothing) を返します
- `event.processed;` getter, bool を返す