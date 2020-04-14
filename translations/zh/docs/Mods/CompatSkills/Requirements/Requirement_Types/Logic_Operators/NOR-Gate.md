# 或非运算符

**NOR**门就是一个翻转的**OR**门 这与把**OR**的输出作为**NOT**的输入是一样的。 这意味着只有两个输入都为`FALSE`时**NOR**才会返回`TRUE`。

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
    

## 使用例

只有在玩家获得采矿等级或采集等级达到5级之前才允许使用木制铲子：

```zenscript
addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gathering|5]");
```