# PlayerChangedDimension

PlayerChangedDimension イベントは、たとえば、 [プレイヤーの](/Vanilla/Players/IPlayer/) [ディメンション/ワールド](/Vanilla/World/IWorld/) が変更されたときに発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerChangedDimensionEvent <br /> 
 <code>`  
もちろん、 [前にクラスをインポート](/AdvancedFunctions/Import/) して、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerChandedDimension Eventsは以下のインターフェイスを実装し、それらのメソッド/getter/settersをすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                  |
| --------- | ------------------------------------ |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/) |
| `from`    | int                                  |
| `ワールドから`  | [IWorld](/Vanilla/World/IWorld/)     |
| `to`      | int                                  |
| `toWorld` | [IWorld](/Vanilla/World/IWorld/)     |