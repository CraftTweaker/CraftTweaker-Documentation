# Materialbestandsdaten

Materialbestandsdaten sind Daten, die zu einem [Materialteil](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) hinzugefügt werden können, um ihm mehr Eigenschaften zu geben.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere mods.contenttweaker.MaterialPartData;`

## Ein solches Objekt wird abgerufen

Sie können ein MaterialPartData Objekt mit der `getData()` Methode auf einem [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) Objekt erhalten.

## Methoden

Alles was Sie mit MaterialPartData tun können, ist mehr Daten hinzuzufügen und gespeicherte Daten abzurufen! Das gefällt Ihnen:

```zenscript
MPD.addDataValue(String name, String value);
MPD.getIntValue(String name, int defaultValue);
MPD.getStringValue(String name, String defaultValue);
```

Nun, was soll als Name oder Wert eingegeben werden?  
Nun, das hängt vom Typ des Werkzeugs ab, das du verwendest.  
Unten finden Sie eine Liste für CoT's Basisteiltypen:

<details><summary>Artikel</summary> 

<table>
  <th>
    Name
  </th>
  
  <th>
    Wert
  </th>
  
  <th>
    Erforderlich?
  </th></tr> 
  
  <tr>
    <td>
      brennen
    </td>
    
    <td>
      Ein "Ganzzahl" (z.B. "100")
    </td>
    
    <td>
      Nein
    </td>
  </tr>
</table></details>

<details><summary>Rüstung</summary> 

<table>
  <th>
    Name
  </th>
  
  <th>
    Wert
  </th>
  
  <th>
    Erforderlich?
  </th></tr> 
  
  <tr>
    <td>
      Haltbarkeit
    </td>
    
    <td>
      Ein "Ganzzahl" (z.B. "10")
    </td>
    
    <td>
      Nein
    </td>
  </tr>
  
  <tr>
    <td>
      verzaubern
    </td>
    
    <td>
      Ein "Ganzzahl" (z.B. "10")
    </td>
    
    <td>
      Nein
    </td>
  </tr>
  
  <tr>
    <td>
      reduzieren
    </td>
    
    <td>
      Four "Integers" (e.g. "2, 5, 6, 2") <br />Representing Footwear, Leggins, Chestplate, Headslot
    </td>
    
    <td>
      Nein
    </td>
  </tr>
  
  <tr>
    <td>
      Widerstandskraft
    </td>
    
    <td>
      Ein "Float" (z.B. "2.4")
    </td>
    
    <td>
      Nein
    </td>
  </tr>
</table></details>

<details><summary>Blockieren</summary> 

| Name        | Wert                           | Erforderlich? |
| ----------- | ------------------------------ | ------------- |
| Härte       | Ein "Ganzzahl" (z.B. "3")      | Nein          |
| widerstand  | Ein "Ganzzahl" (z.B. "15")     | Nein          |
| abruf Level | Ein "Ganzzahl" (z.B. "1")      | Nein          |
| harvestTool | Ein "Tool" (z.B. "Spitzhacke") | Nein          |</details>

<details><summary>Flüssigkeit</summary> 

| Name        | Wert                         | Erforderlich? |
| ----------- | ---------------------------- | ------------- |
| Temperatur  | Eine "Ganzzahl" (z.B. "300") | Nein          |
| dichte      | Ein "Ganzzahl" (z.B. "1000") | Nein          |
| Leuchtkraft | Ein "Ganzzahl" (z.B. "0")    | Nein          |
| viskosität  | Ein "Ganzzahl" (z.B. "100")  | Nein          |
| verdampfen  | A "boolean" (e.g. "true")    | Nein          |</details>

<details><summary>Erz</summary> 

| Name        | Wert                                                             | Erforderlich? |
| ----------- | ---------------------------------------------------------------- | ------------- |
| drops       | Eine "itemList" (z.B. "minecraft:redstone,minecraft:gold_ingot") | Nein          |
| varianten   | Eine "Blockliste" (z.B. "minecraft:stone,minecraft:end_stone")   | Nein          |
| Härte       | Eine "Ganzzahlliste" (z.B. "3,3")                                | Nein          |
| widerstand  | Eine "Ganzzahlliste" (z.B. "15,15")                              | Nein          |
| abruf Level | Eine "Ganzzahlliste" (z.B. "1,1")                                | Nein          |
| harvestTool | Eine "Werkzeugliste" (z.B. "Spitzhacke, Spitzhacke")             | Nein          |</details>

<details><summary>Minecart</summary> 

| Name       | Wert                     | Erforderlich? |
| ---------- | ------------------------ | ------------- |
| maxSpeed   | Ein "Float" (z.B. "1.0") | Nein          |
| ziehen     | Ein "Float" (z.B. "1.0") | Nein          |
| riddenDrag | Ein "Float" (z.B. "1.0") | Nein          |</details>

## Beispiel

```zenscript
import mods.contenttweaker.MaterialSystem;

val oreData = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build().registerPart("ore").getData();
oreData.addDataValue("drops", "minecraft:redstone,minecraft:gold_ingot");
oreData.addDataValue("variants", "minecraft:stone,minecraft:end_stone");
oreData. ddDataValue("hardness", "3,3");
oreData.addDataValue("resistance", "15,15");
oreData.addDataValue("harvestLevel", "1,1");
oreData.addDataValue("harvestTool", "pickaxe,shovel");

oreData.addDataValue("test", 1);
print(oreData.getIntValue("test", -1));
```