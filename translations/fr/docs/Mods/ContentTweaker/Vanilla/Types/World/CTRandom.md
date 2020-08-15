# CTRandom

L'objet CTRandom n'est accessible qu'à partir des objets CoT [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) et vous permet d'accéder au générateur de nombres aléatoires du monde.

## Importation de la classe

Si vous voulez importer la classe, voici :

```zenscript
import mods.contenttweaker.Random;
```

## Méthodes Zen

Les seules méthodes disponibles sont pour des valeurs aléatoires, soit en booléen, soit en tant qu'int.  
Pour ce dernier, vous devez également fournir une limite supérieure (la limite supérieure est exclusive).

```zenscript
randomObj.nextBoolean();
randomObj.nextInt(int upperBound);
```