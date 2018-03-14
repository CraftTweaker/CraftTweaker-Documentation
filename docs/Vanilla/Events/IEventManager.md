# 事件管理器（IEventManager）

事件管理器是你在处理事件的时候所需要的东西。

## 导入相关类
为避免发生一些问题，在使用前最好[导入](/AdvancedFunctions/Import)相关类。  
`import crafttweaker.events.IEventManager;`

## 调用事件管理器
你可以使用[全局`事件`字段](/Vanilla/Global_Functions)来调用事件管理器。

## 事件是如何工作的？
你可以通过添加一个函数来描述这个事件，并且决定 CraftTweaker 在此事件发生时做些什么。  
最为重要的事情就是**构造正确类型的事件！**，否则你将无法访问 ZenGetters。   
如果你仅仅是想打印什么东西而不需要访问事件本身，下面的例子就够了。

```js
events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
    print("event".length);
	print(event.player.name);
	event.player.xp += 1;
});


events.onPlayerLoggedIn(function(event) {
	//event instanceof Object -> 此时无法访问事件本身，所以最好对其进行类型指定！
	print("有人进入了游戏！！！");
});
```

## 有哪些事件可用？
ZenMethods 是你在调用`事件`所需要调用的方法，而`Event Class`则是你对事件类型进行指定的时候，需要传入的类型参数。

|        ZenMethod         |                         Event Class                          | Already Implemented? |
| :----------------------: | :----------------------------------------------------------: | :------------------: |
|     onPlayerLoggedIn     | [crafttweaker.event.PlayerLoggedInEvent](Events/PlayerLoggedIn) |          ✔           |
|    onPlayerLoggedOut     | [crafttweaker.event.PlayerLoggedOutEvent](Events/PlayerLoggedOut) |          ✔           |
|     onPlayerCrafted      | [crafttweaker.event.PlayerCraftedEvent](Events/PlayerCrafted) |          ✔           |
|     onPlayerSmelted      | [crafttweaker.event.PlayerSmeltedEvent](Events/PlayerSmelted) |          ✔           |
| onPlayerChangedDimension | [crafttweaker.event.PlayerChangedDimensionEvent](Events/PlayerChangedDimension) |          ✔           |
|     onPlayerRespawn      | [crafttweaker.event.PlayerRespawnEvent](Events/PlayerRespawn) |          ✔           |
|   onPlayerAttackEntity   | [crafttweaker.event.PlayerAttackEntityEvent](Events/PlayerAttackEntity) |          ✘           |
|     onPlayerBonemeal     | [crafttweaker.event.PlayerBonemealEvent](Events/PlayerBonemeal) |          ✘           |
|  onPlayerInteractEntity  | [crafttweaker.event.PlayerInteractEntityEvent](Events/PlayerInteractEntity) |          ✘           |
|      onPlayerPickup      | [crafttweaker.event.PlayerPickupEvent](Events/PlayerPickup)  |          ✘           |
|    onPlayerPickupItem    | [crafttweaker.event.PlayerPickupItemEvent](Events/PlayerPickupItem) |          ✔           |
|    onPlayerFillBucket    | [crafttweaker.event.PlayerFillBucketEvent](Events/PlayerFillBucket) |          ✘           |
|    onPlayerDeathDrops    | [crafttweaker.event.PlayerDeathDropsEvent](Events/PlayerDeathDrops) |          ✘           |
|     onPlayerInteract     | [crafttweaker.event.PlayerInteractEvent](Events/PlayerInteract) |          ✔           |
|  onPlayerOpenContainer   | [crafttweaker.event.PlayerOpenContainerEvent](Events/PlayerOpenContainer) |          ✘           |
|     onPlayerPickupXp     | [crafttweaker.event.PlayerPickupXpEvent](Events/PlayerPickupXp) |          ✘           |
|    onPlayerSleepInBed    | [crafttweaker.event.PlayerSleepInBedEvent](Events/PlayerSleepInBed) |          ✘           |
|      onPlayerUseHoe      | [crafttweaker.event.PlayerUseHoeEvent](Events/PlayerUseHoe)  |          ✘           |
|   onPlayerUseItemStart   | [crafttweaker.event.PlayerUseItemStartEvent](Events/PlayerUseItemStart) |          ✘           |
|   onPlayerUseItemTick    | [crafttweaker.event.PlayerUseItemTickEvent](Events/PlayerUseItemTick) |          ✘           |