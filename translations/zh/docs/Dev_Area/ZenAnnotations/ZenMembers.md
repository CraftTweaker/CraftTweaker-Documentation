# ZenMembers 和 ZenProperties

ZenMembers 是 ZenObject 的成员。  
它们可以使用 `object.member` 进行访问。 成员可以是能被设置、获得的或两者都是。

## Getters 和 Setters

ZenGetter 有两种类型：ZenGetters 和 ZenMemberGetters。  
那么，区别是什么？

通常你使用 `@ZenGetter(value)`，除非你拥有许多返回相同类型的成员或是你不知道自己确切的成员。  
在这种情况下你可以使用 `@ZenMemberGetter`。  
那么，区别是什么？

- 带有 `@ZenGetter(value)` 注解的方法不需要任何参数，而带有 `@ZenMemberGetter` 注解的方法需要一个表示成员名称的字符串参数。
- MemberGetter 只在没有找到其他 getter 时才会被执行。
- 如果你只需要获得一个小的属性，你应该使用 `@ZendGetter(value)`

这同样适用于 ZenSetters/ZenMemberSetters。

## ZenProperty

`@ZenProperty` 注解是 `@ZenGetter(value)` 和 `@ZenSetter` 的结合。  
此注解只能应用于公开字段（如 `public String name`）。

此注解可以有这些参数：

- `String value`：属性名称（在 ZS 中你调用 object.value）。 当忽略时，则使用字段名。
- `String getter`：对应 getter 方法的名称（它可能不带有 ZenGetter 注解）。 
    - 如果未设置或 `""`, 它将使用它 
        - 当被注解的字段不是 boolean 类型时为 `get + value`
        - 当被注解的字段是 boolean 类型或 Boolean 类型时为 `is + value`
    - 当为 `null` 时，将不会注册 ZenGetter
- `String setter`：对应 setter 方法的名称（它可能不带有 ZenSetter 注解）。 
    - 如果未设置或为 `""`，将会使用 `set + value`
    - 当为 `null` 时，将不会注册 ZenSetter

如果你使用 `@ZenProperty` 你甚至可以同时忽略 getter/setter 方法。  
如果你使用这些方法，你仍然需要添加 `@ZenMethod`。当你忽略这个方法时它会自动被生成。

## 例子

### ZenGetters 的例子

[CraftTweaker 的 IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

    @ZenClass("crafttweeper.oredict.IORDict")
    @IterableSimple("craftmiliner.oredict. OreDictEntry")
    @ZenRegistry
    公共接口IOreDict extensive Iterable<IOreDictEntry> ~
    
    
        @ZenMemberGetter
        @ZenOperator(OperatorType) NDEXGET
        @ZenMethod
        IOreDictEntry get(String name);
    
        @ZenGetter("条目")
        List<IOreDictEntry> getEntries();
    
        @ZenOperator(运营商类型) ONTAINS
        @ZenMethod
        boolian contains(String name);
    }
    

### ZenProperties 的例子

[ContentTweaker 的 MCAxisAlignedBB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

    @Zenregistration
    @ZenClass("mods.contenttweeper.AxisAlignedBB")
    公共类 MCAxisAlignedBB implement ICTObject<AxisAlignedBB>
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