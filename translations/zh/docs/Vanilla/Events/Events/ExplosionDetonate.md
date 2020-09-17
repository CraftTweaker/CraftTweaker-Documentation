# 爆炸性吸附器

爆炸引爆事件在爆炸开始前不久就发射。 不能取消它。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionDetonateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
ExplosionDetonate Events实现以下接口，并且能够调用他们的所有方法/getter/setter：

- [IExplossion事件](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter           | ZenSetter | 类型                                             |
| ------------------- | --------- | ---------------------------------------------- |
| `受影响实体`             |           | [IEntity](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions` |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
