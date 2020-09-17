# `Markierung`

Ein `Tag` ist die Objektdarstellung dessen, was in einem aktuellen in-game Tag gespeichert wird. Sie können nur auf diese Daten von innerhalb der [`Tags` Loader](/Mods/Boson/Loaders/Tags/) zugreifen. For more information regarding tags and how to obtain them, refer to [this page](/Mods/Boson/Tags/Concept/).

## Klassendetails
Die Klasse befindet sich im `net.thesilkminer.mc.boson.zen.tag` Paket, wodurch `net.thesilkminer.mc.boson.tag.Tag` sein voll qualifizierter Name für den Import ist.

## Neue Instanz erstellen
Werfen Sie einen Blick auf [die Klammerhandhaber-Dokumentation](/Mods/Boson/Tags/BracketHandler/).

## Eigenschaften
Ein `Tag` ermöglicht nur schreibgeschützten Zugriff auf bestimmte Eigenschaften, wie in der folgenden Tabelle dargestellt:

| Eigenschaftsname | Type                                      | Beschreibung                                                       |
| ---------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| `name`           | [`Namensraum String`](/Mods/Boson/Names/) | Name, der dieses Tag eindeutig identifiziert                       |
| `typ`            | [`TagType`](/Mods/Boson/Tags/TagType/)    | Der Typ dieses Tags                                                |
| `elemente`       | `[T]` (wobei `T` ein generischer Typ ist) | Eine schreibgeschützte Liste der Elemente, die derzeit im Tag sind |

## Methoden

### Addition
Das Hinzufügen von Elementen zu einem Tag kann über ein Triplet von Methoden erfolgen, deren Unterschriften im Snippet sind:

```zenscript
function addAll(elements... as NameSpacedString) als nichtig;
function addAll(elements as any[]) as void;
function addVrom(other as Tag) as void;
```

`add` ist eine sogenannte "vararg-Methode", bedeutet, dass es so viele Argumente wie gewünscht akzeptieren kann, vorausgesetzt sie sind alle der gleichen Art, i. . `NameSpacedString`s. Damit können Sie den Registry-Namen des Elements angeben, das Sie dem Tag hinzufügen möchten und die Tag-Implementierung selbst wird versuchen, den angegebenen Namen in das eigentliche Objekt umzuwandeln.

`fügt`hinzu und akzeptiert dagegen ein Array von Elementen und versucht, sie alle dem angegebenen Tag hinzuzufügen. Das Array ist als `jeden[]` markiert, da es keine generische Unterstützung für die Eingabe dieser Methode gibt. Trotzdem versucht nicht kompatible Elemente einem Tag hinzuzufügen (sagen wir, Das Hinzufügen von Blöcken zu einem reinen Item-Tag) führt dazu, dass eine Operation ohne OP ausgeführt wird.

`addFrom` fügt den gesamten Inhalt eines Tags dem anderen über eine Tag-Referenz hinzu, was bedeutet, dass alle Änderungen, die an durchgeführt werden, auch mit dem ersten Tag passieren. Beachten Sie, dass diese Operation nur dann erfolgreich ist, wenn die Tag-Typen übereinstimmen. Andernfalls wird eine No-Op Operation durchgeführt.

Folgendes ist eine Liste von Beispielen:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# Elemente über Registry-Name
Tag hinzufügen. dd("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# fügen Sie Elemente über ihre eigentlichen Instanzen
Tag hinzu. ddAll([<buildcraft:iron_ingot>] als IItemStack[]);

# Hinzufügen eines weiteren Tags über eine Tag-Referenz
tag.addFrom(<tag-items:customtag:other_iron_ingots>);
```

### Ersatz
Elemente eines Tags können vollständig ersetzt werden, was bedeutet, dass alle Inhalte zuerst gelöscht werden, dann werden die angegebenen Elemente zu den Tag-Inhalten hinzugefügt. Dies wird auch über ein Triplet von Methoden erreicht, deren Unterschriften in dem Snippet sind, das folgt:

```zenscript
Funktion ersetzt(Elemente... as NameSpacedString) als nichtig;
Funktion ersetztAll(Elemente wie alle[]) als nichtig;
Funktion ersetzenWith(andere als Tag) als nichtig;
```

`Ersetzen` ist eine sogenannte "vararg-Methode", bedeutet, dass es so viele Argumente wie gewünscht akzeptieren kann, vorausgesetzt sie sind alle der gleiche Typ, i. . `NameSpacedString`s. This allows you to specify the registry name of the element you want to use to replace the tag's contents and the tag implementation itself will attempt to convert the given name to the actual object.

`ersetze hingegen alle`, akzeptiert ein Array von Elementen und Versuchen, den Inhalt des angegebenen Tags durch des Arrays zu ersetzen. The array is marked as `any[]` due to a lack of generic support on this method input. Trotzdem versucht nicht-kompatible Elemente an ein Tag zu übergeben (sagen wir, Blöcke zu einem Nur-Item-Tag) werden dazu führen, dass eine Operation ohne OP ausgeführt wird.

`replaceWith` replaces the contents of the given tag with a Tag Reference to the other, meaning that any modifications carried out to the second tag also happens to the first. Beachten Sie, dass diese Operation nur erfolgreich ist, wenn die Tag-Typen übereinstimmen, andernfalls wird eine No-Op Operation durchgeführt.

Folgendes ist eine Liste von Beispielen:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# Elemente durch Registry-Name
Tag ersetzen. eplace("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# Ersetze Elemente über ihre eigentlichen Instanzen
tag. eplaceAll([<buildcraft:iron_ingot>] als IItemStack[]);

# Ersetze einen anderen Tag über eine Tag-Referenz
tag.replaceWith(<tag-items:customtag:other_iron_ingots>);
```

### Entfernen
Das Entfernen von Elementen aus einem Tag kann über ein Triplet von Methoden erfolgen, deren Unterschriften im Snippet sind:

```zenscript
function remove(elements... as NameSpacedString) als nichts;
function removeAll(elements as any[]) as void;
function removeVrom(other as Tag) as void;
```

`Entfernen` ist eine sogenannte "vararg-Methode", bedeutet, dass es so viele Argumente wie gewünscht akzeptieren kann, vorausgesetzt sie sind alle der gleiche Typ, i. . `NameSpacedString`s. Dies erlaubt Ihnen, den Registry-Namen des Elements anzugeben, das Sie aus dem Tag entfernen möchten und die Tag-Implementierung selbst versucht, den angegebenen Namen in das eigentliche Objekt umzuwandeln.

`Alle`entfernen, akzeptiert dagegen ein Array von Elementen und versucht sie alle aus dem angegebenen Tag zu entfernen. Das Array ist als `jeden[]` markiert, da es keine generische Unterstützung für diese Methodeneingabe gibt. Trotzdem versucht nicht kompatible Elemente aus einem Tag zu entfernen (sagen wir, Entfernen von Blöcken von einem Nur-Tag) führt dazu, dass eine No-O-Operation ausgeführt wird.

`entfernt` das zweite Tag aus der Liste der Tag-Referenzen des ersten Tags. Dies wird die Elemente entfernen, die das zweite Tag aus der Liste der ersten trägt obwohl der zweite Tag nicht den Inhalt geleert hat. Beachten Sie, dass diese Operation nur erfolgreich ist, wenn die Tag-Typen übereinstimmen, andernfalls wird eine No-Op Operation durchgeführt.

Folgendes ist eine Liste von Beispielen:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# Elemente über Registry-Name
Tag entfernen. emove("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# Elemente über ihre eigentlichen Instanzen entfernen
Tag entfernen. emoveAll([<buildcraft:iron_ingot>] als IItemStack[]);

# eine Tag-Referenz entfernen
tag.removeVrom(<tag-items:customtag:other_iron_ingots>);
```

### Leeren
Sie können auch den Inhalt eines Tags mit einer einzigen Methode löschen. Dadurch werden alle Elemente und alle Tag-Referenzen, die im Tag gespeichert sind, entfernt und entspricht dem Ersetzen eines Tags durch leere Inhalte. Dies kann über eine Methode geschehen, die die folgende Signatur enthält:

```zenscript
Funktion clear() als ungültig;
```

Folgendes ist ein Beispiel:

```zenscript
<tag-items:forge:ingots>.clear();
```

## Zusätzlicher Support
Tags bieten auch zusätzliche Unterstützung für bestimmte ZenScript-Funktionen.

### Abfrage
Durch die Verwendung des `hat` Syntax, kann man fragen, ob ein Tag ein bestimmtes Objekt enthält oder nicht. Ein Tag kann in der Tat als Sammlung von Elementen angesehen werden:

```zenscript
val isContained = TAG hat ELEMENT;
```

`TAG` repräsentiert die Tag-Instanz zur Abfrage. `ELEMENT` repräsentiert die Elementinstanz, die Sie abfragen möchten zu überprüfen, ob sie im Tag enthalten ist oder nicht.

Beachten Sie, dass, während Tags die Abfrage von irgendetwas unterstützen (es akzeptiert effektiv `jeden`), unter Verwendung eines Elements, das nicht von ist, hat keine Wirkung und wird die Auswertung einfach auf `false` umschalten.

### Aufzählend
Tags unterstützen auch Iteration über eine Iterative für Schleife, wobei eine normale `für` Schleife verwendet wird. This way the necessity of querying the elements via a call to `elements` is eliminated, resulting in cleaner code.

Da Tags effektiv ein Set sind, ist die Iterationsreihenfolge nicht erhalten und kann sich zwischen verschiedenen Abläufen des Iterators unterscheiden. Aus diesem Grund werden nur Iteratoren mit einem Element unterstützt (d.h. Sie können beim Iterieren keinen Iterationsindex anfordern).

Die zu verwendende Syntax ist folgende:

```zenscript
für VARNAME in TAG {
}
```

`VARNAME` repräsentiert den Namen der Variable, die bei jeder Schleife aktualisiert wird. `TAG` ist die Tag-Instanz, auf die man sich einschleifen kann.

## Operator überladen
Tags bieten auch ein Überladen von normalen ZenScript-Operatoren, so dass bestimmte Operationen einfach und mit weniger Zeichen durchgeführt werden können. Jeder Abschnitt beherbergt eine Tabelle mit bestimmten Operator-Überlastungen, die verfügbar sind, mit der entsprechenden Bedeutung . In allen Tabellen repräsentiert `TAG` die Ziel-Tag-Instanz, während `ARGx` das *x*-te Argument repräsentiert, das angegeben werden soll.

### Unare Operatoren
Unäre Operatoren sind Operatoren, die auf das Schlagwort selbst angewendet werden und keine Argumente enthalten.

| Operator | Syntax | Methodenäquivalent | Notizen |
| -------- | ------ | ------------------ | ------- |
| `-`      | `-TAG` | `löschen`          | \-     |

### Binäre Operatoren
Binäre Operatoren sind Infix-Operatoren, die zwischen dem Tag und einem Argument angewendet werden. Die Operatoren werden hier in der Reihenfolge der Priorität aufgelistet (höher bedeutet, dass sie zuerst angewendet werden).

**IMPORTANT**: unless noted otherwise, all operators **mutate** the tag that is passed to the overload, meaning that they change their contents. Betrachten wir folgendes Beispiel:

```zenscript
val tag = <tag-items:forge:ingots>;
tag & [<minecraft:iron_ingot>] als IItemStack[];
```

Am Ende dieses Snippets wird sich der Inhalt des `-Tags` nach den Operatorregeln geändert haben. Dies erzeugt nicht **** ein neues Schlagwort, noch gibt es den ursprünglichen Wert des Schlagworts zurück. Der folgende Code-Snippet ist in der Tat nicht gültig:

```zenscript
val tag = <tag-items:forge:ingots>;
# NICHT VALID: WILL CAUSE COMPILATION ERROR
tag = tag & [<minecraft:iron_ingot>] as IItemStack[];
```

| Operator | Argumentententyp                          | Syntax           | Methode Äquivalent | Notizen                                                                                |
| -------- | ----------------------------------------- | ---------------- | ------------------ | -------------------------------------------------------------------------------------- |
| `+`      | `Markierung`                              | `TAG + ARG1`     | `hinzufügenvon`    | \-                                                                                    |
| `+`      | `jede []`                                 | `TAG + ARG1`     | `addAll`           | Der Arraytyp muss dem Inhalt des Tags entsprechen                                      |
| `+`      | [`Namensraum String`](/Mods/Boson/Names/) | `TAG + ARG1`     | `hinzufügen`       | Die Überlastung akzeptiert nur ein Argument                                            |
| `+`      | `any`                                     | `TAG + ARG1`     | `addAll`           | Kurzanfang für ein einzelnes Element: dieselben Regeln wie die Array-Version gelten    |
| `~`      | `Markierung`                              | `TAG ~ ARG1`     | `hinzufügenvon`    | \-                                                                                    |
| `~`      | `jede []`                                 | `TAG ~ ARG1`     | `addAll`           | Der Arraytyp muss dem Inhalt des Tags entsprechen                                      |
| `~`      | [`Namensraum String`](/Mods/Boson/Names/) | `TAG ~ ARG1`     | `hinzufügen`       | Die Überlastung akzeptiert nur ein Argument                                            |
| `~`      | `any`                                     | `TAG ~ ARG1`     | `addAll`           | Kurzanfang für ein einzelnes Element: dieselben Regeln wie die Array-Version gelten    |
| `&`  | `Markierung`                              | `TAG & ARG1` | `hinzufügenvon`    | \-                                                                                    |
| `&`  | `jede []`                                 | `TAG & ARG1` | `addAll`           | Der Arraytyp muss dem Inhalt des Tags entsprechen                                      |
| `&`  | [`Namensraum String`](/Mods/Boson/Names/) | `TAG & ARG1` | `hinzufügen`       | Die Überlastung akzeptiert nur ein Argument                                            |
| `&`  | `any`                                     | `TAG & ARG1` | `addAll`           | Kurzanfang für ein einzelnes Element: dieselben Regeln wie die Array-Version gelten    |
| `-`      | `Markierung`                              | `TAG - ARG1`     | `entfernen von`    | \-                                                                                    |
| `-`      | `jede []`                                 | `TAG - ARG1`     | `alle entfernen`   | Der Arraytyp muss dem Inhalt des Tags entsprechen                                      |
| `-`      | [`Namensraum String`](/Mods/Boson/Names/) | `TAG - ARG1`     | `entfernen`        | Die Überlastung akzeptiert nur ein Argument                                            |
| `-`      | `any`                                     | `TAG - ARG1`     | `alle entfernen`   | Kurzanfang für ein einzelnes Element: dieselben Regeln wie die Array-Version gelten    |
| `==`     | `Markierung`                              | `TAG == ARG1`    | \-                | Funktioniert als Gleichheitsüberprüfung, übereinstimmende Inhalte; mutiert `TAG` nicht |
| `()`     | \-                                       | `TAG()`          | `elemente`         | \-                                                                                    |
