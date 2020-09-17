# MCToolType

Ein Werkzeugtyp wird verwendet, um zu ermitteln, welche Blöcke ein Werkzeug abbauen kann, oder umgekehrt, welche Art von Werkzeug benötigt wird, um einen bestimmten Block abzubauen.

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.item.MCToolType
```

## Implementierte Schnittstellen
MCToolType implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Konstrukteure
Erzeugt ein Werkzeugtyp-Objekt. Wenn bereits ein Name mit dem angegebenen Namen existiert, wird intern auf den gleichen Werkzeugtyp verwiesen. Andernfalls wird ein neuer mit dem Namen erstellt (Gleiches gilt auch für Klammer!)
```zenscript
neue mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("Spitzhace");
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | String | Der zu verwendende Name |



## Methoden
### getName

Gibt den Namen dieses ToolTyps zurück. Der Name wird im Klammerausdruck nach dem `<Werkzeugtyp verwendet:`

Rückgabetyp: String

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

Gibt den Hashcode des Objekts zurück

Rückgabetyp: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

Ruft die String-Repräsentation dieses Typs ab. Ist anders als commandString!

Rückgabetyp: String

```zenscript
<tooltype:pickaxe>.toString();
```


## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |
| name          | String | true       | false      |

## Operatoren
### EQUALS

Vergleicht, wenn zwei angegebene MCToolType-Objekte gleich sind

```zenscript
<tooltype:pickaxe> == o als Objekt
<tooltype:pickaxe> == neuer MCToolType("Spitzhacke")
```

| Parameter | Type   | Beschreibung      |
| --------- | ------ | ----------------- |
| o         | Objekt | Das andere Objekt |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | false        |

