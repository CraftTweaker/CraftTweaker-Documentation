# Flüssigkeit

Dies erlaubt es dir, Flüssigkeiten dem Spiel hinzuzufügen!

## Erstellen Sie die Flüssigkeitsrepräsentation

Bevor Sie die Flüssigkeit hinzufügen können, Sie müssen eine Fluid Representation erstellen, mit der Sie die Eigenschaften der Flüssigkeit einstellen können, die Sie hinzufügen möchten.  
Hier kommt die [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) in:

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

## Repräsentation Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.Fluid;`

## Zeneigenschaften

Um die Eigenschaften zu bekommen/einzustellen, können Sie entweder die ZenGetters/Setters respektieren oder die ZenMethoden verwenden:

```zenscript
//Eigenschaftsname: density
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.density = 500;
//ZenMethods
fluid.getDensity();
fluid.setDensity(1000);
```

| Eigenschaftsname     | Type                                                                                     | Benötigt | Standardwert                     | Beschreibung / Notizen                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------- | -------- | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| unlocalizedName      | string                                                                                   | Ja       |                                  | Name, sollte alle Kleinbuchstaben sein                                                         |
| dichte               | int                                                                                      | Nein     | 1000                             | Wie schnell du in der Flüssigkeit gehen kannst                                                 |
| gasförmig            | boolean                                                                                  | Nein     | false                            | Ist die Flüssigkeit gasförmig (fließt nach oben statt nach unten)?                             |
| Leuchtkraft          | int                                                                                      | Nein     | 0                                | Der von der Flüssigkeit ausgestrahlte Lichtwert                                                |
| Temperatur           | int                                                                                      | Nein     | 300                              | Die Fluidtemperatur                                                                            |
| farben               | int                                                                                      | Ja       |                                  | Der Farbcode des Fluid                                                                         |
| färben               | boolean                                                                                  | Nein     | true                             | Wird der Farbcode des Flüssigkeitscodes angewendet?                                            |
| seltenheit           | string                                                                                   | Nein     | KOMMON                           | Wie selten eine Flüssigkeit ist, bestimmt ToolTip Farbe ("COMMON", "UNCOMMON", "RARE", "EPIC") |
| viskosität           | int                                                                                      | Nein     | 1000                             | Wie schnell sich die Flüssigkeit ausbreitet                                                    |
| fillSound            | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | Nein     | Datei anzeigen                   | Der Klang, der gespielt wird, wenn der Flüssigkeit mit einem Eimer aufgehoben wird             |
| leerer Ton           | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | Nein     | BUCKET_DESCRIPTION               | Der Klang, der gespielt wird, wenn der Flüssigkeit platziert wird                              |
| verdampfen           | boolean                                                                                  | Nein     | false                            | Verdampft, wenn du in den Niederlanden platzierst?                                             |
| stillstandort        | string                                                                                   | Nein     | contenttweaker:fluids/fluid      | Der Ort, an dem die Textur für die stillstehende Flüssigkeit gefunden werden soll              |
| fliessender Standort | string                                                                                   | Nein     | contenttweaker:fluids/fluid_flow | Der Ort, an dem die Textur für die fließende Flüssigkeit gefunden werden soll                  |
| material             | [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)     | Nein     | WASSER                           | Das Material, aus dem die Flüssigkeit hergestellt wird                                         |

## Flüssigkeit registrieren

Du musst diese Methode aufrufen, um die Flüssigkeit im Spiel zu registrieren!  
Andernfalls wird nichts passieren!  
Nachdem Sie diese Funktion aufgerufen haben, können Sie die Registrierung der Flüssigkeit nicht aufheben oder keine seiner Eigenschaften ändern!

```zenscript
fluid.register();
```

## Skript-Beispiel

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;
import mods.contenttweaker.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex("FF69B4"));
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## Lokalisierung der Flüssigkeit

Sie müssen `fluid.fluidName = Lokalisierter Name` zu den entsprechenden Sprachdateien hinzufügen. Alternativ können Sie CraftTweakers [-Lokalisierungsfunktion](/Vanilla/Game/IGame/)verwenden, obwohl es empfohlen ist, die Sprachdateien zu verwenden!