# 方块朝向

IFacing 接口允许你获取一个 [IBlockPos's](IBlockPos) 可能的方向。

## 导入包
如果你遇到任何问题，可以尝试通过导入相关包来解决。  
`import crafttweaker.world.IFacing;`

## 枚举
朝向接口有7种静态方法,每个返回都表示相应的方向。
最后一个参数为朝向的字符串输入 (例子： `"NORTH"`)
```
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.Facing.south()
crafttweaker.world.Facing.west()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.fromString(String name);
```

## ZenGetters/ZenMethods without parameters
| ZenGetter  | ZenMethod  | 返回类型 |
|------------|------------|-------------|
| 名称       | getName()  | 字符串      |
| 旋转Y轴    | rotateY()  | IFacing     |
| 相反面   | opposite() | IFacing     |

## 其他方法
### 比较两个朝向
你可以使用标准比较运算符 `== != < > <= >=`来比较两个面  
另外，您可以使用这个函数,如果它们是相等的话，函数将返回数值为0的整型。
```
//Returns true or false
facingOne == facingTwo;

//Returns 0 if they are equal
facingOne.compare(facingTwo);
```
