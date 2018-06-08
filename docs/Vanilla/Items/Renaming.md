# 重命名

总觉得有些名字很烦人？  

别担心，我们有重命名系统。

## 改变显示名称

改变物品或者方块的名称很简单。
你可以将 `item` 处物品名称修改为 `newName`：
```js
item.displayName = newName;

//示例
<minecraft:chest>.displayName = "存储盒豪华版";
```
`item` 即为一个 [物品堆](/Vanilla/Items/IItemStack).  
`newName` 为一个字符串。

## 改变本地化名称

一些模组的存储栏仍然显示旧有名称，你可能需要通过本地化名称来修改它。  
你可以通过阅读 `游戏` 条目来了解什么是本地化。
```js
game.setLocalization(languageCode,unlocalizedName,newName);

game.setLocalization("tile.chest.name","存储盒豪华版")
```
`languageCode` 是一个可选的字符串，如果你指定了它，那么能无视客户端语言设置来指定名称。  
`unlocaLizedName` 为字符串。  
`newName` 为字符串。