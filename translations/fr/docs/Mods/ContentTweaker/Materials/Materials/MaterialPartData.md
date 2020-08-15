# Données de la pièce

Les données de la pièce matérielle sont des données qui peuvent être ajoutées à une [MatérialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) pour lui donner plus de propriétés.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.MaterialPartData ;`

## Récupération d'un tel objet

Vous pouvez obtenir un objet MaterialPartData en utilisant la méthode `getData()` sur un objet [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).

## Méthodes

Tout ce que vous pouvez faire avec MaterialPartData est d'ajouter plus de données et de récupérer les données stockées ! Vous le faites ainsi:

```zenscript
MPD.addDataValue(String name, String value);
MPD.getIntValue(String name, int defaultValue);
MPD.getStringValue(String name, String defaultValue);
```

Maintenant, que mettre en tant que nom ou valeur ?  
Eh bien, cela dépend du type de partie de l'outil que vous utilisez.  
Vous trouverez ci-dessous une liste des types de pièces de base de la TC:

<details><summary>Éléments</summary> 

<table>
  <th>
    Nom
  </th>
  
  <th>
    Valeur
  </th>
  
  <th>
    Requis ?
  </th></tr> 
  
  <tr>
    <td>
      brûler
    </td>
    
    <td>
      Un "Integer" (par exemple "100")
    </td>
    
    <td>
      Non
    </td>
  </tr>
</table></details>

<details><summary>Armure</summary> 

<table>
  <th>
    Nom
  </th>
  
  <th>
    Valeur
  </th>
  
  <th>
    Requis ?
  </th></tr> 
  
  <tr>
    <td>
      durabilité
    </td>
    
    <td>
      Un "Integer" (par exemple "10")
    </td>
    
    <td>
      Non
    </td>
  </tr>
  
  <tr>
    <td>
      enchantement
    </td>
    
    <td>
      Un "Integer" (par exemple "10")
    </td>
    
    <td>
      Non
    </td>
  </tr>
  
  <tr>
    <td>
      Réduction
    </td>
    
    <td>
      Four "Integers" (e.g. "2, 5, 6, 2") <br />Representing Footwear, Leggins, Chestplate, Headslot
    </td>
    
    <td>
      Non
    </td>
  </tr>
  
  <tr>
    <td>
      robustesse
    </td>
    
    <td>
      Un "float" (par exemple "2.4")
    </td>
    
    <td>
      Non
    </td>
  </tr>
</table></details>

<details><summary>Bloquer</summary> 

| Nom               | Valeur                            | Requis ? |
| ----------------- | --------------------------------- | -------- |
| dureté            | Un "Integer" (par exemple "3")    | Non      |
| Résistance        | Un "Integer" (par exemple "15")   | Non      |
| Niveau de récolte | Un "Integer" (par exemple "1")    | Non      |
| Outil de récolte  | Un "outil" (par exemple "pioche") | Non      |</details>

<details><summary>Fluide</summary> 

| Nom         | Valeur                            | Requis ? |
| ----------- | --------------------------------- | -------- |
| température | Un "Integer" (par exemple "300")  | Non      |
| densité     | Un "Integer" (par exemple "1000") | Non      |
| luminosité  | Un "Integer" (par exemple "0")    | Non      |
| viscosité   | Un "Integer" (par exemple "100")  | Non      |
| Vaporiser   | A "boolean" (e.g. "true")         | Non      |</details>

<details><summary>Minerai</summary> 

| Nom               | Valeur                                                                       | Requis ? |
| ----------------- | ---------------------------------------------------------------------------- | -------- |
| gouttes           | Une "liste d'objets" (par exemple "minecraft:redstone,minecraft:gold_ingot") | Non      |
| variantes         | Une "Liste de blocs" (par exemple "minecraft:stone,minecraft:end_stone")     | Non      |
| dureté            | Une "liste d'entiers" (par exemple "3,3")                                    | Non      |
| Résistance        | Une "liste d'entiers" (par exemple "15,15")                                  | Non      |
| Niveau de récolte | Une "liste d'entiers" (par exemple "1,1")                                    | Non      |
| Outil de récolte  | Une "liste d'outils" (par exemple "pioche,pioche")                           | Non      |</details>

<details><summary>Minecart</summary> 

| Nom           | Valeur                         | Requis ? |
| ------------- | ------------------------------ | -------- |
| maxSpeed      | Un "float" (par exemple "1.0") | Non      |
| faire glisser | Un "float" (par exemple "1.0") | Non      |
| riddenDrag    | Un "float" (par exemple "1.0") | Non      |</details>

## Exemple

```zenscript
import mods.contenttweaker.MaterialSystem;

val oreData = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build().registerPart("ore").getData();
oreData.addDataValue("drops", "minecraft:redstone,minecraft:gold_ingot");
oreData.addDataValue("variants", "minecraft:stone,minecraft:end_stone");
oreData. ddDataValue("dureté", "3,3");
oreData.addDataValue("résistance", "15,15");
oreData.addDataValue("harvestLevel", "1,1");
oreData.addDataValue("harvestTool", "pickaxe,shovel");

oreData.addDataValue("test", 1);
print(oreData.getIntValue("test", -1));
```