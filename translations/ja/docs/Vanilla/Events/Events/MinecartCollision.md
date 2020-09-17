# MinecartCollision

MinecartCollisionEvent は、Minecart がエンティティと衝突するたびに発生します。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartCollisionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
MinecartCollision Events は以下のインターフェイスを実装しており、すべてのメソッド/getters/settersを呼び出すこともできます。

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetters

| ZenGetter  | タイプ                                   |
| ---------- | ------------------------------------- |
| `collider` | [IEntity](/Vanilla/Entities/IEntity/) |
