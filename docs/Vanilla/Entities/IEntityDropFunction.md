# 实体掉落物函数
掉落物函数只有在相关实体死亡的时候才会被调用，你可以借此发挥想象力，用来做些什么：

## 导入相关包
为了避免发生一些不期而遇的问题，最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.entity.IEntityDropFunction;`

## 参数
实体掉落物函数拥有如下几个参数：

- [IEntity](IEntity) entity → 指定的实体
- [IDamageSource](/Vanilla/Damage/IDamageSource) dmgSourve → 实体死亡的原因

这个函数会返回一个 [IItemStack](/Vanilla/Items/IItemStack)，或者返回 `null`。