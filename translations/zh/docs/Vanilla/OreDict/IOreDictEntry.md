# IOREDictentre

当 [IOreDict](/Vanilla/OreDict/IOreDict/) 是词汇时，IOreDictEntries 是词汇中的条目。  
它们由一个名称 (OreDictionary name) 和一个解释 (所有匹配项) 组成。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.oredict.IOreDictEntry。`

## 检索此对象。

有多种方法获取一个 IOreDictEnterprise 对象： 如果您提到了一个尚不存在的oreDict ，它将被创建。

- 使用 [IOreDict](/Vanilla/OreDict/IOreDict/) 类。
- 使用 [矿石块处理器](/Vanilla/Brackets/Bracket_Ore/)。
- 使用 [IItemDefinitation's `ores` getter](/Vanilla/Items/IItemDefinition/).

## ZenGetters

您可以使用这些getter来检索一些关于操作的信息：

| 名称    | 描述              | 退货类型                                     |
| ----- | --------------- | ---------------------------------------- |
| 名称    | 返回 oredict 的名称  | 字符串                                      |
| 空的    | 如果oredict 为空    | 布尔值                                      |
| 第一个项目 | 返回oreDict的第一个项目 | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethods

您可以在 IOreDictEnterprise 上使用这些甲型六氯环己烷：

### 添加/删除项目

```zenscript
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items;
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(IItemStack[……]items);
oredDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### 检查IOreedDictentre 是否包含一个项目

您可以检查 IOreeDictEnterprise 是否包含一个使用</code> 或 `中的 <code>或` 关键字：

```zenscript
val oredictEnt = <ore:ingotIron>;

//当使用时可能
if(oredDictEnt in <minecraft:iron_ingot>)
    print("铁是在oreDic! );
}

//many 更喜欢使用它可能更符合语法
if(oreDictEnt 有 <minecraft:iron_ingot>)
    print("铁仍在oreDic！ );
}
```

### 镜像IOreDictentre

镜像IOreDictEnt意味着在另一个oreDictEnt中的所有项目将被oreDictEnt中的项目所取代，方法是在下列情况下执行的：

```zenscript
//make 铁和铜当量
val iron = <ore:ingotIron>;
val 铜= <ore:ingotCopper>;

//将所有条目从铁添加到铜中，以便铜含有铁和铜矿的条目
铁。 ddAll(copper)； 


//mirross铜到铁，所以所有铁中的物品都将被铜中的物品所取代。
//在这种情况下，这意味着所有铁和铜的矿石条目
铜.mirror(铁)；
```

## 成分实现

IOreDictentre 扩展 [IIngredient](/Vanilla/Variable_Types/IIngredient/). 这意味着 [IIngradient](/Vanilla/Variable_Types/IIngredient/) 可用的所有方法也都可供IOreDictEntries 使用。 这也意味着你可以将 IOreedDictEntries 放入IIngredient 数组(例如在设计配方方法中的数组)。

### 通过oredDictEntry的项目迭代中

```zenscript
val iro = <ore:ingotIron>;

for item in iron.items□
    recipe.remove(item)；
}
```