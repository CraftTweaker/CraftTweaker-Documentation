# `Matemáticas`

`Matemáticas` es la clase contenedor para un conjunto de funciones matemáticas básicas. Consulte la página [Concepto](/Mods/Boson/Math/Concept/) para más información.

## Detalles de la clase
Siendo parte del Proyecto ZenScriptX, el nombre completo para la clase es `zenscriptx.math.Math`.

## Crear una nueva instancia
Dado que esta clase es sólo un titular de funciones matemáticas, es imposible crear una nueva instancia. Más bien, todos los métodos deben ser invocados en la propia clase.

## Métodos
Para ahorrar espacio, los métodos serán presentados en un solo snippet, agrupado de acuerdo al tipo de operación que realizan con un comentario anterior describiendo lo que se supone que el método debe hacer y cualquier otra condición que debería tenerse en cuenta al usar el método. Además, varios métodos pueden agruparse si son sobrecargas cerradas entre sí (i. , hacen lo mismo, pero tienen diferentes argumentos o tipos de retorno).

```zenscript
# este método hace algo
método de función (argumento como doble, argumento 2 como bool) como doble;
método de función (argumento como float, argumento 2 como bool) como float;

# este método hace algo más, y puede devolver null
function method2() como bool?;
```

### Constantes matemáticos
Estos métodos proporcionan acceso a constantes matemáticas notables que pueden ser utilizadas a través de otras operaciones, si es necesario. Su precisión es la mayor precisión posible de acuerdo con la representación utilizada dentro de las computadoras (i. . el número más preciso representable con un `doble`).

```zenscript
# Obtiene el valor de IP, que es la proporción de una circunstancia de un círculo a su diámetro, aproximadamente 3. 4159
function pi() as double;

# Obtiene el valor de E, que es la base del logaritmo natural, aproximadamente 2. 1828
función e() como doble;
```

### Funciones trigonométricas
Las funciones trigonométricas son funciones que funcionan con ángulos y las relacionan con la proporción de dos longitudes laterales de un triángulo con ángulo derecho junto con todas sus funciones inversas.

```zenscript
# Calcula el seno del ángulo pasado, el cual DEBE estar en RADIANS
función sin(x as double) como doble;
function sin(x as float) as float;

# Calcula el seno del ángulo pasado, el cual DEBE estar en DEGREES
función sind(x as double) como doble;
función sind(x as float) as float;

# Calcula el coseno del ángulo pasado, que DEBE estar en RADIANS
function cos(x as double) como doble;
function cos(x as float) as float;

# Calcula el coseno del ángulo pasado, que DEBE estar en DEGREES
function cosd(x as double) como doble;
función cosd(x as float) como flotante;

# Calcula la tangente del ángulo pasado, que DEBE estar en RADIANS
function tan(x as double) as double;
function tan(x as float) as float;

# Calcula la tangente del ángulo pasado, que DEBE estar en DEGREES
function tand(x as double) como doble;
function tand(x as float) as float;

# Calcula el seno del arco del valor dado, devolviendo un valor entre radiantes -PI/2 y PI/2
function asin(x as double) como doble;
función asin(x as float) como flotante;

# Calcula el seno del arco del valor dado, devolviendo un valor entre -90 y 90 grados
función asind(x as double) como doble;
función asind(x as float) como flotante;

# Calcula el coseno del arco del valor dado, devolviendo un valor entre 0 y radianes de PI
function acos(x as double) como doble;
function acos(x as float) as float;

# Calcula el coseno del arco del valor dado, devolviendo un valor entre 0 y 180 grados
función acosd(x as double) como doble;
función asind(x as float) como flotante;

# Calcula la tangente del arco del valor dado, devolviendo un valor entre los radios -PI/2 y PI/2
function atan(x as double) como doble;
function atan(x as float) as float;

# Calcula la tangente del arco del valor dado, devolviendo un valor entre -90 y 90 grados
function atand(x as double) como doble;
function atand(x as float) as float;

# Calcula 'th' de las coordenadas polares '(r, th)' que corresponden a las coordenadas rectangulares '(x, y)' a través de la computación del arco tangente del valor 'y/x', devolver un valor entre radianes -pi y pi
function atan2(y as double, x as double) como double;
function atan2(y as float, x as float) as float;
```

### Funciones hiperbólicas
Las funciones hiperbólicas son análogos de las funciones trigonométricas, definidas para un hiperbola en lugar de en un círculo.

```zenscript
# Calcula el seno hiperbólico del valor dado
función sinh(x as double) como doble;
función sinh(x as float) como float;

# Calcula el coseno hiperbólico del valor dado
function cosh(x as double) como doble;
function cosh(x as float) as float;

# Calcula la tangente hiperbólica del valor dado
function tanh(x as double) as double;
function tanh(x as float) as float;

# Calcula el sino hiperbólico inverso del valor dado
function asinh(x as double) como doble;
function asinh(x as float) como float;

# Calcula el coseno hiperbólico inverso del valor dado, devolviendo SIEMPRE un resultado positivo
function acosh(x as double) como doble;
function acosh(x as float) as float;

# Calcula la tangente hiperbólica inversa del valor dado
function atanh(x as double) as double;
function atanh(x as float) as float;
```

### Funciones triángulos derechas-derecha
Estas son algunas funciones adicionales que pueden ser calculadas en un triángulo con ángulo derecho, además de las funciones trigonométricas, pero que no operan en los ángulos del triángulo.

```zenscript
# Computes the length of the hypothenuse of the triangle with the Pythagorean's theorem, making sure no overflow or underflow happens during the computation
function hypot(x as double, y as double) as double;
function hypot(x as float, y as float) as float;
```

### Poderes y raíces
Estas funciones permiten calcular poderes y raíces de una manera más rápida y eficiente que el método estándar de multiplicaciones o subsiguiente resta.

```zenscript
# Calcula la raíz cuadrada positiva del valor dado
function sqrt(x as double) como doble;
function sqrt(x as float) como float;

# Calcula la raíz cuadrada negativa del valor dado
function nsqrt(x as double) como doble;
function nsqrt(x as float) as float;

# Cuadra el valor dado
function sq(x as double) as double;
función sq(x as float) como flotante;

# Aumenta el valor base dado a la extensión exp
función power (base como doble, exp como doble) como doble;
potencia de la función (base como doble, exp como int) como doble;
potencia de la función (base como float, exp como float) como float;
potencia de la función (base como flotante, exp como int) como flotante;
```

### Exponential Functions
Una función exponencial es una función que toma la forma de `y = a * b^x`.

```zenscript
# Calcula el número de Euler (e) elevado a la potencia de x
function exp(x as double) como doble;
function exp(x as float) as float;

# Calcula la función 'exp(x) - 1', con una mejor precisión para los números que están más cerca de cero
función expm1(x as double) como doble;
función expm1(x as float) como flotante;
```

### Funciones logaritímicas
Una función logarítmica, comúnmente conocida como logaritmo, es la función inversa de la función exponencial. Diferentemente de otras funciones, un logaritmo se define de acuerdo a una base, que representa el número que tiene que ser elevado a la potencia resultante para obtener el argumento del propio logaritmo.

```zenscript
# Calcula el logaritmo de x al registro de la función base
dado (x como doble, base como doble) como doble;
function logn(x as float, base as float) as float;

# Calcula el logaritmo natural del valor dado, i. . el logaritmo de x a la base e (Euler number)
función ln(x as double) como doble;
function ln(x as float) as float;

# Calcula el logaritmo común del valor dado, i.e. el logaritmo de x a la base 10
función log10(x as double) como doble;
function log10(x as float) as float;

# Calcula el logaritmo binario del valor dado, i.e. el logaritmo de x a la base 2
función log2(x as double) como doble;
function log2(x as float) as float;

# Calcula 'ln(1 + x)', con una mejor precisión para números que están más cerca de cero
función ln1p(x as double) como doble;
función ln1p(x as float) como flotante;
```

### Funciones redondeadas
Una función de redondeo es una función que mapea un número real a un número entero específico de acuerdo a un conjunto de reglas, dependiendo de la función.

```zenscript
# Redondea el valor dado hacia infinidad positiva, devuelve el número real más pequeño que es mayor o igual a x y es un entero matemático
función ceil(x as double) como doble;
function ceil(x as float) as float;

# Redondea el valor dado hacia infinidad positiva, devolver el entero más pequeño que es mayor o igual a x
función ceili(x as double) como int;
función ceili(x as float) como int;

# Redondea el valor dado hacia infinidad positiva, devolviendo el entero más pequeño que es mayor o igual a x, expandido al número entero representable más grande
función ceill(x as double) como largo;
función ceill(x as float) como largo;

# Redondea el valor dado hacia infinidad negativa, devolver el mayor número real que es menor o igual a x y es un entero matemático
piso de función (x as double) como doble;
piso de la función (x as float) como flotante;

# Redondea el valor dado hacia infinidad negativa, devolver el entero más grande que es menor o igual a x
function floori(x as double) como int;
floori(x as float) de la función como int;

# Redondea el valor dado hacia infinidad negativa, devolviendo el entero más grande que es menor o igual a x, expandido al mayor número entero representable
pisos de función (x as double) como largo;
floorl(x as float) de función como largo;

# Redondea el valor dado hacia cero, truncando efectivamente la parte fraccional y devolviendo un entero matemático
function truncate(x as double) como doble;
función truncate(x as float) como flotante;

# Redondea el valor dado hacia el entero matemático más cercano, con un sesgo hacia números pares
ronda de función (x como doble) como doble;
Ronda de la función (x como flotante) como flotante;

# Redondea el valor dado hacia el entero más cercano, con un sesgo hacia números pares
función roundi(x as double) como int;
función roundi(x as float) como int;

# Redondea el valor dado hacia el entero más cercano, con un sesgo hacia números pares, y expandiendo el resultado al mayor número entero representable
function roundl(x as double) como largo;
function roundl(x as float) como largo;
```

### Funciones basadas en signo
Estas funciones funcionan principalmente o únicamente sobre el signo del argumento.

```zenscript
# Devuelve el valor absoluto del valor dado
function delet(x as double) como doble;
function befor(x as float) as float;
function deletre(x as int) as int;
function deletre(x as long) as long;

# Devuelve el signo del valor dado como un número: -1 para números negativos, 0 para cero, 1 para números positivos
signo de función (x como doble) como doble;
signo de la función(x as float) como float;
signo de la función (x as int) como int;
signo de la función (x as long) como largo;
```

### Funciones de comparación
Estas funciones comparan los diversos argumentos y devuelven sólo uno de ellos de acuerdo con un determinado conjunto de reglas.

```zenscript
# Devuelve el menor de los dos valores dados
function min(a as double, b as double) como doble;
function min(a as float, b as float) as float;
function min(a as int, b as int) as int;
function min(a as long as long b as long) as long ;

# Devuelve el mayor de los dos valores dados
function max(a as double, b as double) como doble;
function max(a as float, b as float) as float;
function max(a as int, b as int) as int;
función max(tan largo, b como largo) como largo;

# Limita el valor x dado entre dos límites, efectivamente regresando min si x es menor que min, max if x is larger than max, x otherwise
function clamp(x as double, min as double, max as double) as double;
función clamp(x as float, min as float, max as float) as float;
función clamp(x as int, min as int, max as int) as int;
función clamp(x tan largo, mínimo tan largo, máximo como largo)
```

### Funciones de recordatorio
Estas funciones calculan el resto entre dos argumentos de acuerdo a un conjunto de reglas.

```zenscript
# Calcula el resto de la división entre el valor y el div de acuerdo al estándar IEEE 754 : 'r = valor - (valor / div) * div)'
function rem(valor como doble, div como doble) como doble;
function rem(value as float, div as float) as float;
```

