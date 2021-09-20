# 或非运算符

A **NOR** gate is an inverted **OR** gate. This is the same as using the output of the **OR** gate as the input to the **NOT** gate. This means that the **NOR** gate returns `TRUE` only when both inputs are `FALSE`.

| 输入1 | 输入2 | 输出 |
| --- | --- | --:|
| 0   | 0   |  1 |
| 0   | 1   |  0 |
| 1   | 0   |  0 |
| 1   | 1   |  0 |


    空白示例：
    nor|[]~[]
    
    举例：
    nor|[reskillable:mining|5]~[reskillable:gathering|5]


## 案例

只有在玩家获得采矿等级或采集等级达到5级之前才允许使用木制铲子：

```zenscript
addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gathering|5]");
```