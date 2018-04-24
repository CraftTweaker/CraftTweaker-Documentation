# 把你的脚本拆分成多个文件

把你的脚本分割成多个文件是一个好习惯。

## 问题
- 当为大型整合包编写脚本时，你的脚本可能会变得复杂而又冗长；
- 调试冗长的脚本需要大量时间，尤其是当你得到的错误没有指明所在行的时候。

## 我们需要知道的事情
- CraftTweaker 可以载入多个脚本文件；
- CraftTweaker 甚至可以载入子目录中的脚本文件；
- 只要 .zip 文件没有设定密码，CraftTweaker 还可以载入其中包含 .zs 脚本。

## 解决方案
- 把你的脚本拆分成多个小文件；
- 例如你可以按模组拆分文件。

## 举例
```
scripts
	thermalExpansion
		Compactor.zs
		Crucible.zs
	Vanilla
		Recipes
			Remove.zs
			Shaped.zs
			Shapeless.zs
		Seeds.zs
	oreDict.zs
```

## 好处
- 你的脚本更易于调试；
- 一个错误只会导致某一个部分无法加载，不会影响到整个脚本；
- 查看你的脚本的用户能够快捷找到特定语句的位置。

## 坏处
- 你需要关注脚本的加载顺序（尤其是一个脚本需要使用另一个脚本中所添加物品的时候）。参看[优先级处理器](/AdvancedFunctions/Preprocessors/PriorityPreprocessor.md)。
- 多种归类脚本的方式对于新手或许有点难以理解。
