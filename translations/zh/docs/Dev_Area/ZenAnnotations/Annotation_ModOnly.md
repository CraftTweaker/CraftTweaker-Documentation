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

- 你可以注解所有的有 [`@ZenRegister` 的 Java 类。](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) 技术上，你可以注册所有的类，但只有在那里它才能产生影响。
- 注解需要一个表示 mod 名的字符串值(`isModLoaded(annotation.getValue())`当 mod 加载时返回 true)