# `Heimatklasse`

Eine `NativeClass` identifiziert die Instanz einer Klasse der Backend-Umgebung, die hinter ZenScript liegt. Im Falle von CraftTweaker repräsentiert `NativeClass` daher eine Java-Klasse.

## Klassendetails
Die Klasse befindet sich im `zenscriptx.reflect` Paket, wodurch `zenscriptx.reflect.NativeClass` der voll qualifizierte Name für den Import ist.

## Neue Instanz erstellen
Die einzige Möglichkeit, eine neue `NativeClass` Instanz zu erstellen, ist eine der beiden statischen Methoden, die entweder den Namen der Klasse oder ein zu prüfendes Objekt nehmen. Das folgende Snippe zeigt die Unterschriften der beiden Methoden, die verwendet werden kann:

```zenscript
function byName(name as string) as NativeClass?;
function fromZen(instance as any) as NativeClass?;
```

Both methods are allowed to return `null` (as shown by the `?` at the end of the type) because there is the possibility for some classes not to exist or not to have a backend counterpart. Tatsächlich können einige assoziative Arrays im Backend nicht repräsentierbar sein und erfordern, dass ein paar Mangling korrekt verwendet wird.

Die folgenden Beispiele sind Beispiele für die Verwendung der beiden Fabrikmethoden:

```zenscript
NativeClass.byName("crafttweaker.api.item.IItemStack"); # gibt die NativeClass mit dem angegebenen Namen
NativeClass zurück. romZen(<blockstate:minecraft:pumpkin>); # gibt die NativeClass zurück, die der ZenScript IBlockState Klasse
NativeClass entspricht. yName("123"); # gibt Null zurück, da keine native Klasse mit diesem Namen existieren kann
```

## Eigenschaften
Eine `NativeClass` bietet schreibgeschützten Zugriff auf bestimmte Eigenschaften, wie in der folgenden Tabelle dargestellt:

| Eigenschaftsname      | Type     | Beschreibung                                                                                                                                                          |
| --------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`          | `string` | "Kürzest"-Name, der verwendet werden kann, um auf die Klasse zu verweisen (z.B. `IItemStack` für `crafttweaker. pi.item.IItemStack`, `String` für `java.lang.String`) |
| `qualifizierter Name` | `string` | Voller Name, der diese Klasse in der Backend-Umgebung eindeutig identifiziert (z.B. `crafttweaker.api.item.IItemStack` oder `java.lang.String`)                       |

## Methoden
`NativeClass` bietet auch Zugriff auf eine einzige Methode, die die Umwandlung in das ZenScript Äquivalent erlaubt (siehe [`Klasse`](/Mods/Boson/Reflection/Class/) für weitere Informationen). Die Signatur der Methode lautet wie folgt:

```zenscript
Funktion toClass() als Klasse?;
```

Die Methode kann `null` zurückgeben, da nicht alle native Klassen eine Darstellung in ZenScript haben. Tatsächlich gibt es einige Teile des Backends, die nicht ZenScript-Benutzern ausgesetzt sind, wie `org.apache.commons. ang3.BitField`, das daher nicht über ein ZenScript `Klasse` Objekt dargestellt werden kann.
