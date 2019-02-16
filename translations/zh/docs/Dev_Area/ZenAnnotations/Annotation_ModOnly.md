# 仅 Mod

`@ModOnly` 注解和名称一样简单:  
它只在加载 mod 时注册ZenClass。

## 例子

[Crafttweaker 测试项目仅 Mod](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

    @ModOnly(value = "mcp")
    @ZenClass(value = "crafttweaker.tests.modOnly")
    @ZenRegister
    public class ModOnlyWiki {
        @ZenMethod
        public static void print() {
            CraftTweakerAPI.logInfo("print issued");
        }
    }
    

## 什么类可以被注解 || 额外信息

- 你可以注解所有的有 [`@ZenRegister` 的 Java 类。](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) Technically, you can register all classes, but only there it will have an impact.
- The Annotation requires a String value that represents the modName (`isModLoaded(annotation.getValue())` has to return true of the mod is loaded)