# 加载器

预处理器加载器模式能够设定脚本的加载器。

## 如何开启
只需要在脚本中书写以 `#loader loaderName` 开头的注释，即可开启预处理器加载器模式， `loaderName` 为就你想要调用的加载器名称。  
示例：`#loader contenttweaker`

## 有什么用
开启了预处理器加载模式的脚本，只会使用指定的加载器来加载脚本。  
在先前的例子中， crafttweaker 的加载器不会触及这个文件，而是使用 "contentTweaker" 来执行脚本。  
如果不指定特殊的预处理器，默认使用 "crafttweaker" 来执行。