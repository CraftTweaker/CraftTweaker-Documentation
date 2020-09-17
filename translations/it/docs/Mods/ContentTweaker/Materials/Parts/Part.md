# Parte

Una parte è la forma in cui un elemento si trova, ad esempio un attrezzo o un minerale.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.Part;`

## Recupero di un tale oggetto

È possibile recuperare una parte esistente utilizzando il [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) o crearne una completamente nuova utilizzando il [Part Builder](/Mods/ContentTweaker/Materials/Parts/Part_Builder/)

<details>
    <summary>I seguenti tipi sono pre-registrati (i titoli sono i <a href="../PartType">tipi di parte</a>):</summary>
    <h4>Articoli:</h4>
        <ul>
            <li>Trave<img src="../Assets/beam.png" alt="icona"></li>
            <li>Dardi<img src="../Assets/bolt.png" alt="icona"></li>
            <li>Involucro<img src="../Assets/casing.png" alt="icona"></li>
            <li>Clump<img src="../Assets/clump.png" alt="icona"></li>
            <li>Cristallo Di Cristallo<img src="../Assets/crystal.png" alt="icona"></li>
            <li>Minerale Frantumato (frantumato_ore)<img src="../Assets/crushed_ore.png" alt="icona"></li>
            <li>Piastra Densa (dense_plate)<img src="../Assets/dense_plate.png" alt="icona"></li>
            <li>Polvere Sporca (dirty_polvere)<img src="../Assets/dirty_dust.png" alt="icona"></li>
            <li>Polvere<img src="../Assets/dust.png" alt="icona"></li>
            <li>Attrezzo<img src="../Assets/gear.png" alt="icona"></li>
            <li>Ingot<img src="../Assets/ingot.png" alt="icona"></li>
            <li>Nugget<img src="../Assets/nugget.png" alt="icona"></li>
            <li>Piastra<img src="../Assets/plate.png" alt="icona"></li>
            <li>Rod<img src="../Assets/rod.png" alt="icona"></li>
            <li>Frammento<img src="../Assets/shard.png" alt="icona"></li>
        </ul>
    <h4>Blocchi:</h4>
        <ul>
            <li>Blocca<img src="../Assets/block.png" alt="icona"></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>Minerale</li>
            <li>Minerale Denso (dense_ore)</li>
            <li>Ore(poor_ore) Povero</li>
        </ul>
    <h4>Fluidi:</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>Armatura <img src="../Assets/armor_head.png" alt="icona della testa"><img src="../Assets/armor_chest.png" alt="icona toracica"><img src="../Assets/armor_legs.png" alt="icona gambe"><img src="../Assets/armor_feet.png" alt="icona piedi"></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## Campi

È possibile recuperare le seguenti informazioni da una parte:

| ZenMethod                 | Tipo Di Reso                                                                  |
| ------------------------- | ----------------------------------------------------------------------------- |
| hasOverlay()              | boolean                                                                       |
| getName()                 | stringa                                                                       |
| getUnlocalizedName()      | stringa                                                                       |
| getShortUnlocalizedName() | stringa                                                                       |
| getPartType()             | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/)                    |
| getPartTypeName()         | stringa                                                                       |
| getOreDictPrefix()        | stringa                                                                       |
| getData()                 | List<[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## Registrati ai materiali

È possibile utilizzare questo per registrare uno o più materiali a questa parte

```zenscript
part.registerToMaterial(Materiale materiale);
part.registerToMaterials(Materiale[] materiali);
```

La funzione restituirà un singolo oggetto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) o un loro elenco, a seconda che tu abbia registrato uno o più materiali contemporaneamente.