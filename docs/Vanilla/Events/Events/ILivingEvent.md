# 有生命实体事件（ILivingEvent）

这个事件被所有有生命实体相关事件所继承。

## 导入相关类
最好在使用前 [导入](/AdvancedFunctions/Import) 类来避免错误。   
`import crafttweaker.event.ILivingEvent;`

## 继承自实体事件
这个接口继承自 [实体事件](IEntityEvent)，这意味着所有实体事件的方法都可以在这里用。 

## ZenGetters

| name             | type                                                     |
|------------------|----------------------------------------------------------|
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) |
