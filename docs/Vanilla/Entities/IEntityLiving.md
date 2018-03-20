# 有生命实体

有生命实体即为拥有血量，并且会死亡的实体。  
不像[有生命实体基础](IEntityLivingBase)，玩家本身可不是有生命实体对象！


## 导入相关包
为了避免发生一些不期而遇的问题（比如声明 [数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.entity.IEntityLiving;`

## 继承自[有生命实体基础](IEntityLivingBase)
有生命实体继承自[有生命实体基础](IEntityLivingBase)。这意味着[有生命实体基础](IEntityLivingBase)对象的所有函数均可在有生命实体对象上使用。

## 方法
### ZenGetters/ZenSetters

|      ZenGetter      |   ZenSetter   |        说明        |                  类型                  |
| :-----------------: | :-----------: | :----------------: | :------------------------------------: |
|   attackInterval    |               |      攻击间隔      |                  int                   |
|    attackTarget     | attackTarget  |      攻击目标      | [IEntityLivingBase](IEntityLivingBase) |
|    canBeSteered     |               |     是否可操纵     |                  bool                  |
|    canPickUpLoot    | canPickUpLoot | 是否可以拾起战利品 |                  bool                  |
|    canSpawnHere     |               |      能否生成      |                  bool                  |
| getLeashedToEntity  |               |    被栓住的实体    |           [IEntity](IEntity)           |
|    isAIDisabled     | isAIDisabled  |    AI 是否禁用     |                  bool                  |
|     isColliding     |               |      是否碰撞      |                  bool                  |
|      isLeashed      |               |     是否被拴住     |                  bool                  |
|    isLeftHanded     | isLeftHanded  |     是否是左手     |                  bool                  |
| isNoDespawnRequired |               |   是否无消失要求   |                  bool                  |
|  maxSpawnedInChunk  |               |    最大生成区块    |                  int                   |
|                     |  moveForward  |      前后移动      |                 float                  |
|                     | moveStrafing  |      左右移动      |                 float                  |
|                     | moveVertival  |      竖直移动      |                 float                  |
| renderSizeModifier  |               |    渲染大小定义    |                 float                  |



### ZenMethods
#### 播放活实体音效
不需要参数   
不返回数值
```
ebtLiv.playLivingSound();
```

#### 爆炸粒子生成
不需要参数   
不返回数值

```
ebtLiv.spawnExplosionParticle();
```

#### 设置实体装备的掉落几率
需要传入一个[IEntityEquipmentSlot](IEntityEquipmentSlot)对象和一个浮点值。  
不返回任何数值
```
ebtLiv.setDropChance(IEntityEquipmentSlot slot, float chance);
```

#### 启用 Persistence
不需要参数   
不返回数值

```
ebtLiv.enablePersistence();
```

#### 栓绳
第一个方法需要传入一个[实体](IEntity)对象、 一个布尔值；不返回任何数值。   
第二个方法需要传入两个布尔值；不返回任何数值。   
第三个方法需要传入一个[玩家](/Vanilla/Players/IPlayer)对象；返回一个布尔值。   

```
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer player);
```