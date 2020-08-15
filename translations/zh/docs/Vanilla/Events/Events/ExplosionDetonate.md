# ExplosionDetonate

The ExplosionDetonate Event is fired shortly before an explosion starts. It cannot be canceled.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionDetonateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
ExplosionDetonate Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter           | ZenSetter | 类型                                             |
| ------------------- | --------- | ---------------------------------------------- |
| `affectedEntities`  |           | [IEntity](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions` |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
