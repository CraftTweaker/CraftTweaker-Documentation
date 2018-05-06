# 函数导入

与其一遍遍输入整个函数名称，你可以试试依据需求导入对应的函数；  
当使用 mod 函数的时候会非常有用。

## 1.12 之前版本需要注意的导入事项
CraftTweaker 1.12 版本，很多代码都发生了变化。  
在此之前，所有的内部函数都使用 `minetweaker.package.function` 名称；  
不过现在， `minetweaker` 名称被 `crafttweaker` 所取代，所以现在一律使用 `crafttweaker.name.function` 名称！

所以接下来 wiki 演示的案例中如果出现了问题，先检查下你的 MC 版本是不是1.12 以后的。


## 基本导入方式

导入部分需要在脚本顶部声明，你需要为不同的脚本各自声明导入；  
注意不要导入两个相同名称的函数，使用 **as** 函数来处理它：

```js
//这个语句会导入 JEI 的隐藏函数
import mods.jei.JEI.removeAndHide;

//这一条会导入 JEI 包
import mods.jei.JEI;

//removeAndHide（移除并隐藏）是一个函数，我们可以直接调用它
removeAndHide(<minecraft:dirt>);

//JEI 是一个包，所以我们需要特别指明我们相用哪个函数
JEI.hide(<minecraft:diamond>);
```

## Import as 方法

有时候你想要导入两个同名函数，或者想要给导入的函数一个自定义名称；
只需要添加 **as** 关键词在 import 语句的末尾即可，你可以随意定义自定义名称。

```js
//这个语句能够导入 JEI 的 hide 函数，并赋予其别名 "h"
import mods.jei.JEI.hide as h;

//这个语句能够导入 JEI 的 removeAndHide 函数，并赋予其别名 "rh"
import mods.jei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```

