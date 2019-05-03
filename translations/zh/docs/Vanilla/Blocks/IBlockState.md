# IBlockState

IBlockState 对象代表一个方块的当前状态。

## 导入相关包

如果你遇到问题 ，你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.block.IBlockPattern;`

## 调用 IBlockState 对象

有很多方法可以返回一个 IBlockState 对象。

- 使用 [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) `<blockstate:minecraft:log:variant=spruce>`
- 使用静态方法 `IBlockState.getBlockState()` （详情见下文）
- 使用 [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) 对象的 `getMatchingBlockStates()` 方法检索一个 IBlockStates 数组。
- 使用另一个 IBlockState 对象的 `withProperty()` 方法。

## 运行时解析 IBlockState

There may be times at which your script may rely on interaction with a block from a mod that has not been loaded yet, such as inside block events in ContentTweaker or another pre-init script loader. If you attempt to use a [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) for a block that has not yet been registered, the handler will fail to resolve and your script will not work.

To avoid this, you can use the static `IBlockState.getBlockState()` method to resolve an IBlockState at runtime.

### static getBlockState

`static IBlockState getBlockState(String blockname, String... properties)` Parameters:

- String blockname → A string in the format "modid:blockname" as it would appear in the [BlockState Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/)
- String... properties → Zero or more strings of `"name=value"` pairs of properties to apply to this blockstate. Any unspecified properties will use the same value as in the default blockstate for the specified block name.

Returns an IBlockState of the specified `blockname` with the specified `properties`, or the default blockstate if no properties are specified.

## Extending IBlockProperties

IBlockState extends [IBlockProperties](/Vanilla/Blocks/IBlockProperties/). That means that all methods that are available to [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) objects are also available to IBlockState objects.

## Extending IBlockStateMatcher

IBlockState extends [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/). That means that all methods that are available to [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) objects are also available to IBlockState objects.

## ZenMethods and ZenGetters

| ZenGetter     | 返回值类型                             | 描述                                                                                         |
| ------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| block         | [IBlock](/Vanilla/Blocks/IBlock/) | 返回引用的方块                                                                                    |
| meta          | int                               | 返回引用的方块的元数据                                                                                |
| commandString | String                            | Returns a possible [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) for this state |

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