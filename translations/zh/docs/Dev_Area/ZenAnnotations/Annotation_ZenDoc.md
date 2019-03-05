# ZenDoc

`@ZenDoc` 注解允许开发者向 `/ct dumpZS` 命令提供额外信息。  
更具体的说，它将看起来像这样：

![img](assets/zenDoc.png)

## 例子

[Crafttweaker 测试项目 ZenDoc](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ZenDocWiki.java)

    @ZenClass(value = "crafttweaker.tests.zenDoc")
    @ZenRegister
    public class ZenDocWiki {
        @ZenMethod
        @ZenDoc("This prints a warning")
        public static void print() {
            CraftTweakerAPI.logWarning("Print invoked!");
        }
    }
    

## 什么方法可以被注解 || 额外信息

- 你可以注解所有的方法，包括静态的和非静态的。
- 目前，这只会在运行 [`/ct dumpzs`](/Vanilla/Commands/) 命令时影响生成的 HTML。
- 这个注解将一个字符串值作为应显示的额外信息。