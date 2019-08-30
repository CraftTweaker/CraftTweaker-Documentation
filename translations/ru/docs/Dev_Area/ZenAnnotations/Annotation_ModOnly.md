# ModOnly

Аннотация `@ModOnly` так же проста, как и предполагает название:  
Она регистрирует класс ZenScript, только если данный мод загружен.

## Пример

[ModOnly из тестового проекта CraftTweaker:](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

    @ModOnly(value = "mcp")
    @ZenClass(value = "crafttweaker.tests.modOnly")
    @ZenRegister
    public class ModOnlyWiki {
        @ZenMethod
        public static void print() {
            CraftTweakerAPI.logInfo("вызван print!");
        }
    }
    

## Какие классы должны быть помечены || Дополнительная информация

- You can annotate all Java Classes that also have the [`@ZenRegister` Annotation](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/). Technically, you can register all classes, but only there it will have an impact.
- The Annotation requires a String value that represents the modName (`isModLoaded(annotation.getValue())` has to return true of the mod is loaded)