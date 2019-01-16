# 全局和静态变量

相信你一定遇到了这样的情景：在每个脚本中一遍又一遍的重复声明相同的变量  
“就没什么方法能够在每个脚本中都能够调用？”你脑海里一定无数次重复了这个问题。

值得欣慰的是，现在已经能够有办法声明并访问全局/静态的值了！  
当然，它们一旦声明就无法被改变。

## 静态和全局变量的区别

静态和全局变量都可以跨脚本调用，并且在脚本执行前就被实例化了。  
两者都无法再次被修改。  
不同之处在于两者如何被调用：  
全局变量可以在脚本的任意处，简单的使用变量名来进行调用。除非本地脚本中有同名变量覆盖了它。  
静态变量则需要通过[跨脚本调用](Cross-Script_Reference/)方式才能访问。

创建全局变量使用 `global` 关键字；  
创建静态变量使用 `static` 关键字。

除此之外，他们是相同的！

## 声明全局变量

声明全局值和声明本地值一样简单： 

    import crafttweaker.item.IItemStack;
    
    
    global myGlobalValue as IItemStack = &lt;minecraft:dirt&gt;;
    static myStaticValue as IItemStack = &lt;minecraft:sand&gt;;
     
    Context | Request Context
    

好吧，我们可以把它分析了吗？

1. `global` 关键字表示全局值的声明
2. `myGlobalValue` 表示值的名称
3. `as IItemStack` 表示值的类型（推荐在转换变量之前[导入](Import/)这个类型）
4. `= <minecraft:dirt>;` 表示值的初始化。 由于全局值是最终的，因此你需要在声明它们的同时初始化！

## 一些忠告

- 你只能访问已经被声明的全局变量。 使用[优先级预处理器](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/)来确认有全局变量的脚本先被执行。
- 全局变量不能被子目录里的脚本定义！ It will compile but you will be left with a huge FieldNotFound Exception.
- While it is technically possible to omit the `as` part, it is recommended leaving it in, as the IAny interface is not fully functional yet. Also, it makes your declaration more clear for people reading/debugging your script!
- Local variables/values CAN overshadow global variables. The script will always search the innermost scope for variables and go outwards until it hits global when searching for keywords!