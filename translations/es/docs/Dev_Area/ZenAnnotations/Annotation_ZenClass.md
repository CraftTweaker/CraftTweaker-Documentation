# ZenClass

Una clase ZenClass es una clase java que ha sido expuesta a ZenScript.

## Ejemplo

[CraftTweaker's IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

```java
@ZenClass("crafttweaker.item.ItemStack")
@ZenRegister
interfaz pública IItemStack extends IIngredient {
    //Cut out para mantener la página corta
}
```

La aplicación real no necesita ser anotada.

## Qué clases se pueden anotar || Información adicional

- Puede anotar todas las clases Java
- Debe dar a la anotación un valor de cadena (por ejemplo, `crafttweaker.item.IItemStack`). Este será el nombre interno de ZS para la clase.
- Después de declarar una clase ZenClass, todavía necesita registrarla. Se recomienda que utilice [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) para eso