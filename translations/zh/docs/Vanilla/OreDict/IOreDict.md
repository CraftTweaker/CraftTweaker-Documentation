# IOREDict

Forge OreDictions就像一个庞大的词汇，它包含许多不同的条目，每个条目都被描述为合适的条目。  
在谈到矿石字典时，人们大多引用 [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) 不是整个矿石字典。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.oredict.IORDict.`

## 如何检索oreDictionary

您可以使用 [`oredDict` 全局关键字](/Vanilla/Global_Functions/) 检索OreDiction。

## 方法

那么可以用雷迪克来做些什么？

### 获取 [IOreDictEnter](/Vanilla/OreDict/IOreDictEntry/)

您可以使用下面三种方法中的任何一种方法来使用 OreDictEntry，不管它是否已经存在。  
如果oredDictEnter不存在，它将被创建。

```zenscript
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### 通过所有注册的 [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/)

```zenscript
///该条目成员是为了检索所有注册的 oreDictionary 条目！
val allEntries = oreDict.entries;

for oreDictEntry in allEntries{
    print(oreDictEntry.name);
}

//Alternatively, you can just iterate through oreDict
for entry in oreDict {
    print(entry.name);
}

```

## 如何检查矿石字典记录是否存在

您可以使用</code> 或 `中的 <code>或` 操作员来检查一个 [IOreeDictentre](/Vanilla/OreDict/IOreDictEntry/) 是否已经存在：

```zenscript
if (oredDict in "ingotIron") 然后
    print("ingotIron存在! );
}

if (oreDict have "ingotIron") 然后
    print("ingotIron存在! );
}


//或者使用包含的函数:
if(oreDict). ontains "ingotIron") Windows
    print("ingotIron存在!"); 
}
```