# Część

Część jest formą przedmiotu, na przykład narzędzia lub rudy.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.Part;`

## Pobieranie takiego obiektu

Możesz pobrać istniejącą część za pomocą [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) lub utworzyć całkowicie nową za pomocą [Part Builder](/Mods/ContentTweaker/Materials/Parts/Part_Builder/)

<details>
    <summary>Następujące typy są wstępnie zarejestrowane (nagłówki to <a href="../PartType">typy części</a>):</summary>
    <h4>Elementy:</h4>
        <ul>
            <li>Belka<img src="../Assets/beam.png" alt="ikona"></li>
            <li>Bolt<img src="../Assets/bolt.png" alt="ikona"></li>
            <li>Okładziny<img src="../Assets/casing.png" alt="ikona"></li>
            <li>Kawałek<img src="../Assets/clump.png" alt="ikona"></li>
            <li>Kryształowy Kryształ<img src="../Assets/crystal.png" alt="ikona"></li>
            <li>Kruszona ruda (rozgniatana_rudy)<img src="../Assets/crushed_ore.png" alt="ikona"></li>
            <li>Gęsta płyta (dense_blate)<img src="../Assets/dense_plate.png" alt="ikona"></li>
            <li>Brudny pył (brudny_pył)<img src="../Assets/dirty_dust.png" alt="ikona"></li>
            <li>Pył<img src="../Assets/dust.png" alt="ikona"></li>
            <li>Narzędzia połowowe<img src="../Assets/gear.png" alt="ikona"></li>
            <li>Ingot<img src="../Assets/ingot.png" alt="ikona"></li>
            <li>Nugget<img src="../Assets/nugget.png" alt="ikona"></li>
            <li>Płyta<img src="../Assets/plate.png" alt="ikona"></li>
            <li>Pręt<img src="../Assets/rod.png" alt="ikona"></li>
            <li>Odłamek<img src="../Assets/shard.png" alt="ikona"></li>
        </ul>
    <h4>Bloki:</h4>
        <ul>
            <li>Blok<img src="../Assets/block.png" alt="ikona"></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>Ruda</li>
            <li>Gęsta ruda (dense_ore)</li>
            <li>Słaba Ore(biedna_ore)</li>
        </ul>
    <h4>Płyty:</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>Zbroja <img src="../Assets/armor_head.png" alt="ikona głowy"><img src="../Assets/armor_chest.png" alt="ikona skrzyni"><img src="../Assets/armor_legs.png" alt="ikona nóg"><img src="../Assets/armor_feet.png" alt="ikona stóp"></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## Pola dodatkowe

Możesz pobrać następujące informacje z części:

| Metoda ZenMethod          | Typ zwrotu                                                                    |
| ------------------------- | ----------------------------------------------------------------------------- |
| hasOverlay()              | boolean                                                                       |
| getName()                 | ciąg znaków                                                                   |
| getUnlocalizedName()      | ciąg znaków                                                                   |
| getShortUnlocalizedName() | ciąg znaków                                                                   |
| getPartType()             | [Typ części](/Mods/ContentTweaker/Materials/Parts/PartType/)                  |
| getPartTypeName()         | ciąg znaków                                                                   |
| getOreDictPrefix()        | ciąg znaków                                                                   |
| getData()                 | List<[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## Zarejestruj się do materiału(ów)

Możesz użyć tego aby zarejestrować jeden lub kilka materiałów w tej części

```zenscript
part.registerToMaterial(Materiał Material);
część registerToMaterials(Materiał Material[]);
```

Funkcja zwróci pojedynczy obiekt [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) lub ich listę, w zależności od tego, czy zarejestrowałeś jeden lub wiele materiałów jednocześnie.