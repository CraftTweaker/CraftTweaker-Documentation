# 优先级预处理器

优先级预处理器将会允许你为脚本提供一个加载的优先级。

## 调用
你可以添加 `#priority number` 到你的脚本里来调用优先级预处理器，并且`number（数字）`将会成为你想要设置的优先级数字。

## 它的作用
The higher a script's priority the earlier it is getting executed.  
Scripts with the same priority will be sorted alphabetically using their pathname.