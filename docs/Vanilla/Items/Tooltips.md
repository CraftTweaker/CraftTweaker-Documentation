# 文本提示（Tooltips）

添加或者移除文本提示很简单：  
你只需要指定一个物品（矿物词典也可以），换句话说，指定一个材料。

## 清除文本提示
下面语句会清除 `item` 的所有文本提示：
```js
item.clearTooltip();
```

## 普通文本提示
下面语句会为 `item` 添加  `tT` 作为文本提示
```js
item.addTooltip(tT);

<minecraft:chest>.addTooltip("Storage, what can I say more?");
```
`item` 为一个 [材料](/Vanilla/Variable_Types/IIngredient)  类型  
`tT` 为一个字符串

## Shift 显示的问题提示
添加一个只有在 shift 状态下才会显示的文本提示。
```js
item.addShiftTooltip(tT);

<minecraft:chest>.addShiftTooltip("STORAGE!!!");
```
`item` 为一个 [材料](/Vanilla/Variable_Types/IIngredient)  类型  
`tT` 为一个字符串

# 样式代码
世界是五彩斑斓的，文本提示也应当如此。  
混合镶套样式是可行的（诸如绿色删除线样式）

## 颜色样式

你可以为你的字符串指定如下 16 种颜色
```
format.black
format.darkBlue
format.darkGreen
format.darkAqua
format.darkRed
format.darkPurple
format.gold
format.gray
format.darkGray
format.blue
format.green
format.aqua
format.red
format.lightPurple
format.yellow
format.white
```

```js
<minecraft:stick>.addTooltip(format.green("这是木棍"));
```

## 格式代码
你可以为你的字符串指定不同的格式：
```
format.obfuscated
format.bold
format.strikethrough
format.underline
format.italic
```

```js
<minecraft:stick>.addShiftTooltip(format.strikethrough("这还是木棍"));
```