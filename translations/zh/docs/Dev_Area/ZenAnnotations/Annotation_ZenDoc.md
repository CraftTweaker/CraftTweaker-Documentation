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
    

## What methods can be annotated || Additional Info

- You can annotate all methods, static and nonstatic.
- Currently, this will only affect the generated HTML file when running [`/ct dumpzs`](/Vanilla/Commands/).
- This annotation takes one String as value that is the additional information that should be printed.