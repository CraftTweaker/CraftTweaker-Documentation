# PlayerLeftClickBlock

PlayerLeftClickBlock イベントは、プレイヤーがブロックをクリックするたびに発生します。  
他のイベントの発生を防ぐためにキャンセルすることができます。 プレイヤーが左クリックを押し続けた場合、イベントはキャンセルされた場合でも再び発生します。 このイベントをキャンセルすると、左クリックが登録されるのを防ぎ、ブロック破壊を防止します (クリエイティブモードではありませんが)。 イベントがキャンセルされた場合、特定の成功の結果、失敗またはパスを提供できます。 デフォルトでは、結果はパスです。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerLeftClickBlockEvent <br x-id="2" /> 
 <code>`  
もちろん、 [前にクラスをインポート](/AdvancedFunctions/Import/) して、その名前を使用することもできます。

## イベントインターフェースの拡張
PlayerLeftClickBlock イベントは、以下のインターフェイスを実装し、それらのメソッド/getter/setters/setterをすべて呼び出すこともできます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
イベントから次の情報を取得できます。

| ZenGetter           | ZenSetter           | タイプ                                    |
| ------------------- | ------------------- | -------------------------------------- |
| `hitvector`         |                     | [ivector3d](/vanilla/world/ivector3d/) |
| `useblock`          | `useblock`          | 文字列 ("allow" / "deny" / "default")     |
| `useitem`           | `useitem`           | 文字列 ("allow" / "deny" / "default")     |
| `cancelationResult` | `cancelationResult` | 文字列 ("success" / "pass" / "fail")      |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します。
