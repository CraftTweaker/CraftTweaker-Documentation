# Materialgenerator

If you want to build a [material](/Mods/ContentTweaker/Materials/Materials/Material/), you will need a Material Builder!  
Doesn't sound that hard, does it?

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.MaterialBuilder;`

## Ein solches Objekt wird abgerufen

You can retrieve a new, clear Builder using the [MaterialSystem Package](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var mBuilder = mods.contenttweaker.MaterialSystem.getMaterialBuilder();
```

## Materialeigenschaften festlegen

Sie können diese Eigenschaften festlegen

| ZenMethode              | Parameter                                                        |
| ----------------------- | ---------------------------------------------------------------- |
| setName(name)           | string-Name                                                      |
| setColor(color)         | int Farbe                                                        |
| setColor(color)         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| setHasEffect(hasEffect) | boolesche Hash-Effekt                                            |

All diese Methoden tun 2 Dinge: Erstens verändern sie die Eigenschaft des Baumeisters und zweitens geben sie den modifizierten Builder zurück.  
Du kannst in den Beispielskripten unten sehen, was dies bedeutet.

## Baue das Material gerade aus

Bevor du dein Material bauen kannst, musst du es bauen:

```zenscript
mBuilder.build();
```

Dies gibt ein [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/) Objekt zurück.

## Skript-Beispiel

```zenscript
import mods.contentTweaker.MaterialSystem;

var builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urubuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubuntu = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build(); build();
```