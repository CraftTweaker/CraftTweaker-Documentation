# Ientity投放功能

每当关联实体被杀时，都会调用IEntityDropfunction。 将它留给你想像到你可以做的事：

## 导入数据包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 craftweaker.entity.entity. EntityDropfunction;`

## 参数

IEntityDropfunction 是一个具有以下参数的函数：

- [IEntity](/Vanilla/Entities/IEntity/) 实体 → 刚刚死亡的实体。
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → 实体死亡源。

函数需要返回 [IItemStack](/Vanilla/Items/IItemStack/), 或 `null`。