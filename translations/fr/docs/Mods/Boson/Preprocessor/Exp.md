# Directive sur le prétraitement des drapeaux expérimentaux

Cette directive de préprocesseur permet des comportements expérimentaux pour certaines fonctionnalités de ZenScript.

Faire partie du projet ZenScriptX, et en raison de la nature expérimentale du projet en soi, certaines fonctionnalités peuvent nécessiter des tests approfondis du côté du compilateur ou causer d'autres effets secondaires indésirables. Pour ces raisons, certaines fonctionnalités ont été considérées comme expérimentales et ne sont pas activées par défaut lors de la compilation d'un script.

De plus, certains paramètres expérimentaux peuvent totalement ne pas fonctionner, et ne sont fournis que comme indices de fonctionnalités à venir. Vous devriez toujours vous référer à la documentation pour savoir si un certain drapeau est utilisé ou non. D'un autre côté, les drapeaux expérimentaux ne seront jamais supprimés, ce qui signifie que les fonctionnalités qui sont intégrées dans la partie "non-expérimentale" de ZenScriptX ne seront pas désactivées. Cela permet aux scripts d'être compatibles avec les dernières versions du projet ZenScriptX sans nécessitant une réécriture.

## Utilisation de la directive
Utiliser la directive est aussi simple que d'ajouter `#experimental` au début du fichier, et en spécifiant une liste de drapeaux qui représentent le comportement à activer juste après la déclaration.

Chaque drapeau doit être séparé par les autres avec des espaces et il doit **commencer par** par `-E`. Ceci identifie le drapeau comme un drapeau expérimental. Suite à cette déclaration, une série de lettres et de chiffres qui identifient le drapeau spécifique devrait être saisie. Reportez-vous à la liste de cette documentation pour connaître tous les drapeaux disponibles.

Par exemple, imaginez que nous voulions activer les drapeaux `soo` et `wd4`. La ligne correspondante serait :
```zenscript
#expérimental -Esoo -Ewd4
```

## Liste des drapeaux
| Nom du drapeau | Statut actuel | Libellé                                                                                        |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------- |
| `soo`          | Désactivé     | Active la surcharge de l'opérateur pour les séquences                                          |
| `saia`         | Désactivé     | Fournit un argument automatique `il` à des fonctions avec un seul paramètre dans les séquences |
| `sao`          | Activé        | Permet la création de `Séquences` à partir des arguments de la table                           |

La signification pour le statut actuel est ce qui suit :

- **Désactivé** identifie un drapeau qui existe mais n'a aucune action correspondante en raison du fait que le backend n'est pas prêt. C'est fourni simplement en raison de la "roadmap", permettant aux développeurs de savoir quelles nouvelles fonctionnalités seront disponibles dans un avenir proche.
- **Activé** identifie un drapeau qui existe et a un effet sur le fichier.
- **Déprécié** identifie un drapeau qui ne doit plus être utilisé à cause d'une fonctionnalité atteignant la maturité et n'étant plus considérée comme expérimentale. Il est néanmoins fourni comme une forme de rétrocompatibilité.
