# ZenCaster

ZenCaster 表示一个可以被 `as` 标记调用的方法。  
ZenCaster 可用于将一种类型转换为另一种（如[String 转 IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)）

## 例子

```java
@ZenExpansion("craftminstrer.item ItemStack")
@Zenregistry
public class Expansion @un.org
    @ZenMethod
    public static invent print(ItemStack stack) v.
        CraftTweeperAPI。 ogInfo("STACKKKKKKKKK: " + 堆栈。 etDisplayName() )；
    }

    @ZenCaster
    public static IOreDictEntry asOreDict(IItemStack stack) @un.org
        return stack. etOres().get(0)；
    }
}
```

如果现在有人调用这个方法，他们就会获得一个 oreDictEntry：

```zenscript
val oredict = <minecraft:iron_ingot> as IOreDictEntry;
```

## 什么方法可以被注解 || 额外信息

- 你可以注解所有的非静态方法（除非它在 ZenExpansion 中，因为它们仅有静态组成）
- 当被注解的方法在 [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) 中时需要一个参数，如果它在 [ZenClass](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) 中则不需要。
- 不要在 [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) 中依赖 ZenCasters，它们只能在 [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) 中可靠地工作。