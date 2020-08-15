# Datos de parte del material

Material Part Data son datos que pueden añadirse a una [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) para darle algunas propiedades más.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.MaterialPartData;`

## Recuperando tal objeto

Puede obtener un objeto MaterialPartData usando el método `getData()` en un objeto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).

## Métodos

¡Todo lo que puedes hacer con MaterialPartData es añadir más datos y recuperar datos almacenados! Lo hacen así:

```zenscript
MPD.addDataValue(String name, String value);
MPD.getIntValue(String name, int defaultValue);
MPD.getStringValue(String name, String defaultValue);
```

Ahora, ¿qué poner como nombre o valor?  
Bueno, eso depende del tipo de parte de la herramienta que esté usando.  
A continuación encontrarás una lista para los tipos básicos de piezas de CoT:

<details><summary>Elementos</summary> 

<table>
  <th>
    Nombre
  </th>
  
  <th>
    Valor
  </th>
  
  <th>
    ¿Requerido?
  </th></tr> 
  
  <tr>
    <td>
      quemar
    </td>
    
    <td>
      Un "Entero" (ej: "100")
    </td>
    
    <td>
      Nu
    </td>
  </tr>
</table></details>

<details><summary>Armadura</summary> 

<table>
  <th>
    Nombre
  </th>
  
  <th>
    Valor
  </th>
  
  <th>
    ¿Requerido?
  </th></tr> 
  
  <tr>
    <td>
      durabilidad
    </td>
    
    <td>
      Un "Entero" (ej: "10")
    </td>
    
    <td>
      Nu
    </td>
  </tr>
  
  <tr>
    <td>
      encantabilidad
    </td>
    
    <td>
      Un "Entero" (ej: "10")
    </td>
    
    <td>
      Nu
    </td>
  </tr>
  
  <tr>
    <td>
      reducción
    </td>
    
    <td>
      Four "Integers" (e.g. "2, 5, 6, 2") <br />Representing Footwear, Leggins, Chestplate, Headslot
    </td>
    
    <td>
      Nu
    </td>
  </tr>
  
  <tr>
    <td>
      Resistencia
    </td>
    
    <td>
      Un "flotante" (por ejemplo, "2.4")
    </td>
    
    <td>
      Nu
    </td>
  </tr>
</table></details>

<details><summary>Bloque</summary> 

| Nombre               | Valor                                   | ¿Requerido? |
| -------------------- | --------------------------------------- | ----------- |
| dureza               | Un "Entero" (ej: "3")                   | Nu          |
| resistencia          | Un "Entero" (ej: "15")                  | Nu          |
| nivel de cosecha     | Un "Entero" (ej: "1")                   | Nu          |
| cosechar herramienta | Una "herramienta" (por ejemplo, "pico") | Nu          |</details>

<details><summary>Fluido</summary> 

| Nombre      | Valor                             | ¿Requerido? |
| ----------- | --------------------------------- | ----------- |
| temperatura | Un "Integer" (por ejemplo, "300") | Nu          |
| densidad    | Un "Entero" (ej: "1000")          | Nu          |
| luminosidad | Un "Entero" (ej: "0")             | Nu          |
| viscosidad  | Un "Entero" (ej: "100")           | Nu          |
| vaporizar   | A "boolean" (e.g. "true")         | Nu          |</details>

<details><summary>Mena</summary> 

| Nombre               | Valor                                                                       | ¿Requerido? |
| -------------------- | --------------------------------------------------------------------------- | ----------- |
| gotas                | Una "itemList" (por ejemplo, "minecraft:redstone,minecraft:gold_ingot")     | Nu          |
| variantes            | Una "Lista de Bloques" (por ejemplo, "minecraft:stone,minecraft:end_stone") | Nu          |
| dureza               | Una "lista entera" (por ejemplo, "3,3")                                     | Nu          |
| resistencia          | Una "lista entera" (por ejemplo, "15,15")                                   | Nu          |
| nivel de cosecha     | Una "lista entera" (por ejemplo, "1,1")                                     | Nu          |
| cosechar herramienta | Una "lista de herramientas" (por ejemplo, "pico,pico")                      | Nu          |</details>

<details><summary>Minecart</summary> 

| Nombre           | Valor                  | ¿Requerido? |
| ---------------- | ---------------------- | ----------- |
| velocidad máxima | Un "float" (ej: "1.0") | Nu          |
| arrastrar        | Un "float" (ej: "1.0") | Nu          |
| riddenDrag       | Un "float" (ej: "1.0") | Nu          |</details>

## Ejemplo

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