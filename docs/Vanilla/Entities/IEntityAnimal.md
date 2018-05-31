# 动物

一个动物。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.entity.IEntityAnimal;`

## [带有年龄的实体](IEntiyAgeable)对象的扩展
动物是[带有年龄的实体](IEntiyAgeable)的扩展。 说明所有适用于[带有年龄的实体](IEntiyAgeable) 的对象也适用于带有年龄的实体对象。

## Methods
### ZenGetters/Setters
| ZenGetter |                      类型                      |
| :-------: | :--------------------------------------------: |
| loveCause | [玩家](/Vanilla/Players/IPlayer)  (可以为空！) |
| isInLove  |                     布尔值                     |

### ZenMethods
#### 检测一个物品是否可以用于繁殖动物
需要传入[物品堆](/Vanilla/Items/IItemStack)。
返回布尔值。

```
entAnObj.isBreedingItem(IItemStack itemStack);
```

#### 设置或重置交配
第一条可以传入[玩家](/Vanilla/Players/IPlayer)对象，第二条不需要。
不返回数值。

```
entAnObj.setInLove(@Optional IPlayer player);
entAnObj.resetInLove();
```

#### 检测另一只动物是否可以与指定动物交配。
需要传入动物对象。  
返回布尔值。

```
entAnObj.canMateWith(IEntityAnimal other);
```
