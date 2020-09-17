# ChickenFactory

La ChickenFactory vous permet de créer des poulets [personnalisés](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) pour le jeu.  
Notez que ce module est un ajout de fonctionnalité au mod [Poulet par setycz](https://minecraft.curseforge.com/projects/chickens), donc ce module n'est disponible que si ce mod est chargé.

## Importation du paquet

```zenscript
import mods.contenttweaker.ChickenFactory;
```

## Création de poulets

Tout d'abord, vous devrez créer une [Représentation Poulet](/Mods/ContentTweaker/Chickens/ChickenRepresentation/).  
Il s'agit essentiellement d'un modèle vide de ce que votre poulet va devenir.  
Cette méthode retourne un tel [objet de Représentation Poulet](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) , en prenant les paramètres suivants :

- Nom de la chaîne : le nom de l'entité du poulet, utilisé pour les modèles et le registre de l'entité.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) : La couleur, le poulet aura une couleur.
- [IItemStack](/Vanilla/Items/IItemStack/) layedItem: L'objet que le poulet va reposer plus tard.

```zenscript
ChickenFactory.createPicken(String name, CTColor color, IItemStack item);
```

## Exemple de script

```zenscript
#loader contenttweaker
#modloaded chickens

import mods.contenttweaker.ChickenFactory;
import mods.contenttweaker.Color;


val chickenRepresentation = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffff), <item:minecraft:bedrock>);

chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));

chickenRepresentation.register();
```