# EventManager

You can create all event handlers the same way as you do in Crafttweaker:
```
events.eventName(function(event as eventType){
	//Executable Code here
});
```

Below you will find all currently added events that bloodmagic should fire.  
None of these events returns anything (they all are void functions).

| EventCall                        | EventType                                                                       |
|----------------------------------|---------------------------------------------------------------------------------|
| onTiConstructProjectileHitBlock  | [`mods.tconstruct.ProjectileHitBlockEvent`](Events/ProjectileHitBlockEvent)     |
| onTiConstructProjectileLaunch    | [`mods.tconstruct.ProjectileLaunchEvent`](Events/ProjectileLaunchEvent)         |
| onTiConstructToolCrafting        | [`mods.tconstruct.ToolCraftingEvent`](Events/TinkerEvent)                       |
| onTiConstructToolModify          | [`mods.tconstruct.ToolModifyEvent`](Events/TinkerEvent)                         |
| onTiConPartReplace               | [`mods.tconstruct.ToolPartReplaceEvent`](Events/TinkerEvent)                    |

