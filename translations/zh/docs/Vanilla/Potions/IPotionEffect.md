# IPotionEffect

IPotionEffect 是一个 [IPotion](/Vanilla/Potions/IPotion/) 也有一个持续时间和放大器(强度)参数。  
您可以从 [IPotion](/Vanilla/Potions/IPotion/) 对象获取它们。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.potions.IPOtionEffect;`

## ZenGetter

| ZenGetter                            | 返回值类型                                        |
| ------------------------------------ | -------------------------------------------- |
| 持续时间                                 | 整型                                           |
| 药水                                   | [IPotion](/Vanilla/Potions/IPotion/)         |
| 不显示粒子                                | 布尔值                                          |
| 放大器                                  | int                                          |
| 治疗项目                                 | 列表<[IItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                           | 字符串                                          |
| isAmbient                            | bool                                         |
| isPotionDurationMax (as a ZenSetter) | bool                                         |

## ZenMethods

### 是一个治疗项目

使用 [IItemStack](/Vanilla/Items/IItemStack/)。  
返回一个布尔值

```zenscript
isCurativeItem(IItemStack item);
```

### 对实体执行特效

使用 [IEntity](/Vanilla/Entities/IEntity/) 或其任何子类 (例如 [IPlayer](/Vanilla/Players/IPlayer/))。  
返回 nouvelle (无)。

```zenscript
性能效果(实体实体)；
```