# Calculs

Parfois, la saisie de nombres ne la réduira pas. Parfois, vous avez besoin d'un certain calcul.  
N'oubliez pas que vous pouvez utiliser plus de deux nombres à un, `1+1+1+1+1` fonctionnerait bien aussi.

## Un mot de conseil

Lorsque des résultats inattendus se produisent dans un calcul, il est très possible que vous ayez utilisé deux types différents.  
Par exemple `13 % 6.5` retourne 1, même si le résultat correct est 0. Pourquoi? ZenScript effectue toujours ses calculs avec deux variables du même type. Pour cela, il convertit le 2ème Type pour correspondre au premier. Dans cet exemple, le calcul effectué était `13 % 6`, comme le deuxième nombre (un double) a été converti pour correspondre au premier (un Integer).

Soyez toujours prudent sur les deux types de variables que vous utilisez et en cas de doute, utilisez simplement une fonction print pour afficher la sortie dans le journal et confirmer les résultats.

## Opérateurs arithmétiques

« Je suis presque sûr que vous les connaissez tous déjà, n'est-ce pas? »

| Jeton | Tokenassign | Fonction       | Exemple |
| ----- | ----------- | -------------- | ------- |
| `+`   | `+=`        | Ajouter        | 1+2     |
| `-`   | `-=`        | Substraction   | 2-1     |
| `*`   | `*=`        | Multiplication | 1*1     |
| `/`   | `/=`        | Division       | 2/2     |
| `%`   | `%=`        | Modulo         | 13 % 6  |

## Concaténation

Met une chose au et de l'autre

```zenscript
//affiche "Hello World"
print("Bonjour" ~ " " ~ "Monde");
```

## Résultats du calcul

Un calcul se termine généralement par un résultat. Alors, que faire de cela?

### Affectation d'une variable

Il y a deux façons d'assigner une valeur à une variable:

```zenscript
var test = 0;

//Option 1:
//assigne le test avec la valeur 3 (1+2)
test = 1+2;

//Option 2:
//assigne un test avec 5 (3+2)
= test + 2;

//Option 3:
//assigne un test avec 2 (5-3)
-= 3 ;
```

Les options 1 et 2 affectent la variable de retour en utilisant le jeton `=` .  
C'est probablement le moyen le plus simple pour les débutants et le seul moyen pour assigner une variable non utilisée dans le calcul.

L'option 3 assigne la variable avant le `-=` avec le résultat d'une soustraction normale.  
Tous les opérateurs sur cette page ont leurs jetons d'assignation respectifs, vérifiez le tableau ci-dessus.

### Utiliser le résultat autrement

Vous pouvez toujours utiliser le résultat d'un calcul dans une fonction ou une instruction conditionnelle :

```zenscript
//affiche 4
print(3+1);

//supprime l'élément du tableau[4]
recettes.remove(tableau[3+1]);

//
if(3+1 == 2*2) {print("Utilisé un calcul!")}
```