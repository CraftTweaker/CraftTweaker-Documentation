# 使用循环语句使脚本更易读

## 问题
我们都会遇到：500多行的脚本不停重复着  `recipes.remove(item1);recipes.remove(item2),...` 。
不仅如此，还有可能花了几个小时来调试 `error in recipes.zs: null` ，最后发现问题出自一个小笔误……

## 解决方案
我的经验是：
在编写超过10行命令基本相同，只有一个参数需要修改的语句时，我会使用循环代替。

这样，仅需使用一个物品数组就可以循环执行某个命令。

``` js
import crafttweaker.item.IIngredient;

val Array = [
	item1,
	item2,
	item3,
	...
] as IIngredient[];


for item in Array {
	recipes.remove(item);
}
```

## 好处

- 使你的脚本更易读；（对我而言）
- 你可以更清楚地知道错误发生在哪个位置；
- 更易修改。因为你只需增删数组中的某个项目。

## 坏处

- 仅对需要修改少数参数的情况有效；
- 需要时间掌握，可能产生数组越界；
- 单个数组中的错误会导致整个循环体失效；
- 如果数组被错误创建，得到的错误信息不清晰。
