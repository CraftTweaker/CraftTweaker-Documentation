# BlockPos

代表一个方块在世界上的位置

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.util.BlockPos
```

## Constructor #构造函数
```zenscript
新手工艺.api.util.BlockPos(x为整数, y为整数, z为整数);
```
| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | int | No description provided |
| y  | int | No description provided |
| z  | 整数  | No description provided |



## 方法
### 添加

同时添加两个位置并返回结果。

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
新 BlockPost(0, 1, 2) .add(pos as craftweeper.api.util.BlockPos);
new BlockPost(0, 1, 2).add(new BlockPost(3, 2, 1));
```

| 参数 | 类型                                                           | 说明       |
| -- | ------------------------------------------------------------ | -------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 要添加的其他位置 |



将给定的值添加到这个位置，并以新的值返回一个新的位置。

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
新BlockPosad(0, 1, 2) .add(x 双倍，当双倍，当双倍)；
新BlockPost(0, 1, 2).add(50.21, 20.8, -25.2)；
```

| 参数 | 类型  | 描述       |
| -- | --- | -------- |
| x  | 双精度 | 要添加的 x 值 |
| 年  | 双精度 | 要添加的y 值  |
| z  | 双精度 | 要添加的z 值  |


### 交叉产品

基于此位置的交叉产品和给定位置创建一个新BlockPos

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
新 BlockPost(0, 1, 2) .crossProduct(pos as craftbiner.api.util.BlockPos);
new BlockPost(0, 1, 2).crossProduct(new BlockPost(5, 8, 2));
```

| 参数 | 类型                                                           | 描述             |
| -- | ------------------------------------------------------------ | -------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 要跨越产品的BlockPos |


### 距离Sq

使用BlockPos的中心来获取此位置的方位距离到指定的 BlockPos

双倍返回

```zenscript
新BlockPosad(0, 1, 2) .distanceSq(作为craftbiner.api.util.BlockPos);
新BlockPost (0, 1, 2) .distanceSq(新BlockPost (256, 128, 10););
```

| 参数 | 类型                                                           | 描述            |
| -- | ------------------------------------------------------------ | ------------- |
| 到  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 要检查的 BlockPos |



将这个位置的平面连接到指定的BlockPos

双倍返回

```zenscript
新BlockPosad(0, 1, 2) .distanceSq(作为craftbiner.api.util.BlockPos, useCenter as boolean);
new BlockPost(0, 1, 2).distanceSq(新BlockPost(256, 128, 10);; true);
```

| 参数   | 类型                                                           | 描述                    |
| ---- | ------------------------------------------------------------ | --------------------- |
| 到    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 要检查的 BlockPos         |
| 使用中心 | boolean                                                      | 是否应使用坐标中心？ (每个值增加0.5) |



获取这个位置到指定坐标的平方

双倍返回

```zenscript
新BlockPosad(0, 1, 2).distanceSq(fx as 加倍, y as 加倍, z as 加倍, useCenter as boolean);
new BlockPosos(0, 1, 2).distanceSq(000.25, 250.75, 100.20, false);
```

| 参数   | 类型      | 描述                    |
| ---- | ------- | --------------------- |
| x    | 双精度     | x 位置检查                |
| 年    | 双精度     | y 位置检查                |
| z    | 双精度     | 要检查的z位置               |
| 使用中心 | boolean | 是否应使用坐标中心？ (每个值增加0.5) |


### 向下

基于此BlockPos 创建一个新的BlockPos ，这个BlockPos 是一个小于此BlockPos

 返回: `一个新的 BlockPos , 它是一个小于此BlockPos 的块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPost(0, 1, 2).down();
```

### 东部地区

基于这个BlockPos 创建一个新的BlockPos ，这个BlockPos 是这个BlockPos 以东的一个块

 返回: `一个新的 BlockPos , 它是这个BlockPos 以东的一个块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPost(0, 1, 2) .east();
```


基于此BlockPos 创建一个新的BlockPos ，这个BlockPos 是此BlockPos 以东的 n 块((s)

 返回: `一个新的BlockPos , 它是这个BlockPos 以东的 n 块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新的 BlockPost(0, 1, 2) .east(n int);
新的 BlockPost(0, 1, 2) .east(2);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| n  | 整数 | No description provided |


### 曼哈顿距离

获取这个点与不同位置相比的曼哈顿距离

返回为int值

```zenscript
新 BlockPost(0, 1, 2) manhattanDistance(其他为 craftbiner.api.util.BlockPos);
new BlockPost(0, 1, 2).manhattanDistance(new BlockPost(4, 5, 6));
```

| 参数    | 类型                                                           | 描述        |
| ----- | ------------------------------------------------------------ | --------- |
| other | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 其他位置去获取距离 |


### 北区

基于这个BlockPos 创建一个新的BlockPos ，这个BlockPos 是这个BlockPos 以北的一个块

 返回： `一个新的BlockPos，它是这个BlockPos以北的一个块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPosad(0, 1, 2).north();
```


在此BlockPos 上创建一个新的 BlockPos ，这个BlockPos 是此BlockPos 以北的 n 块((s)

 返回: `个新的BlockPos, 它是这个BlockPos 以北的 n 块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPosad(0, 1, 2).north(未设定)；
新BlockPosad(0, 1, 2).north(10)；
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| n  | 整数 | No description provided |


### 偏移量

基于这个BlockPos 创建一个新的BlockPos ，这个BlockPos 基于给定的 [craftbiner.api.util.Direction](/vanilla/api/util/Direction)

 返回： `一个新的BlockPos，它是这个BlockPos的1块偏移量`

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
新 BlockPost(0, 1, 2) .offset(direction as craftbiner.api.util.Direction);
new BlockPost(0, 1, 2).offset(<direction:east>);
```

| 参数 | 类型                                                             | 描述                      |
| -- | -------------------------------------------------------------- | ----------------------- |
| 方向 | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | No description provided |



根据给定的 [craftbiner.api.util.方向](/vanilla/api/util/Direction) 创建一个新的 BlockPos 基于此 BlockPos 的 n 块(s) 偏移。

 返回: `一个新的BlockPos, 它是 n 区块偏移到这个区块`

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPost(0, 1, 2) .offset(direction as craftbiner.api.util.Direction, n as int);
new BlockPost(0, 1, 2).offset(<direction:south>, 3);
```

| 参数 | 类型                                                             | 描述                      |
| -- | -------------------------------------------------------------- | ----------------------- |
| 方向 | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | No description provided |
| n  | 整数                                                             | No description provided |


### 南方

基于这个BlockPos 创建一个新的BlockPos ，这个BlockPos 是这个BlockPos 以南的一个块

 返回: `一个新的BlockPos , 它是这个BlockPos 以南的一个块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPosad(0, 1, 2).south();
```


在此BlockPos 上创建一个新的 BlockPos ，这个BlockPos 是此BlockPos 以南的 n 区块。

 返回: `个新的BlockPos, 它是这个BlockPos 以南的 n 块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPosad(0, 1, 2) south(n int.);
新Blockpos(0, 1, 2).south(12);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| n  | 整数 | No description provided |


### 减少

同时减去两个位置，然后返回结果。

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
新BlockPost(0, 1, 2).减法(pos as craftwiner.api.util.BlockPos);
新BlockPost(0, 1, 2).减法(新BlockPost(2, 1, 3));
```

| 参数 | 类型                                                           | 描述       |
| -- | ------------------------------------------------------------ | -------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 其他要删除的位置 |


### 上

创建一个新的 BlockPos 基于这个比这个BlockPos 更高的块

 返回: `一个新的 BlockPos , 比这个BlockPos 更高的一个块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPost(0, 1, 2).up();
```


基于此BlockPos创建一个新的BlockPos，这个BlockPos大于此BlockPos

 返回： `一个新的BlockPos, 其n块大于此BlockPos`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPosad(0, 1, 2).upp(n int);
新BlockPosad(0, 1, 2).up(45);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| n  | 整数 | No description provided |


### 西部地区

基于这个BlockPos 创建一个新的BlockPos ，这个BlockPos 是这个BlockPos 以西的一个块

 返回： `个新的BlockPos，它是这个BlockPos以西的一个块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新BlockPosad(0, 1, 2).west();
```


在此BlockPos 上创建一个新的 BlockPos ，这个BlockPos 是此BlockPos 以西的 n 块((s)

 返回: `个新的BlockPos, 它是这个BlockPos 以西的 n 块`

返回 net.minecraft.util.math.BlockPos

```zenscript
新的 BlockPosad(0, 1, 2).west(未设定)；
新的 BlockPosad(0, 1, 2).west(120)；
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| n  | 整数 | No description provided |


### 距离内

检查给定的 BlockPos 是否在这个BlockPos 的指定距离内(使用方块的中间)

返回为布尔值

```zenscript
新BlockPosad(0, 1, 2).witinDistance(pos as craftbiner.api.util.BlockPos, 距离加倍);
新BlockPosad(0, 1, 2).witinDistance(new BlockPosos(80, 75, 54);, 10);
```

| 参数 | 类型                                                           | 描述                 |
| -- | ------------------------------------------------------------ | ------------------ |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 要检查是否在距离内的BlockPos |
| 距离 | 双精度                                                          | 在距离内检查             |



## 参数

| 名称 | 类型 | 可获得  | 可设置   |
| -- | -- | ---- | ----- |
| x  | 整数 | true | false |
| 年  | 整数 | true | false |
| z  | 整数 | true | false |

## 运算符
### ADD

同时添加两个位置并返回结果。

```zenscript
新 BlockPost(0, 1, 2) + pos as craftweeper.api.util.BlockPos
new BlockPost(0, 1, 2) + new BlockPost(3, 2, 1)
```

| 参数 | 类型                                                           | 描述       |
| -- | ------------------------------------------------------------ | -------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 要添加的其他位置 |
### SUB

同时减去两个位置，然后返回结果。

```zenscript
新 BlockPost(0, 1, 2) - 以craftweeper.api.util.BlockPos
new BlockPost(0, 1, 2) - 新BlockPost(2, 1, 3)
```

| 参数 | 类型                                                           | 描述       |
| -- | ------------------------------------------------------------ | -------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 其他要删除的位置 |

## 卡斯特尔

| 结果类型 | 是否隐藏  |
| ---- | ----- |
| 长    | false |

