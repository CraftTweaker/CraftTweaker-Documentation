# 关于预处理器

## 什么是预处理器
As the name suggests, preprocessors are executed before the script is executed.  
They can perform various actions like enabling Debug Mode or Supress Bracket Errors.

## 调用预处理器
A preprocessor can be called using the #comment function.  
Be careful with the comments though as you might start one with a preprocessor keyword.

```zenscript
#debug （调试）是我最喜欢添加在注释中的词语
```

↑ 由于系统发现了`#debug`，因而将启动调试模式。 如果你真的想保证这种罕见的情况不会发生，使用 `//` 来标记注释。