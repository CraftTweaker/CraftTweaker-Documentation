# 加载器预处理器

加载器预处理器会指定脚本的加载器。

## 调用
你可以添加 `#loader loaderNames...` 来调用加载器预处理器。其中`loaderNames...`（加载器名称）是分配给脚本加载器的名称。两个加载器之间要用空格隔开<br/> 示例 1：`#loader contenttweaker`<br/> 示例 2：`#loader preinit crafttweaker gregtech`

## 它的作用
带加载器预处理器的脚本只能由指定的加载器加载。<br/> 在上面的第一个例子中，crafttweaker 的加载器不会执行这个脚本，而是是由名为“contenttweaker”的加载器取而代之。<br/> 在第二个示例中，“preinit”、“craftbower”和“gregtech”加载器都会执行该脚本。<br/> 如果没有为脚本指定预处理器，它就会使用默认的“crafttweaker”。<br/> 这里强烈建议你只为一个脚本定义一个加载器， 因为使用不同的加载器多次执行同一个脚本往往会导致错误或未定义的行为。<br/> 定义多个加载器主要用于在实用工具脚本中声明 [静态变量](/AdvancedFunctions/Global_Static_Variables/) 和 [自定义函数](/AdvancedFunctions/Custom_Functions/) 。这些内容接着就可以通过多个加载器的 [跨脚本引用](/AdvancedFunctions/Cross-Script_Reference/)获得。