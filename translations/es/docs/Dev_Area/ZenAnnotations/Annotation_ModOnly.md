# Sólo Modo

La anotación `@ModOnly` es tan simple como el nombre sugiere:  
Sólo registra una ZenClass si el mod proporcionado está cargado.

## Ejemplo

[Modo de prueba de CraftTweaker](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

```java
@ModOnly(value = "mcp")
@ZenClass(value = "crafttweaker.tests. Sólo od")
@ZenRegister
public class ModOnlyWiki {
    @ZenMethod
    public static void print() {
        CraftTweakerAPI. ogInfo("print issued");
    }
}
```

## Qué clases se pueden anotar || Información adicional

- Puede anotar todas las clases de Java que también tienen la [`@ZenRegister` Annotación](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/). Tecnológicamente, usted puede registrar todas las clases, pero sólo allí tendrá un impacto.
- La annotación requiere un valor de cadena que represente el modName (`isModLoaded(annotation.getValue())` tiene que devolver verdadero del mod está cargado)