# IBlockStateMatcher

一个 IBlockStateMatcher 对象可以用于匹配一个 [IBlockState](/Vanilla/Blocks/IBlockState/) 对象与一组要求或一组匹配的区块状态匹配。

## 导入相关包

如果遇到任何问题 (例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/) 或使用静态 `可能需要导入包裹。 reate()` 方法)，比抱歉更安全并添加导入。  
`导入craftminstruer.blockIBlockStateMatcher；`

## 匹配一个特定的IBlockState

每 [IBlockState](/Vanilla/Blocks/IBlockState/) 也是一个 IBlockStateMatcher，只匹配自己。

## 匹配任何方块状态的特定方块。

您可以使用 [IBlockState](/Vanilla/Blocks/IBlockState/)'s `matchBlock()` 方法创建一个 IBlockStateMatcher，它与该块的任何可能的区块状态相匹配。

## Calling an IBlockStateMatcher

有几种方法返回一个 IBlockStateMatcher

- 使用 `IBlockStateMatcher.create()`。
- 在另一个 IBlockStateMatcher上使用 `withMatchedValuesForty()` 方法。
- 或两辆IBlockStateMatcher一起获得一个复合匹配器。
- 创建一个 [IBlockState](/Vanilla/Blocks/IBlockState/)，因为所有IBlockState对象都是 IBlockState匹配器。

## 复合匹配器

当使用 OR (`|`合并IBlockStateMatchers时，由此产生的IBlockStateMatcher不再绑定到一个特定的基础块， 和一个 [IBlockState](/Vanilla/Blocks/IBlockState/) 或一个使用 `IBlockStateMatcher 创建的IBlockStateMatcher一样。 reate()` 方法。 相反，这场比赛匹配任何块状态，这些块状态本会被任何一个合并匹配器匹配。

由于这个区块状态没有绑定到一个特定的区块，无法使用 `withMatchedValuesForperty()` 方法检索另一个 IBlockStateMatcher。

### 静态创建

`创建静态IBlockState匹配器(IBlockState... blockStates);` 参数

- [IBlockState](/Vanilla/Blocks/IBlockState/)... blockStates-> 零或更多块状态与这个匹配器匹配。 

返回一个 IBlockStateMatcher 以匹配指定的blockstate(s)。

- 如果提供了0 `块国家` ，这个匹配器将永远不会匹配任何块状态。 
- If only one blockstate is supplied in `blockStates`, the resulting IBlockStateMatcher will match *any* blockstate of the provided IBlockState's underlying block with any property values accepted as matching. `withMatchedValuesForProperty` 方法可以用于为属性添加更多的具体要求。 
- If multiple `blockStates` are supplied, the resulting IBlockStateMatcher is the same as using the OR (`|`) operator with each of the IBlockStates provided.

## ZenMethods

### 匹配

`布尔匹配项 (IBlockState) ;`  
参数：

- [IBlockState](/Vanilla/Blocks/IBlockState/) blockstate状态 → 要匹配的 blockstate对象

返回一个布尔值，表示区块状态是否符合匹配器的要求。  
您也可以使用 `A 有 B` 表示 `A.matches(B)`。

### 获取或添加允许的属性

*(这些方法只允许在非复合的 IBlockStateMatcher 实例中使用)*

    IBlockState匹配器与 MatchedValuesForty(名称, 字符串... 值；
    列表<String> getMatchedValuesForperty(名称)；
    Map<String, List<String>> getMatchedProperties();
    

参数：

- 字符串名称 -> 属性的名称
- String... 值 → 匹配的 IBlockState 的属性可能具有的一个或多个值。

返回一个新的 IBlockStateMatcher 与此 IBlockStateMatcher 具有相同的属性要求，但指定的属性 `名称`除外， 现在允许任何指定的 `值` 作为匹配的输入。

### getMatchingBlockStates

`Collection<IBlockState> getMatchingBlockStates();` 返回每一个 [IBlockState](/Vanilla/Blocks/IBlockState/) 的集合与此 IBlockStateMatcher 匹配的属性的组合。 此列表可能包含无法通过普通游戏方式的区块状态。 (例如： `IBlockStateMatcher) Reate(<blockstate:minecraft:log>)` 将返回一个 IBlockStateMatcher，它匹配到与属性相关的日志 `axis=no`在所有6边都有树皮材质。)

### 检查区块状态是否是复合状态

`布尔值 isCompound()`

您的期望是什么。

### 获取一个命令字符串表达式

`ZenGetter 命令字符串`

返回一个Backet Handler 表达式字符串，如果需要与 `与 MatchedValueForProperty()` 调用配对。  
请记住，返回的方法调用并没有围绕参数的 `""` 。  
所以，如果你想要复制该结果，你需要手动添加它们到参数中！