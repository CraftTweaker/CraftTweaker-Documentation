# Mélange de minéraux

## Importation du paquet

Il peut être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau). Alors mieux vaut être en sécurité que désolé et ajouter l'importation `mods.immersiveengineering.MineralMix;`.

## Chance d'échec

Vous pouvez obtenir et définir la chance d'échec de Mineralmix en utilisant la failChance [ZenSetter/Getter] sur l'objet.

## Obtenir du Minerai

| Requis | Type de texte | Type de données      |
| ------ | ------------- | -------------------- |
| Requis | Nom           | chaîne de caractères |

```zenscript
//Exemple:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```

## Ajouter un minerai

| Requis | Type de texte | Type de données      |
| ------ | ------------- | -------------------- |
| Requis | Minerai       | chaîne de caractères |
| Requis | Chance        | chaîne de caractères |

```zenscript
mineralMixObject.addOre("oreIron", 0.5);
```

Vous devrez utiliser les noms d'oredict.

## Supprimer le minerai

| Requis | Type de texte | Type de données      |
| ------ | ------------- | -------------------- |
| Requis | Minerai       | chaîne de caractères |

```zenscript
mineralMixObject.removeOre("oreIron") ;
```

## FailChance Getter/Setter

### Exemple

```zenscript
//Getter
mineralMixObject.failchance ;

//Setter
mineralMixObject.failchance = 0.5 ;
```

## Exemple complet

```zenscript
//Exemple:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Get The Mineral Mix
mods.immersiveengineering. xcavator.addMineral("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral("Iron_Ore");

Iron.addOre("oreIron", 0. );

//Imprimer la chance de échec initial
print(Iron.failChance);

//Définir la chance d'échec à 25%
Fer. ailChance = 0.25;

//Print Out The Fail Chance
print(Fer. Chance d'échec);

//Définir la chance d'échec à 50%
Iron.failChance = 0.5;

//Imprimer la chance finale d'échec
print(Iron.failChance);
```