# Artikel

Dadurch kannst du Items zum Spiel hinzufügen!

## Artikel-Repräsentation erstellen

Bevor Sie das Element hinzufügen können, Sie müssen eine Artikel-Repräsentation erstellen, mit der Sie die Eigenschaften des Elements einstellen können, das Sie hinzufügen möchten.  
Hier kommt die [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) in:

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## Repräsentation Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere mods.contenttweaker.Item;`

## Zeneigenschaften

Um die Eigenschaften zu bekommen/einzustellen, können Sie entweder die ZenGetters/Setters respektieren oder die ZenMethoden verwenden:

```zenscript
//Eigenschaftsname: maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethods
item.getMaxStackSize();
item.setMaxStackSize(64);
```

| Eigenschaftsname       | Type                                                                                                            | Benötigt | Standardwert | Beschreibung / Notizen                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------- |
| beaconZahlung          | boolean                                                                                                         | Nein     | false        | Kann einem Leuchtfeuer gegeben werden, um Boni zu aktivieren                                          |
| kreativ-Tab            | [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                    | Nein     | Sonst        | Die Kreative Registerkarte, in die der Gegenstand eingefügt wird                                      |
| leuchtend              | boolean                                                                                                         | Nein     | false        | Kann verwendet werden, um deinem Gegenstand den glühenden Effekt zu geben (als wäre er verzaubert).   |
| itemColorLieferant     | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)         | Nein     | -1 als Farbe | Die Farbe des Elements                                                                                |
| itemDestroyedBlock     | [IItemDestroyedBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/)       | Nein     | false        | Was passiert, wenn der Gegenstand einen Block zerstört hat?                                           |
| itemDestroySpeed       | [IItemDestroySpeed](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)           | Nein     | null         | Bestimmt die Blockbruchgeschwindigkeit des Items.                                                     |
| itemGetContainerItem   | [IItemGetContainerItem](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/)   | Nein     | null         | Was bleibt im Herstellungsraster, wenn dieser Gegenstand in einem Rezept verwendet wurde?             |
| itemRechtsklick        | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)               | Nein     |              | Wird aufgerufen, wenn der Spieler mit dem Gegenstand rechtsklickt                                     |
| itemUseAction          | EnumUseAction                                                                                                   | Nein     | "NONE"       | Welche Animation das Element verwenden wird ("NONE", "EAT", "DRINK", "BLOCK", "BOW")                  |
| lokalizedNameLieferant | [ILocalizedNameSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/) | Nein     | null         | Kann verwendet werden, um den Anzeigenamen Ihres Elements programmatisch zu bestimmen                 |
| maxDamage              | int                                                                                                             | Nein     | -1           | Wie viele Verwendungen hat der Artikel? Weniger als 0 bedeutet, dass es nicht beschädigt werden kann  |
| maxStackSize           | int                                                                                                             | Nein     | 64           | Wie viele Gegenstände können in einen Stapel passen? Weniger als 0 bedeutet Standart Stack Größe (64) |
| onItemUpdate           | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                       | Nein     | null         | Alle Ticks aufgerufen, solange der Gegenstand im Inventar eines Spielers ist                          |
| onItemUse              | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                             | Nein     | null         | Angerufen, wenn der Spieler mit der rechten Maustaste auf einen Block mit dem Gegenstand klickt       |
| onItemUseFinish        | [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/)                 | Nein     | null         | Wird aufgerufen, wenn der Spieler mit dem Gegenstand fertig ist                                       |
| seltenheit             | Enumrarität                                                                                                     | Nein     | KOMMON       | Wie selten ein Element ist, bestimmt ToolTip Farbe ("COMMON", "UNCOMMON", "RARE", "EPIC")             |
| smeltingExprerience    | float                                                                                                           | Nein     | -1           | Wie viel Erfahrung verdient der Spieler für das Schmelzen dieses Gegenstands in einem Ofen?           |
| texture-Standort       | [CTResource-Standort](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                         | Nein     | null         | Der Ressourcenstandort, der für Texturen usw. verwendet wird.                                         |
| toolclass              | string                                                                                                          | Nein     |              | Welche Blocktypen das Werkzeug zerstören kann                                                         |
| toollevel              | int                                                                                                             | Nein     | -1           | Das Level der Blöcke kann beschädigt werden                                                           |
| unlocalizedName        | string                                                                                                          | Ja       |              | Name, sollte alle Kleinbuchstaben sein                                                                |

## Artikel registrieren

Du musst diese Methode aufrufen, um den Gegenstand im Spiel zu registrieren!  
Andernfalls wird nichts passieren!  
Nachdem Sie diese Funktion aufgerufen haben, können Sie die Registrierung des Elements nicht aufheben oder keine seiner Eigenschaften ändern!

```zenscript
item.register();
```

## Skript-Beispiel

```zenscript
#loader contenttweaker
importiere mods.contenttweaker.VanillaFactory;
importiere mods.contenttweaker.Item;
importiere mods.contenttweaker.IItemRightClick;
importiere Mods. ontenttweaker.Commands;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "selten";
zsItem. reativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "pickaxe";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem. temRightClick = function(stack, world, player, hand) {
    Commands. all("Scoreboard-Spieler setzen @p Name 5", Spieler, Welt);
    gibt "Pass" zurück;
};
zsItem.register();
```

## Lokalisierung des Elements

Sie müssen `item.contenttweaker.itemName.name=Localized Name` zu den entsprechenden Sprachdateien hinzufügen.  
Beispiel in de_us. ang Datei `item.contenttweaker.zsItem.name=Dein ItemName Hier` wird `Dein ItemName hier` im Spiel anzeigen.

Alternativ können Sie CraftTweakers [-Lokalisierungsfunktion](/Vanilla/Game/IGame/)verwenden, obwohl es empfohlen ist, die Sprachdateien zu verwenden!