# ICTPlayer

ICTPlayer 是 ContentTweaker 特殊的 [IPlayer](/Vanilla/Players/IPlayer/) 对象。  
这意味着所有 [IPlayer](/Vanilla/Players/IPlayer/) 方法也可以在此对象上使用！

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入mods.contenttweaker.Player；`

## ZenMethods

`IMutableItemStack getHeldItem(Hand hand);`

参数：

- [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) hand -> Main or Off Hand

返回 [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) 在给定的 [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/)。