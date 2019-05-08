# IBlockState

IBlockState 对象代表一个方块的当前状态。

## 导入相关包

如果你遇到问题 ，你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.block.IBlockPattern;`

## 调用 IBlockState 对象

有很多方法可以返回一个 IBlockState 对象。

- 使用[尖括号引用](/Vanilla/Brackets/Bracket_BlockState/) `<blockstate:minecraft:log:variant=spruce>`
- 使用静态方法 `IBlockState.getBlockState()` （详情见下文）
- 使用 [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) 对象的 `getMatchingBlockStates()` 方法检索一个 IBlockStates 数组。
- 使用另一个 IBlockState 对象的 `withProperty()` 方法。

## 运行时解析 IBlockState

有可能你的脚本会依赖于一个还没有加载的 mod 的方块交互，例如 ContentTweaker 或是其他的 pre-init 阶段的脚本加载器的 inside block 事件。 如果你尝试在一个还没有注册的方块上使用[尖括号引用](/Vanilla/Brackets/Bracket_BlockState/)，这个引用的解析会失败，你的脚本就会失效。

你可以使用静态方法 `IBlockState.getBlockState()` 在运行时解析一个 IBlockState 来避免这种情况。

### 静态方法 getBlockState

`static IBlockState getBlockState(String blockname, String... properties)` 参数：

- String blockname → 一个和 [BlockState 尖括号引用](/Vanilla/Brackets/Bracket_BlockState/)中一样的字符串，例如 "modid:blockname"
- String... properties → 一些可选的字符串，表示应用于这个方块状态的属性对，例如 `"name=value"`。 没有指定的属性会使用这个方块的默认属性。

返回指定 `blockname` 的 IBlockState 对象，存在 `properties` 时会带着指定的属性。

## 继承自 IBlockProperties

IBlockState 继承自 [IBlockProperties](/Vanilla/Blocks/IBlockProperties/)。 就是说 [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) 对象的所有方法都可以用于 IBlockState 对象。

## 继承自 IBlockStateMatcher

IBlockState 继承自 [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/)。 就是说 [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) 对象的所有方法都可以用于 IBlockState 对象。

## ZenMethods 和 ZenGetters

| ZenGetter     | 返回值类型                             | 描述                                                                      |
| ------------- | --------------------------------- | ----------------------------------------------------------------------- |
| block         | [IBlock](/Vanilla/Blocks/IBlock/) | 返回引用的方块                                                                 |
| meta          | int                               | 返回引用的方块的元数据                                                             |
| commandString | String                            | 返回这个方块状态的一个可能的 [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) |

## ZenMethods

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → 方块的位置

Returns a boolean that sais whether the block can be replaced or not.

### Getting or changing Properties

You can get a list of all registered properties, either as list with all property names or as map that maps the properties to their value.  
You can also check which values are possible for a given property name.  
You can also use `withProperty` to create a new IBlockState object with that property changed.

    List<String> getPropertyNames();
    String getPropertyValue(String name);
    List<String> getAllowedValuesForProperty(String name);
    
    IBlockState withProperty(String name, String value);
    

### Comparing two IBlockState objects

You can either use `int compare(IBlockState other);` or the ZenCompare Tokens `==` `!=`.  
The return different types though:

- `state.compare(other)` returns an int that is 0 if they are equal
- `state == other` returns a bool that is true of they are equal

### Getting an explicit Blockstate Matcher

Returns an [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) that matches the given block.

    IBlockStateMatcher matchBlock();