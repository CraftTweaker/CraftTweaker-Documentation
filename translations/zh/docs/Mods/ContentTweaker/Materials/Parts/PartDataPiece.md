# PartDataPiece

部件数据块可以添加到 [部件类型](/Mods/ContentTweaker/Materials/Parts/PartType/) 以便能够将一些 [材料部件数据](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) 添加到 [材料部件](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 与 [部件](/Mods/ContentTweaker/Materials/Parts/Part/) 是这个 [类型部件](/Mods/ContentTweaker/Materials/Parts/PartType/)

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.PartDataPiece；`

## 正在获取此对象

您可以使用 `getData()` 在 [部分](/Mods/ContentTweaker/Materials/Parts/Part/) 获取一个 [元件的列表](/Mods/ContentTweaker/Materials/Parts/Part/) DataPieces

或者，您可以使用 [材料系统](/Mods/ContentTweaker/Materials/MaterialSystem/) 注册一个新的 PartDataPiece ：

```zenscript
mods.contenttweeper.MaterialSystem.createPartDataPiece(需要输入布尔名称)
```

参数：

- 字符串名称：新的 PartDataPiece 名称
- 必须输入布尔值：是否需要 PartDataPiece 在 [材料部件](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 上进行注册？

## ZenMethods

您可以从 PartType检索以下信息：

| ZenMethod（ZenMethod） | 返回值类型  |
| -------------------- | ------ |
| getName()            | string |
| Requireed()          | string |