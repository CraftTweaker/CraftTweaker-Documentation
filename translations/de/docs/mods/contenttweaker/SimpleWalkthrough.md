# Einfacher Durchgang

Hallo hier, kindlich hier. Also, du probierst ContentTweaker für 1.15 aus?

Manchmal werde ich ContentTweaker normalerweise mit CoT abkürzen, um mir ein paar Buchstaben zu ersparen (es ist eher ein Automatismus von Discord bereit), also bleibe bei mir, okay? Dann, zuerst empfehle ich Ihnen auch einen Ressourcen-Manager Mod, so dass die Blöcke/Elemente, die Sie eine Möglichkeit haben, Texturen und Modelle für Blöcke und Elemente später hinzuzufügen.

ContentTweaker wird versuchen, Modelldateien sowie ein einfaches No-Textur-Bild in Ihrem Ressourcen-Ordner zu erstellen, so lange die Mod [erkannt wird. Der Loader](https://www.curseforge.com/minecraft/mc-mods/the-loader) oder [Open Loader](https://www.curseforge.com/minecraft/mc-mods/open-loader) installiert. Wenn keines dieser beiden installiert ist, wird es nur eine Nachricht an das Protokoll ausgeben, dass es keine Texturen für Sie erstellt. Irgendwann wird es auch möglich sein, die Erzeugung von Texturen komplett zu deaktivieren, aber nicht im curren Alpha/Beta Build.

Für die generierten Texturen wird CoT Dateien nicht überschreiben, wenn sie bereits existieren, so dass Sie die vorhandenen Dateien einfach durch eigene ersetzen können und CoT diese Änderungen nicht rückgängig machen wird.


Nun, kommen wir zu ihm, oder? Ich werde Beispiele für einige einfache Blöcke und Elemente anführen. Wenn du alles sehen möchtest, was diese Klassen unterstützen, Sie können den API-Export direkt unter dieser Datei in der Navigationsleiste finden!

## Loader ContentTweaker
Da CraftTweaker in 1.14+ geladen wird, während der Server aktiv ist, benötigen wir eine Möglichkeit, Skripte woanders zu laden. Dafür ist der `#loader contenttweaker` verantwortlich!  
Legen Sie es einfach irgendwo in Ihre Datei (vorzugsweise oben) und Sie müssen loslegen.  
Denken Sie daran, dass **keine Crafttweaker-Skripte erlaubt sind** in `#loader contenttweaker`da sie in verschiedenen Phasen des Ladezyklus laufen!


## Blöcke

Um Blöcke zu erstellen, musst du ein [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) Objekt erstellen.  
Sobald Sie die einfachsten Eigenschaften in einem Builder-Muster festgelegt haben.

Sie können dann direkt `build(name)` darauf aufrufen und erledigt werden, wenn Sie einen einfachen Block erstellen möchten.  
Oder Sie können den Builder mit `withType` spezialisieren und eine spezialisierte Builder Klasse angeben, zum Beispiel [BuilderTreppen](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) oder [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable). Schauen Sie auf ihren jeweiligen Seiten nach, welche zusätzlichen Funktionen sie bieten. Seien Sie sich darüber im Klaren, dass, sobald Sie den HutType-Aufruf durchführen, es kein Zurück mehr gibt, setzen Sie also alle grundlegenden Eigenschaften vor diesem Anruf ein.

Denken Sie daran, was immer Sie tun, am Ende der Kette benötigen Sie **einen `build(name)` Aufruf**, da sonst nichts passieren wird!

Genug gesprochen, Sie wollen ein Beispiel kopieren/einfügen, oder?

```zenscript
#loader contenttweaker

import mods.contenttweaker.block.blockBuilder;
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
import mods.contenttweaker.block.basic.BlockBuilderBasic;
mods.contenttweaker. lock.pillar. lockBuilderPillardrehbar;


//Der einfachste Weg, verwendet blockamterielle IRON
new BlockBuilder()
    //Wird an den Basic Builder delegieren
    . uild("generic_block");


//Legt ein anderes Blockmaterial fest.
neuer BlockBuilder(<blockmaterial:earth>)
    .withType<BlockBuilderBasic>()
    . uild("earth_like_block");


//Der Pfeiltyp ist im Grunde identisch mit Logs, eine Textur oben/unten und eine für die Seiten.
//Kann auf allen Achsen gedreht werden, genau wie auf Logs.
//Texturnamen werden standardmäßig "block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noarg");


//Treppen.
//Hat 3 Texturen, oben, unten, Seiten, standardmäßig werden sie "block_name" + "_top", "_bottom", "_seiten"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("stairs_noarg");
```


## Artikel

Für Gegenstände, die Sie mehr oder weniger tun, aber diesmal benötigen Sie einen [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder).  
Sie können entweder einen `build(name)` direkt verwenden, oder wechseln Sie zu einer spezialisierten Version mit `withType`.  
Zum Zeitpunkt dieses Schreibens gibt es jedoch nur [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool).

Denken Sie daran, was immer Sie tun, am Ende der Kette benötigen Sie **einen `build(name)` Aufruf**, da sonst nichts passieren wird!

Genug gesprochen, Sie wollen ein Beispiel kopieren/einfügen, oder?
```zenscript
#loader contenttweaker

importiert mods.contenttweaker.item.ItemBuilder;
importiert mods.contenttweaker.item.tool.ItemBuilderTool;

//Der einfachste Weg um Items zu erstellen.
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//Mit Einstellungen
new ItemBuilder()
    . ithMaxStackSize(16) //MaxStackSize und MaxDamage widersprechen einander, also nur 1
    . uild("other_item");


//Wenn du Werkzeuge willst, musst du den Typ einstellen.
//Ab dem Zeitpunkt der Einstellung wechselt der Typ den Kontext, so dass die anderen Methoden nicht mehr verfügbar sind.
//Das bedeutet, dass Sie die Haltbarkeit und das ähnliche _before_ des withType Aufrufs einstellen müssen.
neuer ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    . ithToolType(<tooltype:axe>, 1) //Axe harvest level = 1
    .withToolType(<tooltype:shovel>, 3, 4. F) //Shovel harvest level 3 and destroy speed 4.0
    . uild("meine_tool");



//Wenn Sie ein Werkzeug wollen, das Schaden anrichtet, können Sie auch den Werkzeugtyp
neue ItemBuilder()
    verwenden. ithMaxDamage(100)
    . ithType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5. F)
    .withDurabilityCostAttack(1) //Standardeinstellung: 2
    .build("my_mace");

```

## Namen
Wie würden Sie also die richtigen Namen angeben?  
Dafür benötigen Sie eine Sprachdatei.  
Zum Zeitpunkt dieses Schreibens hat CoT das für ya noch nicht erstellt so müssen Sie es selbst erstellen.  
In Ihrem Ressourcenpaket finden Sie den Ordner `assets/contenttweaker` .  
Erstelle dort einen Ordner namens `Sprache` , falls er noch nicht existiert, und erstellen Sie eine Datei mit dem Namen `de_us. Sohn` drin.  
Ich empfehle immer, mit dem de_us eins zu beginnen da das ist, worauf das Spiel zurückfällt, wenn es den Namen einer anderen Sprache nicht finden kann. Danach können Sie dies auch mit anderen Sprachcodes wiederholen.

Dort müssen Sie eine Key-Value-Karte für Ihre Einträge erstellen. Die Schlüssel, auch Übersetzungsschlüssel genannt, oder in früheren Versionen nicht lokalisierten Namen, sind abhängig vom Namen des von dir verwendeten Blocks/Elements und sie werden aussehen wie
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
Für den Wert können Sie einstellen, wie das Element dort ingame benannt wird. Wenn Sie sich über die Syntax nicht sicher sind, schauen Sie in das folgende Beispiel oder versuchen Sie einen JSON Validator, wenn Sie die Syntax nicht mehr haben.


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
{
  "block.contenttweaker.generic_block": "Generischer Block",
  "item.contenttweaker.generic_item": "Generisches Item",
  "item.contenttweaker.generic_item_2": "Generisches Item, das 2nd",
  "item.contenttweaker.generic_item_3": "Generisches Item"
}
```