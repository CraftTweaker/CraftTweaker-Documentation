# 导入函数

你可以只导入你需要的函数，而不是每次都输入整个函数名称。 当使用模组函数时很有用。

## 关于1.12前导入的说明

CraftTweaker 1.12 有很多代码都被修改了。  
以前，所有的内部函数都是使用的 `minetweaker.package.function`。 现在， `crafttweaker` 取代了 `minetweaker` ，所以现在它是 `crafttweaker.name.function` 了！

如果你遇到任何来自此 Wiki 的脚本导入问题，你可能需要检查你的 MC 版本是否低于1.12。

## 基本导入

导入必须在脚本开头被声明。 你必须分别声明每个脚本的导入。 注意不要导入两个同名的函数，如果要导入，请使用 as 函数。

    //这将会从 JEI 里导入 hide 函数
    import mods.jei.JEI.removeAndHide;
    
    //然后这将导入 JEI 包
    import mods.jei.JEI;
    
    //removeAndHide 是一个函数，所以我们可以直接使用它
    removeAndHide(<minecraft:dirt>);
    
    //JEI 是一个包，所以我们需要指定所用的函数
    JEI.hide(<minecraft:diamond>);
    

## 导入为

有时你想要导入两个同名的函数或者只是想要用自定义名称来让你的脚本看起来更好。 当在 import 末尾添加 as 语句时，你可以指定 import 导入的名称。

    //这将会从 JEI 导入 hide 函数并且让它能够以名称“h”使用
    import mods.jei.JEI.hide as h;
    
    //并且这将会从 JEI 导入 removeAndHide 函数并且让它能够以名称“rh”使用
    import mods.jei.JEI.removeAndHide as rh;
    
    h(<minecraft:dirt>);
    rh(<minecraft:diamond>);