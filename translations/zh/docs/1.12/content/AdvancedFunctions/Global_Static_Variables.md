# 全局和静态变量

Sure you have been in the situation where you declared the same variable in each and every script over and over again.  
"Why is there no way to make them available in every script?" Is what went through your head at such times.

Be relieved now for there has been added a means of declaring and accessing global and scriptbound (static) values!  
They cannot be changed, though.


## 静态和全局变量的区别
Both, statics and globals are scriptbound and instantiated before the script is executed.  
Both cannot be changed.  
The difference is how they are called:  
Globals can be called from everywhere simply by their name unless you already have a local variable that has the same name.  
Statics on the other hand, need to use the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference/) to be accessed.

Globals are created using the `global` keyword.  
Statics are created using the `static` keyword.

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
3. `as IItemStack` the type of the value (It is recommended to [import](/AdvancedFunctions/Import/) the types before casting the variable)
4. `= <minecraft:dirt>;` 表示值的初始化。 由于全局值是最终的，因此你需要在声明它们的同时初始化！

## 一些忠告

- 你只能访问已经被声明的全局变量。 使用[优先级预处理器](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/)来确认有全局变量的脚本先被执行。
- 全局变量不能被子目录里的脚本定义！ 它将会被编译但是会留下一个 FieldNotFound 异常。
- 虽然技术上可以省略 `as` 部分，但建议将其保留在其中，因为 IAny 接口尚未正常工作。 此外，对于人们阅读/调试，它还会让你的声明更加清晰！
- 局部变量/值会覆盖全局变量。 脚本将总会在最里面的范围内搜索变量并向外搜索，直到它在搜索关键字碰到 global！