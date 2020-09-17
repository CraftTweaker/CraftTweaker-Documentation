# MaterialPartData

Material Part Data sono dati che possono essere aggiunti a un [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) per conferirgli altre proprietà.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.MaterialPartData;`

## Recupero di un tale oggetto

È possibile ottenere un oggetto MaterialPartData utilizzando il metodo `getData()` su un oggetto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).

## Metodi

Tutto quello che puoi fare con MaterialPartData è aggiungere più Dati e recuperare i dati memorizzati! Lo fai così:

```zenscript
MPD.addDataValue(nome string, valore stringa);
MPD.getIntValue(nome string, int defaultValue);
MPD.getStringValue(nome string, valore stringa predefinito);
```

Ora, cosa mettere in nome o valore?  
Beh, che dipende dal tipo di parte dello strumento che stai utilizzando.  
Di seguito troverai una lista per i Tipi di Parte base di CoT:

<details><summary>Oggetti</summary> 

<table>
  <th>
    Nome
  </th>
  
  <th>
    Valore
  </th>
  
  <th>
    Richiesto?
  </th></tr> 
  
  <tr>
    <td>
      brucia
    </td>
    
    <td>
      Un "Intero" (es. "100")
    </td>
    
    <td>
      No
    </td>
  </tr>
</table></details>

<details><summary>Armatura</summary> 

<table>
  <th>
    Nome
  </th>
  
  <th>
    Valore
  </th>
  
  <th>
    Richiesto?
  </th></tr> 
  
  <tr>
    <td>
      durata
    </td>
    
    <td>
      Un "Intero" (es. "10")
    </td>
    
    <td>
      No
    </td>
  </tr>
  
  <tr>
    <td>
      incantabilità
    </td>
    
    <td>
      Un "Intero" (es. "10")
    </td>
    
    <td>
      No
    </td>
  </tr>
  
  <tr>
    <td>
      riduzione
    </td>
    
    <td>
      Quattro "Integers" (es. "2, 5, 6, 2") <br />Calzature rappresentanti, Leggin, Piastrella
    </td>
    
    <td>
      No
    </td>
  </tr>
  
  <tr>
    <td>
      tenacità
    </td>
    
    <td>
      Un "galleggiante" (es. "2.4")
    </td>
    
    <td>
      No
    </td>
  </tr>
</table></details>

<details><summary>Blocca</summary> 

| Nome                | Valore                          | Richiesto? |
| ------------------- | ------------------------------- | ---------- |
| durezza             | Un "Intero" (es. "3")           | No         |
| resistenza          | Un "Intero" (es. "15")          | No         |
| livello di raccolta | Un "Intero" (es. "1")           | No         |
| harvestTool         | Uno "strumento" (es. "piccone") | No         |</details>

<details><summary>Fluido</summary> 

| Nome        | Valore                    | Richiesto? |
| ----------- | ------------------------- | ---------- |
| temperatura | Un "Intero" (es. "300")   | No         |
| densità     | Un "Intero" (es. "1000")  | No         |
| luminosità  | Un "Intero" (es. "0")     | No         |
| viscosità   | Un "Intero" (es. "100")   | No         |
| vaporizza   | A "boolean" (e.g. "true") | No         |</details>

<details><summary>Minerale</summary> 

| Nome                | Valore                                                          | Richiesto? |
| ------------------- | --------------------------------------------------------------- | ---------- |
| gocce               | Un "itemList" (es. "minecraft:redstone,minecraft:gold_ingot")   | No         |
| varianti            | Una "Lista Blocchi" (es. "Minecraft:stone,minecraft:end_stone") | No         |
| durezza             | Un "elenco intero" (es. "3,3")                                  | No         |
| resistenza          | Una "Lista intera" (es. "15,15")                                | No         |
| livello di raccolta | Un "elenco intero" (es. "1,1")                                  | No         |
| harvestTool         | Un "toolList" (es. "piccone,piccone")                           | No         |</details>

<details><summary>Minecart</summary> 

| Nome       | Valore                 | Richiesto? |
| ---------- | ---------------------- | ---------- |
| maxSpeed   | Un "float" (es. "1.0") | No         |
| trascina   | Un "float" (es. "1.0") | No         |
| riddenDrag | Un "float" (es. "1.0") | No         |</details>

## Esempio

```zenscript
import mods.contenttweaker.MaterialSystem;

val oreData = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build().registerPart("ore").getData();
oreData.addDataValue("drops", "minecraft:redstone,minecraft:gold_ingot");
oreData.addDataValue("variants", "minecraft:stone,minecraft:end_stone");
oreData. ddDataValue("durezza", "3,3");
oreData.addDataValue("resistance", "15,15");
oreData.addDataValue("harvestLevel", "1,1");
oreData.addDataValue("harvestTool", "pickaxe,shovel");

oreData.addData.addDataValue("test", 1);
print(oreData.getIntValue("test", -1));
```