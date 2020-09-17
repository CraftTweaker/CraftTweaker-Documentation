# Expansión

Una ZenExpansion es, como [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), utilizada para anotar una clase a la que debería ser accesible desde dentro de ZS.  
A diferencia de ZenClasses sin embargo, ZenExpansions se utilizan para expandir la funcionalidad de ZenClasses ya existentes.

## Ejemplo

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKKKK: " + stack.getDisplayName());
    }
}
```

Esto permitiría a la gente hacer

```zenscript
<minecraft:iron_ingot>.print();
```

¡Como esta es una expansión, el primer parámetro es la instancia de la clase!  
Este parámetro no estará disponible en ZS.

## Qué clases se pueden anotar || Información adicional

- Todos los métodos deben comenzar con un parámetro que represente la instancia de la clase expandida. También, todos los métodos dentro de la expansión deben ser estáticos (... y pública).
- Puede anotar todas las clases Java
- Debe dar a la anotación un valor de cadena (por ejemplo, `crafttweaker.item.IItemStack`). Este valor de cadena debe representar un nombre de ZenClass ya existente.
- Después de declarar una clase ZenExpansion, todavía necesita registrarla. Se recomienda que utilice [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) para eso.