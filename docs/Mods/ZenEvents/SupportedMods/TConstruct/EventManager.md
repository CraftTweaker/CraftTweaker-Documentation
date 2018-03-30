# EventManager

You can create all event handlers the same way as you do in Crafttweaker:
```
events.eventName(function(event as eventType){
	//Executable Code here
});
```

Below you will find all currently added events that Tinkers' Construct should fire.  
None of these events returns anything (they all are void functions).

| EventCall                        | EventType                                                                       |
|----------------------------------|---------------------------------------------------------------------------------|
| onTConstructProjectileHitBlock   | [`mods.tconstruct.ProjectileHitBlockEvent`](Events/ProjectileHitBlockEvent)     |
| onTConstructProjectileLaunch     | [`mods.tconstruct.ProjectileLaunchEvent`](Events/ProjectileLaunchEvent)         |
| onTConstructToolCrafting         | [`mods.tconstruct.ToolCraftingEvent`](Events/TinkerCraftingEvent)               |
| onTConstructToolModify           | [`mods.tconstruct.ToolModifyEvent`](Events/TinkerCraftingEvent)                 |
| onTConstructToolPartReplace      | [`mods.tconstruct.ToolPartReplaceEvent`](Events/TinkerCraftingEvent)            |
| onTConstructToolPartCrafting     | [`mods.tconstruct.ToolPartCraftingEvent`](Events/TinkerCraftingEvent)           |
| onTConstructToolExtraBlockBreak  | [`mods.tconstruct.ToolExtraBlockBreakEvent`](Events/TinkerToolEvent)            |
| onTConstructToolRepair           | [`mods.tconstruct.ToolRepairEvent`](Events/TinkerToolEvent)                     |
| onTConstructToolMattockHoe       | [`mods.tconstruct.ToolMattockHoeEvent`](Events/TinkerToolEvent)                 |
| onTConstructToolShovelPath       | [`mods.tconstruct.ToolShovelMakePathEvent`](Events/TinkerToolEvent)             |
| onTConstructToolScytheHarvest    | [`mods.tconstruct.ToolScytheHarvestEvent`](Events/TinkerToolEvent)              |
| onTConstructToolBowShoot         | [`mods.tconstruct.ToolBowShootEvent`](Events/TinkerToolEvent)                   |

