# `Mathématiques`

`Math` est la classe conteneur pour un ensemble de fonctions mathématiques de base. Reportez-vous à la page [Concept](/Mods/Boson/Math/Concept/) pour plus d'informations.

## Détails de la classe
Faire partie du projet ZenScriptX, le nom complet de la classe est `zenscriptx.math.Math`.

## Créer une nouvelle instance
Comme cette classe n'est qu'un détenteur de fonctions mathématiques, il est impossible de créer une nouvelle instance. Au contraire, toutes les méthodes devraient être appelées sur la classe elle-même.

## Méthodes
Pour économiser de l'espace, les méthodes seront présentées en un seul snippet, regroupés selon le type d'opération qu'ils réalisent avec un commentaire ci-dessus décrivant ce que la méthode est censée faire et toutes les autres conditions qui devraient être conservées en considération lors de l'utilisation de la méthode. De plus, plusieurs méthodes peuvent être regroupées ensemble s'il s'agit de surcharges rapprochées les unes des autres (i. , ils font la même chose, mais ils ont différents types d'arguments ou de retours).

```zenscript
# cette méthode fait quelque chose
function method(argument comme double, argument2 comme bool) comme double ;
function method(argument comme float, argument2 comme bool) comme float ;

# Cette méthode fait autre chose, et peut retourner la fonction method2() nulle
en tant que bool ?;
```

### Constantes mathématiques
Ces méthodes permettent d'accéder à des constantes mathématiques notables qui peuvent être utilisées dans d'autres opérations, si nécessaire. Leur précision est la plus grande précision possible en fonction de la représentation utilisée à l'intérieur des ordinateurs (i. . le nombre le plus précis représentable avec un `double`).

```zenscript
# Obtient la valeur de PI, qui est le ratio d'un circuit d'un cercle à son diamètre, environ 3. 4159
fonction pi() en double ;

# Obtient la valeur de E, qui est la base du logarithme naturel, environ 2. 1828
fonction e() en double ;
```

### Fonctions trigonométriques
Les fonctions trigonométriques sont des fonctions qui fonctionnent avec des angles et les relient au ratio de deux longueurs latérales d'un triangle à angle droit, avec toutes leurs fonctions inverses.

```zenscript
# Calcule le sinus de l'angle passé qui DOIT être en RADIANS
fonction sin(x comme double) en double ;
fonction sin(x comme float) comme float;

# Calcule le sinus de l'angle passé, qui DOIT être en DEGREES
fonction sind(x en double) en double ;
fonction sind(x comme float) comme flottant ;

# Calcule le cosinus de l'angle passé qui DOIT être en RADIANS
fonction cos(x comme double) comme double ;
fonction cos(x comme float) comme float;

# Calcule le cosinus de l'angle passé, qui DOIT être dans DEGREES
fonction cosd(x comme double) comme doublé ;
fonction cosd(x comme float) comme float;

# Calcule la tangente de l'angle passé, qui DOIT être en RADIANS
fonction tan(x comme double) comme double;
fonction tan(x comme float) comme flottant ;

# Calcule la tangente de l'angle passé, qui DOIT être dans DEGREES
fonction tand(x comme double) comme double;
fonction tand(x comme float) comme flottant ;

# Calcule l'arc sinus de la valeur donnée, retournant une valeur entre -PI/2 et PI/2 radians
fonction asin(x as double) comme doublé ;
fonction asin(x as float) comme float;

# Calcule l'arc sinus de la valeur donnée, retournant une valeur comprise entre -90 et 90 degrés
fonction asind(x comme double) comme doublée ;
fonction asind(x comme float) comme float;

# Calcule l'arc cosinus de la valeur donnée, retournant une valeur entre 0 et PI radians
fonction acos(x comme double) comme doublé ;
fonction acos(x comme float) comme flottant ;

# Calcule l'arc cosinus de la valeur donnée, retournant une valeur comprise entre 0 et 180 degrés
fonction acosd(x comme double) comme doublée ;
fonction asind(x as float) comme float;

# Calcule l'arc tangente de la valeur donnée, retournant une valeur entre -PI/2 et PI/2 radians
fonction atan(x as double) comme doublée ;
fonction atan(x comme float) comme flottant ;

# Calcule l'arc tangent de la valeur donnée, retournant une valeur comprise entre -90 et 90 degrés
fonction atand(x comme double) comme doublé ;
fonctions atand(x comme float) comme float;

# Calcule 'th' des coordonnées polaires '(r, th)' qui correspondent aux coordonnées rectangulaires '(x, y)' en calculant l'arc tangente de la valeur 'y/x', retourne une valeur entre -pi et pi radians
fonction atan2(y compris double, x double) en tant que double ;
fonction atan2(y compris float, x comme float) en tant que flottant ;
```

### Fonctions hyperboliques
Les fonctions hyperboliques sont des analogues des fonctions trigonométriques, définies pour une hyperbola plutôt que sur un cercle.

```zenscript
# Calcule le sinus hyperbolique de la valeur donnée
function sinh(x as double) comme double ;
function sinh(x as float) comme float;

# Calcule le cosinus hyperbolique de la valeur donnée
fonction cosh(x comme double) comme double ;
fonction cosh(x comme float) comme flottant ;

# Calcule la tangente hyperbolique de la valeur donnée
fonction tanh(x comme double) comme double ;
fonction tanh(x comme float) comme flottant ;

# Calcule le sinus hyperbolique inverse de la valeur donnée
fonction asinh(x comme double) comme double ;
fonction asinh(x comme float) comme flottant ;

# Calculez le cosinus hyperbolique inverse de la valeur donnée, retournant TOUJOURS un résultat positif
fonction acosh(x comme double) comme double ;
fonction acosh(x as float) comme float;

# Calcule la tangente hyperbolique inverse de la valeur donnée
function atanh(x as double) comme double ;
fonction atanh(x comme float) comme flottant ;
```

### Fonctions Triangle à angle droit
Ce sont quelques fonctions supplémentaires qui peuvent être calculées sur un triangle à angle droit, en plus des fonctions trigonométriques , mais qui ne fonctionnent pas sur les angles du triangle.

```zenscript
# Calcule la longueur de l'hypothénus du triangle avec le théorème du Pythagore s'assurer qu'aucun débordement ou débordement ne se produit lors de la fonction de calcul
hypot(x aussi double, y comme double) en tant que double ;
fonction hypot(x comme float, y comme float) comme flottant ;
```

### Puissances et Racines
Ces fonctions permettent de calculer les puissances et les racines de manière plus rapide et plus efficace que la méthode standard de multiplications ou de soustraction subséquente.

```zenscript
# Calcule la racine carrée positive de la valeur donnée
function sqrt(x as double) comme double ;
function sqrt(x as float) comme float;

# Calcule la racine carrée négative de la valeur donnée
fonction nsqrt(x comme double) comme double ;
fonction nsqrt(x comme float) comme float;

# Rectangle la valeur donnée
fonction sq(x comme double) comme double ;
fonction sq(x comme float) en tant que float;

# Élever la valeur de base donnée à l'exp exposant
fonction pow(base aussi double, exp que double) comme doublé ;
fonction pow(base as double, exp as int) as double;
function pow(base as float, exp as float) as float;
fonction power (base as float, exp as int) as float;
```

### Exponential Functions
Une fonction exponentielle est une fonction qui prend la forme de `y = a * b^x`.

```zenscript
# Calcule le nombre d'épargneur (e) à la puissance de x
fonction exp(x comme double) comme double ;
fonction exp(x comme float) comme flottant ;

# Calcule la fonction 'exp(x) - 1', avec une meilleure précision pour les nombres qui sont plus proches de zéro
fonction expm1(x comme double) en double ;
fonction expm1(x comme float) comme flottant ;
```

### Fonctions logarithmiques
Une fonction logarithmique, communément appelée logarithme, est la fonction inverse de la fonction exponentielle. Différentes des autres fonctions, un logarithme est défini selon une base, qui représente le nombre qui doit être augmenté au pouvoir résultant pour obtenir l'argument du logarithme lui-même.

```zenscript
# Calcule le logarithme de x à la fonction de base
logn(x aussi double, base que double) en tant que double ;
fonction logn(x comme float, base comme float) comme flottant ;

# Calcule le logarithme naturel de la valeur donnée, i. . le logarithme de x à la base e (Numéro de l'Euler)
fonction ln(x double) comme double;
fonction ln(x comme float) comme float ;

# Calcule le logarithme commun de la valeur donnée, i.e. le logarithme de x à la base 10
fonction log10(x double) comme doublé ;
fonction log10(x comme float) comme float;

# Calcule le logarithme binaire de la valeur donnée, i.e. le logarithme de x à la base 2
fonction log2(x comme double) comme double ;
fonction log2(x comme float) comme flottant ;

# Calcule 'ln(1 + x)', avec une meilleure précision pour les nombres qui sont plus proches de zéro
fonction ln1p(x double) comme double;
fonction ln1p(x comme float) comme float;
```

### Fonctions d'arrondi
Une fonction d'arrondi est une fonction qui fait correspondre un nombre réel à un nombre entier spécifique selon un ensemble de règles, selon la fonction.

```zenscript
# Arrondie la valeur donnée vers l'infini positif, retourner le plus petit nombre réel qui est supérieur ou égal à x et est un entier mathématique
plafond de fonction (x comme double) comme double ;
fonction plafond (x comme float) comme flottant ;

# Arrondir la valeur donnée vers l'infini positif, retourne le plus petit entier qui est supérieur ou égal à la fonction x
ceili(x comme double) comme int;
fonction ceili(x comme float) comme int;

# Arrondie la valeur donnée vers l'infini positif, retournant le plus petit entier qui est supérieur ou égal à x, étendu au plus grand nombre représentable de la fonction
ceill(x comme double) aussi longtemps ;
fonction ceill(x comme float) aussi long;

# Arrondit la valeur donnée à l'infini négatif, retourner le plus grand nombre réel qui est inférieur ou égal à x et est un entier mathématique
comme un double (x comme double) ;
fonction floor(x comme float) comme float;

# Arrondie la valeur donnée vers l'infini négatif, retourne le plus grand entier qui est inférieur ou égal à x
fonction floori(x comme double) comme int;
fonction floori(x comme float) comme int;

# Arrondie la valeur donnée vers l'infini négatif, retournant le plus grand entier qui est inférieur ou égal à x, étendu au plus grand nombre entier représentable
fonction plancher de sol (x aussi double) aussi long;
fonction floorl(x aussi float) aussi longtemps ;

# Arrondit la valeur donnée vers zéro, tronquant effectivement la partie fractionnaire et retournant un entier mathématique
fonction troncate(x comme double) comme doublé ;
fonction troncate(x comme float) comme flottant ;

# Arrondie la valeur donnée vers l'entier mathématique le plus proche, avec un biais vers les nombres paires
rond de fonction (x comme double) comme doublé ;
fonctions arrondies (x en nombre décimal par exemple) en nombre flottant ;

# Arrondie la valeur donnée vers l'entier le plus proche, avec un biais vers les nombres paires
fonction ronde (x comme double) comme int;
fonction roundi(x aussi float) que int;

# Arrondie la valeur donnée vers l'entier le plus proche, avec un biais vers les nombres paires, et en élargissant le résultat au plus grand nombre entier représentable
fonction roundl(x aussi double) aussi longtemps;
fonction roundl(x aussi flottant que long) ;
```

### Fonctions basées sur la Signature
Ces fonctions fonctionnent principalement ou uniquement sur le signe de l'argument.

```zenscript
# Renvoie la valeur absolue de la valeur donnée
function abs(x comme double) comme double;
fonction abs(x comme float) comme float;
fonction abs(x comme int) comme int;
fonction abs(x aussi long) comme long;

# Renvoie le signe de la valeur donnée en tant que nombre : -1 pour les nombres négatifs, 0 pour zéro, 1 pour les nombres positifs
signe de fonction (x comme double) comme double;
signe de la fonction (x en nombre décimal en nombre décimal ) ;
signe de la fonction (x comme int) comme int;
signe de la fonction (x aussi long) aussi longtemps ;
```

### Fonctions de comparaison
Ces fonctions comparent les différents arguments et ne retournent qu'un seul d'entre eux selon un certain ensemble de règles.

```zenscript
# Renvoie la plus petite des deux valeurs données
fonction min(un comme double, b comme double) comme doublée ;
fonction min(a aussi float, b as float) que float;
fonction min(un int, b comme int) comme int;
fonction min(un aussi long, b aussi long) aussi long;

# Renvoie le plus grand des deux valeurs données
fonction max(a comme double, b comme double) comme double ;
fonction max(a aussi float, b comme float) comme float;
fonction max(a aussi int, b comme int) comme int;
fonction max(un aussi long, b aussi long) ;

# Clampille la valeur de x donnée entre deux limites, retournant en fait min si x est plus petit que min, max si x est plus grand que max, x sinon
fonction clamp(x comme double, min comme double, max comme double) en tant que double ;
fonction clamp(x en float, min en float, max en float) en flottant ;
fonction clamp(x as int, min as int, max as int) as int;
fonction clamp(x aussi long, min aussi long, max aussi long) ;
```

### Fonctions restantes
Ces fonctions calculent le reste entre deux arguments selon un ensemble de règles.

```zenscript
# Calcule le reste de la division entre la valeur et div selon le standard IEEE 754 : 'r = value - (round(value / div) * div)'
function rem(value as double, div comme double) comme double ;
fonction rem(valeur en float, div en float) en float ;
```

