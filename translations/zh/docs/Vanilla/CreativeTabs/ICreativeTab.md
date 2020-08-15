# ICreativeTab

ICreativeTabObject 代表一个创造性的库存选项卡。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 craftbiner.creatativetabs.ICreativeTab；`

## 获取这样一个对象

您可以从 [创造性标签布料处理器](/Vanilla/Brackets/Bracket_CreativeTab/) 中检索一个 ICreativeTab 。

## ZenGetters 和 ZenMethods 没有参数

| ZenGetter/ZenMethod（ZenMethod） | 返回值类型  |
| ------------------------------ | ------ |
| searchBarWidth                 | int    |
| 标签标签                           | string |
| setNoScrollBar()               | 空(无)   |
| setNoTitle()                   | 空(无)   |

## ZenMethod（ZenMethod）

#### 设置背景图像名称

使用一个字符串(例如， `"item_search.png"`)。  
返回无效(无)。

```zenscript
tab.setBackgroundImageName(正在创建背景图像)；
```