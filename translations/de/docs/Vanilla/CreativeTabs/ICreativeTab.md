# ICreativeTab

Ein ICreativeTabObject stellt eine kreative Inventar-Registerkarte dar.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere craftweaker.creativetabs.ICreativeTab;`

## Hole ein solches Objekt

Du kannst einen ICreativeTab vom [Kreativen Tab Bracket Handler](/Vanilla/Brackets/Bracket_CreativeTab/) abrufen.

## ZenGetters und ZenMethoden ohne Parameter

| ZenGetter/ZenMethode | Rückgabetyp      |
| -------------------- | ---------------- |
| searchBarWidth       | int              |
| tabLabel             | string           |
| setNoScrollBar()     | nichtig (nichts) |
| setNoTitle()         | nichtig (nichts) |

## ZenMethode

#### Name des Hintergrundbildes festlegen

Verwendet eine Zeichenkette (z.B. `"item_search.png"`).  
Gibt eine Leere zurück (nichts!

```zenscript
tab.setBackgroundImageName(String backgroundImage);
```