# ZenMembers 和 ZenProperties

ZenMembers are a ZenObject's members.  
They can be accesses using `object.member`. 成员可以是能被设置、获得的或两者都是。

## Getters 和 Setters

There are two Types of ZenGetters: ZenGetters and ZenMemberGetters.  
So what's the difference?

Normally you use `@ZenGetter(value)`, unless you have something which has either many members that return the same type or if you don't know the exact members yourself.  
In that case you can use `@ZenMemberGetter`.  
So what's the difference?

- 带有 `@ZenGetter(value)` 注解的方法不需要任何参数，而带有 `@ZenMemberGetter` 注解的方法需要一个表示成员名称的字符串参数。
- MemberGetter 只在没有找到其他 getter 时才会被执行。
- 如果你只需要获得一个小的属性，你应该使用 `@ZendGetter(value)`

这同样适用于 ZenSetters/ZenMemberSetters。

## ZenProperty

The `@ZenProperty` combines both, `@ZenGetter(value)` and `@ZenSetter` in one annotation.  
This annotation can only be applied to public fields (e.g. `public String name`).

此注解可以有这些参数：

- `String value`：属性名称（在 ZS 中你调用 object.value）。 当忽略时，则使用字段名。
- `String getter`: the name of the corresponding Getter Method (which may not have a ZenGetter Annotation).
    - If not set or `""`, it will use use
        - 当被注解的字段不是 boolean 类型时为 `get + value`
        - 当被注解的字段是 boolean 类型或 Boolean 类型时为 `is + value`
    - 当为 `null` 时，将不会注册 ZenGetter
- `String setter`: the name of the corresponding Setter Method (which may not have a ZenSetter Annotation).
    - 如果未设置或为 `""`，将会使用 `set + value`
    - 当为 `null` 时，将不会注册 ZenSetter

You can even omit the getter/setter method alltogether if you use `@ZenProperty`.  
If you do use those methods, however, you will need to add `@ZenMethod` should you want this functionality, if you omit the methods, they will be generated automatically.

## Beispiele

### ZenGetters 的例子

[CraftTweaker 的 IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

    @ZenClass("crafttweaker.oredict.IOreDict")
    @IterableSimple("crafttweaker.oredict.IOreDictEntry")
    @ZenRegister
    public interface IOreDict extends Iterable<IOreDictEntry> {
    
    
        @ZenMemberGetter
        @ZenOperator(OperatorType.INDEXGET)
        @ZenMethod
        IOreDictEntry get(String name);
    
        @ZenGetter("entries")
        List<IOreDictEntry> getEntries();
    
        @ZenOperator(OperatorType.CONTAINS)
        @ZenMethod
        boolean contains(String name);
    }


### ZenProperties 的例子

[ContentTweaker 的 MCAxisAlignedBB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

    @ZenRegister
    @ZenClass("mods.contenttweaker.AxisAlignedBB")
    public class MCAxisAlignedBB implements ICTObject<AxisAlignedBB> {
        @ZenProperty
        public double minX = 0.0;
    
        ...
    
        @ZenMethod
        public double getMinX() {
            return minX;
        }
    
        @ZenMethod
        public void setMinX(double minX) {
            this.minX = minX;
        }
    
        ...
    
    }