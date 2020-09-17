# `Klasse`

Eine `Klasse` identifiziert eine einzelne Instanz eines Typs, der ZenScript ausgesetzt ist. Fast alles in ZenScript ist in tatsächlich eine Instanz einer Klasse, sei es ein `IItemStack` (was eine Instanz dieser Klasse ist) oder ein Array von Strings (was eine Instanz von `String[]` ist).

## Klassendetails
Die Klasse befindet sich im `zenscriptx.reflect` Paket, wodurch `zenscriptx.reflect.Class` der voll qualifizierte Name für den Import ist.

## Neue Instanz erstellen
Die einzige Möglichkeit, eine neue `Klasse` Instanz zu erstellen, ist durch eine der beiden statischen Methoden, die entweder den Namen der Klasse oder ein zu prüfendes Objekt nehmen. Das folgende Snippe zeigt die Unterschriften der beiden Methoden, die verwendet werden kann:

```zenscript
function byName(name as string) as Class?;
function from (instance as any) as Class?;
```

Beide Methoden dürfen `null` zurückgeben (wie durch die `angezeigt?` am Ende des Typs) da es möglich ist, dass einige Klassen kein ZenScript-Äquivalent haben oder buchstäblich nicht als Instanzen der `Klasse` dargestellt werden können.

Die folgenden Beispiele sind Beispiele für die Verwendung der beiden Fabrikmethoden:

```zenscript
Class.byName("crafttweaker.item.IItemStack"); # gibt eine Klasse zurück, die IItemStack
repräsentiert. rom(<blockstate:minecraft:pumpkin>); # gibt eine Klasse zurück, die IBlockState
Klasse repräsentiert. yName("123"); # gibt Null zurück, da keine Klasse mit diesem Namen existiert (oder existieren kann, für diese Angelegenheit)
```

## Eigenschaften
Eine `Klasse` bietet nur schreibgeschützten Zugriff auf bestimmte Eigenschaften, wie in der folgenden Tabelle dargestellt:

| Eigenschaftsname      | Type     | Beschreibung                                                                                                                                            |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`          | `string` | "Kürzest"-Name, der verwendet werden kann, um auf die Klasse zu verweisen (z.B. `IItemStack` für `crafttweaker. tem.IItemStack`, `string` für `string`) |
| `qualifizierter Name` | `string` | Voller Name, der diese Klasse in der ZenScript-Umgebung eindeutig identifiziert (z.B. `crafttweaker.item.IItemStack` oder `string`)                     |

## Methoden
`Klasse` bietet auch Zugriff auf eine einzige Methode, die die Umwandlung in das "native" Äquivalent erlaubt (siehe [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) für weitere Informationen). Die Signatur der Methode lautet wie folgt:

```zenscript
Funktion toNativeClass() als NativeClass?;
```

Die Methode kann `null` zurückgeben, da nicht alle ZenScript-Typen ein natives Äquivalent haben können, z. bestimmte assoziative Arrays sind möglicherweise in einer nativen Umgebung nicht perfekt repräsentiert, was ein gewisses Mangling erfordert.
