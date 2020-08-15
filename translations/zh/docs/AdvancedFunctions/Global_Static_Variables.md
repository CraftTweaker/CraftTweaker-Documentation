# 全局和静态变量

相信你一定遇到了这样的情景：在每个脚本中一遍又一遍的重复声明相同的变量  
“就没什么方法能够在每个脚本中都能够调用？”你脑海里一定无数次重复了这个问题。

值得欣慰的是，现在已经能够有办法声明并访问全局/静态的值了！  
当然，它们一旦声明就无法被改变。

## 静态和全局变量的区别

脚本执行前, static和全局都是脚本和实例化的。  
两者都不能更改。  
不同的是他们是如何调用的：  
只要您已经有一个具有相同名称的本地变量就可以从任何地方调用全局元素。  
另一方面, 需要使用 [交互脚本引用](/AdvancedFunctions/Cross-Script_Reference/) 才能访问。

创建全局变量使用 `global` 关键字；  
创建静态变量使用 `static` 关键字。

除此之外，他们是相同的！

## 声明全局变量

声明全局值和声明局部值一样简单：

```zenscript
import crafttweaker.item.IItemStack;


global myGlobalValue as IItemStack = <minecraft:dirt>;
static myStaticValue as IItemStack = <minecraft:sand>;
```

好吧，我们可以把它分析了吗？

1. `global` 关键字表示全局值的声明
2. `myGlobalValue` 表示值的名称
3. `作为 IItemStack` 值的类型 (建议 [导入](/AdvancedFunctions/Import/) 在投射变量之前导入类型)
4. `= <minecraft:dirt>;` 表示值的初始化。 由于全局值是最终的，因此你需要在声明它们的同时初始化！

## 一些忠告

- 你只能访问已经被声明的全局变量。 使用[优先级预处理器](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/)来确认有全局变量的脚本先被执行。
- 全局变量不能被子目录里的脚本定义！ 它将会被编译但是会留下一个 FieldNotFound 异常。
- 虽然技术上可以省略 `as` 部分，但建议将其保留在其中，因为 IAny 接口尚未正常工作。 此外，对于人们阅读/调试，它还会让你的声明更加清晰！
- 局部变量/值会覆盖全局变量。 脚本将总会在最里面的范围内搜索变量并向外搜索，直到它在搜索关键字碰到 global！