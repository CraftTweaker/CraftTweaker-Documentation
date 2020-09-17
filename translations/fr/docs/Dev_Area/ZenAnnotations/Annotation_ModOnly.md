# ModSeulement

L'annotation `@ModOnly` est aussi simple que le nom le suggère :  
Elle n'enregistre une ZenClass que si le mod fourni est chargé.

## Exemple

[ModOnly du projet de test CraftTweaker](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

```java
@ModOnly(value = "mcp")
@ZenClass(value = "crafttweaker.tests. odOnly ")
@ZenRegister
classe publique ModOnlyWiki {
    @ZenMethod
    public static void print() {
        CraftTweakerAPI. ogInfo("print issued");
    }
 } }
```

## Quelles classes peuvent être annotées || Informations supplémentaires

- You can annotate all Java Classes that also have the [`@ZenRegister` Annotation](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/). Techniquement, vous pouvez enregistrer toutes les classes, mais seulement là il aura un impact.
- L'annotation nécessite une valeur String qui représente le modName (`isModLoaded(annotation.getValue())` doit retourner true du mod est chargé)