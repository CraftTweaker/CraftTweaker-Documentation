# PlayerRespawn

プレイヤーがリスポーンするたびに、PlayerRespawn イベントが発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerRespawnEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerRespawn イベントは以下のインターフェイスを実装し、すべてのメソッド/getters/settersを呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter        | 戻り値                                  |
| ---------------- | ------------------------------------ |
| `プレイヤー`          | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isEndConquered` | bool (エンドポータルによるリスポーンかどうかを表示)        |