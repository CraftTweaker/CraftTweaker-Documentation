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

## 有哪些事件可以用？
ZenMethods 即为 `events` 后调用的方法，而事件类（Event Class）为你需要转换的事件类型。

|          ZenMethod          |                    事件类（Event Class）                     |
| :-------------------------: | :----------------------------------------------------------: |
|        onBlockBreak         | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak) |
|     onBlockHarvestDrops     | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops) |
|       onEnderTeleport       | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport) |
|   onEntityLivingAttacked    | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked) |
|     onEntityLivingDeath     | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath) |
|  onEntityLivingDeathDrops   | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops) |
|     onEntityLivingFall      | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall) |
|     onEntityLivingHurt      | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt) |
|     onEntityLivingJump      | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump) |
|    onEntityLivingUseItem    | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem) |
| onEntityLivingUseItemFinish | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem) |
| onEntityLivingUseItemStart  | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem) |
|  onEntityLivingUseItemStop  | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem) |
|  onEntityLivingUseItemTick  | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem) |
|  onEntityStruckByLightning  | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning) |
|        onItemExpire         | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire) |
|         onItemToss          | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss) |
|     onPlayerAnvilRepair     | [`crafttweaker.event.PlayerAnvilRepair`](/Vanilla/Events/Events/PlayerAnvilRepair) |
|    onPlayerAttackEntity     | [`crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity) |
|      onPlayerBonemeal       | [`crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal) |
|     onPlayerBreakSpeed      | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed) |
|    onPlayerBrewedPotion     | [`crafttweaker.event.PlayerBrewedPotion`](/Vanilla/Events/Events/PlayerBrewedPotion) |
|  onPlayerChangedDimension   | [`crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension) |
|       onPlayerCrafted       | [`crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted) |
|     onPlayerDeathDrops      | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops) |
|     onPlayerDestroyItem     | [`crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem) |
|     onPlayerFillBucket      | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket) |
|      onPlayerInteract       | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract) |
|   onPlayerInteractEntity    | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity) |
|      onPlayerLoggedIn       | [`crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn) |
|      onPlayerLoggedOut      | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut) |
|    onPlayerOpenContainer    | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer) |
|     onPlayerPickupItem      | [`crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem) |
|      onPlayerPickupXp       | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp) |
|       onPlayerRespawn       | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn) |
|   onPlayerRightClickBlock   | [`crafttweaker.event.PlayerRightClickBlock`](/Vanilla/Events/Events/PlayerRightClickBlock) |
|      onPlayerSetSpawn       | [`crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn) |
|     onPlayerSleepInBed      | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed) |
|       onPlayerSmelted       | [`crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted) |
|        onPlayerTick         | [`crafttweaker.event.PlayerTick`](/Vanilla/Events/Events/PlayerTick) |
|       onPlayerUseHoe        | [`crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe) |


## 清除所有的事件管理器
```
events.clear();
```
