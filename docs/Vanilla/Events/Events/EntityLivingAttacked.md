# 有生命被实体攻击（EntityLivingAttacked）

有生命被实体攻击事件在实体被攻击时触发。  
它可以被取消，用来阻止实体收到伤害。  

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.EntityLivingAttackedEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
有生命被实体攻击事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [ILivingEvent](ILivingEvent)
- [IEventCancelable](IEventCancelable)

## ZenGetters

|  ZenGetter   |                      Type                      |
| :----------: | :--------------------------------------------: |
| damageSource | [IDamageSource](/Vanilla/Damage/IDamageSource) |
|    amount    |                     float                      |
