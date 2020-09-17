# 材料部分

材料部件对象是一个 [材料](/Mods/ContentTweaker/Materials/Materials/Material/) 和 [部件](/Mods/ContentTweaker/Materials/Parts/Part/)的组合。 例如 `白金渔具`。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.MaterialPart；`

## 正在获取此对象

有几种方法可以撤退这种物品，无论是作为列表还是单一物体。

单个对象：

- 使用 [材料零件处理器](/Mods/ContentTweaker/Materials/Brackets/Bracket_MaterialPart/)
- 使用 [材料](/Mods/ContentTweaker/Materials/Materials/Material/) 注册部件方法
- 使用 [部件的](/Mods/ContentTweaker/Materials/Parts/Part/) 注册的 ToMaterial 方法

列表：

- 使用 [MaterialSystem's](/Mods/ContentTweaker/Materials/MaterialSystem/) registerPartsForMaterial Methods
- 使用 [材料](/Mods/ContentTweaker/Materials/Materials/Material/) 注册配件方法
- 使用 [元件的](/Mods/ContentTweaker/Materials/Parts/Part/) 注册表材料方法

## 字段

您可以从材料部分检索以下信息：

| ZenMethod（ZenMethod） | 返回值类型                                                                           |
| -------------------- | ------------------------------------------------------------------------------- |
| getName()            | string                                                                          |
| getLocalizedName()   | string                                                                          |
| hasEffect()          | boolean                                                                         |
| hasOverlay()         | boolean                                                                         |
| getMaterial()        | [镜像](/Mods/ContentTweaker/Materials/Materials/Material/)                        |
| getPart()            | [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)                             |
| getItemStack()       | [IItemStack](/Vanilla/Items/IItemStack/)                                        |
| getTextureLocation() | 字符串                                                                             |
| getCTColor()         | [颜色](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                           |
| getColor()           | 整数                                                                              |
| isColorized()        | boolean                                                                         |
| getData()            | [IMaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) |

您也可以设置材料部分的以下信息：

| ZenMethod（ZenMethod） | 参数      | 说明                                 |
| -------------------- | ------- | ---------------------------------- |
| setColorized(颜色化)    | 布尔值颜色化  | 设置是否应用项目的颜色代码                      |
| 纹理定位(纹理定位)           | 字符串纹理位置 | 设置项目的纹理路径。 例如，如果你想要一个装备看起来与其他装备不同。 |