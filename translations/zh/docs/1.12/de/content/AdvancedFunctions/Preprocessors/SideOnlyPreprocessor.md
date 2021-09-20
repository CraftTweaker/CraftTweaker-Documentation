# SideOnly预处理器

预处理器可以设置脚本的加载类型。

## Einbinden

可以使用以下类型：

`#sideonly 类型名`

例：`#sideonly client` 或 `#sideonly server`

## Was er tut

它可以让脚本仅在执行端是网络的指定端时加载。 不使用此预处理器将导致脚本在两个指定端都加载（默认）。
