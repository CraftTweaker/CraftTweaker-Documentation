# Teil

Ein Teil ist das Formular, in dem ein Gegenstand ist, zum Beispiel ein Getriebe oder ein Erz.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker importieren.Teil;`

## Ein solches Objekt wird abgerufen

Sie können entweder ein bestehendes Bauteil mit dem [Materialsystem](/Mods/ContentTweaker/Materials/MaterialSystem/) abrufen oder ein völlig neues mit dem [Bauteilbauer](/Mods/ContentTweaker/Materials/Parts/Part_Builder/) erstellen

<details>
    <summary>Folgende Typen sind vorab registriert (Schlagzeilen sind die <a href="../PartType">Teilentypen</a>):</summary>
    <h4>Artikel:</h4>
        <ul>
            <li>Strahl<img src="../Assets/beam.png" alt="symbol"></li>
            <li>Bolzen<img src="../Assets/bolt.png" alt="symbol"></li>
            <li>Gehäuse<img src="../Assets/casing.png" alt="symbol"></li>
            <li>Klumpen<img src="../Assets/clump.png" alt="symbol"></li>
            <li>Kristall<img src="../Assets/crystal.png" alt="symbol"></li>
            <li>Zerkleinertes Erz (zerkleinert)<img src="../Assets/crushed_ore.png" alt="symbol"></li>
            <li>Dichte Platte (dense_plate)<img src="../Assets/dense_plate.png" alt="symbol"></li>
            <li>Schmutziger Staub (dirty_staub)<img src="../Assets/dirty_dust.png" alt="symbol"></li>
            <li>Staub<img src="../Assets/dust.png" alt="symbol"></li>
            <li>Ausrüstung<img src="../Assets/gear.png" alt="symbol"></li>
            <li>Ingot<img src="../Assets/ingot.png" alt="symbol"></li>
            <li>Nugget<img src="../Assets/nugget.png" alt="symbol"></li>
            <li>Platte<img src="../Assets/plate.png" alt="symbol"></li>
            <li>Stange<img src="../Assets/rod.png" alt="symbol"></li>
            <li>Scherbe<img src="../Assets/shard.png" alt="symbol"></li>
        </ul>
    <h4>Blocks:</h4>
        <ul>
            <li>Blockieren<img src="../Assets/block.png" alt="symbol"></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>Erz</li>
            <li>Dichte Erz (dense_Erz)</li>
            <li>Armer Ore(arm_ore)</li>
        </ul>
    <h4>Flüssigkeiten:</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>Rüstung <img src="../Assets/armor_head.png" alt="kopfsymbol"><img src="../Assets/armor_chest.png" alt="Truhensymbol"><img src="../Assets/armor_legs.png" alt="Beinsymbol"><img src="../Assets/armor_feet.png" alt="Füße Symbol"></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## Felder

Sie können die folgenden Informationen von einem Teil abrufen:

| ZenMethode                | Rückgabetyp                                                                     |
| ------------------------- | ------------------------------------------------------------------------------- |
| hasOverlay()              | boolean                                                                         |
| getName()                 | string                                                                          |
| getUnlocalizedName()      | string                                                                          |
| getShortUnlocalizedName() | string                                                                          |
| getPartType()             | [Bauteiltyp](/Mods/ContentTweaker/Materials/Parts/PartType/)                    |
| getPartTypeName()         | string                                                                          |
| getOreDictPrefix()        | string                                                                          |
| getData()                 | Liste <[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## Bei Material(s) registrieren

Sie können dies verwenden, um ein oder mehrere Materialien zu diesem Teil zu registrieren

```zenscript
part.registerToMaterial(Material);
part.registerToMaterials(Material[] Material);
```

Die Funktion gibt entweder ein einzelnes [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) Objekt oder eine Liste davon zurück je nachdem, ob Sie ein oder mehrere Materialien gleichzeitig registriert haben.