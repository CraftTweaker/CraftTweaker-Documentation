# MCAnvilRepairEvent

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.event.entity.player.MCAnvilRepairEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCAnvilRepairEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>);
```
| パラメータ   | タイプ                                                                                                                               | 説明           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.MCAnvilRepairEvent](/vanilla/api/event/entity/player/MCAnvilRepairEvent)> | 説明が提供されていません |



## メソッド
### getBreakChance

float を返します。

```zenscript
myMCAnvilRepairEvent.getBreakChance();
```

### getEntityPlayer

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getEntityPlayer();
```

### getIngredientInput

2番目のアイテムをアンビルに取り込む 戻り値: `2番目の入力スロット`

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getInput();
```

### getItemInput

アンビルに最初のアイテムを入力する 戻り値: `最初の入力スロット`

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemInput();
```

### getItemResult

アンビルから出力結果を取得します 戻り値: `出力`

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemResult();
```

### getPlayer

戻り値: `プレイヤー`

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getPlayer();
```

### hasResult

このイベントが重要な結果値を期待するかどうかを決定します。 注: HasResult アノテーションを持つイベントでは、true を返すためにこのメソッドが自動的に追加されます。

戻り値ブール値

```zenscript
myMCAnvilRepairEvent.hasResult();
```

### isCancelable

この関数がキャンセル可能かどうかを判断します。 Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

戻り値ブール値

```zenscript
myMCAnvilRepairEvent.isCancelable();
```

### isCanceled

このイベントがキャンセルされ、実行を停止するかどうかを決定します。 戻り値: `現在の状態がキャンセルされました`

戻り値ブール値

```zenscript
myMCAnvilRepairEvent.isCanceled();
```

### setBreakChance

```zenscript
myMCAnvilRepairEvent.setBreakChance(breakChance as float);
```

| パラメータ    | タイプ    | 説明           |
| -------- | ------ | ------------ |
| ブレイクチャンス | float型 | 説明が提供されていません |


### setCanceled

```zenscript
myMCAnvilRepairEvent.setCanceled(cancel as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| キャンセル | boolean型 | 説明が提供されていません |



