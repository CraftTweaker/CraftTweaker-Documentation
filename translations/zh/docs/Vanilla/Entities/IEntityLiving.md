# IEntityLiving

生命实体是一个健康且能够死亡的实体。  
与 [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 不同的玩家不是IEnitiyLivingobject！

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.entity.IEntityLiving。`

## 扩展 [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). 这意味着 [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 对象所有可用的函数也可供IEntityLivings对象使用。

## 方法

### ZenGetters/ZenSetters

| ZenGetter         | ZenSetter     | 类型                                                        |
| ----------------- | ------------- | --------------------------------------------------------- |
| 攻击间隔              |               | 整数                                                        |
| 攻击目标              | 攻击目标          | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| 画布                |               | bool                                                      |
| canPickUpLoot     | canPickUpLoot | 布尔值                                                       |
| 可以在这里生成           |               | bool                                                      |
| getLeashedTo实体    |               | [IEntity](/Vanilla/Entities/IEntity/)                     |
| ISAIDS 启用         | ISAIDS 启用     | bool                                                      |
| ISAIDS 启用         | ISAIDS 启用     | bool                                                      |
| isColliding       |               | bool                                                      |
| isLeashed         |               | bool                                                      |
| 空手势               | 空手势           | bool                                                      |
| 需要No Despawna     |               | bool                                                      |
| maxSpawnedInChunk |               | 整数                                                        |
|                   | 移动            | 浮点数                                                       |
|                   | 移动            | 浮点数                                                       |
|                   | 移动 Vertial    | 浮点数                                                       |
| 渲染SizeModifier    |               | 浮点数                                                       |

### ZenMethods

#### 播放活的声音

无需参数。  
没有返回任何东西。

```zenscript
ebtLiv.playLivingSound();
```

#### 生成爆炸粒子

无需参数。  
没有返回任何东西。

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### 设置设备槽的跌落几率

需要 [IEntityEquipmentslot](/Vanilla/Entities/IEntityEquipmentSlot/) 对象和一个浮点。  
什么也不返回。

```zenscript
ebtLiv.setDropChance(IEntity装备槽，浮动概率)；
```

#### 启用持久性

无需参数。  
没有返回任何东西。

```zenscript
ebtLiv.enablePersistence();
```

#### 闪光

第一个方法需要一个 [IEnty](/Vanilla/Entities/IEntity/) 对象，一个布尔值，什么也不返回任何东西。 第二个方法需要两个布尔值，什么也不返回。  
第三个方法需要一个 [IPlayer](/Vanilla/Players/IPlayer/) 对象并返回一个布尔值。

```zenscript
ebtLiv.setLeashedToEntity(IEnty enttiy, boolan sendAttache notification);
ebtLiv.clearleashed(foolian sendPacket, boolan dropLead);
ebtLiv.canBeachedTo(IPlayer player);
```