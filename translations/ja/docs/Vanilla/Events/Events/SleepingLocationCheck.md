# スリーピングロケーションチェック

このイベントは、眠っているプレイヤーが現在の場所でスリープ状態を継続できるかどうかを確認するときに発生します。 アクションを決定する **結果** がある場合。

Result:
- **デフォルト**, Bed tile エンティティで見つかったデフォルトの Vanilla 応答を返します。
- ****を許可すると、関係なくプレーヤーが眠り続けることができます
- **Deny** is specially ***ignored*** in this instance, and does nothing.

したがって、このイベントではプレイヤーをスリープ状態に保つことができますが、デフォルトのベッドロジックをバイパスすることはできません。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. leepingLocationCheck <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張
SleepingLocationCheck イベントは、以下のインターフェイスを実装し、それらのメソッド/getter/setterをすべて呼び出すことができます。

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
