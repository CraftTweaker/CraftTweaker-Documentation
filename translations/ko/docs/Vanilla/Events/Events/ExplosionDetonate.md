# ExplosionDetonate

The ExplosionDetonate Event is fired shortly before an explosion starts. It cannot be canceled.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionDetonateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
ExplosionDetonate Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter           | ZenSetter | Type                                           |
| ------------------- | --------- | ---------------------------------------------- |
| `affectedEntities`  |           | [IEntity](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions` |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
