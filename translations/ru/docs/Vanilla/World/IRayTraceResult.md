# IRayTraceResult

Когда игрок смотрит или нажимает на что-нибудь, он запускает луч, который либо попадает куда-то или промахивается.  
Результат такого попадания &mdash; объект IRayTraceResult.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.world.IRayTraceResult`

## Геттеры

Все, что вы можете сделать &mdash; получить информацию из этих объектов, ниже указано, какую именно.  
Будьте осторожны, так как все геттеры, которые не возвращают bool, могут вернуть `null`!

| name     | type                                   |
| -------- | -------------------------------------- |
| isMiss   | bool                                   |
| isEntity | bool                                   |
| isBlock  | bool                                   |
| entity   | [IEntity](/Vanilla/Entities/IEntity/)  |
| blockPos | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit  | [IFacing](/Vanilla/World/IFacing/)     |