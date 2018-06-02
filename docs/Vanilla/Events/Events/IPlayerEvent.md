# 玩家事件（IPlayerEvent）
被所有拥有玩家的事件所继承。  
这一位置你可以通过 getter 来获取对应的玩家信息。


## 导入相关类
最好在使用前 [导入](/AdvancedFunctions/Import) 类来避免错误。   
`import crafttweaker.event.IPlayerEvent;`

## 继承自有生命实体
这个接口继承自 [有生命实体](ILivingEvent)，这意味有生命实体的所有方法都可以在这里用。

## ZenGetters

| name   | type                                     |
|--------|------------------------------------------|
| player | [IPlayer](/Vanilla/Players/IPlayer)      |
