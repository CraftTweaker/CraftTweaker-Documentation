# 创造模式标签页（ICreativeTab）

创造模式物品栏对象代表了创造模式物品栏

## 导入相关包
为了避免发生一些不期而遇的问题，最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.creativetabs.ICreativeTab;`

## 获取对象
你可以从 [创造模式标签页处理器](/Vanilla/Brackets/Bracket_CreativeTab) 中检索得到创造模式物品栏对象。

## 无参数 ZenGetters 和 ZenMethods

| ZenGetter/ZenMethod | 返回类型 |
| :-----------------: | :------: |
|   searchBarWidth    | 整型数字 |
|      tabLabel       |  字符串  |
|  setNoScrollBar()   |  不返回  |
|    setNoTitle()     |  不返回  |


## ZenMethod
#### 设置背景图片名称
传入字符串 (例： `"item_search.png"`)。 
不返回任何数值

```
tab.setBackgroundImageName(String backgroundImage);
```
