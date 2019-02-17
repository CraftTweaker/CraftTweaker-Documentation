# ZenCaster

ZenCaster 表示一个可以被 `as` 标记调用的方法。  
ZenCaster 可用于将一种类型转换为另一种（如[String 转 IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)）

## 例子

    @ZenExpansion("crafttweaker.item.IItemStack")
    @ZenRegister
    public class Expansion {
        @ZenMethod
        public static void print(IItemStack stack) {
            CraftTweakerAPI.logInfo("STACKKKKK: " + stack.getDisplayName());
        }
    
        @ZenCaster
        public static IOreDictEntry asOreDict(IItemStack stack) {
            return stack.getOres().get(0);
        }
    }
    

如果现在有人调用这个方法，他们就会获得一个 oreDictEntry：

    val oreDict = <minecraft:iron_ingot> as IOreDictEntry;
    

## 什么方法可以被注解 || 额外信息

- You can annotate all nonstatic methods (unless in a ZenExpansion, as they only consist of statics)
- Annotated Methods need one parameter when in a [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), none if they are in a [ZenClass](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).
- Don't rely on ZenCasters in [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), they only work reliably in [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/).