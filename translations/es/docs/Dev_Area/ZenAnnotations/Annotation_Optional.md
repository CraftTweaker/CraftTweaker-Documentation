# Opcional

`@Optional` se puede dar a un parámetro de método para declararlo como opcional.  
Parámetros opcionales pueden ser omitidos al llamar al método:

## Ejemplo

[IFurnaceManager de CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethod
    anular eliminación(salida IIngrediente, @entrada opcional IIngrediente);
```

[MCFurnaceManager (Implementación)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @Sobrescribir
    eliminación de nulos pública (salida IIngrediente, @Optional IIngredient input) {
        if(output == null)
            throw new IllegalArgumentException("output cannot be null");

        recetas para eliminar. dd(new ActionFurnaceRemoveRecipe(salida, entrada));
}
```

Técnicamente, no necesitas `@Optional` en la implementación, pero puedes añadirlo si quieres estar seguro. Ahora puede llamar a este método usando cualquiera de ellos:

```java
furnace.remove(output); //Input se establecerá a null
furnace.remove(output, input);
```

## ¿Qué valores se insertan para los parámetros omitidos?

### Utilizando sólo la anotación

Insertado es `0`, `falso` o `null`, dependiendo del tipo anotado:

Los primitivos serán `0` (excepto bool, que será falso, tan técnicamente 0 también)  
Todos los objetos serán `nulos`

### Usando miembros de anotación

| Miembro      | Tipo            | Valor por defecto |
| ------------ | --------------- | ----------------- |
| valor        | cadena          | `""`              |
| metodclase   | java.lang.Class | `Optional.class`  |
| métodoNombre | cadena          | `"getValue"`      |

La anotación opcional también soporta valores por defecto.  
Si quieres proporcionar un valor predeterminado, puede hacerlo dando al `valor` un String representando el parámetro.

Si sólo quiere un primitivo por defecto, entonces está establecido.

```java
@ZenMethod
public static void print(@Optional("heyho") String value) {
    CraftTweakerAPI. ogError(value);
}


@ZenMethod
public static void print3(@Optional("1") int value) {
    CraftTweakerAPI.logError(String.valueOf(value));
}
```

If you want a default object or a default primitive that is not a compiletime constant (all annotation members need to be compiletime constants!), you can set the other two members: This will replace the parameter with a call to the given (static) method `methodClass.methodName(value)`. Si no se encuentra tal método, se equivocará e insertará nulo.

```java
@ZenMethod
public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") ItemStack value) {
    print(valor. etDisplayName());
}


public static IItemStack getFromString(String value) {
    return BracketHandlerItem.getItem(value, 0);
}
```

## ¿Qué parámetros se pueden anotar?

Todos los parámetros pueden ser anotados, pero necesita recordar que los parámetros anotados deben estar al final, así que mientras esto funcionaría técnicamente, las llamadas a métodos fallarían:

```java
myMethod(@Nombre de cadena opcional, número de entero)
```

¡Llamar a este método con sólo un int, siempre fallará!