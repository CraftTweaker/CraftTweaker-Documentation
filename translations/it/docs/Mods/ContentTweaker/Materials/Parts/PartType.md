# PartType

Un PartType può essere visto come un gruppo in cui più parti si inseriscono, ad esempio `elementi`

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.PartType;`

## Recupero di un tale oggetto

È possibile utilizzare il [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) per recuperare un oggetto PartType esistente o crearne uno completamente nuovo.  
Dai un'occhiata qui sotto per imparare a creare un nuovo PartType.

<details>
    <summary>I seguenti tipi sono pre-registrati:</summary>
    <ul>
        <li>elemento</li>
        <li>blocco</li>
        <li>minerale</li>
        <li>fluido</li>
        <li>armatura</li>
        <li>minecart</li>
    </ul>
</details>

## ZenMethods

È possibile recuperare le seguenti informazioni da un Partito:

| ZenMethod | Tipo Di Reso |
| --------- | ------------ |
| getName() | stringa      |

È possibile impostare le seguenti informazioni su un Partito:

| ZenMethod                       | Tipo Parametro                                                               |
| ------------------------------- | ---------------------------------------------------------------------------- |
| setData(IPartDataPiece[] data); | [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)[] dati |

## Crea un nuovo PartType

Se per qualsiasi motivo dovessi mai registrare un nuovo PartType, dovrai conoscere due cose:

- Quale nome avrà la nuova partType
- Come saranno registrati [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) creati da [Parti](/Mods/ContentTweaker/Materials/Parts/Part/) che sono di questo tipo

Il primo è semplice, è una stringa.  
Il secondo è un po' più complicato, è una funzione che prende un MaterialPart come input:

```zenscript
#loader contenttweaker


import mods.contenttweaker.MaterialSystem;

val ourType = MaterialSystem. reatePartType("cool_type", function(materialPart){

});

//Usa il nuovo tipo per creare una Parte
val ourPart = mods. ontenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Creare un nuovo Materiale e registrare la nuova parte creata.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```