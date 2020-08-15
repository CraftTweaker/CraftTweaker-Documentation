# IFacing

IFacing 接口允许您获得 [IBlockPos's](/Vanilla/World/IBlockPos/) 可能的方向。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入craftweaper.world.IFaction；`

## 枚举数

对接界面有7个静态方法，每个方法返回上述方向。  
最后一个人以字符串输入为方向 (例如， `"NORTH"`)

```zenscript
craftttweeper.world.Facing.north()
craftmiliter.world.Facing.east()
craftmiliter.world.Facing.south()
craftweeper.world.Facing.west()
craftmiliter.world.Facing.down()
craftweeper.world.Facting.up()


craftbinweer.world.Facting.Facting.froming String(String name);
```

## 不带参数的 ZenGetters/ZenMethods

| ZenGetter | ZenMethod | 返回值类型   |
| --------- | --------- | ------- |
| name（名称）  | getName() | 字符串     |
| rotateY   | rotateY() | IFacing |
| 相反的       | 反向()      | IFacing |

## 其他方法

### 比较两个面

您可以通过对比操作员 `== 的标准来比较两个阵营！ < > <= >=`  
替代。 您可以使用函数，但函数返回一个整数为0，如果它们相同。

```zenscript
//返回true 或 false
facingOne == facingTwo;

///return 0 如果他们等于
facingOne.compare(facingTwo);
```