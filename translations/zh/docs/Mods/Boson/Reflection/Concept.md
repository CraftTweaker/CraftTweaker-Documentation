# 概念

Reflection is an English word that has many meanings, but one in particular is "the production of an image by or as if by a mirror" ([Source: Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/reflection)). 同样的 概念也适用于方案拟订。

反思事实上是一种工具，它允许程序在镜像中看到自己并进行一些反思， 像 分析对象的类型，程序暴露哪种方法，引用私人变量等。 这显然是一个非常强大的工具 但同时也是极其危险的，因为反思提供了几乎 个当前在程序中运行的任何东西的访问权限。

ZenScriptX项目旨在将一组小的反思可能性带到ZenScript。 不允许 脚本用户避开ZenScript 沙盒。 尤其是，ZenScriptX 调制反射器 允许用户做以下事情：

- 检查任何对象的类型，无论是变量还是括号处理；
- 在 ZenScript 沙盒中获取一个类的简单和完全合格的名字；
- 获取ZenScript 沙盒以外的类的简单和完全合格的名字；
- ZenScript 类与其原生对应的 (即 `craftbiner.item.IItemStack` 变成 `craftbiner.api.IItemStack`)。

这是它：脚本用户没有办法列出类提供的所有方法或规避ZenScript 使用这种考虑施加的 限制。 事实上是这样。 更多有用的开发者工具来确保由 CraftTinfle 集成曝光的 类型在脚本和实际后端之间得到正确转换。

若要开始，请查看 [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) 或 [`class`](/Mods/Boson/Reflection/Class/) 的文档。
