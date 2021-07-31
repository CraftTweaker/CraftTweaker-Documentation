# IRayTraceResult

When a player is looking or clicking at something, they fire a ray that goes until it hits what it needs to hit, or misses.  
The result of such a hit is an IRayTraceResult object.

## 导入相关包

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.world.IRayTraceResult`

## ZenGetters

All you can do is retrieve information from these objects, here's which:  
Be careful though, since all getters that do not return a bool can return `null`!

| name     | 类型                                     |
| -------- | -------------------------------------- |
| isMiss   | bool                                   |
| isBlock  | bool                                   |
| blockPos | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit  | [IFacing](/Vanilla/World/IFacing/)     |

### Deprecated ZenGetters

These getters won't actually return anything useful because there isn't a reliable way to raytrace blocks *and* entities.

| name     | 类型                                    | return value   |
| -------- | ------------------------------------- | -------------- |
| isEntity | bool                                  | always `false` |
| entity   | [IEntity](/Vanilla/Entities/IEntity/) | always `null`  |