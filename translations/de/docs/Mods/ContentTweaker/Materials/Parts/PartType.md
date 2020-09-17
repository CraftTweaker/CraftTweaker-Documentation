# Bauteiltyp

Ein PartType kann als Gruppe angesehen werden, in die mehrere Teile passen, z.B. `Elemente`

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.PartType;`

## Ein solches Objekt wird abgerufen

Du kannst das [Materialsystem](/Mods/ContentTweaker/Materials/MaterialSystem/) benutzen, um ein existierendes Bauteiltyp-Objekt entweder abzurufen oder ein komplett neues zu erstellen.  
Schauen Sie sich den folgenden Eintrag an, um zu erfahren, wie Sie einen neuen PartType erstellen.

<details>
    <summary>Folgende Typen sind vorregistriert:</summary>
    <ul>
        <li>eintrag</li>
        <li>blockieren</li>
        <li>erz</li>
        <li>flüssig</li>
        <li>Rüstung</li>
        <li>minecart</li>
    </ul>
</details>

## ZenMethoden

Sie können die folgenden Informationen von einem PartType abrufen:

| ZenMethode | Rückgabetyp |
| ---------- | ----------- |
| getName()  | string      |

Sie können die folgenden Informationen zu einem Teiltyp festlegen:

| ZenMethode                       | Parametertyp                                                                  |
| -------------------------------- | ----------------------------------------------------------------------------- |
| setData(IPartDataPiece[] Daten); | [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)[] Daten |

## Einen neuen Bauteiltyp erstellen

Wenn Sie aus irgendeinem Grund einen neuen PartType registrieren müssen, müssen Sie zwei Dinge wissen:

- Welchen Namen der neue partType hat
- Wie [Materialteile](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) aus [Bauteilen](/Mods/ContentTweaker/Materials/Parts/Part/) , die diesen Typ haben, erstellt werden, werden registriert

Die erste ist einfach, es ist eine Zeichenkette.  
Die zweite ist ein bisschen komplizierter, es ist eine Funktion, die ein Materialteil als Eingabe nimmt:

```zenscript
#loader contenttweaker


importiert mods.contenttweaker.MaterialSystem;

val ourType = Materialsystem. reatePartType("cool_type", function(materialPart){

});

//Mit dem neuen Typ erstellen Sie einen Teil
val ourPart = mods. ontenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Erstelle ein neues Material und registriere den neu erstellten Teil.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```