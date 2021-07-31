# 使用循环语句使脚本更易读

## 问题

我们都会遇到这样的问题：500多行的脚本仅仅是将`recipes.remove(item1);recipes.remove(item2)`重复了500遍。  
不仅如此，还有可能花了几个小时来调试，最后发现问题出自一个小笔误，而你仅有的线索是`error in recipes.zs: null`

## 解决方法

我的经验是： 在编写超过10行命令基本相同，只有一个参数需要修改的语句时，我会使用循环代替。

这样，我仅需输入代码以遍历一个物品数组的所有物品，而不必重复输入所有函数。

```zenscript
import crafttweaker.item.IIngredient;

val Array = [
    item1,
    item2,
    item3,
    ...
] as IIngredient[];


for item in Array{
    recipes.remove(item);
}
```

## 优点

- （对我而言）使你的脚本更易读
- 你可以更清楚地知道错误发生在哪个位置
- 更易修改，因为你只需增删数组中的某个物品。

## 缺点

- 仅对需要修改少数参数的情况有效
- 更容易出现难以察觉的问题，例如数组声明错误
- 单个数组中的错误会导致整个循环失效
- 如果数组创建出错，得到的错误信息不清晰。