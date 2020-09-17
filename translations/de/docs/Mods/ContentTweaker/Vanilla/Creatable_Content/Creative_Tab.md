# Kreativer Tab

Damit kannst du Creative Tabs zum Spiel hinzufügen!

## Erstellen des ICreativeTab Objekts

Bevor Sie den Tab hinzufügen können, Sie müssen eine Repräsentation erstellen, mit der Sie die Eigenschaften des Tabs einstellen können, den Sie hinzufügen möchten.  
Hier kommt die [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) in:

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

Die Zeichenkette ist in jeder der drei Methoden die gleichen: Es ist der unlokalisierte Name, den der Tab später haben wird.  
Der zweite Parameter ist das Symbol, das Ihr Tab später fortsetzen wird (e. . eine Lavabuchse für "misc").  
Sie können entscheiden, ob Sie eine Item-Zuordnung, einen Itemstack, eine Blockdarstellung oder eine ItemStackLieferer-Funktion verwenden möchten.

## Ein vorhandenes ICreativeTab Objekt aufrufen

Sie können auch einen [vorhandenen kreativen Tab](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) aufrufen, obwohl Sie keine seiner Eigenschaften ändern können.  
Warum würden Sie das brauchen, fragen Sie?  
Sie benötigen dies, wenn Sie einen neu erstellten Block oder ein Element zu einem existierenden Tab hinzufügen wollen!

## Eigenschaften

Sie können alle diese Eigenschaften über den normalen Tab ZenGetters und ZenSetters  
`aufrufen und einstellen. nlocalizedName = "hh";`  
Beachten Sie, dass Sie die Einstellungen wahrscheinlich kaum benötigen, da diese Eigenschaften bereits auf Ihre gewünschten Werte initialisiert werden, wenn Sie das ICreativeTab-Objekt erstellen.  
können Sie keine Eigenschaften von einem existierenden ICreativeTab(eine, die Sie mit dem [Klammerhandler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) abgerufen haben) setzen oder abrufen!

| Eigenschaftsname   | Type                                                                                                    | Benötigt | Standardwert | Beschreibung / Notizen     |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------- |
| unlocalizedName    | string                                                                                                  | JA       |              | Der Name des Creative Tabs |
| iconStack          | [IItemStack](/Vanilla/Items/IItemStack/)                                                                | JA/Nein  |              | Das Creative Tab-Symbol    |
| iconStackLieferant | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | Nein/Ja  | null         | Bestimmt etwas?            |

## Den kreativen Tab registrieren

Du musst diese Methode aufrufen, um den kreativen Tab im Spiel zu registrieren!  
Andernfalls wird nichts passieren!  
Nachdem Sie diese Funktion aufgerufen haben, können Sie die Registerkarte nicht aufheben oder keine ihrer Eigenschaften ändern!

```zenscript
tab.register();
```

## Skript-Beispiel

```zenscript
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```