# `Maj`

`Mathematik` ist die Containerklasse für grundlegende mathematische Funktionen. Weitere Informationen finden Sie auf der [Konzept](/Mods/Boson/Math/Concept/) Seite.

## Klassendetails
Als Teil des ZenScriptX-Projekts ist der voll qualifizierte Name für die Klasse `zenscriptx.math.Math`.

## Neue Instanz erstellen
Da diese Klasse nur ein Besitzer von mathematischen Funktionen ist, ist es unmöglich, eine neue Instanz zu erstellen. Vielmehr sollten alle Methoden auf der Klasse selbst aufgerufen werden.

## Methoden
To save up on space, the methods will be presented in a single snippet, grouped according to the kind of operation they perform with a comment above outlining what the method is supposed to do and any other conditions that should be kept into consideration when using the method. Darüber hinaus können mehrere Methoden zusammengefasst werden, wenn es sich um enge Überladungen von einander handelt (i. . Sie tun das Gleiche, aber sie haben unterschiedliche Argument- oder Rückgabetypen).

```zenscript
# Diese Methode führt etwas
Funktionsmethode (Argument als doppelt, argument2 als bool) als doppelt;
Funktionsmethode (Argument als float, argument2 als bool) als float;

# Diese Methode macht etwas anderes und kann Null
Funktion method2() als Bool zurückgeben?;
```

### Mathematische Konstanten
Diese Methoden ermöglichen den Zugriff auf bemerkenswerte mathematische Konstanten, die bei Bedarf über andere Operationen hinweg verwendet werden können. Ihre Genauigkeit ist die größtmögliche Präzision nach der verwendeten Darstellung innerhalb von Computern (i. , die genaueste Zahl, die mit einem `Doppelpunkt` dargestellt werden kann.

```zenscript
# Erhält den Wert der PI, die das Verhältnis eines Umfangs eines Kreises zu seinem Durchmesser, etwa 3. 4159
Funktion pi() als Doppelt;

# erhält den Wert von E, das ist die Basis des natürlichen Logarithmus, ungefähr 2. 1828
Funktion e() als doppelt;
```

### Trigonometrische Funktionen
Trigonometrische Funktionen sind Funktionen, die mit Winkeln arbeiten und sie mit dem Verhältnis von zwei Seitenlängen eines rechten Dreiecks verknüpfen zusammen mit all ihren Inverse-Funktionen.

```zenscript
# Berechnet den Sinus des übergebenen Winkels, welcher in RADIANS
Funktion sin(x als Doppelt) als Doppelt;
Funktion sin(x so float) als float;

# Berechnet den Sinus des übergebenen Winkels, der in DEGREES sein muss
Funktion sind(x als Doppelt) als Doppelt;
Funktion sind(x so float) als float;

# Berechnet den Kosinus des übergebenen Winkels, der in RADIANS
Funktion cos(x mit Doppelt) als Doppelt;
Funktion cos(x so float) als float;

# Berechnet den Kosinus des übergebenen Winkels, der in DEGREES sein kann
Funktion cosd(x mit Doppelt) als Doppelt;
Funktion cosd(x so float) als float;

# Berechnet die Tangente des übergebenen Winkels, die in RADIANS sein sollten
Funktion tan(x als Doppelt) als Doppelt;
Funktion tan(x als float) als float;

# Berechnet den Tangent des übergebenen Winkels, der in DEGREES sein kann
Funktion tand(x als Doppelt) als Doppelt;
Funktion tand(x as float) als float;

# Berechnet den Bogensinus des angegebenen Wertes und gibt einen Wert zwischen PI/2- und PI/2-Säulen zurück
Funktion als Doppelt;
Funktion asin(x as float) als float;

# Berechnet den Bogensinus des angegebenen Wertes und gibt einen Wert zwischen -90 und 90 Grad
Funktion asind(x mit Doppelt) als Doppelt;
Funktion asind(x as float) als float;

# Berechnet den Bogenkosinus des angegebenen Wertes und gibt einen Wert zwischen 0 und PI-Bogenmaß zurück
Funktion acos(x mit Doppelt) als Doppelt;
Funktion acos(x as float) als float;

# Berechnet den Bogenkosinus des angegebenen Wertes und gibt einen Wert zwischen 0 und 180 Grad zurück
Funktion acosd(x als doppelt) als doppelt;
Funktion asind(x as float) als float;

# Berechnet den arc tangenten Wert des angegebenen Wertes und gibt einen Wert zwischen PI/2- und PI/2-Bogenschienen
Funktion atan(x so doppelt) als doppelt;
Funktion atan(x as float) als float;

# Berechnet den arc-Tangent des angegebenen Wertes und gibt einen Wert zwischen -90 und 90 Grad
Funktion atand(x mit Doppelt) als Doppelt;
Funktion atand(x as float) als float;

# Berechnet 'th' der Polarkoordinaten '(r, th)', die den rechteckigen Koordinaten '(x, y)' über das Berechnen des arc-Tangens des Wertes 'y/x', einen Wert zwischen -pi und pi Bogenmaß zurückgeben
Funktion atan2(y als doppelt, x als doppelt) als doppelt;
Funktion atan2(y as float, x as float) als float;
```

### Hyperbolische Funktionen
Hyperbolische Funktionen sind Analoge der trigonometrischen Funktionen, die für eine Hyperbola definiert werden und nicht für einen Kreis.

```zenscript
# Berechnet den hyperbolischen Sinus des angegebenen Wertes
Funktion sinh(x als Doppelt) als doppelt;
Funktion sinh(x als float) als float;

# Berechnet den hyperbolischen Kosinus des angegebenen Wertes
Funktion cosh(x als Doppelt) als Doppelt;
Funktion cosh(x as float) als float;

# Berechnet den hyperbolischen Tangent des angegebenen Wertes
Funktion tanh(x als Doppelt) als doppelt;
Funktion tanh(x as float) als float;

# Berechnet die inverse hyperbolische Sinus des angegebenen Wertes
Funktion asinh(x als Doppelt) als Doppelt;
Funktion asinh(x als float) als float;

# Berechne den inveren hyperbolischen Kosinus des angegebenen Wertes und gib ALLES ein positives Ergebnis zurück
Funktion acosh(x als Doppelt) als Doppelt;
Funktion acosh(x as float) als float;

# Berechnet das inverse hyperbolische Tangent des angegebenen Wertes
Funktion atanh(x als Doppelt) als doppelt;
Funktion atanh(x as float) als float;
```

### Rechteckige Dreieck Funktionen
Dies sind einige zusätzliche Funktionen, die in einem rechten Dreieck berechnet werden können zusätzlich zu den trigonometrischen -Funktionen, die aber nicht auf den Winkeln des Dreiecks funktionieren.

```zenscript
# Berechnet die Länge der Hypothenuse des Dreiecks mit dem Pythagoreans Theorem, stellt sicher, dass während der Berechnung der
Funktion hypot(x so doppelt, y als doppelt) kein Überlauf oder Unterlauf passiert;
Funktion hypot(x so float, y wie float) als float;
```

### Kräfte und Wurzeln
Diese Funktionen erlauben es, die Kräfte und Wurzeln schneller und effizienter zu berechnen als die Standardmethode von Multiplikationen oder nachfolgender Subtraktion.

```zenscript
# Berechnet die positive Quadratwurzel des angegebenen Wertes
Funktion sqrt(x als Doppelt) als doppelt;
Funktion sqrt(x als float) als float;

# Berechnet die negative Quadratwurzel des angegebenen Wertes
Funktion nsqrt(x als Doppelt) als Doppelt;
Funktion nsqrt(x as float) als float;

# Quadriert den angegebenen Wert
Funktion sq(x als Doppelt) als Doppelt;
Funktion sq(x als float) als float;

# Erhöht den angegebenen Basiswert zum Exponenten exponent exp
Funktionspulver (base as double, exp as double) als Doppelt;
Funktionspulver (Doppelt Basis, exp als int) als doppelt;
Funktionspulver als float, exp als float;
Funktionspulver (Basis als float, exp als int) als float;
```

### Exponential Functions
Eine exponentielle Funktion ist eine Funktion, die die Form `y = * b^x` annimmt.

```zenscript
# Berechnet Eulers Zahl (e) erhöht auf die Stärke von x
Funktion exp(x als Doppelt) als Doppelt;
Funktion exp(x als float) als float;

# Berechnet die Funktion 'exp(x) - 1', mit einer besseren Genauigkeit für Zahlen, die näher an Null liegen
Funktion expm1(x als Doppelt) als doppelt;
Funktion expm1(x als float) als float;
```

### Logarithimische Funktionen
Eine logarithmische Funktion, allgemein bekannt als Logarithmus, ist die inverse Funktion der exponentiellen Funktion. Anders als andere Funktionen, wird ein Logarithmus entsprechend einer Basis definiert, , die die Zahl repräsentiert, die von auf die resultierende Kraft erhöht werden muss, um das Argument des Logarithmus selbst zu erhalten.

```zenscript
# Berechnet den Logarithmus von x zur angegebenen Basis
Funktion logn(x so doppelt, base as double) als Doppelt;
function logn(x as float, base as float) as float;

# Berechnet den natürlichen Logarithmus des angegebenen Wertes, i. , der Logarithmus von x zur Basis e (Euler-Nummer)
Funktion ln(x als Doppelt) als Doppelt;
Funktion ln(x as float) als float;

# Berechnet den gemeinsamen Logarithmus des angegebenen Wertes, d.h. der Logarithmus von x bis zur Basis 10
Funktion log10(x als Doppelt) als doppelt;
Funktion log10(x as float) als float;

# Berechnet den Binärlogarithmus des angegebenen Wertes, d.h. der Logarithmus von x zur Basis 2
Funktion log2(x als Doppelt) als doppelt;
Funktion log2(x als float) als float;

# Berechnet 'ln(1 + x)', mit einer besseren Genauigkeit für Zahlen, die näher an Null liegen,
Funktion ln1p(x als Doppelt) als Doppelt;
Funktion ln1p(x als float) als float;
```

### Rundungsfunktionen
Eine Rundungsfunktion ist eine Funktion, die eine reale Zahl einer bestimmten Ganzzahl nach einer Reihe von Regeln zuordnet abhängig von der Funktion.

```zenscript
# Rundet den angegebenen Wert in Richtung positiver Unendlichkeit, gibt die kleinste reale Zahl zurück, die größer als oder gleich x ist und eine mathematische Ganzzahl
Funktionshöhe (x als Doppelt) als doppelt;
Funktionsdecke (x als float) als float;

# rundet den angegebenen Wert in Richtung positiver Unendlichkeit, den kleinsten Integer, der größer oder gleich ist wie x
Funktion ceili(x als Doppelt) als int;
Funktion ceili(x so float) als int;

# rundet den angegebenen Wert in Richtung positiver Unendlichkeit ab und gibt den kleinsten Integer zurück, der größer oder gleich ist wie x, erweitert auf die größte repräsentierbare Ganzzahl
Funktion ceill(x so doppelt) als lang;
Funktion ceill(x as float) so lang;

# rundet den angegebenen Wert in Richtung negativer Unendlichkeit, gibt die größte reale Zahl zurück, die kleiner oder gleich x ist und ein mathematischer Integer
Funktionsböden (x als Doppelt) als Doppelt;
Funktionsböden (x als float) als Float;

# Rundet den angegebenen Wert in Richtung negative Unendlichkeit, gibt den größten Integer zurück, der kleiner oder gleich ist wie x
Funktion floori(x so doppelt) als int;
Funktion floori(x als float) als int;

# Rundet den angegebenen Wert in Richtung negative Unendlichkeit und gibt den größten Integer zurück, der kleiner oder gleich ist wie x, auf die größte repräsentierbare Ganzzahl erweitert
Funktionsböden (x mit Doppelt) als lang;
Funktion floorl(x als float) so lang;

# Rundet den angegebenen Wert nach Null und kürzt effektiv den Bruchteil und gibt einen mathematischen Integer
Funktion truncate(x als Doppelt) als Doppelt;
Funktion truncate(x als float) als float;

# Dreht den angegebenen Wert in Richtung der nächsten mathematischen Ganzzahl, mit einer Voreingenommenheit auf gerade Zahlen
Funktionsrunde (x als Doppelt) als Doppelt;
Funktionsrund(x als float) als float;

# Rundet den angegebenen Wert in Richtung der nächsten Ganzzahl, mit einer Voreinstellung zu geraden Zahlen
Funktion roundi(x so doppelt) als int;
Funktion roundi(x als float) als int;

# Rundet den angegebenen Wert in Richtung der nächsten Ganzzahl, mit einer Voreinstellung zu geraden Zahlen, und Erweiterung des Ergebnisses auf die größte repräsentierbare Ganzzahl
Funktionsrundl(x mit Doppelt) als lang;
Funktion roundl(x als float) so lang;
```

### Signaturbasierte Funktionen
Diese Funktionen funktionieren meist oder nur auf der Grundlage des Arguments.

```zenscript
# Gibt den absoluten Wert des angegebenen Wertes
Funktion abwesend (x als doppelt) als Doppelt;
Funktion abwesend (x as float) als float;
Funktion abwesend (x as int) als int;
Funktion abwesend (x so lang) wie lang;

# Gibt das Zeichen des angegebenen Wertes als Zahl aus: -1 für negative Zahlen, 0 für Null, 1 für positive Zahlen
Funktionszeichen (x als doppelt) als Doppelt;
Funktionszeichen(x als float) als float;
Funktionszeichen(x als int) als int;
Funktionszeichen(x so lang) als lang;
```

### Vergleichsfunktionen
Diese Funktionen vergleichen die verschiedenen Argumente und geben nur eines von ihnen gemäß einer bestimmten Reihe von Regeln zurück.

```zenscript
# Gibt den kleineren der beiden angegebenen Werte aus
Funktion min(a as double, b as double) als doppelt;
Funktion min(a as float, b as float) as float;
Funktion min(a as int, b as int) as int;
Funktion min(so lange, b so lange;

# Gibt die Größe der beiden angegebenen Werte zurück;
Funktion max(a as double, b as double) als doppelt;
Funktion max(a as float, b as float) as float;
function max(a as int, b as int) as int;
Funktion max(so lange, b so lange) wie lang;

# Gibt den angegebenen x Wert zwischen zwei Grenzen an und gibt das Minimum zurück, wenn x kleiner als min ist, max wenn x größer als max, x sonst
Funktion clamp(x als doppelt, min als doppelt, max als doppelt) als doppelt;
Funktion clamp(x als float, min als float, max als float) als float;
Funktion clamp(x als int, min als int, max als int) als int;
Funktionsklammer(x so lang, min so lang, max so lange;
```

### Verbleibende Funktionen
Diese Funktionen berechnen den Rest zwischen zwei Argumenten nach einer Reihe von Regeln.

```zenscript
# Berechnet den Rest der Aufteilung zwischen Wert und div gemäß IEEE 754 Standard: 'r = value - (round(value / div) * div)'
Funktionsreste (Wert als doppelt, Wert div als Doppelt) als Doppelt;
function rem(Wert als float, div als float) als float;
```

