# Diviser vos scripts en plusieurs fichiers

C'est une bonne idée de diviser votre script en plusieurs fichiers

## Problème

- Lorsque vous écrivez des scripts pour des modpacks plus grands, votre script pourrait bientôt devenir assez long et confus.
- Déboguer un script long peut prendre beaucoup de temps, surtout si vous avez une erreur qui ne signale pas une ligne spécifique dans votre script.

## Ce que nous savons/avons besoin de savoir

- CraftTweaker peut charger des fichiers à partir de plusieurs fichiers de scripts.
- CraftTweaker peut même charger des fichiers dans des sous-dossiers.
- De plus, CraftTweaker peut charger des fichiers .zip qui contiennent des scripts .zs à l'intérieur d'eux, tant que le fichier .zip n'est pas protégé par mot de passe.

## Solution

- Divisez vos grands scripts en plusieurs plus petits.
- Vous pouvez par exemple créer un script pour chaque mod, ou chaque gestionnaire de mod.

## Exemple

```zenscript
scripts
    thermalExpansion
        Compactor.zs
        Crucible.zs
    Vanilla
        Recettes
            Remove.zs
            Shaped.zs
            Shapeless.zs
        Seeds.zs
    oreDict.zs
```

## Avantages

- Vos fichiers de script deviennent plus faciles à déboger.
- Une erreur n'empêchera pas tout votre script de fonctionner, mais seulement une petite partie de celui-ci.
- Les personnes qui vérifient vos fichiers de script peuvent s'orienter plus facilement

## Inconvénients

- Vous devez être prudent avec l'ordre de chargement des scripts (surtout si un script supprime une recette et qu'un autre l'ajoute). Vérifiez le [Préprocesseur de priorité](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) si l'ordre de chargement de votre script est un problème
- Il y a plusieurs façons de catégoriser vos scripts après et le vôtre peut être source de confusion pour les étrangers.