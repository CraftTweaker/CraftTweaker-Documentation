# IOreDict

Forge 的矿物词典是用条目形式描述一系列物品的列表。
当人们谈论矿物词典时，一般指的是[矿物词典条目](IOreDictEntry)而不是词典本身。

## 导入

如遇任何问题（如为[数组](/AdvancedFunctions/Arrays_and_Loops)声明类型），可以尝试通过导入相关包来解决。
`import crafttweaker.oredict.IOreDict;`

## 如何取得矿物词典

你可以使用 [`oreDict` 全局域](/Vanilla/Global_Functions)来取得矿物词典。

## 方法

我们能对矿物词典做什么呢？

### 取得[矿物词典条目（IOreDictEntry）](IOreDictEntry)

你可以使用以下三种方式取得矿物词典条目，无论该条目存在与否。
如果该条目不存在，将会被创建。

``` js
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### 迭代所有已注册条目

[矿物词典条目（IOreDictEntries）](IOreDictEntry)
``` js
// 成员 `entries` 用来取得矿物词典的所有已注册条目！
val allEntries = oreDict.entries;

for oreDictEntry in allEntries {
	print(oreDictEntry.name);
}

// 你还可以迭代矿物词典：
for entry in oreDict {
	print(entry.name);
}

```

## 如果检查矿物词典条目是否存在

你可以使用 `in` 或 `has` 运算符检查[矿物词典条目（IOreDictEntry）](IOreDictEntry)是否存在：
```
if (oreDict in "ingotIron") {
	print("ingotIron 存在！");
}

if (oreDict has "ingotIron") {
	print("ingotIron 存在！");
}


// 还可以使用 `contains` 方法：
if (oreDict.contains "ingotIron") {
	print("ingotIron 存在！");
}
```
