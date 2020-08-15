# Représentation des données de la Caractéristique

Une représentation de données Trait représente des données de Traits de Construction de Tinkers et est ItemBound.  
Vous pouvez obtenir un tel objet à partir d'un objet [Trait](/Mods/ContentTweaker/Tinkers_Construct/Trait/) existant en fournissant une IItemStack à la méthode `getData`.

## Importation de la classe

Il peut être nécessaire d'importer la classe si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import mods.contenttweaker.tconstruct.TraitDataRepresent`

## ZenGetter et ZenSetter

| Nom                   | ZenGetter | ZenSetter | Type de texte        |
| --------------------- | --------- | --------- | -------------------- |
| couleur               | ✔         | ✔         | Indice               |
| en cours              | ✔         | ✔         | Indice               |
| Infos supplémentaires | ✔         | ✔         | chaîne de caractères |
| identifier            | ✔         | ✔         | chaîne de caractères |
| niveau                | ✔         | ✔         | Indice               |
| max                   | ✔         | ✔         | Indice               |
| Infos                 | ✔         |           | chaîne de caractères |
| Chaîne de couleurs    | ✔         |           | chaîne de caractères |

## Méthodes Zen

```zenscript
//Fait la même chose que myTraitData.info;
myTraitData.calcInfo();

//Fait la même chose que myTraitData.colorString;
myTraitData.getColorString();
```