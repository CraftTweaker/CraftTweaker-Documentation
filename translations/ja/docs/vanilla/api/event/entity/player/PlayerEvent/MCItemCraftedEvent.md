# MCItemCraftedEvent

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCItemCraftedEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerEvent.MCItemCraftedEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCItemCraftedEvent>);
```
| パラメータ   | タイプ                                                                                                                                                       | 説明           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.PlayerEvent.MCItemCraftedEvent](/vanilla/api/event/entity/player/PlayerEvent/MCItemCraftedEvent)> | 説明が提供されていません |



## メソッド
### getCrafting

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCItemCraftedEvent.getCrafting();
```

### getEntityPlayer

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemCraftedEvent.getEntityPlayer();
```

### getPlayer

戻り値: `プレイヤー`

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemCraftedEvent.getPlayer();
```

### hasResult

このイベントが重要な結果値を期待するかどうかを決定します。 注: HasResult アノテーションを持つイベントでは、true を返すためにこのメソッドが自動的に追加されます。

戻り値ブール値

```zenscript
myMCItemCraftedEvent.hasResult();
```

### isCancelable

この関数がキャンセル可能かどうかを判断します。 Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

戻り値ブール値

```zenscript
myMCItemCraftedEvent.isCancelable();
```

### isCanceled

このイベントがキャンセルされ、実行を停止するかどうかを決定します。 戻り値: `現在の状態がキャンセルされました`

戻り値ブール値

```zenscript
myMCItemCraftedEvent.isCanceled();
```

### setCanceled

```zenscript
myMCItemCraftEvent.setCanceled(cancel as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| キャンセル | boolean型 | 説明が提供されていません |



