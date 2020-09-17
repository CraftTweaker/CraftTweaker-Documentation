# IBlockPos

IBlockPos 对象代表着游戏中的一个位置。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入craftweaper.world.IBlockPos;`

## ZenMethods 没有参数

| ZenMethod（ZenMethod） | ZenGetter/Caster | 返回值类型                                     | 描述                   |
| -------------------- | ---------------- | ----------------------------------------- | -------------------- |
| getX()               | x                | 整数                                        | 返回位置的 X 值            |
| getY()               | 年                | 整数                                        | 返回位置的 Y 值            |
| getZ()               | z                | 整数                                        | 返回位置的 Z 值            |
| asPosition3f         | 作为 IPosition3f   | [IPosition3f](/Vanilla/Utils/Position3f/) | 返回位置为 Position3f 对象。 |

## 带参数的 ZenMethods

### 获取偏移

返回一个新的 IBlockPos , 它是 `偏移` 个方块到 `方向` 方向。

`IBlockPos getOffset（IFacing directives, int offset）；`

或者，你可以直接获得使用 [Ifacing](/Vanilla/World/IFacing/) 对象，使用那里提供的静态方法。

- [将](/Vanilla/World/IFacing/) 方向抚平char@@1的方向
- 整条偏移 -> 该方向有多少块？