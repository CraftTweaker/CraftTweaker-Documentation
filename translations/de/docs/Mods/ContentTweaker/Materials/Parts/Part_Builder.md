# Bauteil-Generator

Wenn du einen [Teil](/Mods/ContentTweaker/Materials/Parts/Part/)bauen möchtest, benötigst du einen Teil-Builder!  
Täuscht nicht so schwer, oder?

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.PartBuilder;`

## Ein solches Objekt wird abgerufen

You can retrieve a new, clear Builder using the [MaterialSystem Package](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
```

## Lege die Eigenschaften des Teils fest

Sie können diese Eigenschaften festlegen

| ZenMethode                         | Parameter                                                  |
| ---------------------------------- | ---------------------------------------------------------- |
| setHasOverlay(hasOverlay)          | boolean hasOverlay                                         |
| setName(name)                      | string-Name                                                |
| setPartType(partType)              | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) |
| setOreDictName(prefix)             | string-Präfix                                              |
| setAdditionalOreDictNames(Präfixe) | string... prefixes                                         |

All diese Methoden tun 2 Dinge: Erstens verändern sie die Eigenschaft des Baumeisters und zweitens geben sie den modifizierten Builder zurück.  
Du kannst in den Beispielskripten unten sehen, was dies bedeutet.

## Baue das Material gerade aus

Bevor du dein Material bauen kannst, musst du es bauen:

```zenscript
pBuilder.build();
```

Dies gibt ein [Teil](/Mods/ContentTweaker/Materials/Parts/Part/) Objekt zurück.

## Skript-Beispiel

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item"));
var denseGearPart = pBuilder.build();

var denseIngotPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("dense_ingot").setPartType(mods.contenttweaker.MaterialSystem.getPartType("item")).setOreDictName("superIngot").build(); setPartType();
```

## Bemerkenswerte Informationen

### Lokalisierung der Materialteile

Die Elemente, die Sie mit Ihrem neuen Teil erstellen, werden im Allgemeinen `contenttweaker.part genannt. artname`  
Wenn Sie möchten, dass Ihr Element den Materialnamen enthält, müssen Sie ihn lokalisieren vorzugsweise in CoTs Sprachdateien, die unter `Ressourcen/contenttweaker/lang`gefunden werden können.  
Statt des Materialnamens schreiben Sie `%s`, so würde das Benennen der dichten Gänge und der oben erzeugten Barren wie folgt aussehen:

    contenttweaker.part.dense_gear=Dense %s Ausrüstung
    contenttweaker.part.dense_ingot=Dense %s Barren
    

### Textur hinzufügen

Die Gegenstände, die du mit deinem neuen Teil erstellst, werden dir ein wenig unschön erscheinen.  
Wenn Sie möchten, dass Ihr Teil ein spezielles Symbol hat, müssen Sie einen `Teilnamen hinzufügen. ng` Datei zu `Ressourcen/contenttweaker/textures/items`.  
Wenn wir also den dichten Gängen eine Textur geben, müssten wir eine Datei mit dem Namen `gear_dense hinzufügen. ng` zu diesem Ordner.