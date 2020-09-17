# IItemGetContainer项目

IstemGetContainerItem 函数可以添加到 [item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 并且每当该项目被用作成分时都会运行。  
它被用来确定何时项目在制作时段中的剩余部分。  
想像桶，例如：每个填充的桶都有空桶作为容器物品， 当一个填充的桶被制造时，你将最终会有一个空的桶。  
此函数可以用来计算容器物品，所以你可以用NBT-Tags或更多的东西疯狂。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.IItemGetContainerItem；`

## 参数

IItemGetContainerItem 是一个具有以下参数的函数：

- [IItemStack](/Vanilla/Items/IItemStack/) stack → 这件物品。

函数需要返回一个新的 [IItemStack](/Vanilla/Items/IItemStack/) 对象，或者如果项目不应留下任何东西，则返回空。