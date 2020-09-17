# Nahrungsgegenstände

Dies erlaubt dir, Lebensmittel zum Spiel hinzuzufügen!

## Lebensmittel-Gegenstand-Vertretung erstellen

Bevor Sie das Element hinzufügen können, Sie müssen eine Repräsentation für Lebensmittel erstellen, mit der Sie die Eigenschaften des Elements einstellen können, das Sie hinzufügen möchten.  
Hier kommt die [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) in:

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

## Repräsentation Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.Artikel importieren;`

## Artikelrepräsentation Erweiterung

Die ItemFoodRepresentation Klasse erweitert [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Das bedeutet, dass alle Methoden und ZenProperties, die für [Artikel](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) verfügbar sind, auch für Lebensmittel verfügbar sind!

## Zeneigenschaften

Um die Eigenschaften zu bekommen/einzustellen, können Sie entweder die ZenGetters/Setters respektieren oder die ZenMethoden verwenden:

```zenscript
//property name: healAmount
//ZenGetter
print(item.healAmount);
//ZenSetter
item.healAmount = 16;
//ZenMethods
item.getHealAmount();
item.setHealAmount(64);
```

| Objekt          | Type                                                                                            | Benötigt | Standardwert | Beschreibung / Notizen                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------------------------------------------------------------------------------- |
| healamount      | int                                                                                             | Ja       |              | Wie viele Lebensmittelpunkte werden beim Essen wiederhergestellt?                              |
| immer essbar    | bool                                                                                            | Nein     | false        | Kann das Essen immer noch gegessen werden, wenn die Lebensmittelleiste des Benutzers voll ist? |
| Wolfsnahrung    | bool                                                                                            | Nein     | false        | Kann das Essen verwendet werden, um Wunden zu zähmen?                                          |
| Sättigung       | float                                                                                           | Nein     | 0.6          | Der Sättigungswert des Essens                                                                  |
| onItemFoodEaten | [IItemFoodEaten](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemFoodEaten/) | Nein     | null         | Called when the food item is eaten                                                             |

## Artikel registrieren

Du musst diese Methode aufrufen, um den Gegenstand im Spiel zu registrieren!  
Andernfalls wird nichts passieren!  
Nachdem Sie diese Funktion aufgerufen haben, können Sie die Registrierung des Elements nicht aufheben oder keine seiner Eigenschaften ändern!

```zenscript
item.register();
```