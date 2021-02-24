# IRayTraceResult

When a player is looking or clicking at something, they fire a ray that goes until it hits what it needs to hit, or misses.  
The result of such a hit is an IRayTraceResult object.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.world.IRayTraceResult`

## Геттеры

Все, что вы можете сделать &mdash; получить информацию из этих объектов, ниже указано, какую именно.  
Будьте осторожны, так как все геттеры, которые не возвращают bool, могут вернуть `null`!

| name     | type                                   |
| -------- | -------------------------------------- |
| isMiss   | bool                                   |
| isBlock  | bool                                   |
| blockPos | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit  | [IFacing](/Vanilla/World/IFacing/)     |

### Deprecated ZenGetters

These getters won't actually return anything useful because there isn't a reliable way to raytrace blocks *and* entities.

| name     | type                                  | return value   |
| -------- | ------------------------------------- | -------------- |
| isEntity | bool                                  | always `false` |
| entity   | [IEntity](/Vanilla/Entities/IEntity/) | always `null`  |