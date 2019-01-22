# 加载器预处理器

加载器预处理器将会指定脚本的加载器。

## 调用

你可以添加 `#loader loaderName` 来调用加载器预处理器，`loaderName（加载器名称）`是你要分配给你的脚本加载器的名称  
示例： `#loader contenttweaker`

## 它的作用

有加载器预处理器的脚本将只会被指定的加载器加载。  
上面的例子里， CraftTweaker 的加载器将不会触及该文件，取而代之的，叫 “contentTweaker” 的加载器将会执行这个脚本。  
如果你不指定加载器，它默认会是 “crafttweaker” 。