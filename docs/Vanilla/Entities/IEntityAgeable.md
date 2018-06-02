# 带有年龄的实体

带有年龄的实体指的是经过一段时间后会长大的实体,例如牛。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。 
`import crafttweaker.entity.IEntityAgeable;`

## [生物](IEntiyCreature)对象的扩展
带有年龄的实体是[生物](IEntiyCreature)的扩展。 说明所有适用于[生物](IEntiyCreature) 的对象也适用于带有年龄的实体对象。

## Methods
### ZenGetters/Setters
| ZenGetter  |  ZenSetter  |  类型  |
| :--------: | :---------: | :----: |
| growingAge | growingAge  |  整数  |
|            | scaleForAge | 布尔值 |

### ZenMethods
#### 增加年龄

均需要传入一个整数，而第二条可以传入一个可选的布尔值。 
均不返回任何结果。
一般地，第二条和传入强制参数false的第一条执行结果相同，不过由于模组实现不同，以上结果也会有偏差。

```
entAgObj.ageUp(int seconds, @Optional boolean forced);
entAgObj.addGrowth(int seconds);
```
