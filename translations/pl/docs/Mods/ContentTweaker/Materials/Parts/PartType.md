# Typ części

PartType może być postrzegany jako grupa, w której znajduje się kilka części, np. `elementów`

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.PartType;`

## Pobieranie takiego obiektu

Możesz użyć [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) , aby pobrać istniejący obiekt PartType lub utworzyć zupełnie nowy.  
Sprawdź poniżej wpis, aby dowiedzieć się, jak utworzyć nowy PartType.

<details>
    <summary>Następujące typy są wstępnie zarejestrowane:</summary>
    <ul>
        <li>element</li>
        <li>blok</li>
        <li>ruda</li>
        <li>płyn</li>
        <li>pancerz</li>
        <li>minecart</li>
    </ul>
</details>

## Metody ZenMethods

Możesz pobrać następujące informacje z PartType:

| Metoda ZenMethod | Typ zwrotu  |
| ---------------- | ----------- |
| getName()        | ciąg znaków |

Możesz ustawić następujące informacje na PartType:

| Metoda ZenMethod                | Typ parametru                                                                |
| ------------------------------- | ---------------------------------------------------------------------------- |
| dane setData(IPartDataPiece[]); | [Dane IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)[] |

## Utwórz nowy PartType

Jeśli z jakiegokolwiek powodu będziesz musiał zarejestrować nowy PartType, musisz wiedzieć dwie rzeczy:

- Jaka nazwa będzie mieć nowy typ partycji
- Jak [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) utworzony z [Części](/Mods/ContentTweaker/Materials/Parts/Part/) tego typu zostanie zarejestrowany

Pierwszy z nich jest prosty, to ciąg.  
Drugi to trochę trikier, jest funkcją, która przyjmuje MaterialPart jako wejście:

```zenscript
#loader contenttweaker


importuje mods.contenttweaker.MaterialSystem;

val ourType = MaterialSystemem. reatePartType("cool_type", function(materialPart){

});

//Użyj nowego typu, aby utworzyć część
val ourPart = mods. ontenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Utwórz nowy materiał i zarejestruj nowo utworzoną część.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```