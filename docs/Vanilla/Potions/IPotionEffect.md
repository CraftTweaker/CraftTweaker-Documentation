# 药水效果（IPotionEffect）

药水效果实际上也是 [药水](IPotion) 对象，不过添加了时长和等级参数。  
你可以通过 [药水](IPotion) 对象来获取他。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.potions.IPotionEffect;`

## ZenGetter

|               ZenGetter                |                     类型                     |
| :------------------------------------: | :------------------------------------------: |
|                duration                |                     int                      |
|                 potion                 |              [IPotion](IPotion)              |
|           doesShowParticles            |                     bool                     |
|               amplifier                |                     int                      |
|             curativeItems              | List<[IItemStack](Vanilla/Items/IItemStack)> |
|               effectName               |                     bool                     |
|               isAmbient                |                     bool                     |
| isPotionDurationMax (also a ZenSetter) |                     bool                     |


## ZenMethods
### 物品属于治疗性物品么
传入 [物品堆](Vanilla/Items/IItemStack) 对象。  
返回布尔值。
```
isCurativeItem(IItemStack item);
```

### 对实体执行效果

传入 [实体](/Vanilla/Entities/IEntity) 或者任意它的子类（比如 [玩家](/Vanilla/Players/IPlayer)）。  
不返回数值。
```
performEffect(IEntity Entity);
```