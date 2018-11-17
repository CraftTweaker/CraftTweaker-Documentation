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

全局变量创建需要使用 `global` 关键字；  
静态变量创建需要 `static` 关键字。

除此之外，他们是相同的！

## 声明全局变量

Declaring a global value is as simple as declaring a local value:

    import crafttweaker.item.IItemStack;
    
    
    global myGlobalValue as IItemStack = <minecraft:dirt>;
    static myStaticValue as IItemStack = <minecraft:sand>;
    

Okay, let's break it down, shall we?

1. `global` keyword that indicates the declaration of a global value
2. `myGlobalValue` the name of the value
3. `as IItemStack` the type of the value (It is recommended to [import](Import/) the types before casting the variable)
4. `= <minecraft:dirt>;` value initialization. As global values are final, you need to initialize them whilst declaring them!

## Words of advice

- You can only access globals that have already been declared. Use the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) to make sure the scripts in which global are declared are executed first.
- Globals cannot be declared in scripts that are inside subfolders! It will compile but you will be left with a huge FieldNotFound Exception.
- While it is technically possible to omit the `as` part, it is recommended leaving it in, as the IAny interface is not fully functional yet. Also, it makes your declaration more clear for people reading/debugging your script!
- Local variables/values CAN overshadow global variables. The script will always search the innermost scope for variables and go outwards until it hits global when searching for keywords!