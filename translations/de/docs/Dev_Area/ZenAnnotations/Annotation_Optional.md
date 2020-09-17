# Optional

`@Optional` kann einem Methoden-Parameter gegeben werden, um ihn als optional zu deklarieren.  
Optionale Parameter können beim Aufruf der Methode weggelassen werden:

## Beispiel

[CraftTweakers IFurnaceManager](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethode
    ungültig entfernen (Igredient Ausgabe, @Optionale IIngredient Eingabe);
```

[MCFurnaceManager (Umsetzung)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @Überschreibe
    öffentliche Leerzeichen entfernen (IIngrediente Ausgabe, @Optionale IIngredient Eingabe) {
        if(output == null)
            werfen neue IllegalArgumentException("Ausgabe kann nicht leer sein");

        RezeptToEntfernen. dd(new ActionFurnaceRemoveRecipe(Output, Input));
}
```

Technisch gesehen brauchen Sie nicht die `@Optional` in der Implementierung, aber Sie können sie hinzufügen, wenn Sie sicher sein möchten. Sie können diese Methode nun mit einer aufrufen:

```java
furnace.remove(output); //Eingabe wird auf null
furnace.remove(output, input);
```

## Welche Werte werden für ausgelassene Parameter eingefügt?

### Nur die Anmerkung verwenden

Die eingefügte Datei ist entweder `0`, `false` oder `null`abhängig vom kommentierten Typ:

Primitive werden `0` sein (außer Bool, das falsch sein wird, so technisch auch 0)  
Alle Objekte werden `null` sein

### Annotationsmitglieder verwenden

| Mitglied           | Type            | Standardwert     |
| ------------------ | --------------- | ---------------- |
| wert               | string          | `""`             |
| methodische Klasse | java.lang.Class | `Optional.class` |
| methodenname       | string          | `getValue`       |

Die optionale Anmerkung unterstützt auch Standardwerte.  
Wenn Sie einen Standardwert angeben möchten Sie können dies tun, indem Sie dem `Wert` Mitglied einen String geben, der den Parameter repräsentiert.

Wenn Sie nur eine primitive Standardeinstellung wollen, dann sind Sie eingestellt.

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

If you want a default object or a default primitive that is not a compiletime constant (all annotation members need to be compiletime constants!), you can set the other two members: This will replace the parameter with a call to the given (static) method `methodClass.methodName(value)`. Wenn keine solche Methode gefunden wird, wird ein Fehler auftreten und Null einfügen.

```java
@ZenMethod
public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
    print(value. etDisplayName());
}


public static IItemStack getFromString(String value) {
    return BracketHandlerItem.getItem(value, 0);
}
```

## Welche Parameter können kommentiert werden?

Alle Parameter können kommentiert werden, aber Sie müssen sich daran erinnern, dass kommentierte Parameter am Ende sein müssen also während dies technisch funktionieren würde, würden Methodenaufrufe fehlschlagen:

```java
myMethod(@Optional String Name, Int Nummer)
```

Das Aufrufen dieser Methode mit nur einer Inte wird immer scheitern!