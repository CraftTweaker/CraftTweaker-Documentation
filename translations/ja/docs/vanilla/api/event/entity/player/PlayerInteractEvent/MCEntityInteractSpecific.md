# MCEntityInteractSpecific

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteractSpecific
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteractSpecific(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteractSpecific>);
```
| パラメータ   | タイプ                                                                                                                                                                                   | 説明           |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteractSpecific](/vanilla/api/event/entity/player/PlayerInteractEvent/MCEntityInteractSpecific)> | 説明が提供されていません |



## メソッド
### getEntityPlayer

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCEntityInteractSpecific.getEntityPlayer();
```

### getFace

戻り値: `この相互作用にかかわる顔。 すべての非ブロック相互作用に対して、これはnullを返します。`

戻り値 [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCEntityInteractSpecific.getFace();
```

### getItemStack

戻り値: `この操作に関与するitemstack, {` @code ItemStack.EMPTY} if the hand was empty.

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCEntityInteractSpecific.getItemStack();
```

### getPlayer

戻り値: `プレイヤー`

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCEntityInteractSpecific.getPlayer();
```

### getPos

相互作用がエンティティにあった場合は、エンティティを中心としたBlockPosになります。 相互作用がブロックの上にあった場合、そのブロックの位置になります。 そうでなければ、プレイヤーを中心としたBlockPosになります。 決してゼロになることはありません。 戻り値: `この相互作用に関与する位置`

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCEntityInteractSpecific.getPos();
```

### hasResult

このイベントが重要な結果値を期待するかどうかを決定します。 注: HasResult アノテーションを持つイベントでは、true を返すためにこのメソッドが自動的に追加されます。

戻り値ブール値

```zenscript
myMCEntityInteractSpecific.hasResult();
```

### isCancelable

この関数がキャンセル可能かどうかを判断します。 Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

戻り値ブール値

```zenscript
myMCEntityInteractSpecific.isCancelable();
```

### isCanceled

このイベントがキャンセルされ、実行を停止するかどうかを決定します。 戻り値: `現在の状態がキャンセルされました`

戻り値ブール値

```zenscript
myMCEntityInteractSpecific.isCanceled();
```

### setCanceled

```zenscript
myMCEntityInteractSpecific.setCanceled(cancel as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| キャンセル | boolean型 | 説明が提供されていません |



