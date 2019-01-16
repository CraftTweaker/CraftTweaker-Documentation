# 导入函数

你可以只导入你需要的函数，而不是每次都输入整个函数名称。 当使用模组函数时很有用。

## 关于1.12前导入的说明

CraftTweaker 1.12 有很多代码都被修改了。  
以前，所有的内部函数都是使用的 `minetweaker.package.function`。 现在， `crafttweaker` 取代了 `minetweaker` ，所以现在它是 `crafttweaker.name.function` 了！

如果你遇到任何来自此 Wiki 的脚本导入问题，你可能需要检查你的 MC 版本是否低于1.12。

## 基本导入

导入必须在脚本开头被声明。 You will have to declare imports for each scripts separately. Be careful not to import two functions with the same name, use the AS function for that

    //This will import the hide function from JEI
    import mods.jei.JEI.removeAndHide;
    
    //And this will import the JEI package
    import mods.jei.JEI;
    
    //removeAndHide is a function, so we can just use it
    removeAndHide(<minecraft:dirt>);
    
    //JEI is a package, so we need to specify what function of it we want to use
    JEI.hide(<minecraft:diamond>);
    

## Import as

Sometimes you want to import two functions with the same name or just want to keep your scripts look better by using custom names. When adding the AS statement at the end of the import, you can specify the name that the import should listen to.

    //This will import the hide function from JEI and make it available under the name "h"
    import mods.jei.JEI.hide as h;
    
    //And this will import the removeAndHide function from JEI and make it available under the name "rh"
    import mods.jei.JEI.removeAndHide as rh;
    
    h(<minecraft:dirt>);
    rh(<minecraft:diamond>);