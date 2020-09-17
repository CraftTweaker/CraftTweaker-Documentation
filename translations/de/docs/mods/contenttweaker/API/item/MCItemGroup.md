# MCItemGroup

Eine Artikelgruppe (z.B. Creative Tab) ist eine Gruppierung von Artikeln basierend auf Kategorie.

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Implementierte Schnittstellen
MCItemGroup implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### getPfad

Ruft den Pfad der Elementgruppe ab. Der Pfad ist das, was Sie nach dem `<Elementgruppe:` Teil im Klammerausdruck verwenden.

Rückgabetyp: String

```zenscript
<itemgroup:misc>.getPath();
```

### setHintergrundbildname

Legt den Bildnamen des Hintergrunds fest, der für diesen Tab im kreativen Menü verwendet wird Gibt zurück: `Dieses Objekt zur Verkettung`

Rückgabetyp: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(Textur als String);
```

| Parameter | Type   | Beschreibung              |
| --------- | ------ | ------------------------- |
| textur    | String | Die zu verwendende Textur |


### setNoScrollbar

Entfernt die Scrollleiste der Gegenstandsgruppe im kreativen Inventar

 Gibt zurück: `Dieses Objekt zur Verkettung`

Rückgabetyp: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Entfernt den Titel der Gegenstandsgruppe im kreativen Inventar

 Gibt zurück: `Dieses Objekt zur Verkettung`

Rückgabetyp: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |
| pfad          | String | true       | false      |

